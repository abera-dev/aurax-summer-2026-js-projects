import { loadHome } from './home.js';
import { loadMenu } from './menu.js';
import { loadAbout } from './about.js';
import { loadContact } from './contact.js';

const content = document.getElementById('content');
const links = document.querySelectorAll('nav a');

const pages = {
  home: loadHome,
  menu: loadMenu,
  about: loadAbout,
  contact: loadContact,
};

function clearContent() {
  content.innerHTML = '';
}

function setActiveLink(selectedLink) {
  links.forEach(link => link.classList.remove('active'));
  selectedLink.classList.add('active');
}

function navigate(e) {
  e.preventDefault();
  const target = e.target.dataset.page;
  if (!target || !pages[target]) return;

  clearContent();
  pages[target](content);
  setActiveLink(e.target);
}

links.forEach(link => link.addEventListener('click', navigate));

loadHome(content);
setActiveLink(links[0]);
