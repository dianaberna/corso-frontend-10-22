'use strict';

const header = document.createElement('header');
document.body.appendChild(header);
const main = document.createElement('main');
document.body.appendChild(main);

// Function
const elementCostructor = function (tag, classe, padre, text) {
  let element = document.createElement(tag);
  classe ? (element.className = classe) : null;
  if (text) {
    let elementText = document.createTextNode(text);
    element.appendChild(elementText);
  }
  return padre.appendChild(element);
};

const container = elementCostructor('div', 'container', header, '');
const objSvgHeader = {
  svg1: `<svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10.6201 0.98957C10.1301 0.49957 9.34006 0.49957 8.85006 0.98957L0.540059 9.29957C0.150059 9.68957 0.150059 10.3196 0.540059 10.7096L8.85006 19.0196C9.34006 19.5096 10.1301 19.5096 10.6201 19.0196C11.1101 18.5296 11.1101 17.7396 10.6201 17.2496L3.38006 9.99957L10.6301 2.74957C11.1101 2.26957 11.1101 1.46957 10.6201 0.98957Z" fill="#161616"/>
  </svg>
  `,
  svg2: `<svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0ZM14 0C12.9 0 12 0.9 12 2C12 3.1 12.9 4 14 4C15.1 4 16 3.1 16 2C16 0.9 15.1 0 14 0ZM8 0C6.9 0 6 0.9 6 2C6 3.1 6.9 4 8 4C9.1 4 10 3.1 10 2C10 0.9 9.1 0 8 0Z" fill="#161616"/>
  </svg>
  `,
  svg3: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8.8 13.9L13.47 10.4C13.74 10.2 13.74 9.8 13.47 9.6L8.8 6.1C8.47 5.85 8 6.09 8 6.5V13.5C8 13.91 8.47 14.15 8.8 13.9ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" fill="#00FFE0"/>
  </svg>
  `,
  svg4: `<svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0ZM14 0C12.9 0 12 0.9 12 2C12 3.1 12.9 4 14 4C15.1 4 16 3.1 16 2C16 0.9 15.1 0 14 0ZM8 0C6.9 0 6 0.9 6 2C6 3.1 6.9 4 8 4C9.1 4 10 3.1 10 2C10 0.9 9.1 0 8 0Z" fill="white"/>
  </svg>
  `,
};
const div1 = elementCostructor('div', 'eclipse', container, '');
div1.innerHTML = objSvgHeader.svg1;
const div2 = elementCostructor('div', 'eclipse', container, '');
div2.innerHTML = objSvgHeader.svg2;

// Main
const div3 = elementCostructor('div', 'dati', main, '');
const objDiv3 = [
  {
    ptext: 'Song',
    pNum: '56',
  },
  {
    ptext: 'Follower',
    pNum: '7556',
  },
  {
    ptext: 'Following',
    pNum: '390',
  },
];
for (let i = 0; i < objDiv3.length; i++) {
  const divSongs = elementCostructor('div', '', div3, '');
  elementCostructor('p', '', divSongs, objDiv3[i].ptext);
  elementCostructor('p', '', divSongs, objDiv3[i].pNum);
}
// const divSongs = elementCostructor('div', '', div3, '');
// const pText = elementCostructor('p', '', divSongs, 'Song');
// const pNum = elementCostructor('p', '', divSongs, '56');
// const divFollower = elementCostructor('div', '', div3, '');
// elementCostructor('p', '', divFollower, 'Follower');
// elementCostructor('p', '', divFollower, '7556');
// const divFollowing = elementCostructor('div', '', div3, '');
// elementCostructor('p', '', divFollowing, 'Following');
// elementCostructor('p', '', divFollowing, '390');
const section1 = elementCostructor('section', 'main__popular', main, '');
const h3Section1 = elementCostructor('h3', '', section1, 'Popular');
const divContainerSquare = elementCostructor(
  'div',
  'container__square',
  section1,
  ''
);

for (let i = 0; i < 10; i++) {
  const divWrapper = elementCostructor(
    'div',
    'wrapper',
    divContainerSquare,
    ''
  );
  const divSquareWrapper = elementCostructor('div', 'square', divWrapper, '');
  const containerSVG = elementCostructor(
    'div',
    'eclipse',
    divSquareWrapper,
    ''
  );
  containerSVG.innerHTML = objSvgHeader.svg3;
  const pSquare = elementCostructor('div', '', divWrapper, '');
  elementCostructor('p', '', pSquare, 'Album name');
}

const section2 = elementCostructor('section', 'main__singles', main, '');
elementCostructor('h3', '', section2, 'Popular');
const containerSong = elementCostructor('div', 'container__song', section2, '');
elementCostructor('div', 'square', containerSong, '');
const containerSongText = elementCostructor(
  'div',
  'song__text',
  containerSong,
  ''
);
const div5 = elementCostructor('div', '', containerSongText, '');
elementCostructor('p', '', div5, 'Song title here');
elementCostructor('p', '', div5, '2020');
const div6 = elementCostructor('div', '', containerSongText, '');
div6.innerHTML = objSvgHeader.svg4;
