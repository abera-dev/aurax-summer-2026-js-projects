const contactInfo = [
  {
    icon: '📍',
    title: 'Address',
    lines: ['Nile Street', 'Downtown District', 'Addis Ababa, Ethiopia'],
  },
  {
    icon: '📞',
    title: 'Phone',
    lines: ['+251 91 234 5678'],
  },
  {
    icon: '✉️',
    title: 'Email',
    lines: ['hello@bluenilekitchen.com'],
  },
  {
    icon: '🕐',
    title: 'Opening Hours',
    lines: [
      'Monday - Friday: 11:00 AM - 10:00 PM',
      'Saturday: 10:00 AM - 11:00 PM',
      'Sunday: 12:00 PM - 9:00 PM',
    ],
  },
];

function createContactCard(info) {
  const card = document.createElement('div');
  card.classList.add('contact-card');

  const icon = document.createElement('div');
  icon.classList.add('contact-icon');
  icon.textContent = info.icon;
  card.appendChild(icon);

  const details = document.createElement('div');
  details.classList.add('contact-details');

  const title = document.createElement('h3');
  title.textContent = info.title;
  details.appendChild(title);

  info.lines.forEach(line => {
    const p = document.createElement('p');
    p.textContent = line;
    details.appendChild(p);
  });

  card.appendChild(details);
  return card;
}

function createMapPlaceholder() {
  const map = document.createElement('div');
  map.classList.add('map-placeholder');

  const title = document.createElement('h3');
  title.textContent = 'Find Us';
  map.appendChild(title);

  const box = document.createElement('div');
  box.classList.add('map-box');
  box.innerHTML = `
    <span class="map-box-icon">🗺️</span>
    <span class="map-box-text">Map coming soon</span>
  `;
  map.appendChild(box);

  return map;
}

export function loadContact(container) {
  const section = document.createElement('section');
  section.classList.add('contact');

  const heading = document.createElement('h2');
  heading.textContent = 'Contact Us';
  section.appendChild(heading);

  const layout = document.createElement('div');
  layout.classList.add('contact-layout');

  const infoColumn = document.createElement('div');
  infoColumn.classList.add('contact-info');

  contactInfo.forEach(info => {
    infoColumn.appendChild(createContactCard(info));
  });

  layout.appendChild(infoColumn);
  layout.appendChild(createMapPlaceholder());

  section.appendChild(layout);
  container.appendChild(section);
}
