// Select elements
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont');
const smallMenu = document.querySelector('.header__sm-menu');
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu');
const headerHamMenuCloseBtn = document.querySelector('.header__main-ham-menu-close');
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link a');

// Toggle function
function toggleMenu() {
  const isActive = smallMenu.classList.toggle('header__sm-menu--active');
  if (isActive) {
    hamMenuBtn.setAttribute('aria-expanded', 'true');
    headerHamMenuBtn.classList.add('d-none');
    headerHamMenuCloseBtn.classList.remove('d-none');
  } else {
    hamMenuBtn.setAttribute('aria-expanded', 'false');
    headerHamMenuBtn.classList.remove('d-none');
    headerHamMenuCloseBtn.classList.add('d-none');
  }
}

// Click event on hamburger container
hamMenuBtn.addEventListener('click', toggleMenu);

// Keyboard accessibility (toggle on Enter or Space key)
hamMenuBtn.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    toggleMenu();
  }
});

// Close menu when any small menu link is clicked
headerSmallMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active');
    hamMenuBtn.setAttribute('aria-expanded', 'false');
    headerHamMenuBtn.classList.remove('d-none');
    headerHamMenuCloseBtn.classList.add('d-none');
  });
});
