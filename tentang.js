
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('active');
});

// Menampilkan hamburger pada layar kecil
document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth <= 768) {
        hamburger.style.visibility = 'visible';
    }
});

// Menangani perubahan ukuran window untuk menampilkan atau menyembunyikan hamburger
window.addEventListener('resize', function() {
    if (window.innerWidth <= 768) {
        hamburger.style.visibility = 'visible';
    } else {
        hamburger.style.visibility = 'hidden';
        navMenu.classList.remove('active');
    }
});
