mioArray = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1];
console.log(mioArray);

//OK Stampare la somma degli elementi in posizione pari
console.log("00. Stampare la somma degli elementi in posizione pari");
i = 0;
sommaPosizionePari = 0;

while (i < mioArray.length) {
  console.log("l'indice è " + i);
  sommaPosizionePari = sommaPosizionePari + mioArray[i];
  console.log("la somma è " + sommaPosizionePari);
  i = i + 2;
}




//OK Stampare tutti gli elementi dell'array
console.log("01. Stampare tutti gli elementi dell'array");

for (i = 0; i < mioArray.length; i++) {
  console.log(mioArray[i]);
}


//OK Stampare la somma di tutti gli elementi dell'array
console.log("02. Stampare la somma di tutti gli elementi dell'array");

sommaElementi = 0;
for (i = 0; i < mioArray.length; i++) {
  sommaElementi = sommaElementi + mioArray[i];
}
console.log(sommaElementi);



// OK Stampare la somma dei soli elementi dispari
// Stampare la somma dei soli elementi dispari
console.log("03. Stampare la somma dei soli elementi dispari");

let sommaDispari = 0;
for (i = 0; i < mioArray.length; i++) {
  if (
    mioArray[i] % 2 != 0) {
    sommaDispari = sommaDispari + mioArray[i];
  };
};
console.log("la somma dei numeri dispari è " + sommaDispari);


// Stampare quante volte compare l'elemento 2
// OK
console.log("04. Stampare quante volte compare l'elemento 2");

quantiDue = 0;
for (i = 0; i < mioArray.length; i++) {
  if (mioArray[i] === 2) {
    quantiDue = quantiDue + 1;
  };
};
console.log("il numero 2 compare " + quantiDue + " volte");



// OK
// Stampare quanti numeri positivi (compreso lo zero) ci sono nell'array
console.log("05. Stampare quanti numeri positivi (compreso lo zero) ci sono nell'array");

numeriPositivi = 0;
for (i = 0; i < mioArray.length; i++) {
  if (mioArray[i] >= 0) {
    numeriPositivi = numeriPositivi + 1;
  };
};
console.log("i numeri positivi sono " + numeriPositivi);





// OK
// Stampare il numero massimo (con FOR)
console.log("07. Stampare il numero massimo");

numeroMassimo = 0;
for (i = 0; i < mioArray.length; i++) {
  if (
    numeroMassimo >= mioArray[i]) {
    numeroMassimo = numeroMassimo;
  } else {
    numeroMassimo = mioArray[i];
  };
};
console.log("il numero massimo è " + numeroMassimo);


// OK
// Stampare il numero minimo (con WHILE)
console.log("08. Stampare il numero minimo");

numeroMinimo = 0;
i = 0
while (i < mioArray.length) {
  if (numeroMinimo <= mioArray[i]) {
    numeroMinimo = numeroMinimo
  } else {
    numeroMinimo = mioArray[i];
  };
  i++;
};
console.log("il numero minimo è " + numeroMinimo);



// OK senza push
// Inserire in un nuovo array solo gli elementi negativi
console.log("09/a. Inserire in un nuovo array solo gli elementi negativi");

arrayConNegativi = [];
indiceNuovoArray = 0;
for (i = 0; i < mioArray.length; i++) {
  if (mioArray[i] < 0) {
    arrayConNegativi[indiceNuovoArray] = mioArray[i];
    indiceNuovoArray++;
  };
};
console.log(arrayConNegativi);


// OK usando PUSH (e FOR)
// Inserire in un nuovo array solo gli elementi negativi
console.log("09/b. Inserire in un nuovo array solo gli elementi negativi");

numNegativi = [];
for (i = 0; i < mioArray.length; i++) {
  if (mioArray[i] < 0) {
    numNegativi.push(mioArray[i]);
  }
}
console.log(numNegativi);


// OK usando PUSH (e WHILE)
// Inserire in un nuovo array solo gli elementi negativi
console.log("09 /b.Inserire in un nuovo array solo gli elementi negativi");

numNegativi = [];
i = 0;
while (i < mioArray.length) {
  if (mioArray[i] < 0) {
    numNegativi.push(mioArray[i]);
  }
  i++;
}
console.log(numNegativi);


// ok ma NON un array
// calcola il doppio di ogni elemento
console.log("10/a. Calcola il doppio di ogni elemento");

doppio = 0;
for (i = 0; i < mioArray.length; i++) {
  doppio = mioArray[i] * 2;
  console.log("il doppio di " + mioArray[i] + " è " + doppio);
}


