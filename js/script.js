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

// scroll-background


const header = document.querySelector('.header');

const svgObject = document.querySelector('.header__logo-image');
const svgDoc = svgObject.contentDocument;
const paths = svgDoc.querySelectorAll('path');



// Определите функцию, которая будет добавлять или удалять класс в зависимости от скролла
function toggleHeaderClass() {
   if (window.scrollY > 0) {
      header.classList.add('scroll');
      for (var i = 0; i < paths.length; i++) {
         paths[i].setAttribute('fill', '#fff'); // Замените на нужный цвет
      }
   } else {
      header.classList.remove('scroll');
      for (var i = 0; i < paths.length; i++) {
         paths[i].setAttribute('fill', '#000'); // Замените на нужный цвет
      }
   }
}

// Добавьте обработчик события скролла, который вызывает функцию toggleHeaderClass
window.addEventListener('scroll', toggleHeaderClass);



// Получение объекта SVG
// var svgObject = document.querySelector('.header__logo-image');

// // Слушатель события загрузки объекта SVG
// svgObject.addEventListener('load', function () {
//    var svgDoc = svgObject.contentDocument;
//    var svgElement = svgDoc.querySelector('svg');
//    svgElement.style.fill = '#ff0000'; // Измените цвет заливки на нужный
// });

// var paths = document.querySelectorAll('.header__logo-image svg path');

// for (var i = 0; i < paths.length; i++) {
//    paths[i].style.fill = '#fff'; // Замените на нужный цвет
// }

// var svgObject = document.querySelector('.header__logo-image');
// var svgDoc = svgObject.contentDocument;
// var paths = svgDoc.querySelectorAll('path');

// for (var i = 0; i < paths.length; i++) {
//    paths[i].setAttribute('fill', '#ff0000'); // Замените на нужный цвет
// }
