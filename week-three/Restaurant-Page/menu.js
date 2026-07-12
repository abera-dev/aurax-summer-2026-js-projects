const menuData = [
  {
    category: 'Appetizers',
    items: [
      { name: 'Sambusa', description: 'Crispy pastry filled with spiced lentils', price: '$4.50' },
      { name: 'Kitfo Tibs', description: 'Sautéed beef with rosemary and garlic', price: '$8.00' },
      { name: 'Azifa', description: 'Green lentil salad with mustard dressing', price: '$5.50' },
    ],
  },
  {
    category: 'Main Courses',
    items: [
      { name: 'Doro Wat', description: 'Spicy chicken stew with hard-boiled eggs', price: '$14.00' },
      { name: 'Tibs', description: 'Pan-fried beef with peppers and onions', price: '$13.50' },
      { name: 'Kitfo', description: 'Hand-minced beef with spiced butter', price: '$15.00' },
      { name: 'Shiro Wat', description: 'Chickpea stew with garlic and ginger', price: '$11.00' },
    ],
  },
  {
    category: 'Desserts',
    items: [
      { name: 'Dabo Kolo', description: 'Crunchy roasted chickpea snack', price: '$3.50' },
      { name: 'Baklava', description: 'Layered pastry with honey and nuts', price: '$5.00' },
      { name: 'Fresh Fruit Plate', description: 'Seasonal tropical fruits', price: '$4.00' },
    ],
  },
  {
    category: 'Drinks',
    items: [
      { name: 'Ethiopian Coffee', description: 'Traditional ceremonial brew', price: '$3.00' },
      { name: 'Tej', description: 'Honey wine with a sweet finish', price: '$6.00' },
      { name: 'Fresh Juice', description: 'Mango, avocado, or pineapple', price: '$4.00' },
    ],
  },
];

function createCategory(category) {
  const div = document.createElement('div');
  div.classList.add('menu-category');

  const title = document.createElement('h3');
  title.textContent = category.category;
  div.appendChild(title);

  const list = document.createElement('ul');
  category.items.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span class="item-name">${item.name}</span>
      <span class="item-desc">${item.description}</span>
      <span class="item-price">${item.price}</span>
    `;
    list.appendChild(li);
  });

  div.appendChild(list);
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
