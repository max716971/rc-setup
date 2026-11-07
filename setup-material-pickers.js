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
    ['rearSpring','Ressort','Choisir un ressort arrière…'],
    ['frontTires','Pneus / roues','Choisir un pneu avant compatible…'],
    ['rearTires','Pneus / roues','Choisir un pneu arrière…']
  ];
  const form = () => document.getElementById('setupForm');
  const api = () => window.RCSetupMaterials;
  function tireItems(name, items) {
    const carSelect=form()?.elements.namedItem('carId');
    const drive=carSelect?.selectedOptions?.[0]?.dataset?.drive || '';
    return items.filter(item => {
      const compatibility=String(item.compatibility||'').trim();
      if(name==='rearTires') return /^Arrière\b/i.test(compatibility);
      if(name==='frontTires') {
        if(drive==='2WD') return /^Avant\s+2WD$/i.test(compatibility);
        if(drive==='4WD') return /^Avant\s+4WD$/i.test(compatibility);
        return /^Avant\s+(?:2WD|4WD)$/i.test(compatibility);
      }
      return true;
    });
  }
  function buildPicker(name, category, placeholder) {
    const f=form(), materials=api();
    if(!f||!materials||typeof materials.getAll!=='function') return;
    const input=f.elements.namedItem(name);
    if(!input) return;
    const oldWrap=input.nextElementSibling;
    if(oldWrap?.classList.contains('setup-material-picker')) oldWrap.remove();
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
    let items=materials.getAll().filter(x=>x.category===category);
    if(name==='frontTires'||name==='rearTires') items=tireItems(name,items);
    items.sort((a,b)=>(String(a.brand||'')+' '+String(a.name||'')).localeCompare(String(b.brand||'')+' '+String(b.name||''),'fr'));
    items.forEach(item=>{
      const value=[item.brand,item.name,item.reference?'réf. '+item.reference:''].filter(Boolean).join(' — ');
      const option=document.createElement('option');
      option.value=value; option.textContent=value; select.append(option);
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
  }
  function init() {
    const f=form(), materials=api();
    if(!f||!materials||typeof materials.getAll!=='function') return false;
    fields.forEach(field=>buildPicker(...field));
    const carSelect=f.elements.namedItem('carId');
    if(carSelect&&!carSelect.dataset.tireFilterBound) {
      carSelect.addEventListener('change',()=>fields.filter(([name])=>name==='frontTires'||name==='rearTires').forEach(field=>buildPicker(...field)));
      carSelect.dataset.tireFilterBound='true';
    }
    return true;
  }
  if(!init()) {
    document.addEventListener('DOMContentLoaded',init,{once:true});
    let attempts=0;
    const timer=setInterval(()=>{attempts++;if(init()||attempts>=20)clearInterval(timer);},250);
  }
  window.addEventListener('rc-materials-updated',init);
})();
