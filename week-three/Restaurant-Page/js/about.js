// About page data
const aboutData = {
  story: {
    title: 'Our Story',
    icon: '📖',
    text: 'Blue Nile Kitchen was founded in 2018 by a family passionate about sharing the rich flavors of Ethiopian cuisine. What started as a small pop-up has grown into a beloved neighborhood restaurant where every meal tells a story of tradition and love.',
  },
  mission: {
    title: 'Our Mission',
    icon: '❤️',
    text: 'We believe food brings people together. Our mission is to create a warm, welcoming space where friends and families can enjoy authentic Ethiopian dishes made with fresh, locally sourced ingredients and recipes passed down through generations.',
  },
  chef: {
    title: 'Meet the Chef',
    icon: '👨‍🍳',
    name: 'Chef Amina Hassan',
    text: 'Chef Amina brings over 15 years of experience cooking traditional Ethiopian dishes. Born and raised in Addis Ababa, she combines time-honored techniques with modern creativity to deliver unforgettable flavors in every plate.',
  },
  cuisine: {
    title: 'Ethiopian Cuisine',
    icon: '🌍',
    text: 'Ethiopian food is known for its bold spices, vibrant colors, and communal dining style. Dishes are served on injera, a spongy flatbread that doubles as both plate and utensil. Meals are meant to be shared, making every dining experience a celebration.',
  },
};

// Create a regular about card (Story, Mission, Cuisine)
function createAboutCard(data) {
  const card = document.createElement('div');
  card.classList.add('about-card');

  // Card header with icon and title
  const header = document.createElement('div');
  header.classList.add('about-card-header');
  header.innerHTML = `
    <span class="about-icon">${data.icon}</span>
    <h3>${data.title}</h3>
  `;
  card.appendChild(header);

  // Card text
  const text = document.createElement('p');
  text.textContent = data.text;
  card.appendChild(text);

  return card;
}

// Create the special Chef card with photo placeholder
function createChefCard(data) {
  const card = document.createElement('div');
  card.classList.add('about-card');

  // Card header with icon and title
  const header = document.createElement('div');
  header.classList.add('about-card-header');
  header.innerHTML = `
    <span class="about-icon">${data.icon}</span>
    <h3>${data.title}</h3>
  `;
  card.appendChild(header);

  // Chef section with photo and info side by side
  const chefSection = document.createElement('div');
  chefSection.classList.add('about-chef');

  // Circular photo placeholder
  const photo = document.createElement('div');
  photo.classList.add('chef-photo');
  photo.textContent = '👩‍🍳';
  chefSection.appendChild(photo);

  // Chef info
  const info = document.createElement('div');
  info.classList.add('chef-info');
  info.innerHTML = `
    <p class="chef-name">${data.name}</p>
    <p>${data.text}</p>
  `;
  chefSection.appendChild(info);

  card.appendChild(chefSection);
  return card;
}

// Divider element between cards
function createDivider() {
  const hr = document.createElement('hr');
  hr.classList.add('about-divider');
  return hr;
}

// Load the About page
export function loadAbout(container) {
  const section = document.createElement('section');
  section.classList.add('about');

  // Page heading
  const heading = document.createElement('h2');
  heading.textContent = 'About Us';
  section.appendChild(heading);

  // Story card
  section.appendChild(createAboutCard(aboutData.story));
  section.appendChild(createDivider());

  // Mission card
  section.appendChild(createAboutCard(aboutData.mission));
  section.appendChild(createDivider());

  // Chef card (special layout)
  section.appendChild(createChefCard(aboutData.chef));
  section.appendChild(createDivider());

  // Cuisine card
  section.appendChild(createAboutCard(aboutData.cuisine));

  container.appendChild(section);
}
