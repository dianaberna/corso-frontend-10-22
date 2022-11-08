// stampa degli elementi dell'array
let array = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1];
console.log("1) Stampa degli elementi") 
console.log(array);

// stampa somma di tutti gli elementi dell'array
let somma = 0;

for (i = 0; i < array.length; i++) {
    somma += array[i];
}
console.log("2) Stampa della somma di tutti gli elementi")
console.log(somma);

// stampa somma nella posizione pari dell'array
let sommaPari = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) 
       sommaPari = sommaPari + array[i];
       i = i + 2;

}
console.log("3) Stampa della somma degli elementi nelle posizioni pari")
console.log(sommaPari);

// stampa somma degli elementi dispari dell'array
let sommaDispari = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0) 
       sommaDispari = sommaDispari + array[i];
       i = i + 1;
}
console.log("4) Stampa della somma degli elementi dispari")
console.log(sommaDispari);

// stampa di quanto volte appare il numero 2 nell'array
let numRipetuto = 0;

for (let i = 0; i < array.length; i++) {
    if(array[i] == 2)
       numRipetuto = numRipetuto + 1;
       i = i+ 1;
}
console.log("5) Stampa del numero di volte per cui il 2 viene ripetuto")
console.log(numRipetuto);

// stampa di quanti numeri positivi nell'array
