let slideIndex = 0;

function showSlides() {
    const slideshow = document.getElementById('slideshow');
    const slides = document.getElementsByClassName('slide');
    slideIndex++;
    if (slideIndex > slides.length - 3) {
        slideIndex = 0;
    }
    slideshow.style.transform = 'translateX(' + (-slideIndex * 100 / 3) + '%)';
    setTimeout(showSlides, 3000);
}

function moveSlide(n) {
    slideIndex += n;
    const slides = document.getElementsByClassName('slide');
    if (slideIndex > slides.length - 3) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 3;
    }
    const slideshow = document.getElementById('slideshow');
    slideshow.style.transform = 'translateX(' + (-slideIndex * 100 / 3) + '%)';
}

showSlides();