'use strict';

// Creo il mio contenitore
const div = document.createElement('div');
div.id = 'color';
document.body.appendChild(div);

// Creo le mie variabili random da 0 a 255
const red = Math.trunc(Math.random() * 255);
const blue = Math.trunc(Math.random() * 255);
const green = Math.trunc(Math.random() * 255);
// Creo la mia str rgb
let randomColor = `rgb(${red}, ${blue}, ${green})`;
// creo il testo da collegare al mio contenitore di testo
const divText = document.createTextNode(randomColor);
div.appendChild(divText);
//Creo la mia function che ogni volta che riaggiorno la paggina mi manipola il background mettendo la mia str
window.addEventListener('load', function () {
  document.body.style.background = randomColor;
});
