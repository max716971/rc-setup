(() => {
  // Add editable library pickers for Hobbywing motor and ESC choices in setup section 04.
  const STORAGE_KEY = 'rc-setup-materials-v1';
  const form = document.getElementById('setupForm');
  if (!form) return;
  const esc = (v) => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
  let items = [];
  try { const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); items = Array.isArray(data) ? data : []; } catch {}
  const config = [['motor','Moteur','Choisir un moteur Hobbywing…'],['escModel','Variateur (ESC)','Choisir un variateur Hobbywing…'],['esc','Variateur (ESC)','Choisir un variateur Hobbywing…']];
  config.forEach(([fieldName, category, placeholder]) => {
    const input = form.elements.namedItem(fieldName);
    if (!input || input.dataset.hobbywingPicker === 'true') return;
    input.dataset.hobbywingPicker = 'true';
    const picker = document.createElement('label'); picker.className = 'setup-library-picker'; picker.textContent = 'Bibliothèque Hobbywing';
    const select = document.createElement('select');
    const list = items.filter(item => item.brand === 'Hobbywing' && item.category === category);
    select.innerHTML = `<option value="">${placeholder}</option>` + list.map(item => {
      const label = `${item.name} — réf. ${item.reference}`;
      return `<option value="${esc(label)}">${esc(label)}</option>`;
    }).join('');
    select.addEventListener('change', () => { if (select.value) input.value = select.value; });
    picker.append(select); input.closest('label')?.before(picker);
  });
})();
