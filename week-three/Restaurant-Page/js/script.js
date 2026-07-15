import { loadHome } from './home.js';
import { loadMenu } from './menu.js';
import { loadAbout } from './about.js';
import { loadContact } from './contact.js';

const content = document.getElementById('content');
const navLinks = document.querySelectorAll('nav a');

const pages = {
  home: loadHome,
  menu: loadMenu,
  about: loadAbout,
  contact: loadContact,
};

function clearContent() {
  content.innerHTML = '';
}

function setActiveLink(page) {
  navLinks.forEach(link => {
    link.classList.toggle('active', link.dataset.page === page);
  });
}

function navigateTo(page) {
  if (!pages[page]) return;
  clearContent();
  pages[page](content);
  setActiveLink(page);
}

document.addEventListener('click', (e) => {
  const target = e.target.closest('[data-page]');
  if (!target) return;
  e.preventDefault();
  navigateTo(target.dataset.page);
});

navigateTo('home');
