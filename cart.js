// Get cart from localStorage
function getCart() {
  let cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : [];
}

// Save cart to localStorage
function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
  try {
    document.getElementById('nav-cart').textContent = `Cart${
      getCartCount() ? '<' + getCartCount() + '>' : ''
    }`;
  } catch (error) {
    console.log('Error updating cart count: ', error);
  }
}

// Add product to cart
function addToCart(product, quantity = 1) {
  let cart = getCart();

  // Check if product is already in the cart
  const existingProductIndex = cart.findIndex((item) => item.id === product.id);
  if (existingProductIndex > -1) {
    // Product already in the cart, update quantity
    cart[existingProductIndex].quantity += parseInt(quantity);
  } else {
    // New product, add to the cart
    cart.push({ ...product, quantity: parseInt(quantity) });
  }

  saveCart(cart);
  console.log(`Product: ${product.name}, added to cart`);
}

// Remove product from cart
function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter((item) => item.id !== productId);
  saveCart(cart);
}

// change the product quantity in the cart
function changeQuantity(productId, newQuantity) {
  let cart = getCart();
  const productIndex = cart.findIndex((item) => item.id === productId);
  cart[productIndex].quantity = parseInt(newQuantity);
  saveCart(cart);
}

// Calculate cart display
function getCartCount() {
  const cart = getCart();
  const totalCount = cart.reduce(
    (sum, item) => sum + parseInt(item.quantity),
    0
  );
  return totalCount;
}

// Empty the cart
function emptyCart() {
  const cart = getCart();
  cart.forEach((item) => removeFromCart(item.id));
}
