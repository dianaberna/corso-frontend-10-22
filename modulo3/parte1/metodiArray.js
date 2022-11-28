const animali = ['cane', 'gatto', 'topo', 'bue'];

// LEGGO QUANTO è LUNGO L'ARRAY
console.log(animali.length);

// length si può usare anche sulle stringhe
// js legge le stringhe come se fossero degli array di caratteri, ogni carattere ha una posizione nell'indice
console.log(animali[1].length);

// qui chiedo di andare a vedere il primo elemento -> la prima lettera [1] -> [0]
console.log(animali[1][0]);

// esercizio: crea un nuovo array con soli animali di 4 lettere
const animali4 = [];
for (let i = 0; i < animali.length; i++) {
    if (animali[i].length == 4) {
        animali4.push(animali[i]);
    }
}
console.log('gli animali con 4 lettere sono ' + animali4);
console.log(animali4);



// LEGGERE UN ELEMENTO IN BASE ALL'INDICE
console.log(animali[0]);;

// RIASSEGNARE A UN INDICE UN NUOVO ELEMENTO
animali[0] = 'toro';
console.log(animali[0]);
console.log(animali);

// SO CHE C'è UN ELEMENTO: VOGLIO SAPERE A CHE INDICE
console.log(animali.indexOf('bue'));


// LO ORDINO IN ORDINE ALFABETICO (anche i numeri )
console.log(animali.sort());

// DOPO AVERLO ORDINATO ORA LO METTO AL CONTRARIO 

const ordineAnimali = animali.sort();
const ordineContrario = animali.reverse();

console.log(ordineContrario);


// AGGIUNGO A FINE ARRAY UN ELEMENTO
animali.push('coniglio');
animali.push('tartaruga', 'mucca', 'pollo');

console.log(animali);

// ELIMINO ULTIMO ELEMENTO
animali.pop();
console.log(animali);

// OPPURE ELIMINO IL PRIMO ELEMENTO
animali.shift();
console.log(animali);

// OPPURE ELIMINO UN ELEMENTO SPECIFICO
// animali.pop('bue');
// console.log(animali);
// animali.remove('bue');
// console.log(animali);



// splice()
// AGGIUNGO UN ELELEMENTO ALL'ARRAY
// splice ACCETTA 3 PARAMETRI
// (dove voglio il nuovo elemento, 0 i numeri di elementi che voglio cancellare,   cosa voglio inserire  )

animali.splice(3, 0, 'leone');
console.log(animali);

// qui cancello quello che c'era prima in quella posizione
animali.splice(5, 1, 'criceto');
console.log(animali);

// qui cancello quello che c'era prima in quella posizione + i 2 successivi
animali.splice(1, 3, 'serpente');
console.log(animali);



// slice()
// elimina l'elemento che chiedo io
// (posizione dove partire a cancellare, quanti)
console.log('slice');

let animaliNuovi = animali.slice(0, 5);
console.log(animaliNuovi);

// slice crea nuovo array?

animali.push('cane')

console.log(animaliNuovi);
console.log(animali);






// STRINGHE METODI -------------------------

// replace() 
// se trovi il carattere che ti indico nelle tonde me lo rimpiazzi con quello specificato dopo

let str = 'hello world';
let modificaStr = str.replace('l', 'x');
console.log(modificaStr);

let modificaStr2 = str.replaceAll('l', 'x');
console.log(modificaStr2);

let ripeti = str.repeat(3);
console.log(ripeti);

let taglia = str.slice(6);
console.log(taglia);

let str2 = 'stringa con diversi spazi';
let stringaInArray = str2.split(' ');
// ogni volta che incontri uno spazio crea un elemento e infilalo nell'array
console.log(stringaInArray);

let unPezzetto = str2.substring(0, 10);
console.log(unPezzetto); 

let partenzaWorld = str2.indexOf('con');
console.log(partenzaWorld);
// la c è su indice 8


let cercaDiversi = str2.includes('diversi');
console.log(cercaDiversi);
let cercaHello = str2.includes('hello');
console.log(cercaHello);
// è presente mi da true
// non è presente, mi da false


let stringa1 = 'ciao';
let stringa2 = 'mondo';

let stringaConcatenata = stringa1.concat(stringa2)
console.log(stringaConcatenata);

// INTERPOLAZIONE
// si fa tramite i backticks
// poi le variabili le scrivo dentro a ${....}


console.log(` ciao ${stringa1} `);





// SPREAD OPERATOR 
// [...]
let arrayNuovo = [1, 2, 3, 4]
let arrayNuovo2 = [1, 2, 3, 4]
console.log(arrayNuovo);
console.log('----');
console.log(...arrayNuovo);

let arrayRisultante = [...arrayNuovo, ...arrayNuovo2]
console.log(arrayRisultante);

// perchè se faccio così creo un "collegamento", va sempre nello stesso punto di memeoria
let copiaArray1 = arrayNuovo;
let copiaArray2 = [...arrayNuovo2];
// con lo spread creo una nuova scatola, punta in un altro punto della memoria

arrayNuovo.push(9);

console.log(arrayNuovo);
console.log(arrayRisultante);



// FUNZIONI

// function saluta(nome, sesso) {
//     let sessoDefault = 'xxx';
//     if (!sesso) {
//         sesso = sessoDefault;
//     }
//     console.log('ciao ' + nome + '. Sei una ' + sesso);
// }

// saluta('roxana');




function somma(a, b) {
    let c = a + b;
    return c;
    // return a + b;
}

console.log(somma(2, 3));

let otto = somma(4, 4);
console.log(otto);