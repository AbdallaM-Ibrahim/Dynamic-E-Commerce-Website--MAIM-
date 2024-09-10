const products = [
  {
    id: 1,
    name: 'Laptop',
    price: 800,
    category: 'electronics',
    image:
      'https://raw.githubusercontent.com/AbdallaM-Ibrahim/Dynamic-E-Commerce-Website--MAIM-/main/assets/images/laptop.webp',
    description: 'Latest laptop model with 16GB RAM',
  },
  {
    id: 2,
    name: 'T-Shirt',
    price: 20,
    category: 'clothing',
    image:
      'https://raw.githubusercontent.com/AbdallaM-Ibrahim/Dynamic-E-Commerce-Website--MAIM-/main/assets/images/t-shirt.jpg',
    description: 'Plain casual t-shirt',
  },
  {
    id: 3,
    name: 'Smartphone',
    price: 500,
    category: 'electronics',
    image:
      'https://raw.githubusercontent.com/AbdallaM-Ibrahim/Dynamic-E-Commerce-Website--MAIM-/main/assets/images/smartphone.jpg',
    description: 'Latest smartphone with 8GB RAM',
  },
  {
    id: 4,
    name: 'Jeans',
    price: 50,
    category: 'clothing',
    image:
      'https://raw.githubusercontent.com/AbdallaM-Ibrahim/Dynamic-E-Commerce-Website--MAIM-/main/assets/images/jeans.jpeg',
    description: 'Blue denim jeans',
  },
  {
    id: 5,
    name: 'Headphones',
    price: 100,
    category: 'electronics',
    image:
      'https://raw.githubusercontent.com/AbdallaM-Ibrahim/Dynamic-E-Commerce-Website--MAIM-/main/assets/images/headphones.png',
    description: 'Wireless over-ear headphones',
  },
];

localStorage.setItem('products', JSON.stringify(products));

function getProducts() {
  return JSON.parse(localStorage.getItem('products'));
}

function getProductById(productId) {
  return getProducts().find((product) => product.id == productId);
}

// Example of common logic - smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

document.getElementsByTagName('header')[0].innerHTML = `
    <nav>
        <ul class="navbar">
            <li><a href="/">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/cart" id='nav-cart'>Cart${
              getCartCount() ? '<' + getCartCount() + '>' : ''
            }</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
    </nav>
`;

document.getElementsByTagName('footer')[0].innerHTML = `
    <span>Contact us: info@example.com</span>
    <span>Follow us: <a href="#">Facebook</a> | <a href="#">Twitter</a></span>
    <p>&copy; 2021 My Shop</p>
`;

// smooth scrolling for back-to-top
document.getElementById('back-to-top').addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

// Example: Common navbar logic, if needed
console.log('Global JS loaded.');
