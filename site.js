const menuButton = document.querySelector('.menu-toggle');
const menu = document.getElementById('menu-utama');
const mobile = window.matchMedia('(max-width: 960px)');

function setMenu(open) {
  menuButton.setAttribute('aria-expanded', String(open));
  menu.dataset.collapsed = String(!open);
}

function syncMenu() {
  menuButton.hidden = !mobile.matches;
  setMenu(!mobile.matches);
}

document.documentElement.classList.add('has-menu');
syncMenu();
mobile.addEventListener('change', syncMenu);

menuButton.addEventListener('click', () => {
  setMenu(menuButton.getAttribute('aria-expanded') === 'false');
});

menu.addEventListener('click', (event) => {
  const link = event.target.closest('a[href^="#"]');
  if (mobile.matches && link) {
    setMenu(false);
    const destination = document.getElementById(link.hash.slice(1));
    if (destination) {
      destination.tabIndex = -1;
      destination.focus({ preventScroll: true });
    }
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && mobile.matches && menuButton.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    menuButton.focus();
  }
});

document.getElementById('tahun').textContent = new Date().getFullYear();