// OK senza push, senza variabile nuovo indice (tanto è "OGNI" valore dell'array)
// Creare un nuovo array dove ogni elemento del nuovo è uguale al doppio di quello dato
console.log("10/b. Creare un nuovo array dove ogni elemento del nuovo è uguale al doppio di quello dato");

arrayDoppio = [];
doppio = 0;
for (i = 0; i < mioArray.length; i++) {
  doppio = mioArray[i] * 2;
  arrayDoppio[i] = doppio;
};
console.log(arrayDoppio);



// OK senza push, con variabile NUOVO INDICE
// Creare un nuovo array dove ogni elemento del nuovo è uguale al doppio di quello dato
console.log("10/c. Creare un nuovo array dove ogni elemento del nuovo è uguale al doppio di quello dato");

arrayDoppi = [];
indiceNuovoArray = 0;
for (i = 0; i < mioArray.length; i++) {
  arrayDoppi[indiceNuovoArray] = mioArray[i] * 2;
  indiceNuovoArray++;
};
console.log(arrayDoppi);




//
// Creare un nuovo array in cui inserisco due volte (una di seguito all'altra) l'array dato
console.log("11. Creare un nuovo array in cui inserisco due volte (una di seguito all'altra) l'array dato");

i = 0;
let arrayDuevolte = [];
while (i < mioArray.length) {
  arrayDuevolte[i] = mioArray[i]; // stessi elementi
  arrayDuevolte[i + mioArray.length] = mioArray[i]; // aggiungo 10 alla numerazione dell'indice per gli ulteriori elementi.
  i++;
}
console.log(arrayDuevolte);



// ok
// Stampare l'array con gli elementi al contrario - elenco NON in un array
console.log("12a. Stampare al contrario gli elementi dell'array:[1, 5, 2, 0, -3, -2, 10, 9, 6, 2]");

mioArray = [1, 5, 2, 0, -3, -2, 10, 9, 6, 2];

alContrario = "";
for (i = 0; i < mioArray.length; i++) {
  alContrario = mioArray[i] + " " + alContrario;
}
console.log(alContrario);




// OK
// Stampare l'array con gli elementi al contrario usando: (i < array)

console.log("12b. Stampare l'array con gli elementi al contrario");
i = 0;
while (i < mioArray.length) {
  i = i + 1;
};
console.log(mioArray);


// OK
// Stampare l'array con gli elementi al contrario usando: (i >= 0)

console.log("12c. Stampare l'array con gli elementi al contrario");
i = mioArray.length - 1; // l'indice di 10 elementi parte da 0 e arriva a 9
console.log("numero di elementi dell'array: " + mioArray.length);
while (i >= 0) {
  i = i - 1;
};
console.log(mioArray);


// OK
// Contare quante parole di 4 lettere ci sono nel nostro array
console.log("Contare quante parole di 4 lettere ci sono nel nostro array")

mioArray = ["gatto", "cane", "coniglio", "topo"];
i = 0;
let conteggio = 0;
while (i < mioArray.length) {
  if (mioArray[i].length == 4) {
    conteggio = conteggio + 1;
  };
  i++;
};
console.log("Ci sono " + conteggio + " parole di quattro lettere");



// 13. Versione Diana
// Creare un array3 con la somma degli elementi dell'array1 e dell'array2 [5, 4, 4, 7, 4]
let array1 = [1, 2, 2, 3, 4];
let array2 = [4, 2, 2, 4];

console.log("13) Creare un array3 con la somma degli elementi dell'array1 e dell'array2 [5, 4, 4, 7, 4]");

i = 0;
let indicearray3 = 0;
let array3 = [];

while (i < array1.length || i < array2.length) {
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





// 14. versione Diana
// Creare un array3 con gli elementi (non la posizione) dispari di array1 e gli elementi pari di array2
console.log("14) Creare un array3 con gli elementi(non la posizione) dispari di array1 e gli elementi pari di array2: versione1 [1,3,4,2,2,4] 	versione2 [1,4,2,2,3,4]");

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
console.log(array3); //[1,3,4,2,2,4]

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

console.log(array3); //[1,4,2,2,3,4]





// 15. Versione Diana
// Aggiornare l'array2 con elemento = il suo valore diviso il valore nella posizione lunghezza-posizione dell'array1
console.log("15) Aggiornare l'array2 con elemento = il suo valore diviso il valore nella posizione lunghezza-posizione dell'array1");

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


// Versione Diana
// Verificare se gli array sono palindromi come ad esempio anna, radar, emme
console.log("16) Verificare se gli array sono palindromi come ad esempio anna, radar, emme");

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