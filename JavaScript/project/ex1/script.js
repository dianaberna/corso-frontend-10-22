'use strict';

const div = document.createElement('div');
div.id = 'color';
document.body.appendChild(div);

const red = Math.trunc(Math.random() * 255);
const blue = Math.trunc(Math.random() * 255);
const green = Math.trunc(Math.random() * 255);
let randomColor = `rgb (${red}, ${blue}, ${green})`;
const divText = document.createTextNode(randomColor);
div.appendChild(divText);
window.addEventListener('load', function () {
  document.body.style.background = `rgb(${red}, ${blue}, ${green})`;
});
