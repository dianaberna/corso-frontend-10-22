let animali = ["gatto", "cane", "coniglio"];
console.log(animali);
console.log(animali.length);

let arraymisto = ["gatto", 2, 3, "topo"];
console.log(arraymisto);
console.log(arraymisto.length);

let arraynumerico = [3, 5, 10, 40];

/*
 3 è in posizione 0 -> arraynumerico [0] = 3
 5 è in posizione 1 -> arraynumerico [1] = 5
 10 è in posizione 2 -> arraynumerico [2] = 10
 40 è in posizione 3 -> arraynumerico [3] = 40

 la lunghezza dell'array è 4
 
*/
console.log(arraynumerico);
console.log(arraynumerico.length);

// sommare tutti gli elementi dell'array arraynumerico

// arraynumerico[0] + arraynumerico[1] + arraynumerico[3] + arraynumerico[3];
// console.log(somma);

// 1.stampare tutti gli elementi
// 2. stampare la somma di tutti gli elementi dell'aaray
// 3. stampare la somma dei soli elementi dispari
// 4. stampare quante volte compare l elemento 2
// 5.stampare quanti numeri positivi ci sono nell'array
// 6. stampare il numero massimo
// 7. stampare ul numero minimo
// 8.Inserire un nuovo array solo gli elementi negativi

let array = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1];
console.log("--1.--");
let i2 = 0;

while (i2 < array.length) {
    console.log(array[i2]);
    i2 = i2 + 1;
}

// console.log(array);

console.log("--2.--");
let i = 0;
let sommaarray = 0;

while (i < array.length) {
    sommaarray = sommaarray + array[i];
    i = i + 1;
}
console.log(sommaarray);

//let array = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1];
console.log("---3.---");

let sommaElementiD = 0;
let i1 = 0;

while (i1 < array.length) {
    if (array[i1] % 2 != 0) {
        sommaElementiD = sommaElementiD + array[i1];
    }

    i1 = i1 + 1;
}
console.log(sommaElementiD);
console.log("---4.---");
let indice = 0;
let sommapari = 0;

while (indice < array.length) {
    if (indice % 2 === 0) {
        sommapari = sommapari + array[indice];
    }

    indice = indice + 1;
}
console.log(sommapari);

//Stampare quante volte compare il numero 2 → 2
//let array = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1];
console.log("---5.---");

i = 0;
let conteggio = 0;
console.log(array);
while (i < array.length) {
    if (array[i] == 2) {
        console.log(array[i]);
        conteggio = conteggio + 1;
    }
    i++;
}
console.log(conteggio);

console.log("---6.---");
//Stampare quanti numeri positivi (compreso lo zero) ci sono nell’array
let narray = [];
nuovoi = 0;
i = 0;
conteggio = 0; // fa la stessa cosa del nuovo i
while (i < array.length) {
    if (array[i] >= 0) {
        conteggio = conteggio + 1;
        narray[nuovoi] = array[i];
        nuovoi++;
    }
    i++;
}
console.log(narray);

console.log("---7.---");

//Stampare il numero massimo
i = 0;

array = [-10, -1, -9, -3, 5, 7, 10, -20];
max = array[0];

while (i < array.length) {
    console.log(array[0]);
    if (array[i] >= max) {
        max = array[i];
    }
    i++;
}
console.log(max);

min = array[0];
console.log(i);
i = 0;
console.log(i);
while (i < array.length) {
    if (array[i] <= min) {
        min = array[i];
    }
    i++;
}
console.log(min);

//Stampare quante volte compare il numero 2 → 2
//let array = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1];
// console.log("---5.---");
// let index = 0;
// let numero2 = 0;
// while (index < array.length) {
//     if (array[index] == 2) {
//         console.log(numero2);
//     }
//     index = index + 1;
// }

console.log("---6.---");
//Stampare quanti numeri positivi (compreso lo zero) ci sono nell’array

// let i3 = 0;
// let numeripositivi = 0;
// while (i3 < array.length) {
//     if (array[i3] >= 0) {
//         console.log(numeripositivi);
//     }
//     i3 = i3 + 1;
// }

console.log("---7.---");

//Stampare il numero massimo
// let i4 = 0;
// let numeromax = 0;
// while (i4 < array.length) {
//     if (array[i4] > numeromax) {
//         numeromax = array[i4];
//     }
//     i4 = i4 + 1;
// }
// console.log(numeromax);

console.log("---8.---");
// Stampare il numero minimo
let i5 = 0;
let numeromin = 0;

