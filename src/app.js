// const greeter = require('./Greeter.js');
// document.querySelector('#root').appendChild(greeter());

import _ from 'lodash';
import printMe from './print.js';
import style from './scss/style.scss';
import Icon from './assets/images/site-logo.png';

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add(style.hello);

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

  const btn = document.createElement('button');
  btn.innerHTML = 'Click then check console!';
  btn.onclick = printMe;
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
