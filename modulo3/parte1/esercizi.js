let arrayNumerico = [ 2, 6, 9, 10, -2, -3, 0, 2, 5, 1];

console.log('1) stampa tutti gli elementi di questo array');
// for (let i = 0; i < arrayNumerico.length; i++) {
//     console.log(arrayNumerico[i]);
// }


console.log('2) stampa la somma di tutti gli elementi di questo array');

let sommaNumeriArray = 0;

// for (let i = 0; i < arrayNumerico.length; i++) {
//     sommaNumeriArray = sommaNumeriArray + arrayNumerico[i];
// }

// console.log(sommaNumeriArray);


console.log('3) stampa la somma dei soli elementi dispari');
// for (let i = 0; i < arrayNumerico.length; i++) {
//     if (arrayNumerico[i] % 2 != 0) {
//         sommaNumeriArray = sommaNumeriArray + arrayNumerico[i];
//     } 
// }

// console.log(sommaNumeriArray);

console.log( '4) stampa la somma dei soli elementi in posizione pari');

// for (let i = 0; i < arrayNumerico.length; i++) {
//     if (i % 2 == 0) {
//         sommaNumeriArray = sommaNumeriArray + arrayNumerico[i];
//     } 
// }
// console.log(sommaNumeriArray);


console.log('5) stampa quante volte compare elemento: 2');
let quanti2 = 0;

// for (let i = 0; i < arrayNumerico.length; i++) {
//     if (arrayNumerico[i] === 2) {
//         quanti2 += 1;
//     } 
// }

// console.log('il numero 2 compare: ' + quanti2 + ' volte');


console.log('6) stampa quanti numeri positivi (compresi lo 0) ci sono in array');

let numeriPositivi = 0;

// for (let i = 0; i < arrayNumerico.length; i++) {
//     if (arrayNumerico[i] >= 0) {
//         numeriPositivi++;
//     }
// }

// console.log('i numeri positivi di questo array sono ' + numeriPositivi);



console.log('7) stampa il numero massimo');

let numeroMaggiore = 0;

// for (let i = 0; i < arrayNumerico.length; i++) {
//     if (arrayNumerico[i] > numeroMaggiore) {
//         numeroMaggiore = arrayNumerico[i];
//     }
// }

// console.log('il numero maggiore di questo array è ' + numeroMaggiore);


console.log('7) stampa il numero massimo PIù CORRETTO');

const arrayNumerico2 = [-2, -4, -7, -101, -1, -9, -27, 5, 0, 10, -20]
let numeroMaggiore2 = arrayNumerico2[0];

// for (let i = 0; i < arrayNumerico2.length; i++) {
//     if (arrayNumerico2[i] > numeroMaggiore2) {
//         numeroMaggiore2 = arrayNumerico2[i];
//     }
// }
// console.log('il numero maggiore di questo array è ' + numeroMaggiore2);




console.log('8) stampa il numero minimo');

let numeroMinimo = 0;

// for (let i = 0; i < arrayNumerico.length; i++) {
//     if (arrayNumerico[i] < numeroMinimo) {
//         numeroMinimo = arrayNumerico[i];
//     }
// }
// console.log('il numero minore di questo array è ' + numeroMinimo);


console.log('8) stampa il numero minimo PIù CORRETTO');

let numeroMinimo2 = arrayNumerico2[0];

// for (let i = 0; i < arrayNumerico2.length; i++) {
//     if (arrayNumerico2[i] < numeroMinimo2) {
//         numeroMinimo2 = arrayNumerico2[i];
//     }
// }
// console.log('il numero minore di questo array è ' + numeroMinimo2);



console.log('9) inserire in un nuovo array solo gli elementi negativi');

let nuovoArray = [];
let indiceNuovo = 0;

// for (let i = 0; i < arrayNumerico.length; i++) {
//     if (arrayNumerico[i] < 0) {
//         nuovoArray[indiceNuovo] =  arrayNumerico[i];
//         indiceNuovo++;
//     } 
// }

// console.log(nuovoArray);




console.log('10) nuovo array in cui ho i valori doppi di array principale');

let valoriDoppi = [];
let indiceValoriDoppi = 0;

// for (let i = 0; i < arrayNumerico.length; i++) {
//     valoriDoppi[indiceValoriDoppi] = arrayNumerico[i] * 2;
//     indiceValoriDoppi++;
// }

// console.log(valoriDoppi);
// console.log(arrayNumerico);

// RICORDATI SEMPRE DI INCREMENTARE IL NUOVO INDICE!!


