const nextButton = document.getElementById('slide-arrow-next');
const prevButton = document.getElementById('slide-arrow-prev');
const sliderItems = document.getElementById('slides-container');
const sliderCaption = document.getElementById('sliderCaption');
const slidesContainer = document.getElementById('slides-container');
let imageCounter = 1;
let slideWidth = 640; // hardocded, todo: get wrapper width or image width?

function nextSlide() {
    imageCounter++;
    if (imageCounter > sliderItems.childElementCount) {
        imageCounter = 1;
    }
    slidesContainer.style.left = -slideWidth*(imageCounter-1) + "px";
    sliderCaption.textContent = "Image " + imageCounter;
}

function prevSlide() {
    imageCounter--;
    if (imageCounter < 1) {
        imageCounter = sliderItems.childElementCount;
    }
    slidesContainer.style.left = -slideWidth*(imageCounter-1) + "px";
    sliderCaption.textContent = "Image " + imageCounter;
}

nextButton.addEventListener('click', nextSlide, false);
prevButton.addEventListener('click', prevSlide, false);
