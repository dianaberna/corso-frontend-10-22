document.getElementById('title').style.backgroundColor = 'yellow';
let elementiVociLista = document.getElementsByTagName('li');
console.log(elementiVociLista);
for (let i = 0; i < elementiVociLista.length; i++) {
  elementiVociLista[i].style.color = 'red';
  elementiVociLista[i].style.backgroundColor = 'orange';
}
let paragrafiBlue = document.getElementsByClassName('blue');
for (let i = 0; i < paragrafiBlue.length; i++) {
  paragrafiBlue[i].style.backgroundColor = 'blue';
}
