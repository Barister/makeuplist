// управление main__image

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

