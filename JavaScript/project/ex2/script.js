'use strict';

// creazione casella di input
const inputText = document.createElement('input');
inputText.setAttribute('type', 'text');
inputText.id = 'text-value';
document.body.appendChild(inputText);

// creazione bottone per applicazione stile
const inputBtn = document.createElement('input');
inputBtn.setAttribute('type', 'button');
inputBtn.setAttribute('value', 'Aggiornami');
document.body.appendChild(inputBtn);

// creazione quadrato colorato
const div = document.createElement('div');
document.body.appendChild(div);

// costante per stile iniziale
const initialStyle =
  'margin: 2rem; width: 400px; height: 400px; background-color: yellow';

// applico lo stile iniziale al div
div.style = initialStyle;

// inserisco lo stile iniziale nella casella di input per orientamento
inputText.value = initialStyle;

// evento al click sul bottone
inputBtn.addEventListener('click', function () {
  // recupero il nuovo stile inserito nella casella di testo
  let style = inputText.value;
  // applica il nuovo stile al div
  div.style = style;
});
