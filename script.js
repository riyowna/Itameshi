const filterButtons = document.querySelectorAll('.filter-chip');
const menuCards = document.querySelectorAll('.menu-card');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((chip) => {
      const active = chip === button;
      chip.classList.toggle('is-active', active);
      chip.setAttribute('aria-pressed', String(active));
    });
    menuCards.forEach((card) => {
      const cuisines = card.dataset.cuisine.split(' ');
      card.classList.toggle('is-hidden', filter !== 'all' && !cuisines.includes(filter));
    });
  });
});

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#primary-nav');
menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
  nav.classList.toggle('is-open', !isOpen);
});

nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation');
  nav.classList.remove('is-open');
}));
