const items = [
    { name: "Laptop", description: "A portable computer.", image: "laptop.jpeg"},
    { name: "Smartphone", description: "A mobile phone with advanced features.", image: "hp.jpeg"},
    { name: "Tablet", description: "A portable computer with touchscreen interface.", image: "tablet.jpeg"},
    { name: "Smartwatch", description: "A wearable device with various features.", image: "smartwatch.jpeg"},
    { name: "Headphones", description: "An audio device worn on the head.", image: "headphone.jpeg"},
    { name: "Camera", description: "A device used to capture photographs.", image: "camera.jpeg"},
    { name: "Mouse", description: "An input device for controlling the cursor.", image: "mouse.jpeg"},
    { name: "Television", description: "A telecommunications medium for transmitting moving images and sound", image: "TV.jpeg"}
];

const searchResults = document.getElementById('searchResults');
const detailContainer = document.getElementById('detailContainer');

// Tampilkan semua produk saat dokumen dimuat
document.addEventListener('DOMContentLoaded', function() {
    displayResults(items);
});

function displayResults(results) {
    searchResults.innerHTML = '';
    results.forEach(result => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = result.image;
        img.alt = result.name;
        img.classList.add('item-image');
        li.appendChild(img);
        li.innerHTML += result.name;
        li.addEventListener('click', function() {
            showDetail(result);
            scrollToBottom();
        });
        searchResults.appendChild(li);
    });
}

function showDetail(item) {
    detailContainer.style.display = 'block';
    detailTitle.textContent = item.name;
    detailDescription.textContent = item.description;
    detailImage.src = item.image;
}

function scrollToBottom() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
}
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function() {
    hamburger.style.visibility = 'visible'; 
});

