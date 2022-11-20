var array = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1];

console.log("--stampo tutti gli elementi dell'array--");
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// stampo la somma degli elementi dell'array

let somma = 0;
for (let i = 0; i < array.length; i++) {
    somma = somma + array[i]
}
console.log("la somma degli elementi dell'array e' " + somma);

// stampo la somma dei numeri dispari e la somma dei numeri pari dell'array

let pari = 0;
let dispari = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        pari = pari + array[i];
    } else {
        dispari = dispari + array[i];
    }
}
console.log("la somma dei numeri dispari dell'array e' " + dispari);
console.log("la somma dei numeri pari dell'array e' " + pari);

//stampo la somma degli elementi in posizione pari

let posizionePari = 0;
let posizioneDispari = 0;
for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
        posizionePari = posizionePari + array[i];
    } else {
        posizioneDispari = posizioneDispari + array[i];
    }
}
console.log("la somma dei numeri in posizione pari e' " + posizionePari);
console.log("la somma dei numeri in posizione dispari e' " + posizioneDispari);

// stampo quanti numeri positivi ci sono nell'array, zero incluso
let covid = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] >= 0) {
        covid++;
    }
}
console.log("ci sono " + covid + " numeri positivi");

// stampo il numero massimo (senza usare funzioni matematiche)
let maggiore = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] > maggiore) {
        maggiore = array[i];
    }
}
console.log("il numero piu' grande dell'array e' " + maggiore);

// stampo il numero minimo (senza usare funzioni matematiche)
let minore = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] <= minore) {
        minore = array[i];
    }
}
console.log("il numero piu' piccolo dell'array e' " + minore);

// inserisco in un nuovo array solo gli elementi negativi
var negArray = [];
for (let i = 0; i < array.length; i++) {
    if (array[i] < 0){
        negArray.push(array[i])
    }
}
console.log(negArray);

// creo (e stampo) un nuovo array dove ogni elemento del nuovo è uguale al doppio di quello dato
var raddoppiArray = [];
for (let i = 0; i < array.length; i++) {
    raddoppiArray.push(array[i] * 2)
}
console.log(raddoppiArray);

// creo (e stampo) un nuovo array in cui inserisco due volte (una di seguito l’altra) l'array dato

var arrayCopia = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1];
const arrayLen = arrayCopia.length;
var doppiArray = arrayCopia;
for (let i = 0; i < arrayLen; i++) {
   doppiArray.push(arrayCopia[i])
}
console.log(doppiArray);

// stampo al contrario gli elementi dell'array

var arrayReverse = [];
for (let i = array.length-1 ; i >= 0 ; i--) {
    arrayReverse.push(array[i]);
}
console.log(arrayReverse);

// creo un array3 con la somma degli elementi dell'array1 e dell'array2

var array1 = [ 1, 2, 2, 3, 4];
var array2 = [ 4, 2, 2, 4];
var array3 = [];

let maxArrayLen = 0;

// metodo complesso e intricato nel caso ci fossero troppi array da 
// controllare (atrimenti bastavano due cicli for)

if (array1.length > array2.length) {
    maxArrayLen = array1.length;
} else {
    maxArrayLen = array2.lenghth;
}

let sommaTotale = 0;

for (let i = 0; i < maxArrayLen; i++) {
    if (array1[i] != undefined) {
        sommaTotale += array1[i];
    }
    if (array2[i] != undefined) {
        sommaTotale += array2[i];
    }
}
array3.push(sommaTotale);
console.log("array con somma di due array ", array3);

// ora faccio il vero esercizio 13
//inizializzo di nuovo array3 perche' era somma totale e mi serve vuoto
array3 = []; 

for (let i = 0; i < maxArrayLen; i++) {
    if (array1[i] != undefined && array2[i] != undefined) {
        array3.push(array1[i]+array2[i])
    } else if (array1[i] == undefined && array2[i] != undefined) {
        array3.push(array2[i])
    } else {
        array3.push(array1[i])
    }
}
console.log(array3);

// creo un array4 con gli elementi (non la posizione) dispari di array1 e gli elementi pari di array2

