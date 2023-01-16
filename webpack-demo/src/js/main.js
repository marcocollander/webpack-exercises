import '../sass/main.scss';
import logo from '../img/logo.jpg';
import romeOne from '../img/rome-one.jpg';
import romeTwo from '../img/rome-two.jpg';
import romeThree from '../img/rome-three.jpg';
import romeFour from '../img/rome-four.jpg';
import romeFive from '../img/rome-five.jpg';

const imgCenter = document.querySelector('.image__center');

imgCenter.setAttribute('src', romeOne);

const logoImage = document.querySelector('.header__logo-image');
logoImage.setAttribute('src', logo);

const images = document.querySelectorAll('.images__item');
const pictures = [romeOne, romeTwo, romeThree, romeFour, romeFive];

for (let i = 0; i < images.length; i++) {
  images[i].setAttribute('src', pictures[i]);
}

const btnLeft = document.querySelector('.images__btn--left');
const btnRight = document.querySelector('.images__btn--right');
let counter = 0;

btnLeft.addEventListener('click', () => {
  counter++;
  console.log(counter);

  if (counter < pictures.length) {
    imgCenter.setAttribute('src', pictures[counter]);
  } else {
    counter = 0;
    imgCenter.setAttribute('src', pictures[0]);
  }
});

btnRight.addEventListener('click', () => {
  counter++;
  console.log(counter);
  if (counter < pictures.length) {
    imgCenter.setAttribute('src', pictures[counter]);
  } else {
    counter = 0;
    imgCenter.setAttribute('src', pictures[0]);
  }
});
