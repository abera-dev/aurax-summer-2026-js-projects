const menuData = [
  {
    category: 'Appetizers',
    items: [
      { name: 'Sambusa', description: 'Crispy pastry filled with spiced lentils', price: '20 Birr', image: 'Sambusa - crispy pastry with spiced lentils', tag: 'Popular' },
      { name: 'Kitfo Tibs', description: 'Sautéed beef with rosemary and garlic', price: '1,250 Birr', image: 'Kitfo Tibs - sautéed beef with rosemary', tag: '' },
      { name: 'Azifa', description: 'Green lentil salad with mustard dressing', price: '850 Birr', image: 'Azifa - green lentil salad', tag: 'Vegetarian' },
    ],
  },
  {
    category: 'Main Courses',
    items: [
      { name: 'Doro Wat', description: 'Spicy chicken stew with hard-boiled eggs', price: '2,200 Birr', image: 'Doro Wat - spicy chicken stew with eggs', tag: 'Popular' },
      { name: 'Tibs', description: 'Pan-fried beef with peppers and onions', price: '2,100 Birr', image: 'Tibs - pan-fried beef with peppers', tag: '' },
      { name: 'Kitfo', description: 'Hand-minced beef with spiced butter', price: '2,350 Birr', image: 'Kitfo - hand-minced beef with spiced butter', tag: '' },
      { name: 'Shiro Wat', description: 'Chickpea stew with garlic and ginger', price: '100 Birr', image: 'Shiro Wat - chickpea stew', tag: 'Vegetarian' },
    ],
  },
  {
    category: 'Desserts',
    items: [
      { name: 'Dabo Kolo', description: 'Crunchy roasted chickpea snack', price: '50 Birr', image: 'Dabo Kolo - crunchy roasted chickpeas', tag: '' },
      { name: 'Baklava', description: 'Layered pastry with honey and nuts', price: '90 Birr', image: 'Baklava - layered pastry with honey', tag: 'Popular' },
      { name: 'Fresh Fruit Plate', description: 'Seasonal tropical fruits', price: '250 Birr', image: 'Fresh Fruit Plate - seasonal tropical fruits', tag: 'Vegetarian' },
    ],
  },
  {
    category: 'Drinks',
    items: [
      { name: 'Ethiopian Coffee', description: 'Traditional ceremonial brew', price: '30 Birr', image: 'Ethiopian Coffee - traditional ceremonial brew', tag: 'Popular' },
      { name: 'Tej', description: 'Honey wine with a sweet finish', price: '30 Birr', image: 'Tej - honey wine with sweet finish', tag: '' },
      { name: 'Fresh Juice', description: 'Mango, avocado, or pineapple', price: '150 Birr', image: 'Fresh Juice - mango, avocado, or pineapple', tag: 'Vegetarian' },
    ],
  },
];

function createCard(item) {
  const card = document.createElement('div');
  card.classList.add('menu-card');

  const tagHTML = item.tag
    ? `<span class="card-tag ${item.tag.toLowerCase()}">${item.tag}</span>`
    : '';

  card.innerHTML = `
    <div class="card-image" role="img" aria-label="${item.image}">
      ${tagHTML}
    </div>
    <div class="card-body">
      <h4 class="card-title">${item.name}</h4>
      <p class="card-desc">${item.description}</p>
      <span class="card-price">${item.price}</span>
    </div>
  `;

  return card;
}

function createCategory(category) {
  const div = document.createElement('div');
  div.classList.add('menu-category');

  const title = document.createElement('h3');
  title.textContent = category.category;
  div.appendChild(title);

  const grid = document.createElement('div');
  grid.classList.add('menu-grid');

  category.items.forEach(item => {
    grid.appendChild(createCard(item));
  });

  div.appendChild(grid);
  return div;
}

export function loadMenu(container) {
  const section = document.createElement('section');
  section.classList.add('menu');

  const heading = document.createElement('h2');
  heading.textContent = 'Our Menu';
  section.appendChild(heading);

  menuData.forEach(category => {
    section.appendChild(createCategory(category));
  });

  container.appendChild(section);
}
