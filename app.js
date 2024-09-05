let swiper = new Swiper(".wrapper", {
    loop: true,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: false,
    },
  });


// Get the image element
const featureImage = document.getElementById('featureImage');

// Define the images for each card
const images = {
  card1: 'im-main.png',
  card2: 'feature.png',
  card3: 'quality.png',
  card4: 'online.png'
};

// Function to change the image
function changeImage(cardId) {
  featureImage.src = images[cardId];
}

// Get all the feature cards
const cards = document.querySelectorAll('.feature_card');

// Add an event listener to each card
cards.forEach((card) => {
  card.addEventListener('click', () => {
    // Remove the active class from all cards
    cards.forEach((c) => c.classList.remove('active'));
    // Add the active class to the clicked card
    card.classList.add('active');
    // Change the image
    changeImage(card.id);
  });
});

const observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry) => {
      console.log(entry);
      if(entry.isIntersecting) {
        entry.target.classList.add('show');
      } else{
        entry.target.classList.remove('show')
      }
  });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

