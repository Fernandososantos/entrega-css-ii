// Acessibilidade do menu hamburguer e dropdown
const toggle = document.getElementById('navToggle');
const menu = document.getElementById('menu');
if (toggle && menu){
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

// Dropdown via teclado
document.querySelectorAll('.has-dropdown').forEach((item)=>{
  const btn = item.querySelector('.nav__button');
  const list = item.querySelector('.dropdown');
  if(!btn || !list) return;
  btn.addEventListener('click', ()=>{
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    if(!expanded){ list.style.opacity='1'; list.style.pointerEvents='auto'; }
    else{ list.style.opacity='0'; list.style.pointerEvents='none'; }
  });
  btn.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape'){ btn.setAttribute('aria-expanded','false'); list.style.opacity='0'; list.style.pointerEvents='none'; }
  });
});

// Toast
const toastBtn = document.getElementById('toastBtn');
const toast = document.getElementById('demoToast');
if (toastBtn && toast){
  toastBtn.addEventListener('click', ()=>{
    toast.classList.add('show');
    setTimeout(()=> toast.classList.remove('show'), 2500);
  });
}

// Modal <dialog>
const modal = document.getElementById('demoModal');
const openModal = document.getElementById('openModal');
const closeModal = document.getElementById('closeModal');
if (modal && openModal && closeModal){
  openModal.addEventListener('click', ()=> modal.showModal());
  closeModal.addEventListener('click', ()=> modal.close());
}

// Validação simples no submit
document.querySelectorAll('form[novalidate]').forEach((form)=>{
  form.addEventListener('submit', (e)=>{
    if(!form.checkValidity()){
      e.preventDefault();
      form.querySelectorAll(':invalid').forEach(el=> el.classList.add('is-invalid'));
    }
  });
});