while (i5 < array.length) {
    if (array[i5] < numeromin) {
        numeromin = array[i5];
    }
    i5 = i5 + 1;
}
console.log(numeromin);

console.log("---9.---");

//let array = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1];
//Inserire in un nuovo array solo gli elementi negativi 🤯 → [-2, -3]
console.log(" 09.trovo elementi negativi nell'array");
let negativi = 0;
i = 0;
while (i < array.length) {
    if (array[i] < 0) {
        console.log(array[i]);
        negativi = array[i];
    }
    i = i + 1;
}
console.log("con push");
i6 = 0;
nuovoarray = []; // array vuoto

while (i6 < array.length) {
    if (array[i6] < 0) {
        console.log(array[i6]);
        nuovoarray.push(array[i6]);
    }
    i6++;
}
console.log(nuovoarray);

console.log("senza push con nuovo indice");
i = 0;
arraynuovo1 = [];
indicenuovo = 0;
while (i < array.length) {
    if (array[i] < 0) {
        console.log(array[i]);
        arraynuovo1[indicenuovo] = array[i];
        indicenuovo++;
    }
    i++;
}
console.log(arraynuovo1);

console.log("---10.---");
//let array = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1];
//Creare (e stampare) un nuovo array dove ogni elemento del nuovo è uguale al doppio di quello dato 🤯

i7 = 0;
newarray = [];
indicenew = 0;
while (i7 < array.length) {
    if ((array[i7] = array[i7] * 2)) {
        newarray[indicenew] = array[i7];
        indicenew++;
    }
    i7++;
}
console.log(newarray);

console.log("---11.---");
//Creare (e stampare) un nuovo array in cui inserisco due volte (una di seguito l’altra) l’array dato
let arrayv = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1];

// arrayn = [...arrayv, ...arrayv];
// console.log(arrayn);
let arrayn = [];

let indice_arr_dacopiare = 0;
let indice_arr_nuovo = 0;
while (indice_arr_dacopiare < arrayv.length) {
    arrayn[indice_arr_nuovo] = arrayv[indice_arr_dacopiare];
    console.log(
        "primo while indice_arr_dacopiare indice_arr_nuovo",
        indice_arr_dacopiare,
        indice_arr_nuovo,
        arrayn
    );
    indice_arr_dacopiare++;
    indice_arr_nuovo++; // qua la indice_arr_nuovo è 11
}
// console.log("log indice_arr_dacopiare" + "" + indice_arr_dacopiare);
indice_arr_dacopiare = 0;
console.log("finto primo while ");
while (indice_arr_dacopiare < arrayv.length) {
    arrayn[indice_arr_nuovo] = arrayv[indice_arr_dacopiare];
    console.log(
        "secondo while indice_arr_dacopiare indice_arr_nuovo",
        indice_arr_dacopiare,
        indice_arr_nuovo,
        arrayn
    );
    indice_arr_dacopiare++;
    indice_arr_nuovo++;
}
console.log("finito secondo giro");
console.log(arrayn);

// let arrayn = [...arrayv...arrayv];
// versione più rapida

let i8 = 0;
let arrayn2 = [];
console.log(arrayv);
while (i8 < arrayv.length) {
    arrayn2[i8] = arrayv[i8];

    arrayn2[i8 + arrayv.length] = arrayv[i8];
    console.log(
        "lunghezza array, i8, i8 + lunghezza array",
        arrayv.length,
        i8,
        i8 + arrayv.length
    );
    console.log(arrayn2);

    i8++;
}

// console.log("while singolo", arrayn2);
// let lunghezza_array_dacopiare = arrayv.length;
// // ATTENZIONE QUESTO CAMBIA L'ARRRAY ORIGINALE SENZA CREARNE UNO NUOVO
// // non utilizzo una nuova variabile con il for
// for (
//     let indice_originale = 0; indice_originale < lunghezza_array_dacopiare; indice_originale++
// ) {
//     console.log(arrayv); // array che cresce prima della push"
//     arrayv.push(arrayv[indice_originale]);
// }
// console.log(arrayv);
//
//
console.log("---12.---");
//Stampare al contrario gli elementi dell’array
array = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1];

i = array.length - 1;
let arraynuova = [];
let inuovo = 0;
console.log("numero di", i);
while (i >= 0) {
    console.log(array[i]);

    i--;
}

console.log("---13.---");
// Creare un array3 con la somma degli elementi dell’array1 e dell’array2
let array1 = [1, 2, 2, 3, 4];

