import _ from "lodash";
import "./style.css";
import romeOne from "./img/rome-one.jpg";
import romeTwo from "./img/rome-two.jpg";
import romeThree from "./img/rome-three.jpg";
import romeFour from "./img/rome-four.jpg";
import romeFive from "./img/rome-five.jpg";

const component = () => {
  const elem = document.createElement("div");
  // Lodash, currently included via a script, is required fo this line to work
  elem.innerHTML = _.join(["Hello", "webpack"], " ");
  return elem;
};

document.body.appendChild(component());

const img = document.querySelector("img");
const pictures = [romeOne, romeTwo, romeThree, romeFour, romeFive];

img.setAttribute("src", romeOne);

const btnLeft = document.querySelector(".images__btn--left");
const btnRight = document.querySelector(".images__btn--right");
let counter = 0;

btnLeft.addEventListener("click", () => {
  counter++;
  console.log(counter);

  if (counter < pictures.length) {
    img.setAttribute("src", pictures[counter]);
  } else {
    counter = 0;
    img.setAttribute("src", pictures[0]);
  }
});

btnRight.addEventListener("click", () => {
  counter++;
  console.log(counter);
  if (counter < pictures.length) {
    img.setAttribute("src", pictures[counter]);
  } else {
    counter = 0;
    img.setAttribute("src", pictures[0]);
  }
});
