'use strict';

// ora creo il mio div ocntenitore
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
//Creo il mio ocntenitore dove ci saranno tutti i miei tasti
const divContainerButton = document.createElement('div');
divContainerButton.id = 'container__button';
container.appendChild(divContainerButton);

let array = [1, 2, 3, '/', 4, 5, 6, '*', 7, 8, 9, '-', 0, ',', '+'];
let output;
for (let i = 0; i < array.length; i++) {
  const input = document.createElement('input');
  input.type = 'button';
  input.value = array[i];
  input.id = array[i];
  input.addEventListener('click', function (e) {
    output = inputDisplay.value += e.target.value;
    // output += e.target.value;
    console.log(output);
  });
  divContainerButton.appendChild(input);
}
// Ora che la mia calcolatrice é pronta. Devo farla calcolare :)
console.log(inputDisplay.value);

const input = document.createElement('input');
input.type = 'button';
input.value = '=';
input.id = '=';
divContainerButton.appendChild(input);

input.addEventListener('click', function () {
  inputDisplay.value = eval(output);
});
