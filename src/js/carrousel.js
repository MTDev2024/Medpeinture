// Initialisation des variables
const carouselItems = document.querySelectorAll('[data-carousel-item]');
const indicators = document.querySelectorAll('[data-carousel-slide-to]');
const prevButton = document.querySelector('[data-carousel-prev]');
const nextButton = document.querySelector('[data-carousel-next]');

let currentIndex = 0;
const totalItems = carouselItems.length;

// Fonction pour afficher un slide
function showSlide(index) {
  // Masquer tous les slides
  carouselItems.forEach((item, i) => {
    item.classList.add('hidden');
    item.classList.remove('block');
    indicators[i].classList.remove('bg-white');
    indicators[i].classList.add('bg-gray-400');
  });

  // Afficher le slide actuel
  carouselItems[index].classList.remove('hidden');
  carouselItems[index].classList.add('block');
  indicators[index].classList.remove('bg-gray-400');
  indicators[index].classList.add('bg-white');
}

// Gestion des clics sur les boutons
function prevSlide() {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  showSlide(currentIndex);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalItems;
  showSlide(currentIndex);
}

// Gestion des clics sur les indicateurs
indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    currentIndex = index;
    showSlide(currentIndex);
  });
});

// Ajout des événements pour les boutons "Précédent" et "Suivant"
prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

// Afficher le premier slide au chargement de la page
showSlide(currentIndex);
