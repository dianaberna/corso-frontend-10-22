'use strict';

// ora creo il mio div contenitore
const container = document.createElement('div');
container.id = 'container';
document.body.appendChild(container);
//Creo il mio display
const containerDisplay = document.createElement('div');
containerDisplay.id = 'container__display';
container.appendChild(containerDisplay);
//crep il mio input dentro container display dove vedrò i miei valori
const inputDisplay = document.createElement('input');
inputDisplay.type = 'text';
inputDisplay.id = 'display';
inputDisplay.value = '';
inputDisplay.placeholder = 'Try Calc';
containerDisplay.appendChild(inputDisplay);
//Creo il mio contenitore dove ci saranno tutti i miei tasti
const divContainerButton = document.createElement('div');
divContainerButton.id = 'container__button';
container.appendChild(divContainerButton);

let array = [1, 2, 3, '/', 4, 5, 6, '*', 7, 8, 9, '-', 0, ',', '+'];
let output;
for (let i = 0; i < array.length; i++) {
  const input = document.createElement('input');
  input.type = 'button';
  input.value = array[i];
  array[i] === '/' || array[i] === '+' || array[i] === '-' || array[i] === '*'
    ? (input.id = 'operator')
    : (input.id = array[i]);
  input.addEventListener('click', function (e) {
    output = inputDisplay.value += e.target.value;
    // output += e.target.value;
  });
  divContainerButton.appendChild(input);
}
// Ora che la mia calcolatrice é pronta. Devo farla calcolare :)
const input = document.createElement('input');
input.type = 'button';
input.value = '=';
input.id = 'equal';
divContainerButton.appendChild(input);

input.addEventListener('click', function () {
  inputDisplay.value = eval(output);
});

addEventListener('keydown', function (e) {
  for (let index = 0; index < array.length; index++) {
    if (e.key === String(array[index])) {
      output = inputDisplay.value += e.key;
    }
  }
  e.key === 'Enter' ? (inputDisplay.value = eval(output)) : null;
  // output += e.target.value;
});
