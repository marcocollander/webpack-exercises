import photo from '../images/flower.jpg';

export default (tag) => {
  const img = document.createElement('img');
  img.src = photo;
  img.width = 400;
  document.querySelector(tag).appendChild(img);
};
