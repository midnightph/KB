let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');

function moveSlide(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    updateCarousel();
}

function updateCarousel() {
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

setInterval(() => {
    moveSlide(1);
}, 5000); // Muda a cada 3 segundos
