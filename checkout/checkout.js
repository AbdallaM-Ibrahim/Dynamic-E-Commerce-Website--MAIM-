document.addEventListener('DOMContentLoaded', function () {
  const cart = getCart();

  if (cart.length === 0) {
    document.getElementById('checkout-section').innerHTML =
      '<p>Your cart is empty.</p>';
  }

  function calculateTotalPrice() {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }
  document.getElementById('total-price').textContent = `Total Price: $${calculateTotalPrice()}`;
});

// Handle form submission and validation
document
  .getElementById('checkout-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const paymentMethod = document.getElementById('payment-method').value;

    // Basic form validation
    if (name === '' || email === '' || address === '' || paymentMethod === '') {
      alert('Please fill out all required fields.');
      return;
    }

    // Show confirmation message
    document.getElementById('checkout-form').style.display = 'none';
    document.getElementById('confirmation-message').style.display = 'block';

    // Clear cart
    emptyCart();
  });