// -------
// CON WHILE
// let valoriDoppi = [];
// let i = 0;
// while (i < arrayNumerico.length) {
//     valoriDoppi = valoriDoppi + ' ' + arrayNumerico[i] * 2;
//     i++
// }
// console.log(valoriDoppi);
// ------


console.log('11) nuovo array in cui inserisco 2 vote array dato ');

// let nuovoArray3 = [];
// let indiceNuovoArray3 = 0;

// let ripeti2volte = 2;

// for (let i = 0; i < ripeti2volte; i++) {

//     for (let i = 0; i < arrayNumerico.length; i++) {
//         nuovoArray3[indiceNuovoArray3] = arrayNumerico[i];
//         indiceNuovoArray3++;
//     }

// }

// console.log(nuovoArray3);
// IDEM A PRIMA, RICORDATI DI INCREMENTARE indiceNuovoArray3!!!!



console.log('11) CORRETTO nuovo array in cui inserisco 2 vote array dato ');

// let nuovoArray3 = [];
// let indiceNuovoArray3 = 0;

// for ( i = 0, j = arrayNumerico.length; i < arrayNumerico.length; i++, j++) {
//     nuovoArray3[i] = arrayNumerico[i];
//     nuovoArray3[j] = arrayNumerico[i];
// }


// CON DUE CICLI FOR diversi
// console.log('11) CORRETTO INSIEME nuovo array in cui inserisco 2 vote array dato ');

// let nuovoArray3 = [];
// for ( i = 0; i < arrayNumerico.length; i++) {
//     nuovoArray3[i] = arrayNumerico[i];
// }
// for (i= 0, j = arrayNumerico.length; i < arrayNumerico.length; i++, j++) {
//     nuovoArray3[j] = arrayNumerico[i];
// }
// console.log(nuovoArray3);



// let arraynum = [3, 5, 7]
// let arraynum_ripetuto = [];
// for(i=0, j=arraynum.length; i<arraynum.length; i++, j++){
//   arraynum_ripetuto[i] = arraynum[i];
//   arraynum_ripetuto[j] = arraynum[i];
// }

// console.log(arraynum);
// console.log(arraynum_ripetuto);




console.log('12) stampa al contrario array');


// ricorda importantissimo: 
// let i = arrayNumerico.length - 1     per non andare oltre: un array con 4 elementi ha una length di 4 ma un indice che si ferma al 3
//  i >= 0  per includere cosa c'è all'indice 0

// così stampo e basta
// for (let i = arrayNumerico.length - 1; i >= 0; i--) {
//     console.log(arrayNumerico[i]);
// }

// arrayContrario =  arrayContrario.push()   
//  non è una assegnazione nuova all'array, basta push



// CON PUSH 
// let arrayContrarioPush = []; 
// for (let i = arrayNumerico.length - 1; i > 0; i--) {
//     arrayContrarioPush.push(arrayNumerico[i]);
// }

// console.log(arrayContrarioPush);




let array1 = [1, 2, 2, 3, 4];
let array2 = [4, 2, 2, 4];
// let array2 = [4, 2, 2, 4, 1, 1];

console.log("13) Creare un array3 con la somma degli elementi dell’array1 e dell’array2 ");

let arraySomma = [];

// for (let i = 0; i < array1.length || i < array2.length; i++) {
//     if (array1[i] && array2[i]) {
//         arraySomma.push(array1[i] + array2[i])
//     } else if (array1[i]) {
//         arraySomma.push(array1[i])
//     } else if (array2[i]){
//         arraySomma.push(array2[i])
//     }
// }

// console.log(arraySomma);


console.log('13 FATTO INSIEME');
// let arraySomma3 = [];
// let k = 0;

// while (k < array1.length || k <array2.length) {
//     arraySomma3[0];
//     if (array1[k] && array2[k]) {
//         arraySomma3[k] = array1[k] + array2[k];
//     } else if (array1[k]) {
//         arraySomma3[k] = array1[k];
//     } else if (array2[k]) {
//         arraySomma3[k] = array2[k];
//     }
//     k++;
// }

// console.log(arraySomma3);




console.log('14) Creare un array3 con gli elementi (non la posizione) dispari di array1 e gli elementi pari di array2');

// let array3 = [];

// for (let i = 0; i < array1.length; i++) {
//     if (array1[i] % 2 != 0) {
//         array3.push(array1[i])
//     }
// }

// for (let i = 0; i < array2.length; i++) {
//     if (array2[i] % 2 == 0) {
//         array3.push(array2[i])
//     }
// }

// console.log(array3);


// VERSIONE 2
// let array32 = [];

// for (let i = 0; i < array1.length || i < array2.length; i++) {
//     if (array1[i] % 2 != 0) {
//         array32.push(array1[i])
//     }
//     if (array2[i] % 2 == 0) {
//         array32.push(array2[i])
//     }
// }
// console.log(array32);





