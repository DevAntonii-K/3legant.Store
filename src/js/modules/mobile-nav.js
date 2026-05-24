export default function mobileNav() {

  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.nav__drawer');
  const overlay = document.querySelector('.nav__overlay');
  const closeBtn = document.querySelector('.nav__drawer-close');

  if (!burger || !menu || !overlay || !closeBtn) return;

  
  burger.addEventListener('click', () => {
    menu.classList.add('nav__drawer--open');
    overlay.classList.add('nav__overlay--open');
    document.body.classList.add('lock');
  });

  overlay.addEventListener('click', closeMenu);
  closeBtn.addEventListener('click', closeMenu);

  function closeMenu() {
    menu.classList.remove('nav__drawer--open');
    overlay.classList.remove('nav__overlay--open');
    document.body.classList.remove('lock');
  }
}

