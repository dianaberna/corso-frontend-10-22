'use strict';

// Creo la mia variabile dove andro a fare i miei calc

let str = '';
const display = document.getElementById('display');
display.setAttribute('value', str);

const printValue = function (input) {
  str = input.value;
  display.value = str;
  console.log(str);
};
// Qui se clicco il pulsante 1 mi porta il mio valore sulla str
const input1 = document.getElementById('1');
input1.addEventListener('click', () => printValue(input1));
const input2 = document.getElementById('2');
input2.addEventListener('click', () => printValue(input2));
const input3 = document.getElementById('3');
input3.addEventListener('click', () => printValue(input3));
const input4 = document.getElementById('4');
input4.addEventListener('click', () => printValue(input4));
const input5 = document.getElementById('5');
input5.addEventListener('click', () => printValue(input5));
const input6 = document.getElementById('6');
input6.addEventListener('click', () => printValue(input6));
const input7 = document.getElementById('7');
input7.addEventListener('click', () => printValue(input7));
const input8 = document.getElementById('8');
input8.addEventListener('click', () => printValue(input8));
const input9 = document.getElementById('9');
input9.addEventListener('click', () => printValue(input9));
const input0 = document.getElementById('0');
input0.addEventListener('click', () => printValue(input0));
//Operatori
const inputDiviso = document.getElementById('/');
inputDiviso.addEventListener('click', () => printValue(inputDiviso));
const inputMoltiplicazione = document.getElementById('*');
inputMoltiplicazione.addEventListener('click', () =>
  printValue(inputMoltiplicazione)
);
const inputSomma = document.getElementById('+');
inputSomma.addEventListener('click', () => printValue(inputSomma));
const inputSottrazione = document.getElementById('0');
inputSottrazione.addEventListener('click', () => printValue(inputSottrazione));
