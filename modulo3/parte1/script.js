// alert('funziono!');

const paginaWeb = document.querySelector('body');

const titolo = document.createElement('h1');

titolo.innerHTML = 'Titolo generato con js!';

paginaWeb.appendChild(titolo);

const lista = document.createElement('ul');
lista.innerHTML = ' <li>primo el</li>  <li>secondo el</li> <li>terzo el</li>';

titolo.after(lista);

titolo.classList.add('rosso');

lista.classList.add('nav');



// OPERATORE TERNARIO
const a = -10;
a > 0 ? console.log('è maggiore di zeo') : console.log('è minore di 0');


let nome = 'Roxana';
nome ? console.log(nome) : console.log('Nome Default');

let nome2 = '';
nome2 ? console.log(nome) : console.log('Nome Default');

let nome3 = '';
!nome2 ? console.log(nome) : console.log('Nome Default');


let cognome = 'mihai';
// let cognome = 'non so';

var frutto = 'mela';
var frutto = 'banane';

console.log(frutto)


// typeof

console.log(typeof frutto)

let anni = 28;
console.log(typeof anni)


let anni2 = "31";
console.log(parseInt(anni2));

let pixel = "50px";
console.log('parseInte ' + parseInt(anni2));
console.log('parseInte ' + parseInt(pixel));

console.log('number ' + Number(anni2));
console.log('number ' + Number(pixel));

// devi convertire il numero di una stringa usa il parseint
// FUNZIONA SOLO SE PARTE CON NUMERO e il resto ignora.
// se parte come stringa non capisce i numeri dentro


console.log(Number());
console.log(Number(null));
console.log(Number(true));
console.log(Number(false));
console.log(Number(""));


// DA SEMPRE NaN
console.log(parseInt(null));
console.log(parseInt());
console.log(parseInt(true));
console.log(parseInt(false));
console.log(parseInt(""));

const aggiungi = document.getElementById('btn');

console.log(aggiungi);

aggiungi.addEventListener('click', ciao);


function ciao() {
    let divNuovo = document.createElement('div');
    divNuovo.innerHTML = '<p>ciao</p>';
    divNuovo.classList.add('modifica');
    titolo.after(divNuovo);
    console.log('ciao');
}


const rettangolo = document.querySelector('.rettangolo');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

next.addEventListener('click', () => {
    rettangolo.classList.toggle('blue');
})

prev.addEventListener('click', () => {
    rettangolo.classList.toggle('yellow');
})


let somma = 0;

for (j=0; j<4; j++) {
    somma += j;
    console.log('ciclo for. Numero ciclo ' + j + '. Somma: ' + somma);
}

let somma2 = 0;
let i = 0;
while (i < 4) {
    somma2 += i;
    i += 1;
    console.log('ciclo while. Numero ciclo ' + i + '. Somma: ' + somma2);
}


let numPari = 0;

// if (numero % 2 == 0);  
/* questo è per vedere se numero pari */



let numeri = [2, 4, 6];
let raddoppia = 2;
let numeriRaddoppiati = [];

// for (const numero of numeri) {
//     numeriRaddoppiati.push(numero * raddoppia);
// };

numeri.forEach((numero, indice, numeri) => {
    // numeriRaddoppiati.push(numero * raddoppia);

    const numeroOggetto = { index: indice, numeri: numero * raddoppia}
    numeriRaddoppiati.push(numeroOggetto);
})

console.log(numeriRaddoppiati);


let arraynumerico = [-5, 3, 3, -1, -6];
