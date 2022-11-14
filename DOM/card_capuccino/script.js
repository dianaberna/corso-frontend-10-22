'use strict';

// VERSIONE 1
/*
const divCardElement = document.createElement('div');
divCardElement.className = 'card';
// card img
const imgElement = document.createElement('img');
imgElement.src = '/assets/capuccino.png';
imgElement.alt = 'Foto Capuccino';
// card titolo
const divCardTitleElement = document.createElement('div');
divCardTitleElement.className = 'card__title';
const h1Element = document.createElement('h1');
const h1TextElement = document.createTextNode('Capuccino');
const pElement = document.createElement('p');
const pTextElement = document.createTextNode('21k');

document.body.appendChild(divCardElement);
divCardElement.appendChild(imgElement);
divCardElement.appendChild(divCardTitleElement);
divCardTitleElement.appendChild(h1Element);
h1Element.appendChild(h1TextElement);
divCardTitleElement.appendChild(pElement);
pElement.appendChild(pTextElement);

// card bottoni
const divCardButtonElement = document.createElement('div');
divCardButtonElement.className = 'card__button';
const divCardSpanElement = document.createElement('div');
const divSpanHotElement = document.createElement('span');
const divSpanHotText = document.createTextNode('Hot');
const divSpanColdElement = document.createElement('span');
const divSpanColdText = document.createTextNode('Cold');
const buttonElement = document.createElement('button');
const buttonText = document.createTextNode('Aggiungi');

divCardElement.appendChild(divCardButtonElement);
divCardButtonElement.appendChild(divCardSpanElement);
divCardSpanElement.appendChild(divSpanHotElement);
divCardSpanElement.appendChild(divSpanColdElement);
divSpanHotElement.appendChild(divSpanHotText);
divSpanColdElement.appendChild(divSpanColdText);
divCardButtonElement.appendChild(buttonElement);
buttonElement.appendChild(buttonText);
*/

// //Versione 2
// const creationMyElement111 = function (tag, classe, text, attribute, textAlt) {
//   let element;
//   if (tag === 'img') {
//     element = document.createElement(tag);
//     element.className = classe;
//     element.src = attribute;
//     element.alt = textAlt;
//   } else {
//     element = document.createElement(tag);
//     element.className = classe;
//   }

//   let elementText = document.createTextNode(text);
//   element.appendChild(elementText);
//   return element;
// };
// //

// const divCardElement = creationMyElement111('div', 'card', '', '', '');
// document.body.appendChild(divCardElement);

// // card img
// const imgElement = creationMyElement111(
//   'img',
//   '',
//   '',
//   '/assets/capuccino.png',
//   'Foto Capuccino'
// );
// divCardElement.appendChild(imgElement);
// // card titolo
// const divCardTitleElement = creationMyElement111('div', 'card__title', '');
// divCardElement.appendChild(divCardTitleElement);

// const h1Element = creationMyElement111('h1', '', 'Capuccino');
// divCardTitleElement.appendChild(h1Element);

// const pElement = creationMyElement111('p', '', '21K');
// divCardTitleElement.appendChild(pElement);

// // card bottoni
// const divCardButtonElement = creationMyElement111('div', 'card__button', '');
// divCardElement.appendChild(divCardButtonElement);

// const divCardSpanElement = creationMyElement111('div', '', '');
// divCardButtonElement.appendChild(divCardSpanElement);

// const divSpanHotElement = creationMyElement111('span', '', 'Hot');
// divCardSpanElement.appendChild(divSpanHotElement);

// const divSpanColdElement = creationMyElement111('span', '', 'Cold');
// divCardSpanElement.appendChild(divSpanColdElement);

// const buttonElement = creationMyElement111('button', '', 'Aggiungi');
// divCardButtonElement.appendChild(buttonElement);

// Version 3
const container = {
  card: [
    {
      immagine: {
        src: '/assets/capuccino.png',
        alt: 'Foto Capuccino',
      },
    },
    {
      cardTitle: {
        h1: 'Capuccino',
        p: '21K',
      },
    },
    {
      cardButton: {
        span: {
          span1: 'Hot',
          span2: 'Cold',
        },
        button: 'Aggiungi',
      },
    },
  ],
};
console.log(container.card[2].cardButton.span.span1);
// Function crea elemento
const creationMyElement = function (tag, classe, text, attribute, textAlt) {
  let element;
  if (tag === 'img') {
    element = document.createElement(tag);
    element.className = classe;
    element.src = attribute;
    element.alt = textAlt;
  } else {
    element = document.createElement(tag);
    element.className = classe;
  }

  let elementText = document.createTextNode(text);
  element.appendChild(elementText);
  return element;
};
//

const divCardElement = creationMyElement('div', 'card', '', '', '');
document.body.appendChild(divCardElement);

// card img
const imgElement = creationMyElement(
  'img',
  '',
  '',
  container.card[0].immagine.src,
  container.card[0].immagine.alt
);
divCardElement.appendChild(imgElement);
// card titolo
const divCardTitleElement = creationMyElement('div', 'card__title', '');
divCardElement.appendChild(divCardTitleElement);

const h1Element = creationMyElement('h1', '', container.card[1].cardTitle.h1);
divCardTitleElement.appendChild(h1Element);

const pElement = creationMyElement('p', '', container.card[1].cardTitle.p);
divCardTitleElement.appendChild(pElement);

// card bottoni
const divCardButtonElement = creationMyElement('div', 'card__button', '');
divCardElement.appendChild(divCardButtonElement);

const divCardSpanElement = creationMyElement('div', '', '');
divCardButtonElement.appendChild(divCardSpanElement);

const divSpanHotElement = creationMyElement(
  'span',
  '',
  container.card[2].cardButton.span.span1
);
divCardSpanElement.appendChild(divSpanHotElement);

const divSpanColdElement = creationMyElement(
  'span',
  '',
  container.card[2].cardButton.span.span2
);
divCardSpanElement.appendChild(divSpanColdElement);

const buttonElement = creationMyElement(
  'button',
  '',
  container.card[2].cardButton.button
);
divCardButtonElement.appendChild(buttonElement);
