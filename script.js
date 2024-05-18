const products = [
    { id: 1, name: 'Smartphone', price: 12000000 },
    { id: 2, name: 'Laptop', price: 10000000 },
    { id: 3, name: 'Tablet', price: 5000000 },
    { id: 4, name: 'Smartwatch', price: 1000000 },
    { id: 5, name: 'Mouse', price: 500000 },
    { id: 6, name: 'Headphone', price: 750000 },
    { id: 7, name: 'Camera', price: 4000000 },
    { id: 8, name: 'Television', price: 4500000 },
];

const cart = [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCart();
        scrollToCart();
    } else {
        console.error('Product not found:', productId);
    }
}

function removeFromCart(productId) {
    const index = cart.findIndex(item => item.id === productId);
    if (index !== -1) {
        cart.splice(index, 1);
        updateCart();
    } else {
        console.error('Product not found in cart:', productId);
    }
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';

    let totalPrice = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - Rp ${item.price}`;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Hapus';
        removeButton.classList.add('remove-button');
        removeButton.onclick = function() {
            removeFromCart(item.id);
        };

        li.appendChild(removeButton);
        cartItems.appendChild(li);
        totalPrice += item.price;
    });

    document.getElementById('totalPrice').textContent = totalPrice;
}

function scrollToCart() {
    const cartElement = document.getElementById('cart');
    if (cartElement) {
        cartElement.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error('Cart element not found');
    }
}

function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
}
