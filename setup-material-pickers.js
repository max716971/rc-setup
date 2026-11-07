(() => {
  'use strict';
  const fields = [
    ['motor','Moteur','Choisir un moteur dans la bibliothèque…'],
    ['escModel','Variateur (ESC)','Choisir un variateur dans la bibliothèque…'],
    ['frontShocks','Huile amortisseur','Choisir une huile avant…'],
    ['rearShocks','Huile amortisseur','Choisir une huile arrière…'],
    ['frontDiffOil','Huile différentiel','Choisir une huile…'],
    ['centerDiffOil','Huile différentiel','Choisir une huile…'],
    ['rearDiffOil','Huile différentiel','Choisir une huile…'],
    ['frontDiffGrease','Graisse','Choisir une graisse…'],
    ['centerDiffGrease','Graisse','Choisir une graisse…'],
    ['rearDiffGrease','Graisse','Choisir une graisse…'],
    ['frontSpring','Ressort','Choisir un ressort avant…'],
    ['rearSpring','Ressort','Choisir un ressort arrière…']
  ];
  function init() {
    const form=document.getElementById('setupForm');
    const api=window.RCSetupMaterials;
    if(!form||!api||typeof api.getAll!=='function') return false;
    fields.forEach(([name,category,placeholder])=>{
      const input=form.elements.namedItem(name);
      if(!input||input.dataset.materialPicker==='true') return;
      const wrap=document.createElement('div');
      wrap.className='setup-material-picker';
      wrap.style.cssText='margin-top:6px;width:100%';
      const label=document.createElement('label');
      label.textContent='Bibliothèque — '+category;
      label.style.cssText='display:block;font-size:.78rem;color:var(--muted,#9aa4b5);margin-bottom:4px';
      const select=document.createElement('select');
      select.setAttribute('aria-label',label.textContent);
      select.style.cssText='width:100%;min-width:0';
      const first=document.createElement('option');
      first.value=''; first.textContent=placeholder; select.append(first);
      const items=api.getAll().filter(x=>x.category===category)
        .sort((a,b)=>(String(a.brand||'')+' '+String(a.name||'')).localeCompare(String(b.brand||'')+' '+String(b.name||''),'fr'));
      items.forEach(item=>{
        const option=document.createElement('option');
        option.value=[item.brand,item.name,item.reference?'réf. '+item.reference:''].filter(Boolean).join(' — ');
        option.textContent=option.value;
        select.append(option);
      });
      select.addEventListener('change',()=>{
        if(!select.value)return;
        input.value=select.value;
        input.dispatchEvent(new Event('input',{bubbles:true}));
        input.dispatchEvent(new Event('change',{bubbles:true}));
      });
      label.append(select); wrap.append(label);
      input.insertAdjacentElement('afterend',wrap);
      input.dataset.materialPicker='true';
    });
    return true;
  }
  if(!init()){
    document.addEventListener('DOMContentLoaded',init,{once:true});
    let attempts=0;
    const timer=setInterval(()=>{attempts++;if(init()||attempts>=20)clearInterval(timer);},250);
  }
  window.addEventListener('rc-materials-updated',()=> {
    document.querySelectorAll('#setupForm [data-material-picker="true"]').forEach(input=>{
      const wrap=input.nextElementSibling;
      if(wrap&&wrap.classList.contains('setup-material-picker'))wrap.remove();
      delete input.dataset.materialPicker;
    });
    init();
  });
})();