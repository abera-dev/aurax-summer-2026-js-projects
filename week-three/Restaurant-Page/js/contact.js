const contactData = {
  address: {
    title: 'Address',
    lines: ['Nile Street', 'Downtown District', 'Addis Ababa, Ethiopia'],
  },
  phone: {
    title: 'Phone',
    value: '+251 91 234 5678',
  },
  email: {
    title: 'Email',
    value: 'hello@bluenilekitchen.com',
  },
  hours: {
    title: 'Opening Hours',
    lines: ['Monday - Friday: 11:00 AM - 10:00 PM', 'Saturday: 10:00 AM - 11:00 PM', 'Sunday: 12:00 PM - 9:00 PM'],
  },
  map: {
    title: 'Find Us',
    placeholder: 'Map coming soon',
  },
};

function createInfoBlock(data) {
  const div = document.createElement('div');
  div.classList.add('contact-block');

  const title = document.createElement('h3');
  title.textContent = data.title;
  div.appendChild(title);

  if (data.lines) {
    data.lines.forEach(line => {
      const p = document.createElement('p');
      p.textContent = line;
      div.appendChild(p);
    });
  }

  if (data.value) {
    const p = document.createElement('p');
    p.textContent = data.value;
    div.appendChild(p);
  }

  return div;
}

function createMapBlock(data) {
  const div = document.createElement('div');
  div.classList.add('contact-block', 'map-placeholder');

  const title = document.createElement('h3');
  title.textContent = data.title;
  div.appendChild(title);

  const placeholder = document.createElement('div');
  placeholder.classList.add('map-box');
  placeholder.textContent = data.placeholder;
  div.appendChild(placeholder);

  return div;
}

export function loadContact(container) {
  const section = document.createElement('section');
  section.classList.add('contact');

  const heading = document.createElement('h2');
  heading.textContent = 'Contact Us';
  section.appendChild(heading);

  section.appendChild(createInfoBlock(contactData.address));
  section.appendChild(createInfoBlock(contactData.phone));
  section.appendChild(createInfoBlock(contactData.email));
  section.appendChild(createInfoBlock(contactData.hours));
  section.appendChild(createMapBlock(contactData.map));

  container.appendChild(section);
}
