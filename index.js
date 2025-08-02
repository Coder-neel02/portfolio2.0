// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = '/'
})



 const form = document.querySelector('.contact__form');
const scriptURL = 'https://script.google.com/macros/s/AKfycbwhmfJXyBnQNHeyiH4T0LdOvsIFrQEUozIenumzGULI8FFzY9EU9L_YsTBPDH8rJVQLWg/exec';

form.addEventListener('submit', e => {
  e.preventDefault();

  const data = {
    name: form.name.value.trim(),
    email: form.email.value.trim(),
    message: form.message.value.trim()
  };

  // Basic client-side validation
  if (!data.name || !data.email || !data.message) {
    alert('Please fill in all the form fields before submitting.');
    return;
  }

  // Optional: Log the data to console for debugging
  console.log('Sending data:', data);

  fetch(scriptURL, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => {
    // Check if response is okay, then parse JSON
    if (!response.ok) {
      throw new Error(`Network response was not OK. Status: ${response.status}`);
    }
    return response.json();
  })
  .then(json => {
    console.log('Response from server:', json);
    if (json.result === 'success') {
      alert('Thank you for contacting us! We will get back to you soon.');
      form.reset();
    } else {
      alert('There was an error submitting your form: ' + (json.error || 'Unknown error'));
    }
  })
  .catch(error => {
    console.error('Fetch error:', error);
    alert('Error! ' + error.message);
  });
});
