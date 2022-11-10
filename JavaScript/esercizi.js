/* ESERCIZI 8 novembre 2022*/

let array = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1];

//1 ) Stampare tutti gli elementi dell’array → 2, 6, 9, 10, -2, -3, 0, 2, 5, 1

console.log("esercizio 1");

let i = 0;
for (i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// 2) Stampare la somma di tutti gli elementi dell’ array

console.log("esercizio 2");

let sommaEs2 = 0;
let k = 0;
for (k = 0; k < array.length; k++) {
    sommaEs2 = sommaEs2 + array[k];
    k = k++;
}
console.log(sommaEs2);

// 3) Stampare la somma dei soli elementi dispari

console.log("esercizio 3");

let sommaEs3 = 0;
let j = 0;
for (j = 0; j < array.length; j++) {
    if (array[j] % 2 != 0) {
        sommaEs3 = sommaEs3 + array[j];
    }
}
console.log(sommaEs3);

// 4) Stampare la somma dei soli elementi in posizione pari

console.log("esercizio 4");

let sommaEs4 = 0;
let h = 0;
for (h = 0; h < array.length; h++) {
    if (array[h] % 2 === 0) {
        sommaEs4 = sommaEs4 + array[h];
    }
}
console.log(sommaEs4);

// 5) Stampare quante volte compare il numero 2

console.log("esercizio 5");

let es5 = 0;
let l = 0;
for (l = 0; l < array.length; l++) {
    if (array[l] === 2) {
        es5 = es5 + 1;
    }
}
console.log(es5);

// 6) Stampare quanti numeri positivi (compreso lo zero) ci sono nell’array

console.log("esercizio 6");

let es6 = 0;
let m = 0;

while (m < array.length) {
    if (array[m] >= 0) {
        es6 = es6 + 1;
    }
    m++;
}

console.log(es6);

// 7) Stampare il numero massimo

console.log("esercizio 7");

let max7 = 0;
let n = 0;
while (n < array.length) {
    if (max7 < array[n]) {
        max7 = array[n];
    }
    n++;
}
console.log(max7);

// 8) Stampare il numero minimo

console.log("esercizio 8");

let min8 = 0;
let o = 0;
while (o < array.length) {
    if (min8 > array[o]) {
        min8 = array[o];
    }
    o++;
}
console.log(min8);

// 9) Inserire in un nuovo array solo gli elementi negativi 🤯

console.log("esercizio 9");

let newArray9 = [];
let p = 0;
while (p < array.length) {
    if (array[p] < 0) {
        newArray9.push(array[p]);
    }
    p++;
}

console.log(newArray9);

// 10) Creare un nuovo array dove ogni elemento del nuovo è uguale al doppio di quello dato 🤯

console.log("esercizio 10");

let newArray10 = [];
let q = 0;
while (q < array.length) {
    newArray10.push(array[q] * 2);
    q++;
}
console.log(newArray10);

// 11) Creare un nuovo array in cui inserisco due volte (una di seguito l’altra) l’array dato 🤯 🤯

console.log("esercizio 11");

let newArray11 = [];
let r = 0;
while (r < array.length) {
    newArray11.push(array[r]);
    r++;
}
newArray11 = newArray11.concat(array);

console.log(newArray11);

// 12) Stampare al contrario gli elementi dell’array

console.log("esercizio 12");

let s = 0;
let newArray12 = array.reverse(array);

console.log(newArray12);

// 13) Creare un array3 con la somma degli elementi dell’array1 e dell’array2

console.log("esercizio 13");

let array1 = [1, 2, 2, 3, 4];
let array2 = [4, 2, 2, 4];
let newArray13 = [];
let t = 0;

for (t = 0; t < array1.length; t++) {
    if (array2.length < array1.length) {
        array2.push(0);
    }
    newArray13.push(array1[t] + array2[t]);
}
console.log(newArray13);

// 14)  Creare un array3 con gli elementi (non la posizione) dispari di array1 e gli elementi pari di array2

console.log("esercizio 14");
