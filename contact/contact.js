// Handle form submission and validation
document
  .getElementById('contact-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Basic form validation
    if (name === '' || email === '' || subject === '' || message === '') {
      alert('Please fill out all required fields.');
      return;
    }

    // Show success message
    document.getElementById('contact-form').style.display = 'none';
    document.getElementById('success-message').style.display = 'block';
  });
