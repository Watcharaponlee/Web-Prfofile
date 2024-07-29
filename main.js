function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', function() {
    const backToTopButton = document.getElementById('backToTop');
    if (window.scrollY > window.innerHeight) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    // เช็คข้อผิดพลาดของ index
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

setInterval(nextSlide, 5000);

function showCard(cardId) {
    document.getElementById('overlay').classList.remove('hidden');
    document.getElementById(cardId).classList.remove('hidden');
}
function hideCard() {
    document.getElementById('overlay').classList.add('hidden');
    document.getElementById('card1').classList.add('hidden');
    document.getElementById('card2').classList.add('hidden');
}
