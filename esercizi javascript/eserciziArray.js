// Esercizio 1
// Stampare tutti gli elementi dell’array
console.log("Esercizio 1 - Stampare tutti gli elementi dell’array");
const array = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1];
i = 0;
console.log("Gli elementi dell'array sono: ");
while (i < array.length) {
    console.log(array[i]);
    i = i + 1;
}

console.log("\n");

// Esercizio 2
// Stampare la somma di tutti gli elementi dell’ array
console.log("Esercizio 2 - Stampare la somma di tutti gli elementi dell’ array");
i = 0;
somma = 0;
while (i < array.length) {
    somma = somma + array[i];
    i = i + 1;
}
console.log("la somma è: " + somma);

console.log("\n");

// Esericizio 3
// Stampare la somma dei soli elementi dispari
console.log("Esercizio 3 - Stampare la somma dei soli elementi dispari");
i = 0;
sommad = 0;
while (i < array.length) {
    if (i % 2 != 0) {
        sommad = sommad + array[i];
    }
    i = i + 1;
}
console.log("la somma degli elementi dispari è: " + sommad);

console.log("\n");

// Esercizio 4
// Stampare la somma dei soli elementi in posizione pari
console.log("Esercizio 4 - Stampare la somma dei soli elementi in posizione pari");
i = 0;
sommap = 0;
while (i < array.length) {
    if (i % 2 == 0) {
        sommap = sommap + array[i];
    }
    i = i + 1;
}

console.log("la somma degli elementi pari è: " + sommap);

console.log("\n");

// Esercizio 5
// Stampare quante volte compare il numero 2
console.log("Esercizio 5 - Stampare quante volte compare il numero 2");
i = 0;
num2 = 0;

while (i < array.length) {
    if (array[i] == 2) {
        num2++;
    }
    i = i + 1;
}
console.log("il numero 2 è presente: " + num2 + " volte");

console.log("\n");

// Esercizio 6
// Stampare quanti numeri positivi (compreso lo zero) ci sono nell’array
console.log("Esercizio 6 - Stampare quanti numeri positivi (compreso lo zero) ci sono nell’array");
i = 0;

nump = 0;
i = 0;

while (i < array.length) {
    if (array[i] >= 0) {
        nump = nump + 1;
    }

    i = i + 1;
}

console.log("i numeri positivi(compreso lo zero) sono: " + nump);

console.log("\n");

// Esercizio 7
// Stampare il numero massimo
console.log("Esercizio 7 - Stampare il numero massimo");
max = 0;
i = 0;
while (i < array.length) {
    if (array[i] > max) {
        max = array[i];
    }

    i = i + 1;
}

console.log("il numero massimo è: " + max);

console.log("\n");

// Esercizio 8
// Stampare il numero minimo
console.log("Esercizio 8 - Stampare il numero minimo");
min = 0;
i = 0;
while (i < array.length) {
    if (array[i] < min) {
        min = array[i];
    }

    i = i + 1;
}

console.log("il numero minimo è: " + min);

console.log("\n");

// Esercizio 9
// Inserire in un nuovo array solo gli elementi negativi
console.log("Esercizio 9 - Inserire in un nuovo array solo gli elementi negativi");

i = 0;
numj = 0;

while (i < array.length) {
    if (array[i] < 0) {
        numj = numj + 1;
    }
    i = i + 1;
}

let arrayneg = new Array(numj);

i = 0;
j = 0;

while (i < array.length) {
    if (array[i] < 0) {
        arrayneg[j] = array[i];
        j = j + 1;
    }

    i = i + 1;
}

console.log("l'array di soli elementi negativi è: ");
i = 0;

while (i < arrayneg.length) {
    console.log(arrayneg[i]);
    i = i + 1;
}

console.log("\n");

// Esericizio 10
// Creare un nuovo array dove ogni elemento del nuovo
// è uguale al doppio di quello dato
console.log("Esercizio 10 - Creare un nuovo array dove ogni elemento del nuovo è uguale al doppio di quello dato");
i = 0;
long = array.length;

let arraydop = new Array(long);

while (i < array.length) {
    arraydop[i] = array[i] + array[i];
    i = i + 1;
}

console.log("l'array costituito da tutti gli elementi raddoppiati è: ");

i = 0;

while (i < arraydop.length) {
    console.log(arraydop[i]);
    i = i + 1;
}

console.log("\n");

// Esercizio 11
// Creare un nuovo array
// in cui inserisco due volte (una di seguito l’altra) l’array dato
console.log("Esercizio 11 - Creare un nuovo array in cui inserisco due volte (una di seguito l’altra) l’array dato");

i = 0;
j = 0;
k = 0;

long2 = array.length + array.length;

