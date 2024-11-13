let nextButton = document.getElementById('slide-arrow-next');
let prevButton = document.getElementById('slide-arrow-prev');

function nextSlide() {
    console.log('Next Clicked' + Date.now())
}

function prevSlide() {
    console.log('Prev Clicked' + Date.now())
}

nextButton.addEventListener('click', nextSlide, false);
prevButton.addEventListener('click', prevSlide, false);
