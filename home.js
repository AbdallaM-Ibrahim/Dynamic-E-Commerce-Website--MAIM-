// Dynamically load featured products into the home page
document.addEventListener('DOMContentLoaded', function () {
  const featuredProducts = getProducts().slice(0, 4);
  const productGrid = document.querySelector('.product-grid');

  if (productGrid) {
    featuredProducts.forEach((product) => {
      const productHTML = `
                <div class="product-card" id="product:${product.id}">
                    <a href="product/?product_id=${product.id}"><img src="${product.image}" alt="${product.name}"></a>
                    <a href="product/?product_id=${product.id}"><h3>${product.name}</h3></a>
                    <p>$${product.price}</p>
                    <button>Add to Cart</button>
                </div>
            `;
      productGrid.innerHTML += productHTML;
    });

    // Event Listener for Add to Cart buttons
    document
      .querySelectorAll('.product-card button')
      .forEach((button) => button.addEventListener('click', onAddToCartClick));
  }
});

function onAddToCartClick(event) {
  const productId = +event.target.parentNode.id.split(':')[1];
  const product = getProductById(productId);
  addToCart(product, 1);
}
