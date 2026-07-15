export function loadHome(container) {
  const section = document.createElement('section');
  section.classList.add('home');

  const heroContent = document.createElement('div');
  heroContent.classList.add('hero-content');
  heroContent.innerHTML = `
    <h2>Welcome to Blue Nile Kitchen</h2>
    <p>Experience the authentic flavors of Ethiopia</p>
    <a href="#menu" class="hero-btn">View Our Menu</a>
  `;

  section.appendChild(heroContent);
  container.appendChild(section);
}
