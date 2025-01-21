const carousel = document.getElementById('carousel');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const pagination = document.getElementById('pagination').children;

let currentIndex = 2; // L'image au centre est l'index 2
const slides = Array.from(carousel.children);

// Fonction pour mettre à jour le carrousel
const updateCarousel = () => {
    slides.forEach((slide, index) => {
        slide.classList.remove('scale-100', 'scale-90', 'scale-75');
        if (index === currentIndex) {
            slide.classList.add('scale-100'); // Image active
        } else if (index === currentIndex - 1 || index === currentIndex + 1) {
            slide.classList.add('scale-90'); // Images adjacentes
        } else {
            slide.classList.add('scale-75'); // Images éloignées
        }
    });

    const offset = -currentIndex * 25; // Décalage pour centrer l'image active
    carousel.style.transform = `translateX(${offset}%)`;

    // Mettre à jour les points de pagination
    Array.from(pagination).forEach((dot, index) => {
        dot.classList.toggle('bg-blue-500', index === currentIndex);
        dot.classList.toggle('bg-gray-400', index !== currentIndex);
    });
};

// Boutons précédent et suivant
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
});

// Pagination
Array.from(pagination).forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
    });
});

// Initialisation
updateCarousel();
