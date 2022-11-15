console.log("card.js")

// Testo
const h1Element = document.createAttribute.Element('h1');
const h1TextElement = document.createTextNode('capuccino');
const pElement = document.createElement('p');
const pTextElement = document.createTextNode('21k');
const h2Element = document.createAttribute.Element('h2');
const h2TextElement = document.createTextNode('Vanillecaffe');
const p2Element = document.createElement('p');
const p2TextElement = document.createTextNode('10k');
const h3Element = document.createAttribute.Element('h3');
const h3TextElement = document.createTextNode('caffe');
const p3Element = document.createElement('p');
const p3TextElement = document.createTextNode('1k');

//Imagine

imgElement.appandChild(imgElement); 

//card bottoni 
const divCardButtonElement = document.createElement('div');
divCardButtonElement.classElement = 'card_button';
const divCardSpanElement = document.createElement('div');
const divSpanHotElement = document.createElement('span');
const divSpanHotText = document.createTextNode('Hot');
const divSpanColdElement = document.createElement('span');
const divSpanColdText = document.createTextNode('cold');
const buttonElement = document.createElement('button');
const buttonText = document.createTextNode('Aggiungi');

//AppenChild 

document.body.appendChild(divCardElement);
divCardElement.appendChild(imgElement);
divCardElement.appendChild(divCardTitleElement);
divCardTitleElement.appendChild(h1Element);
h1Element.appendChild(h1TextElement);
divCardTitleElement.appendChild(pElement);
pElement.appandChild(pTextElement);
divCardElement.appandChild(divCardButtonElement);
divCardButtonElement.appandChild(divCardSpanElement);
divCardSpanElement.appandChild(divSpanHotElement);
divCardSpanElement.appendChild(divSpanColdElement);
divSpanHotElement.appandChild(divSpanHotText);
divSpanColdElement.appendChild(divSpanColdText);
divCardButtonElement.appandChild(buttonElement);
buttonElement.appandChild(buttonText);