console.log("15) Aggiornare l’array2 con elemento = il suo valore diviso il valore nella posizione lunghezza-posizione dell’array1");

let array4 = [];

// let j = 0;

// while (j < array1.length || j <array2.length) {

//     array4[0];
//     if (array1[j] && array2[j]) {
//         array4[j] = array1[j] / array2[j];
//     } else if (array1[j]) {
//         array4[j] = array1[j] / 0;
//     } else if (array2[j]) {
//         array4[j] = array2[j] / 0;
//     }

//     j++;
// }

// console.log(array4);


console.log("15) CORRETTO Aggiornare l’array2 con elemento = il suo valore diviso il valore nella posizione lunghezza-posizione dell’array1");

// for (i = 0; i < array2.length || i < array1.length; i++) {
//     console.log('stampa?');
//     if (array1[i] && array2[i]) {
//         array2[i] = array2[i] / array1[i];
//     } 
//     else if (array2[i]) {
//         array2[i] = array2[i];
//         array2[i] = 0;
//     } 
//     else if (array1[i]) {
//         array2[i] = array1[i];
//         array2[i] = 'impossibile dividere per 0';
//     }
// }

// console.log(array2);

console.log("15) CORRETTO POSIZIONI GIUSTE Aggiornare l’array2 con elemento = il suo valore diviso il valore nella posizione lunghezza-posizione dell’array1");

// array1 = [2, 3, 4]
// array2 = [3, 4, 4, 7]

// for (i = 0; i < array2.length || i < array1.length; i++) {
//     console.log('stampa?');
//     if (array1[i] && array2[i]) {
//         array2[i] = array2[i] / array1[array1.length - i -1];
//     } 
//     else if (array2[i]) {
//         array2[i] = array2[i];
//         array2[i] = 'impossibile dividere un numero per 0';
//     } 
//     else if (array1[i]) {
//         array2[i] = array1[i];
//         array2[i] = 'impossibile dividere 0 per un numero';
//     }
// }

// console.log(array2);





console.log('16) Verificare se gli array sono palindromi come ad esempio “anna”, “radar”, “emme”');

array2 = [1, 2, 3, 4];
array2 = [4, 2, 2, 2, 4];
array2 = [2, 2, 2]
// array2 = [4, 2, 2, 2, 4];
array1 = [1, 2, 3, 4, 5, 6, 8, 7]
// array2 = ['e', 'm', 'm', 'e', 'c']
 
// VERSIONE CON CEIL
let controllo = 0;

for (i = 0, j = array2.length - 1; i < array2.length / 2; i++, j--) {

    if (array2[i] === array2[j]) {
        controllo++;
    } 
    else  {
        console.log('NON PALINDROMO');
        break
        // con questo break esco dal ciclo for
    }

}

let ultimoGiro = Math.ceil((array2.length / 2));
let ultimoGiro2 = (array2.length / 2);

if (controllo == ultimoGiro || controllo == ultimoGiro2) {
        console.log('PALINDROMO');
} 



// VERSIONE CON FLOOR
// let controllo = 0;

// for (i = 0, j = array2.length - 1; i < array2.length / 2; i++, j--) {

//     if (array2[i] === array2[j]) {
//         controllo = i;
//     } 
//     else  {
//         console.log('NON PALINDROMO');
//         break
//         // con questo break esco dal ciclo for
//     }

// }

// let ultimoGiro = Math.floor((array2.length / 2));
// let ultimoGiro2 = (array2.length / 2);

// if (controllo == ultimoGiro || controllo == ultimoGiro2) {
//         console.log('PALINDROMO');
// } 




// for (i = 0, j = array1.length - 1; i < array1.length / 2; i++, j--) {

//     if (array1[i] === array1[j]) {
//         controllo = i;
//     } else if (array1[i] !== array1[j]) {
//         console.log(controllo);
//         console.log(i);
//         console.log('NON PALINDROMO');
//         break
//     }

//     let ultimoGiro = Math.floor((array1.length / 2) - 1);
//     if (i == ultimoGiro) {
//         if (controllo == i) {
//             console.log('PALINDROMO');
//             break
//         }
//     }
// }






// RICORDATI CHE
// 2 arrray nnon sono mai uguali
// array7 = [3, 2, 1];
// array8 = [3, 2, 1];

// str7 = 'ciao';
// str8 = 'ciao';

// let sonoUguali2 = str7 == str8;
// let sonoUguali = array7 == array8;
// console.log(sonoUguali);
// console.log(sonoUguali2);


// MATH 
// Math.floor
// Math.ceil
// Math.abs --> 