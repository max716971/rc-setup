(() => {
  'use strict';
  const form = document.getElementById('setupForm');
  const api = window.RCSetupMaterials;
  if (!form || !api) return;

  const fields = [
    ['motor','Moteur','Choisir un moteur…'],
    ['escModel','Variateur (ESC)','Choisir un variateur…'],
    ['frontShocks','Huile amortisseur','Choisir une huile avant…'],
    ['rearShocks','Huile amortisseur','Choisir une huile arrière…'],
    ['frontDiffOil','Huile différentiel','Choisir une huile de différentiel…'],
    ['centerDiffOil','Huile différentiel','Choisir une huile de différentiel…'],
    ['rearDiffOil','Huile différentiel','Choisir une huile de différentiel…'],
    ['frontDiffGrease','Graisse','Choisir une graisse…'],
    ['centerDiffGrease','Graisse','Choisir une graisse…'],
    ['rearDiffGrease','Graisse','Choisir une graisse…'],
    ['frontSpring','Ressort','Choisir un ressort avant…'],
    ['rearSpring','Ressort','Choisir un ressort arrière…']
  ];

  function addPicker([fieldName, category, placeholder]) {
    const input = form.elements.namedItem(fieldName);
    if (!input || input.dataset.materialPicker === 'true') return;
    const wrapper = document.createElement('div');
    wrapper.className = 'setup-material-picker';
    wrapper.style.marginTop = '6px';
    const select = document.createElement('select');
    select.setAttribute('aria-label', 'Sélection dans la bibliothèque : ' + category);
    select.style.width = '100%';
    select.style.minWidth = '0';
    select.innerHTML = '<option value="">' + placeholder + '</option>';
    const items = api.getAll().filter(item => item.category === category)
      .sort((a,b) => (a.brand + ' ' + a.name).localeCompare(b.brand + ' ' + b.name, 'fr'));
    for (const item of items) {
      const option = document.createElement('option');
      option.value = [item.brand, item.name, item.reference ? 'réf. ' + item.reference : ''].filter(Boolean).join(' — ');
      option.textContent = option.value;
      select.append(option);
    }
    select.addEventListener('change', () => {
      if (select.value) {
        input.value = select.value;
        input.dispatchEvent(new Event('input', {bubbles:true}));
        input.dispatchEvent(new Event('change', {bubbles:true}));
      }
    });
    wrapper.append(select);
    input.insertAdjacentElement('afterend', wrapper);
    input.dataset.materialPicker = 'true';
  }
  fields.forEach(addPicker);
})();