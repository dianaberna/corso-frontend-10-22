'use strict';

const hover = document.getElementById('hover');

hover.addEventListener('mouseenter', () => {
  hover.className = 'formWrapper__input input--hover';
});
