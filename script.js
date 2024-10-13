let currentIndex = 0;
const items = document.querySelectorAll('.carousel-slide');

function moveCarousel(direction) {
    currentIndex += direction;

    if (currentIndex >= items.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = items.length - 1;
    }

    const carousel = document.querySelector('.carousel');
    const itemWidth = items[0].clientWidth;
    carousel.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
}
