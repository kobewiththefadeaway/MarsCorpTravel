const form = document.getElementById('booking-form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', e => {
  e.preventDefault();

  if (form.checkValidity()) {
    // Form is valid, submit it and show the confirmation page
    window.location.href = 'confirmationpage.html';
  } else {
    // Form is invalid, display an error message
    errorMessage.textContent = 'Please fill out all fields correctly.';
  }
});

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const language = document.querySelector('input[name="language"]:checked').value;
  const level = document.querySelector('input[name="level"]:checked').value;
  alert(`Thank you for signing up, ${name}! You will be learning ${language} at a ${level} level. We will send an email to ${email} to confirm your registration.`);
});


form.addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const language = document.querySelector('input[name="language"]:checked').value;
  const level = document.querySelector('input[name="level"]:checked').value;
  // Save the registration details to session storage
  sessionStorage.setItem('name', name);
  sessionStorage.setItem('email', email);
  sessionStorage.setItem('language', language);
  sessionStorage.setItem('level', level);
  // Redirect to the confirmation page
  window.location.href = 'confirmationpage.html';
});

// On the confirmation page, retrieve the registration details from session storage and display them
const name = sessionStorage.getItem('name');
const email = sessionStorage.getItem('email');
const language = sessionStorage.getItem('language');
const level = sessionStorage.getItem('level');
document.getElementById('name').textContent = name;
document.getElementById('email').textContent = email;
document.getElementById('language').textContent = language;
document.getElementById('level').textContent = level;
