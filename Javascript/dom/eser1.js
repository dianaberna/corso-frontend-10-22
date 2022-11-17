let div = document.createElement('div');
div.id = 'background';
document.body.appendChild(div);


let red = Math.trunc(Math.random() * 255);
let blue = Math.trunc(Math.random() * 255);
let green = Math.trunc(Math.random() * 255);
let color = `rgb (${red}, ${blue}, ${green})`;
let text = document.createTextNode(color);
div.appendChild(text);
window.addEventListener('load', function () {
  document.body.style.background = `rgb(${red}, ${blue}, ${green})`;
});