let duevolte = new Array(long2);

while (i < array.length) {
    duevolte[i] = array[i];
    i++;
}

j = i;
i = 0;

while (j < duevolte.length) {
    duevolte[j] = array[i];
    j = j + 1;
    i = i + 1;
}

console.log("L'array con due volte gli elementi di array è: ");

while (k < duevolte.length) {
    console.log(duevolte[k]);
    k = k + 1;
}

console.log("\n");

// Esercizio 12
// Stampare al contrario gli elementi dell’array
console.log("Esercizio 12 - Stampare al contrario gli elementi dell’array");

console.log("l'array stampato dalla fine all'inizio: ");

i = array.length - 1;

while (i >= 0) {
    console.log(array[i]);
    i = i - 1;
}

console.log("\n");

// Esercizio 13
// Creare un array3 con la somma degli elementi dell’array1 e dell’array2
console.log("Esercizio 13 - Creare un array3 con la somma degli elementi dell’array1 e dell’array2");

let array1 = [1, 2, 2, 3, 4];
let array2 = [4, 2, 2, 4];

/*
longarr = 0;
shortarr = 0;

if (array1.length >= array2.length) {
    longarr = array1.length;
    shortarr = array2.length;
} else {
    longarr = array2.length;
    shortarr = array1.length;
}

let array3 = new Array(longarr);

i = 0;

while (i < shortarr) {
    array3[i] = array1[i] + array2[i];
    i = i + 1;
}

if( array1.length == longarr )
{
    while( i < longarr )
    {
        array3[i] = array1[i]
    }
} 

console.log("array3, con gli elementi sommati di array1 e array2 è: ");

i = 0;

while (i < longarr) {
    console.log(array3[i]);
    i = i + 1;
}

*/

let array3 = [];
let array3Length = 0;

if (array1.length > array2.length) {
    array3Length = array1.length;
} else {
    array3Length = array2.lenghth;
}
for (let i = 0; i < array3Length; i++) {
    if (array1[i] != undefined && array2[i] != undefined) {
        array3.push(array1[i] + array2[i]);
    } else if (array1[i] == undefined && array2[i] != undefined) {
        array3.push(array2[i]);
    } else {
        array3.push(array1[i]);
    }
}
console.log(array3);

console.log("\n");

// Esericizio 14
// Creare un array3 con gli elementi (non la posizione) dispari
// di array1 e gli elementi pari di array2
console.log("Esercizio 14 - Creare un array3 con gli elementi (non la posizione) dispari di array1 e gli elementi pari di array2 ");

i = 0;

let lunghezza = 0;

while (i < array1.length) {
    if (array1[i] % 2 != 0) {
        lunghezza++;
    }
    i++;
}

i = 0;

while (i < array2.length) {
    if (array2[i] % 2 == 0) {
        lunghezza++;
    }
    i++;
}

let disppar = new Array(lunghezza - 1);

i = 0;
j = 0;

while (i < array1.length) {
    if (array1[i] % 2 != 0) {
        disppar[j] = array1[i];
        j++;
    }
    i++;
}

i = 0;

while (i < array2.length) {
    if (array2[i] % 2 == 0) {
        disppar[j] = array2[i];
        j++;
    }
    i++;
}

console.log("L'array con gli elementi dispari di array1 e pari di array2 è: ");
console.log(disppar);

console.log("\n");

// Esercizio 15 - Aggiornare l’array2 con elemento = il suo valore diviso il valore nella posizione
// lunghezza-posizione dell’array1
console.log("Esercizio 15 - Aggiornare l’array2 con elemento = il suo valore diviso il valore nella posizione lunghezza-posizione dell’array1");

console.log("da rivedere e completare");

console.log("\n");

// Esercizio 16 - Verificare se array1 e array2 dati sono palindromi
// come ad esempio “anna”, “radar”, “emme”, “1221”, “4224”
console.log("Esercizio 16 - Verificare se array1 e array2 dati sono palindromi come ad esempio anna, radar, emme, 1221, 4224");

i = 0;

let contr = 0;

while (i < array1.length) {
    if (array1[i] == array1[array1.lenght - 1 - i]) {
        contr = 1;
    } else {
        contr = 0;
    }

    i++;
}

if (contr == 1) {
    console.log("l'array 1 è palindromo");
} else {
    console.log("l'array 1 non è palindromo");
}

i = 0;

let ver = 0;

while (i < array2.length) {
    if (array2[i] == array2[array2.lenght - 1 - i]) {
        ver = 1;
    } else {
        ver = 0;
    }

    i++;
}

if (ver == 1) {
    console.log("l'array 2 è palindromo");
} else {
    console.log("l'array 2 non è palindromo");
}
