const sliderContent = document.querySelector('.slider-content');
const images = document.querySelectorAll('.slider-content img');
const totalImages = images.length;
let currentIndex = 0;

function moveToNextSlide() {
    currentIndex = (currentIndex + 1) % totalImages;
    const offset = -currentIndex * 100;
    sliderContent.style.transform = `translateX(${offset}vw)`;
}

const firstImageClone = images[0].cloneNode(true);
sliderContent.appendChild(firstImageClone);

sliderContent.style.width = `${(totalImages + 1) * 100}vw`;

setInterval(moveToNextSlide, 4000);
