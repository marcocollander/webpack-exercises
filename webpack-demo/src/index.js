import _ from 'lodash';

const component = () => {
  const elem = document.createElement('div');
  // Lodash, currently included via a script, is required fo this line to work
  elem.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return elem;
};

document.body.appendChild(component());