let array2 = [4, 2, 2, 4];

let array3 = [];

let lunghezza;
let k = 0;

if (array1.length >= array2.length) {
    lunghezza = array1.length;
} else {
    lunghezza = array2.length;
}
console.log("array1", array1, "array2", array2);
while (k < array1.length || k < array2.length) {
    // console.log(" k all inizio di whilw", k);
    array3[k] = 0;
    if (array1[k]) {
        array3[k] = array3[k] + array1[k];
        console.log(array3, "somma con array1");
    }
    if (array2[k]) {
        array3[k] = array3[k] + array2[k];
        console.log(array3, "somma con array 2");
    }
    k++;
}
console.log(array3);

// risolvo con il for

for (let i = 0; i < array1.length || i < array2.length; i++) {
    if (array1[i] && array2[i]) {
        array3[i] = array1[i] + array2[i];
    }

    if (array1[i] && !array2[i]) {
        array3[i] = array1[i];
    }

    if (!array1[i] && array2[i]) {
        array3[i] = array2[i];
    }
}

console.log("---14.---");
//Creare un array3 con gli elementi (non la posizione) dispari di array1 e gli elementi pari di array2
array1 = [1, 2, 2, 3, 4];

array2 = [4, 2, 2, 4];

array3 = [];
let nuovoindice = 0;

for (i = 0; i < array1.length; i++) {
    if (array1[i] % 2 != 0) {
        array3[i] = array1[i];
        nuovoindice++;
        console.log(nuovoindice);
    }
}
for (i = 0; i < array2.length; i++) {
    if (array2[i] % 2 == 0) {
        array3[nuovoindice + i] = array2[i];
    }
}

console.log(array3);

console.log("------versione due------");
array3 = [];
nuovoindice = 0;

for (i = 0; i < array1.length || i < array2.length; i++) {
    if (array1[i] % 2 != 0) {
        array3[nuovoindice] = array1[i];
        nuovoindice++;
        console.log(nuovoindice);
        console.log(array3);
    }
    if (array2[i] % 2 == 0) {
        array3[nuovoindice] = array2[i];
        nuovoindice++;
        console.log(nuovoindice);
        console.log(array3);
    }
}

// i= 0 , 1 array3[0] =1, nuovoindice = 1, array3[1] = 4
// i =1 , 1 array3 [2] = 2
// i = 2 array3[3] = 2
// i = 3 array3[3] = 3

// i = 0;

// indice3 = 0;

// while (i < array1.length || i < array2.length) {
//     if (array1[i] % 2 === 1) {
//         array3[indice3] = array1[i];
//         indice3++;
//     }
//     if (array2[i] % 2 === 0) {
//         array3[indice3] = array2[i];
//         indice3++;
//     }
//     i++;
// }
// console.log(array3);

console.log("---15.---");
//15) Aggiornare l’array2 con elemento = il suo valore diviso il valore nella posizione lunghezza-posizione dell’array1
//array2[i] = array2[i] / array1[lunghezza-i]
array1 = [1, 2, 2, 3, 4];

array2 = [4, 2, 2, 4];

for (i = 0; i < array2.length; i++) {
    if (array1[array2.length - i - 1]) {
        //->  controllo se l'elemento esiste

        array2[i] = array2[i] / array1[array2.length - i - 1];
        console.log(array1);
    }
}
console.log(array2);
/*
array2 [2-0-1]  == array.lenght-i-1
array1 [array.lenght-i-1] = 
// array1 = [2,3,4]
// array2 = [3,4,]

i= 0 0<2 ,  esiste array2[0]  esiste 3/3
i= 1 1<2 ,  esiste array2[1]  esiste 4/2

*/

/*

// array1 = [2,3,4]
// array2 = [3,4,5]

i= 0 0<3 , array1[2] non esiste
i= 1 1<3 , array1[1] esiste arra2[1] = 4/3
i= 2 2<3 , array1[]  esiste arra2[2] = 5/2
i= 3 3<3  no

*/

// calcolo dell array
// array1 = [2,3,4]
// array2 = [3,4,5]
// i = 0 0<3? si, array[2] esiste array2[0] =  3/4     array.lenght(3) - 0 - 1
//  i = 1 1<3? si, array[1]  esiste array2[1] =  4/2
//  i = 2 2<3? si, array[0]  esiste array2[2] =  5/2

console.log("---16.---");
//16) Verificare se array1 e array2 dati sono palindromi come ad esempio “anna”, “radar”, “emme”, “1221”, “4224”

array1 = [1, 2];