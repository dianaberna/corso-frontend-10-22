let divConteni = document.createElement('div');
divConteni.id = 'background';
document.body.appendChild(divConteni);


let red = Math.floor(Math.random() * 255);
let blue = Math.floor(Math.random() * 255);
let green = Math.floor(Math.random() * 255);
let color = `rgb (${red}, ${blue}, ${green})`;
let text = document.createTextNode(color);
divConteni.appendChild(text);
window.addEventListener('load', function () {
  document.body.style.background = `rgb(${red}, ${blue}, ${green})`;
});