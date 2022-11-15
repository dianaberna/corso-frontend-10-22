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
const h2Element = document.createElement('h2');
const h2TextElement = document.createTextNode('Capuccino');
const pElement = document.createElement('p');
const pTextElement = document.createTextNode('21k');

document.body.appendChild(divCardElement);
divCardElement.appendChild(imgElement);
divCardElement.appendChild(divCardTitleElement);
divCardTitleElement.appendChild(h2Element);
h2Element.appendChild(h2TextElement);
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

// const h2Element = creationMyElement111('h2', '', 'Capuccino');
// divCardTitleElement.appendChild(h2Element);

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

/*
// Version 3
const container = [
  {
    card: [
      {
        immagine: {
          src: '/assets/capuccino.png',
          alt: 'Foto Capuccino',
        },
      },
      {
        cardTitle: {
          h2: 'Capuccino',
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
  },
  {
    card: [
      {
        immagine: {
          src: '/assets/hot milk.png',
          alt: 'Foto Hot Milk',
        },
      },
      {
        cardTitle: {
          h2: 'Hot Milk',
          p: '12K',
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
  },
  {
    card: [
      {
        immagine: {
          src: '/assets/espresso.png',
          alt: 'Foto Espresso',
        },
      },
      {
        cardTitle: {
          h2: 'Espresso',
          p: '20K',
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
  },
  {
    card: [
      {
        immagine: {
          src: '/assets/capuccino.png',
          alt: 'Foto Capuccino',
        },
      },
      {
        cardTitle: {
          h2: 'Capuccino',
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
  },
  {
    card: [
      {
        immagine: {
          src: '/assets/capuccino.png',
          alt: 'Foto Capuccino',
        },
      },
      {
        cardTitle: {
          h2: 'Capuccino',
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
  },
  {
    card: [
      {
        immagine: {
          src: '/assets/capuccino.png',
          alt: 'Foto Capuccino',
        },
      },
      {
        cardTitle: {
          h2: 'Capuccino',
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
  },
  {
    card: [
      {
        immagine: {
          src: '/assets/capuccino.png',
          alt: 'Foto Capuccino',
        },
      },
      {
        cardTitle: {
          h2: 'Capuccino',
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
  },
  {
    card: [
      {
        immagine: {
          src: '/assets/capuccino.png',
          alt: 'Foto Capuccino',
        },
      },
      {
        cardTitle: {
          h2: 'Capuccino',
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
  },
  {
    card: [
      {
        immagine: {
          src: '/assets/capuccino.png',
          alt: 'Foto Capuccino',
        },
      },
      {
        cardTitle: {
          h2: 'Capuccino',
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
  },
  {
    card: [
      {
        immagine: {
          src: '/assets/capuccino.png',
          alt: 'Foto Capuccino',
        },
      },
      {
        cardTitle: {
          h2: 'Capuccino',
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
  },
  {
    card: [
      {
        immagine: {
          src: '/assets/capuccino.png',
          alt: 'Foto Capuccino',
        },
      },
      {
        cardTitle: {
          h2: 'Capuccino',
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
  },
  {
    card: [
      {
        immagine: {
          src: '/assets/capuccino.png',
          alt: 'Foto Capuccino',
        },
      },
      {
        cardTitle: {
          h2: 'Capuccino',
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
  },
];
console.log(container[0].card[2].cardButton.span.span1);
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
const titleContainer = creationMyElement('h1', '', 'Menu Drink', '', '');
document.body.appendChild(titleContainer);
const containerCard = creationMyElement('div', 'container', '', '', '');
document.body.appendChild(containerCard);
//
for (let i = 0; i < container.length; i++) {
  const divCardElement = creationMyElement('div', 'card', '', '', '');
  containerCard.appendChild(divCardElement);

  // card img
  const imgElement = creationMyElement(
    'img',
    '',
    '',
    container[i].card[0].immagine.src,
    container[i].card[0].immagine.alt
  );
  divCardElement.appendChild(imgElement);
  // card titolo
  const divCardTitleElement = creationMyElement('div', 'card__title', '');
  divCardElement.appendChild(divCardTitleElement);

  const h2Element = creationMyElement(
    'h2',
    '',
    container[i].card[1].cardTitle.h2
  );
  divCardTitleElement.appendChild(h2Element);

  const pElement = creationMyElement('p', '', container[i].card[1].cardTitle.p);
  divCardTitleElement.appendChild(pElement);

  // card bottoni
  const divCardButtonElement = creationMyElement('div', 'card__button', '');
  divCardElement.appendChild(divCardButtonElement);

  const divCardSpanElement = creationMyElement('div', '', '');
  divCardButtonElement.appendChild(divCardSpanElement);

  const divSpanHotElement = creationMyElement(
    'span',
    '',
    container[i].card[2].cardButton.span.span1
  );
  divCardSpanElement.appendChild(divSpanHotElement);

  const divSpanColdElement = creationMyElement(
    'span',
    '',
    container[i].card[2].cardButton.span.span2
  );
  divCardSpanElement.appendChild(divSpanColdElement);

  const buttonElement = creationMyElement(
    'button',
    '',
    container[i].card[2].cardButton.button
  );
  divCardButtonElement.appendChild(buttonElement);
}
*/

