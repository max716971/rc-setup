(() => {
  // Add editable Hobbywing motor/ESC pickers and surface user-saved inventory in the library tab.
  const STORAGE_KEY = 'rc-setup-materials-v1';
  const form = document.getElementById('setupForm');
  const escape = (value) => String(value ?? '').replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
  const readItems = () => {
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      return Array.isArray(parsed) ? parsed : [];
    } catch { return []; }
  };

  if (form) {
    const items = readItems();
    const specs = [
      ['motor', 'Moteur', 'Choisir un moteur Hobbywing…'],
      ['escModel', 'Variateur (ESC)', 'Choisir un variateur Hobbywing…'],
      ['esc', 'Variateur (ESC)', 'Choisir un variateur Hobbywing…']
    ];
    for (const [fieldName, category, placeholder] of specs) {
      const input = form.elements.namedItem(fieldName);
      if (!input || input.dataset.hobbywingPicker === 'true') continue;
      input.dataset.hobbywingPicker = 'true';
      const picker = document.createElement('label');
      picker.className = 'setup-library-picker';
      picker.append(document.createTextNode('Bibliothèque Hobbywing'));
      const select = document.createElement('select');
      const options = items.filter(item => item.brand === 'Hobbywing' && item.category === category);
      select.innerHTML = `<option value="">${placeholder}</option>` + options.map(item => {
        const label = `${item.name} — réf. ${item.reference}`;
        return `<option value="${escape(label)}">${escape(label)}</option>`;
      }).join('');
      select.addEventListener('change', () => { if (select.value) input.value = select.value; });
      picker.append(select);
      input.closest('label')?.before(picker);
    }
  }

  // Keep the user's "Mon matériel" entries visible in the Bibliothèque tab as well.
  // Saved inventory remains intact and is not copied or deleted.
  const root = document.getElementById('materialsApp');
  if (!root) return;
  const cards = root.querySelector('#materialCards');
  const renderSavedEntries = () => {
    const cardContainer = root.querySelector('#materialCards');
    const catalogTab = root.querySelector('.material-tab.active[data-tab="catalog"]');
    if (!cardContainer || !catalogTab) return;
    const search = (root.querySelector('#materialSearch')?.value || '').trim().toLocaleLowerCase('fr');
    const brandFilter = root.querySelector('#brandFilter')?.value || '';
    const categoryFilter = root.querySelector('#categoryFilter')?.value || '';
    const saved = readItems();
    for (const item of saved) {
      if ((brandFilter && item.brand !== brandFilter) || (categoryFilter && item.category !== categoryFilter)) continue;
      const searchable = [item.brand, item.category, item.name, item.reference, item.detail].join(' ').toLocaleLowerCase('fr');
      if (search && !searchable.includes(search)) continue;
      const signature = `${item.brand || ''}|${item.name || ''}|${item.reference || ''}`;
      if ([...cardContainer.querySelectorAll('.material-card')].some(card => card.dataset.libraryPersonalItem === signature || (card.textContent.includes(item.name || '\u0000') && card.textContent.includes(item.reference || '\u0000')))) continue;
      const card = document.createElement('article');
      card.className = 'material-card';
      card.dataset.libraryPersonalItem = signature;
      const head = document.createElement('div');
      head.className = 'material-card-head';
      const category = document.createElement('span'); category.className = 'material-category'; category.textContent = item.category || 'Matériel';
      const brand = document.createElement('span'); brand.className = 'material-brand'; brand.textContent = item.brand || '';
      head.append(category, brand);
      const title = document.createElement('h3'); title.textContent = item.name || 'Référence sans nom';
      const reference = document.createElement('p'); reference.className = 'material-reference'; reference.textContent = `Réf. ${item.reference || 'non renseignée'}`;
      const detail = document.createElement('p'); detail.className = 'material-detail'; detail.textContent = item.detail || 'Ajouté à Mon matériel.';
      card.append(head, title, reference, detail);
      if (item.url) {
        const link = document.createElement('a'); link.href = item.url; link.target = '_blank'; link.rel = 'noopener noreferrer'; link.textContent = 'Voir la référence ↗';
        card.append(link);
      }
      cardContainer.append(card);
    }
  };
  if (cards) {
    new MutationObserver(() => renderSavedEntries()).observe(cards, { childList: true });
    root.addEventListener('input', event => { if (event.target.id === 'materialSearch') requestAnimationFrame(renderSavedEntries); });
    root.addEventListener('change', event => { if (event.target.id === 'brandFilter' || event.target.id === 'categoryFilter') requestAnimationFrame(renderSavedEntries); });
    root.addEventListener('click', event => {
      if (event.target.closest('.material-tab[data-tab="catalog"]')) requestAnimationFrame(renderSavedEntries);
    });
    renderSavedEntries();
  }
})();
