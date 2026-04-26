export default function mobileNav() {

  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.mobile__menu');
  const overlay = document.querySelector('.mobile__overlay');
  const closeBtn = document.querySelector('.mobile__menu-close-icon');

  if (!burger || !menu || !overlay || !closeBtn) return;

  
  burger.addEventListener('click', () => {
    menu.classList.add('--open');
    overlay.classList.add('--open');
    document.body.classList.add('menu-open');
  });

  overlay.addEventListener('click', closeMenu);
  closeBtn.addEventListener('click', closeMenu);

  function closeMenu() {
    menu.classList.remove('--open');
    overlay.classList.remove('--open');
    document.body.classList.remove('menu-open');
  }
}

