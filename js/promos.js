const carouselItems = document.querySelector(".carousel-item");
let currentIndex = 0;
const intervalTime = 5000; // Cambia la imagen cada 5 segundos

function nextImage() {
    currentIndex++;

    if (currentIndex === carouselItems.children.length) {
        currentIndex = 0;
    }

    const translateXValue = `translateX(-${currentIndex * 100}%)`;
    carouselItems.style.transform = translateXValue;
}

setInterval(nextImage, intervalTime);