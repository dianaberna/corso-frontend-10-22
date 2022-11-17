'use strict';

// creare il mio input dove scrivero le mie task
const inputText = document.createElement('input');
inputText.setAttribute('type', 'text');
document.body.appendChild(inputText);
// creare il bottone
const btn = document.createElement('input');
btn.type = 'button';
btn.value = 'Aggiungi';
document.body.appendChild(btn);
// ora devo creare un ul
const list = document.createElement('ul');
document.body.appendChild(list);
// Ora devo creare un evento dove quello che scrivo all'interno del mio input text e cliccando il bottone me lo deve creare in un li della lista
btn.addEventListener('click', function () {
  //creo una variabile dove salvo quello che scrivo dentro il mio input text
  let text = inputText.value;
  console.log(text);
  // ora credo le mie li e collego il mio text di input
  const toDo = document.createElement('li');
  const textToDo = document.createTextNode(text);
  toDo.appendChild(textToDo);
  list.appendChild(toDo);
  // Ora creo il bottone x collegato a toDo
  const btnToDo = document.createElement('input');
  btnToDo.type = 'button';
  btnToDo.value = 'x';
  toDo.appendChild(btnToDo);
  // una volta cliccato sul aggiungere il mio elemento cancello quello che c'è scritto sul mio input text
  inputText.value = '';
  // ORa una volta completato il mio task devo cancellarlo con la X
  btnToDo.addEventListener('click', function () {
    toDo.remove();
  });
});
