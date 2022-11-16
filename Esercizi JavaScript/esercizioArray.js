// 1. stampa degli elementi dell'array
let array = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1];
console.log("1) Stampa degli elementi");
console.log(array);

// 2. stampa somma di tutti gli elementi dell'array
let somma = 0;

for (i = 0; i < array.length; i++) {
    somma += array[i];
}
console.log("2) Stampa della somma di tutti gli elementi");
console.log(somma);

// 3. stampa somma nella posizione pari dell'array
let sommaDispari = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0) 
        sommaDispari = sommaDispari + array[i];
}
i = i++;
console.log("3) Stampa della somma degli elementi dispari");
console.log(sommaDispari);

// 4. stampa somma degli elementi dispari dell'array
let sommaPari = 0;

for (let i = 0; i < array.length; i++) {
    if (i % 2 == 0) 
        sommaPari = sommaPari + array[i];
}
i = i++;
console.log("4) Stampa della somma degli elementi nelle posizioni pari");
console.log(sommaPari);

// 5. stampa di quanto volte appare il numero 2 nell'array
let numRipetuto = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] == 2) 
        numRipetuto = numRipetuto + 1;
}
i = i++;
console.log("5) Stampa del numero di volte per cui il 2 viene ripetuto");
console.log(numRipetuto);

// 6. stampa di quanti numeri positivi possiede l'array
let numPositivi = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] >= 0) 
        numPositivi = numPositivi + 1;
}
i = i++;
console.log("6) Stampa dei numeri positivi contenuti dall'array");
console.log(numPositivi);

// 7. stampa del numero massimo dell'array
let numMax = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] > numMax) 
        numMax = array[i];
}
i = i++;
console.log("7) Stampa del numero massimo dell'array");
console.log(numMax);

// 8. stampa del numero minimo dell'array
let numMin = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] <= numMin) 
        numMin = array[i];
}
i = i++;
console.log("8) Stampa del numero minimo dell'array");
console.log(numMin);

// 9. inserimento numeri negativi in un nuovo array
let arrayNegativi = [];

for (let i = 0; i < array.length; i++) {
    if(array[i] < 0)
    arrayNegativi = array[i];
}
i = i++;
console.log("9) Inserimento numeri negativi in un nuovo array");
console.log(arrayNegativi);

// 10. creare e stampare un nuovo array dove ogni elemento del nuovo è uguale al doppio di quello dato
let nuovoArray = [];

for (let i = 0; i < array.length; i++) {
    nuovoArray[i] = array[i] * 2
}
i = i++;
console.log("10) Creazione e stampa di un nuovo array dove ogni elemento del nuovo è uguale al doppio di quello dato");
console.log(nuovoArray);

// 11. creare e stampare un nuovo array in cui inserisco due volte, una di seguito l’altro, l’array dato
let arrayFinale = []
for (let i = 0; i < array.length; i++) {
    arrayFinale[i] = arrayFinale[i+array.length] = array[i]
}
console.log("11) Creare e stampare un nuovo array in cui inserisco due volte, una di seguito l’altro, l’array dato");
console.log(arrayFinale);

// 12. stampare al contrario gli elementi dell'array
i = array.length - 1;

while(i >= 0) {
    console.log(array[i]);
    i = i - 1;
}
console.log("12) Stampare al contrario gli elementi dell'array")

// 13. creare un array3 con la somma degli elementi dell’array1 e dell’array2
let array1 = [ 1, 2, 2, 3, 4];
let array2 = [4, 2, 2, 4];
let array3 = [];

for (let i = 0; i < array1.length; i++) {
    if(array2.length == array1.length) {
        array3[i] = array1[i] + array2[i];
    } else {
        if(array2.length < array1.length) {
            
        }
    }
}

// // 14.
// let array1 = [ 1, 2, 2, 3, 4];
// let array2 = [4, 2, 2, 4];
// let array3 = [];

// for (let i = 0; i < array1.length; i++) {
//     if(array1[i] % 2 == 1)
//        array3[i] = array1[i];
// }
// i++;

// 15. aggiornare l’array2 con elemento = il suo valore diviso il valore nella posizione lunghezza-posizione dell’array1
for(let i = 0; i < array2.length; i++) {
    if(array1[array2.length - i]) {
    array2[i] = array2[i] / array1[array2.length - i];
    }
}