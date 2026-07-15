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

function createAboutCard(data) {
  const card = document.createElement('div');
  card.classList.add('about-card');

  const header = document.createElement('div');
  header.classList.add('about-card-header');
  header.innerHTML = `
    <span class="about-icon">${data.icon}</span>
    <h3>${data.title}</h3>
  `;
  card.appendChild(header);

  const text = document.createElement('p');
  text.textContent = data.text;
  card.appendChild(text);

  return card;
}

function createChefCard(data) {
  const card = document.createElement('div');
  card.classList.add('about-card');

  const header = document.createElement('div');
  header.classList.add('about-card-header');
  header.innerHTML = `
    <span class="about-icon">${data.icon}</span>
    <h3>${data.title}</h3>
  `;
  card.appendChild(header);

  const chefSection = document.createElement('div');
  chefSection.classList.add('about-chef');

  const photo = document.createElement('div');
  photo.classList.add('chef-photo');
  photo.textContent = '👩‍🍳';
  chefSection.appendChild(photo);

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

function createDivider() {
  const hr = document.createElement('hr');
  hr.classList.add('about-divider');
  return hr;
}

export function loadAbout(container) {
  const section = document.createElement('section');
  section.classList.add('about');

  const heading = document.createElement('h2');
  heading.textContent = 'About Us';
  section.appendChild(heading);

  section.appendChild(createAboutCard(aboutData.story));
  section.appendChild(createDivider());

  section.appendChild(createAboutCard(aboutData.mission));
  section.appendChild(createDivider());

  section.appendChild(createChefCard(aboutData.chef));
  section.appendChild(createDivider());

  section.appendChild(createAboutCard(aboutData.cuisine));

  container.appendChild(section);
}
