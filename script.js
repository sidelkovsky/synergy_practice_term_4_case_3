const nextButton = document.getElementById('slide-arrow-next');
const prevButton = document.getElementById('slide-arrow-prev');
const sliderItems = document.getElementById('slides-container');
const sliderCaption = document.getElementById('sliderCaption');
let imageCounter = 1;

function nextSlide() {
    console.log('Next Clicked' + Date.now());
    imageCounter++;
    if (imageCounter > sliderItems.childElementCount) {
        imageCounter = 1;
    }
    sliderCaption.textContent = "Image " + imageCounter;
    console.log(imageCounter);
}

function prevSlide() {
    console.log('Prev Clicked' + Date.now())
    imageCounter--;
    if (imageCounter < 1) {
        imageCounter = sliderItems.childElementCount;
    }
    sliderCaption.textContent = "Image " + imageCounter;
    console.log(imageCounter);
}

nextButton.addEventListener('click', nextSlide, false);
prevButton.addEventListener('click', prevSlide, false);
