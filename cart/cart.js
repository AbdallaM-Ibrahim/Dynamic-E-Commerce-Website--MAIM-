// Update cart display (for cart page)
function updateCartDisplay() {
  const cart = getCart();
  const cartItemsContainer = document.getElementById('cart-items');
  const totalPriceElement = document.getElementById('total-price');

  cartItemsContainer.innerHTML = '';
  let totalPrice = 0;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p>Your cart is empty</p>';
  } else {
    cart.forEach((item) => {
      const productTotal = item.price * item.quantity;
      totalPrice += productTotal;

      const cartItemHTML = `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="item-details">
                        <h4>${item.name}</h4>
                        <p>Price: $${item.price}</p>
                        <p>Quantity: 
                            <input type="number" value="${
                              item.quantity
                            }" data-id="${item.id}" class="quantity-input">
                        </p>
                        <p>Total: $${productTotal.toFixed(2)}</p>
                        <button class="remove-item" data-id="${
                          item.id
                        }">Remove</button>
                    </div>
                </div>
            `;
      cartItemsContainer.innerHTML += cartItemHTML;
    });
  }
  // Update total price
  totalPriceElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;

  // Add event listeners for quantity updates and removal
  document.querySelectorAll('.quantity-input').forEach((input) => {
    input.addEventListener('change', handleQuantityChange);
  });

  document.querySelectorAll('.remove-item').forEach((button) => {
    button.addEventListener('click', handleRemoveItem);
  });
}

// Handle quantity change in the cart
function handleQuantityChange(event) {
  const productId = parseInt(event.target.dataset.id);
  const newQuantity = parseInt(event.target.value);

  if (newQuantity <= 0) {
    removeFromCart(productId);
  } else {
    let cart = getCart();
    const productIndex = cart.findIndex((item) => item.id === productId);
    cart[productIndex].quantity = parseInt(newQuantity);
    saveCart(cart);
    updateCartDisplay();
  }
}

// Handle remove item from cart
function handleRemoveItem(event) {
  const productId = parseInt(event.target.dataset.id);
  removeFromCart(productId);
  updateCartDisplay();
}

// Initialize cart on page load
document.addEventListener('DOMContentLoaded', function () {
  const checkoutButton = document.getElementById('checkout-button');

  // If we are on the cart page, update the cart display
  if (document.getElementById('cart-items')) {
    updateCartDisplay();
  }

  checkoutButton.addEventListener('click', function () {
    window.location.href = '/checkout';
  });
});
