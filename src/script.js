// Script for adding interactivity to the landing page



 // Hamburger Menu toggle functionality
 const menuButton = document.getElementById('menu-button');
 const menu = document.getElementById('menu');

 menuButton.addEventListener('click', () => {
     menu.classList.toggle('hidden');
 });





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
