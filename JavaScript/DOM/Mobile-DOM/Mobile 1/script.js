'use strict';

const header = document.createElement('header');
document.body.appendChild(header);
const main = document.createElement('main');
document.body.appendChild(main);

// Function
const elementWithClass = function (tag, classe, padre, text) {
  let element = document.createElement(tag);
  classe ? (element.className = classe) : null;
  if (text) {
    let elementText = document.createTextNode(text);
    element.appendChild(elementText);
  }
  return padre.appendChild(element);
};

// HEADER
const div1 = elementWithClass('div', '', header);
const h1 = elementWithClass('h1', '', div1, 'Contacts');
const button = elementWithClass('button', '', div1, '');
const svgDiv1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM14 11H11V14C11 14.55 10.55 15 10 15C9.45 15 9 14.55 9 14V11H6C5.45 11 5 10.55 5 10C5 9.45 5.45 9 6 9H9V6C9 5.45 9.45 5 10 5C10.55 5 11 5.45 11 6V9H14C14.55 9 15 9.45 15 10C15 10.55 14.55 11 14 11Z" fill="#161616"/>
</svg>`;
button.innerHTML = svgDiv1;
const div2 = elementWithClass('div', '', header);
const svgDiv2 = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.4999 10.9996H11.7099L11.4299 10.7296C12.6299 9.32965 13.2499 7.41965 12.9099 5.38965C12.4399 2.60965 10.1199 0.389649 7.31989 0.049649C3.08989 -0.470351 -0.470107 3.08965 0.0498932 7.31965C0.389893 10.1196 2.60989 12.4396 5.38989 12.9096C7.41989 13.2496 9.32989 12.6296 10.7299 11.4296L10.9999 11.7096V12.4996L15.2499 16.7496C15.6599 17.1596 16.3299 17.1596 16.7399 16.7496C17.1499 16.3396 17.1499 15.6696 16.7399 15.2596L12.4999 10.9996ZM6.49989 10.9996C4.00989 10.9996 1.99989 8.98965 1.99989 6.49965C1.99989 4.00965 4.00989 1.99965 6.49989 1.99965C8.98989 1.99965 10.9999 4.00965 10.9999 6.49965C10.9999 8.98965 8.98989 10.9996 6.49989 10.9996Z" fill="#161616"/>
</svg>
`;
div2.innerHTML = svgDiv2;
const inputContacts = document.createElement('input');
inputContacts.setAttribute('type', 'text');
inputContacts.setAttribute('placeholder', 'Contacts');
div2.appendChild(inputContacts);

// MAIN
// Section 1
const section1 = elementWithClass('section', 'main__last', main, '');
const h3Section1 = elementWithClass('h3', '', section1, 'Last Contactes');
const divContainerSquare = elementWithClass(
  'div',
  'container__square',
  section1,
  ''
);
const divWrapper = elementWithClass('div', 'wrapper', divContainerSquare, '');

for (let i = 0; i < 20; i++) {
  const divSquareWrapper = elementWithClass('div', 'square', divWrapper, '');
  elementWithClass('div', 'eclipse', divSquareWrapper, '');
}

// Section 2
const section2 = elementWithClass('section', 'main__messages', main, '');
for (let i = 0; i < 6; i++) {
  const divMainContainer = elementWithClass(
    'div',
    'main__messages__container',
    section2,
    ''
  );
  elementWithClass('div', 'square', divMainContainer, '');
  const divTextMain1 = elementWithClass('div', 'text', divMainContainer, '');
  const div4Main1 = elementWithClass('div', '', divTextMain1, '');
  elementWithClass('h2', '', div4Main1, 'Oleksandr Oleksyuk');
  // Creo l'orario attuale
  const ora = `${new Date().getHours()}:${new Date().getMinutes()}`;
  new Date().getMinutes() > 9
    ? new Date().getMinutes()
    : '0' + new Date().getMinutes();
  elementWithClass('p', '', div4Main1, ora);
  elementWithClass(
    'p',
    '',
    divTextMain1,
    'Lorem ipsum dolor sit amet consectetur adipisicing elit Exercitationem error'
  );
}
