// 'use strict';

const input = document.createElement('input');
document.body.appendChild(input);
const btn = document.createElement('button');
const btnText = document.createTextNode('Aggiungimi');
btn.appendChild(btnText);
document.body.appendChild(btn);
const div = document.createElement('div');
document.body.appendChild(div);
const style = (document.querySelector('div').style =
  'margin: 2rem; width: 400px; height: 400px; background-color: yellow');
input.setAttribute('value', style);
btn.addEventListener('click', function () {
  console.log('Hello world');
});
