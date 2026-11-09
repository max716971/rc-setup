const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

const app = fs.readFileSync('app.js', 'utf8');
const materials = fs.readFileSync('materials.js', 'utf8');
const backup = fs.readFileSync('backup.js', 'utf8');
const sw = fs.readFileSync('sw.js', 'utf8');

function createStorage(initial = {}) {
  const values = { ...initial };
  return {
    getItem(key) { return Object.prototype.hasOwnProperty.call(values, key) ? values[key] : null; },
    setItem(key, value) { values[key] = String(value); },
    removeItem(key) { delete values[key]; },
    value(key) { return values[key]; }
  };
}

function loadAppState(raw) {
  const start = app.indexOf('function loadState()');
  const end = app.indexOf('function uid(', start);
  assert.ok(start >= 0 && end > start, 'loadState/saveState functions must exist');
  const source = `
    const STORAGE_KEY = 'rc-setup-v1';
    let stateLoadBlocked = false;
    ${app.slice(start, end)}
    const state = loadState();
    return { state, blocked: stateLoadBlocked, saveState };
  `;
  const storage = createStorage(raw === undefined ? {} : { 'rc-setup-v1': raw });
  const context = {
    localStorage: storage,
    window: { dispatchEvent() {} },
    Event: function Event() {},
    showToast() {},
    console: { error() {}, warn() {} },
    JSON
  };
  const result = vm.runInNewContext(`(() => { ${source} })()`, context);
  return { ...result, storage };
}

test('valid saved cars, tracks and setups load and remain writable', () => {
  const raw = JSON.stringify({ cars: [{ id: 'car-1' }], tracks: [{ id: 'track-1' }], setups: [{ id: 'setup-1' }] });
  const result = loadAppState(raw);
  assert.equal(result.blocked, false);
  assert.equal(result.state.cars[0].id, 'car-1');
  assert.equal(result.state.tracks[0].id, 'track-1');
  assert.equal(result.state.setups[0].id, 'setup-1');
  assert.equal(result.saveState(), true);
  assert.equal(JSON.parse(result.storage.value('rc-setup-v1')).cars[0].id, 'car-1');
});

test('corrupt JSON is preserved and all normal saves are blocked', () => {
  const raw = '{broken-json';
  const result = loadAppState(raw);
  assert.equal(result.blocked, true);
  assert.equal(result.saveState(), false);
  assert.equal(result.storage.value('rc-setup-v1'), raw);
});

test('invalid data structure is preserved and writes are blocked', () => {
  const raw = JSON.stringify({ cars: 'not-an-array', tracks: [], setups: [] });
  const result = loadAppState(raw);
  assert.equal(result.blocked, true);
  assert.equal(result.saveState(), false);
  assert.equal(result.storage.value('rc-setup-v1'), raw);
});

test('first launch without a saved state remains supported', () => {
  const result = loadAppState();
  assert.equal(result.blocked, false);
  assert.deepEqual(Array.from(result.state.cars), []);
  assert.equal(result.saveState(), true);
});

test('materials migration creates an exact snapshot before rewriting storage', () => {
  const snapshot = materials.indexOf('localStorage.setItem(migrationBackupKey, original)');
  const migrationWrite = materials.indexOf('localStorage.setItem(STORAGE_KEY, JSON.stringify(migratedItems))');
  assert.ok(snapshot >= 0 && migrationWrite > snapshot);
  assert.match(materials, /if \(backupReady\)/);
});

test('unreadable materials data disables writes', () => {
  assert.match(materials, /materialsLoadBlocked = true/);
  assert.match(materials, /if \(materialsLoadBlocked\)/);
});

test('automatic restore contains rollback for both local data stores', () => {
  assert.match(backup, /const previousMain = localStorage\.getItem\(MAIN_KEY\)/);
  assert.match(backup, /const previousMaterials = localStorage\.getItem\(MATERIALS_KEY\)/);
  assert.match(backup, /localStorage\.setItem\(MAIN_KEY, latest\.main\)/);
  assert.match(backup, /localStorage\.setItem\(MATERIALS_KEY, JSON\.stringify\(parsedMaterials\)\)/);
  assert.match(backup, /catch \(writeError\)/);
  assert.match(backup, /localStorage\.setItem\(MAIN_KEY, previousMain\)/);
  assert.match(backup, /localStorage\.setItem\(MATERIALS_KEY, previousMaterials\)/);
});

test('official service worker cleanup cannot delete beta cache names', () => {
  assert.match(sw, /\^rc-setup-v\\d\+\$/);
  assert.doesNotMatch('rc-setup-beta-v35', /^rc-setup-v\d+$/);
  assert.match(sw, /key !== CACHE_NAME/);
});

test('missing assets never receive index.html as fallback', () => {
  assert.match(sw, /event\.request\.mode === 'navigate'/);
  assert.match(sw, /Ressource indisponible hors ligne/);
});
