// Load Product Details on Page Load
document.addEventListener('DOMContentLoaded', function () {
  const products = getProducts();
  // Display Product Details
  const productId = +window.location.search.split('=')[1];
  console.log(productId);
  const product = products.find((product) => product.id === productId);
  document.getElementById('product-name').textContent = product.name;
  document.getElementById('product-price').textContent = `$${product.price}`;
  document.getElementById('product-description').textContent =
    product.description;
  document.getElementById('product-img').src = product.image;

  // Handle Add to Cart
  document.getElementById('add-to-cart').addEventListener('click', function () {
    const quantity = document.getElementById('product-quantity').value;
    addToCart(product, quantity);
  });
});