//Versione 2
// Version 3
const container = [
  {
    immagine: {
      src: '/assets/capuccino.png',
      alt: 'Foto Capuccino',
    },
    cardTitle: {
      h2: 'Capuccino',
      p: '21K',
    },
    cardButton: {
      span: ['Hot', 'Cold'],
      button: 'Aggiungi',
    },
  },
  {
    immagine: {
      src: '/assets/hot milk.png',
      alt: 'Foto Hot Milk',
    },
    cardTitle: {
      h2: 'Hot Milk',
      p: '12K',
    },
    cardButton: {
      span: ['Hot', 'Cold'],
      button: 'Aggiungi',
    },
  },
  {
    immagine: {
      src: '/assets/hot milk.png',
      alt: 'Foto Hot Milk',
    },
    cardTitle: {
      h2: 'Hot',
      p: '30K',
    },
    cardButton: {
      span: ['Hot', 'Cold', 'Tiepido'],
      button: 'Aggiungi',
    },
  },
];
const creationMyElement111 = function (tag, classe, text, attribute, textAlt) {
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

for (let j = 0; j < container.length; j++) {
  const divCardElement = creationMyElement111('div', 'card', '', '', '');
  document.body.appendChild(divCardElement);

  // card img
  const imgElement = creationMyElement111(
    'img',
    '',
    '',
    container[j].immagine.src,
    container[j].immagine.alt
  );
  divCardElement.appendChild(imgElement);
  // card titolo
  const divCardTitleElement = creationMyElement111('div', 'card__title', '');
  divCardElement.appendChild(divCardTitleElement);

  const h2Element = creationMyElement111('h2', '', container[j].cardTitle.h2);
  divCardTitleElement.appendChild(h2Element);

  const pElement = creationMyElement111('p', '', container[j].cardTitle.p);
  divCardTitleElement.appendChild(pElement);

  // card bottoni
  const divCardButtonElement = creationMyElement111('div', 'card__button', '');
  divCardElement.appendChild(divCardButtonElement);

  const divCardSpanElement = creationMyElement111('div', '', '');
  divCardButtonElement.appendChild(divCardSpanElement);

  for (let i = 0; i < container[j].cardButton.span.length; i++) {
    const divSpanHotElement = creationMyElement111(
      'span',
      '',
      container[j].cardButton.span[i]
    );
    divCardSpanElement.appendChild(divSpanHotElement);
  }

  // const divSpanColdElement = creationMyElement111(
  //   'span',
  //   '',
  //   container[0].cardButton.span[1]
  // );
  // divCardSpanElement.appendChild(divSpanColdElement);

  const buttonElement = creationMyElement111(
    'button',
    '',
    container[0].cardButton.button
  );
  divCardButtonElement.appendChild(buttonElement);
}
// }
// const divCardElement = creationMyElement111('div', 'card', '', '', '');
// document.body.appendChild(divCardElement);

// // card img
// const imgElement = creationMyElement111(
//   'img',
//   '',
//   '',
//   container[0].immagine.src,
//   container[0].immagine.alt
// );
// divCardElement.appendChild(imgElement);
// // card titolo
// const divCardTitleElement = creationMyElement111('div', 'card__title', '');
// divCardElement.appendChild(divCardTitleElement);

// const h2Element = creationMyElement111('h2', '', container[0].cardTitle.h2);
// divCardTitleElement.appendChild(h2Element);

// const pElement = creationMyElement111('p', '', container[0].cardTitle.p);
// divCardTitleElement.appendChild(pElement);

// // card bottoni
// const divCardButtonElement = creationMyElement111('div', 'card__button', '');
// divCardElement.appendChild(divCardButtonElement);

// const divCardSpanElement = creationMyElement111('div', '', '');
// divCardButtonElement.appendChild(divCardSpanElement);

// for (let i = 0; i < container[0].cardButton.span.length; i++) {
//   const divSpanHotElement = creationMyElement111(
//     'span',
//     '',
//     container[0].cardButton.span[i]
//   );
//   divCardSpanElement.appendChild(divSpanHotElement);
// }

// // const divSpanColdElement = creationMyElement111(
// //   'span',
// //   '',
// //   container[0].cardButton.span[1]
// // );
// // divCardSpanElement.appendChild(divSpanColdElement);

// const buttonElement = creationMyElement111(
//   'button',
//   '',
//   container[0].cardButton.button
// );
// divCardButtonElement.appendChild(buttonElement);
