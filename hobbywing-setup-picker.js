(() => {
  // Add searchable library dropdowns to setup motor/ESC inputs; keep text fields editable.
  const STORAGE_KEY = 'rc-setup-materials-v1';
  const form = document.getElementById('setupForm');
  if (!form) return;
  const escape = (value) => String(value ?? '').replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
  let items = [];
  try { const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); items = Array.isArray(parsed) ? parsed : []; } catch {}
  const specs = [['escModel','Variateur (ESC)','Choisir un variateur Hobbywing…'],['esc','Variateur (ESC)','Choisir un variateur Hobbywing…']];
  for (const [fieldName, category, placeholder] of specs) {
    const input = form.elements.namedItem(fieldName);
    if (!input || input.dataset.hobbywingPicker === 'true') continue;
    input.dataset.hobbywingPicker = 'true';
    const picker = document.createElement('label');
    picker.className = 'setup-library-picker';
    picker.textContent = 'Bibliothèque Hobbywing';
    const select = document.createElement('select');
    select.innerHTML = `<option value="">${placeholder}</option>` + items.filter(item => item.brand === 'Hobbywing' && item.category === category).map(item => {
      const text = `${item.name} — réf. ${item.reference}`;
      return `<option value="${escape(text)}">${escape(text)}</option>`;
    }).join('');
    select.addEventListener('change', () => { if (select.value) input.value = select.value; });
    picker.append(select);
    input.closest('label')?.before(picker);
  }
})();
