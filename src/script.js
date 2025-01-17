// Script for adding interactivity to the landing page

// Carousel Functionality
const carousel = document.querySelector('.carousel');
let currentIndex = 0;
const slides = carousel.querySelectorAll('.p-4');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function previousSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

// Initialize the first slide
showSlide(currentIndex);

// Add event listeners for navigation (if arrows or buttons are added)
// document.querySelector('.carousel-next').addEventListener('click', nextSlide);
// document.querySelector('.carousel-prev').addEventListener('click', previousSlide);

// Scroll Animations
const animatedElements = document.querySelectorAll('[data-animate-on-scroll]');

function handleScroll() {
    animatedElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            element.classList.add('animate');
        }
    });
}

window.addEventListener('scroll', handleScroll);
handleScroll(); // Run on page load

// Form Submission Handling
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Votre demande a été envoyée avec succès !');
        contactForm.reset();
    });
}
