
// Dynamically load products into the shop page
document.addEventListener('DOMContentLoaded', function () {
  const products = getProducts();
  const productGrid = document.querySelector('.product-grid');
  const searchInput = document.getElementById('search-input');
  const categoryFilter = document.getElementById('category-filter');
  const priceFilter = document.getElementById('price-filter');

  // Event Listener for Add to Cart buttons
  function onAddToCartClick(event) {
    const productId = +event.target.parentNode.parentNode.id.split(':')[1];
    console.log(productId);
    const product = products.find((product) => product.id == productId);
    addToCart(product, 1);
  }

  function displayProducts(filteredProducts) {
    productGrid.innerHTML = '';
    filteredProducts.forEach((product) => {
      const productHTML = `
                <div id="product:${product.id}" class="product-card">
                    <a href="../product/?product_id=${product.id}"><img src="${product.image}" alt="${product.name}"></a>
                    <div class="product-details">
                      <a href="../product/?product_id=${product.id}"><h3>${product.name}</h3></a>
                      <p>$${product.price}</p>
                      <button>Add to Cart</button>
                    </div>
                </div>
            `;
      productGrid.innerHTML += productHTML;
    });

    document
      .querySelectorAll('.product-card button')
      .forEach((button) => button.addEventListener('click', onAddToCartClick));
  }

  // Initial display of all products
  displayProducts(getProducts());

  // Filter products based on search, category, and price range
  function filterProducts() {
    const searchText = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
    const selectedPriceRange = priceFilter.value;

    const filteredProducts = products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchText);
      const matchesCategory =
        selectedCategory === 'all' || product.category === selectedCategory;
      let matchesPrice = true;

      switch (selectedPriceRange) {
        case 'low':
          matchesPrice = parseFloat(product.price) < 100;
          break;
        case 'medium':
          matchesPrice =
            parseFloat(product.price) >= 100 &&
            parseFloat(product.price) <= 500;
          break;
        case 'high':
          matchesPrice = parseFloat(product.price) > 500;
          break;
        default:
          break;
      }

      return matchesSearch && matchesCategory && matchesPrice;
    });

    displayProducts(filteredProducts);
  }

  // Event Listeners for search, category, and price filters
  searchInput.addEventListener('input', filterProducts);
  categoryFilter.addEventListener('change', filterProducts);
  priceFilter.addEventListener('change', filterProducts);
});
