let array = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1];

console.log(array);

let i;
// 1 - Stampare tutti gli elementi dell’array → 2, 6, 9, 10, -2, -3, 0, 2, 5, 1
// 2 - Stampare la somma di tutti gli elementi dell’ array → 30
// 3 - Stampare la somma dei soli elementi dispari → 12
// 4 - Stampare la somma dei soli elementi in posizione pari  → 14
// 5 - Stampare quante volte compare il numero 2 → 2
// 6 - Stampare quanti numeri positivi (compreso lo zero) ci sono nell’array → 8
// 7 - Stampare il numero massimo (senza usare funzioni matematiche) → 10
// 8 - Stampare il numero minimo → -3
// 9 - Inserire in un nuovo array solo gli elementi negativi 🤯 → [-2, -3]
// 10 - Creare (e stampare) un nuovo array dove ogni elemento del nuovo è uguale al doppio di quello dato 🤯 → [4, 12, 18, 20, -4, -6, 0, 4, 10, 2]
// 11 - Creare (e stampare) un nuovo array in cui inserisco due volte (una di seguito l’altra) l’array dato 🤯 🤯 → [2, 6, 9, 10, -2, -3, 0, 2, 5, 1, 2, 6, 9, 10, -2, -3, 0, 2, 5, 1]
// 12 - Stampare al contrario gli elementi dell’array → [1, 5, 2, 0, -3, -2, 10, 9, 6, 2] 🙂

// 13 - Creare un array3 con la somma degli elementi dell’array1 e dell’array2
console.log("-- 13 --");
i = 0;
let indicearray3 = 0;
let array3 = [];
let array1 = [1, 2, 2, 3, 4, 6, 4];
let array2 = [4, 2, 2, 4];

while (i < array1.length || i < array2.length) {
    console.log("i =" + i);
    array3[i] = 0;
    if (array1[i]) {
        array3[i] = array3[i] + array1[i];
    }
    if (array2[i]) {
        array3[i] = array3[i] + array2[i];
    }
    i++;
}

console.log(array3);

// 14 - Creare un array3 con gli elementi (non la posizione) dispari di array1 e gli elementi pari di array2 → versione1 [1,3,4,2,2,4] 	versione2 [1,4,2,2,3,4]
console.log("-- 14 --");
array1 = [1, 2, 2];
array2 = [4, 2, 2, 4];
i = 0;
array3 = [];
indicearray3 = 0;
// versione 1
while (i < array1.length) {
    if (array1[i] % 2 == 1) {
        array3[indicearray3] = array1[i];
        indicearray3++;
    }
    i++;
}
i = 0;
while (i < array2.length) {
    if (array2[i] % 2 == 0) {
        array3[indicearray3] = array2[i];
        indicearray3++;
    }
    i++;
}
console.log("versione 1");
console.log(array3);

//versione 2
i = 0;
array3 = [];
indicearray3 = 0;
while (i < array1.length || i < array2.length) {
    if (array1[i] % 2 == 1) {
        array3[indicearray3] = array1[i];
        indicearray3++;
    }
    if (array2[i] % 2 == 0) {
        array3[indicearray3] = array2[i];
        indicearray3++;
    }
    i++;
}

console.log("versione 2");
console.log(array3);

// 15 - Aggiornare l’array2 con elemento = il suo valore diviso il valore nella posizione lunghezza-posizione dell’array1
console.log("-- 15 --");
array1 = [1, 2, 2, 3, 4];
array2 = [4, 2, 2, 4];
i = 0;
while (i < array2.length) {
    if (array1.length >= array2.length) {
        array2[i] = array2[i] / array1[array2.length - i];
    }

    // 0 -> 4 / array1[4 - 0]
    // 1 -> 2 / array1[4 - 1]
    // 2 -> 2 / array1[4 - 2]
    // 3 -> 4 / array1[4 - 3]

    console.log(array2[i]);
    i++;
}

// 16 - Verificare se gli array sono palindromi come ad esempio “anna”, “radar”, “emme”
console.log("-- 16 --");
array2 = [4, 2, 2, 4];
// array2 = [4, 2, 3, 2, 4];
i = 0;
cont = 0;
// array.lenght = 4 / 2
// i = 0 -> 4 == 4
// i = 1 -> 2 == 2
// array1 = [4, 2, 3, 2, 4]
// array.lenght = 5 / 2 = 2
// i = 0 -> 4 == 4 cont = 1
// i = 1 -> 2 == 2 cont = 2
while (i < Math.floor(array2.length) / 2) {
    // se lunghezza è pari
    if (array2[i] === array2[array2.length - i - 1]) {
        cont++;
    }
    i++;
}

if (cont == array2.length / 2 || cont == Math.floor(array2.length / 2) + 1) {
    console.log("è palindromo");
} else {
    console.log("non è palindromo");
}
