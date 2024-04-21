// script.js

const carouselSlide = document.querySelector('.carousel-slide');
const productItems = document.querySelectorAll('.product');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let counter = 0;
let itemWidth = productItems[0].clientWidth; // Dynamic calculation of item width
const totalItems = productItems.length;

function updateItemWidth() {
    itemWidth = productItems[0].clientWidth; // Recalculate item width on window resize
}

window.addEventListener('resize', updateItemWidth);

function nextSlide() {
    if (counter >= totalItems - Math.ceil(carouselSlide.offsetWidth / itemWidth)) return; // Adjust based on number of products shown
    counter++;
    carouselSlide.style.transition = 'transform 0.5s ease-in-out';
    carouselSlide.style.transform = `translateX(${-itemWidth * counter}px)`;
}

function prevSlide() {
    if (counter <= 0) return;
    counter--;
    carouselSlide.style.transition = 'transform 0.5s ease-in-out';
    carouselSlide.style.transform = `translateX(${-itemWidth * counter}px)`;
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Automatic rotation
function autoSlide() {
    setInterval(() => {
        nextSlide();
    }, 3000); // Change interval time as needed
}

autoSlide(); // Start automatic rotation
