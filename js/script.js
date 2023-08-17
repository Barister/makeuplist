// main__image animation

const button = document.querySelector('.main-section__button');
const frontImage = document.querySelector('.image-main__front');
const backImage = document.querySelector('.image-main__background');

let rotationActive = false;

button.addEventListener('click', () => {
   rotationActive = !rotationActive;

   if (rotationActive) {
      frontImage.style.animation = 'spin-clockwise 8s ease';
      backImage.style.animation = 'spin-counter-clockwise 8s ease';
   } else {
      frontImage.style.animation = 'spin-counter-clockwise 2s forwards ease';
      backImage.style.animation = 'spin-clockwise 2s forwards ease';
   }
});

// scroll-background

const header = document.querySelector('.header');
const logo = document.querySelector('.header__logo');

function toggleHeaderClass() {
   if (window.scrollY > 0) {
      header.classList.add('scroll');
      logo.classList.add('scroll');
   } else {
      header.classList.remove('scroll');
      logo.classList.remove('scroll');
   }
}

window.addEventListener('scroll', toggleHeaderClass);


