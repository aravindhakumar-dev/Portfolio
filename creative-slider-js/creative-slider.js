const sliderContainer = document.querySelector('.slider-container');
const productCards = document.querySelectorAll('.product-card');

let currentIndex = 0;
const CARD_COUNT = productCards.length;

function updateSlider() {
    productCards.forEach((card, index) => {
        if (index === currentIndex) {
            card.style.opacity = 1;
        } else {
            card.style.opacity = 0;
        }
    });
}

function goToNextSlide() {
    currentIndex++;
    if (currentIndex >= CARD_COUNT) {
        currentIndex = 0;
    }
    updateSlider();
}

function goToPreviousSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = CARD_COUNT - 1;
    }
    updateSlider();
}

updateSlider();

sliderContainer.addEventListener('click', goToNextSlide);

const previousButton = document.querySelector('.previous-button');
const nextButton = document.querySelector('.next-button');

previousButton.addEventListener('click', goToPreviousSlide);
nextButton.addEventListener('click', goToNextSlide);
