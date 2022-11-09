mioArray = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1];
console.log(mioArray);

//ok
console.log("00. Stampare la somma degli elementi in posizione pari");
i = 0;
sommaPosizionePari = 0;

while (i < mioArray.length) {
  console.log("l'indice è " + i);
  sommaPosizionePari = sommaPosizionePari + mioArray[i];
  console.log("la somma è " + sommaPosizionePari);
  i = i + 2;
}




//ok
console.log("01. Stampare tutti gli elementi dell'array");

for (i = 0; i < mioArray.length; i++) {
  console.log(mioArray[i]);
}




//ok
console.log("02. Stampare la somma di tutti gli elementi dell'array");

sommaElementi = 0;
for (i = 0; i < mioArray.length; i++) {
  sommaElementi = sommaElementi + mioArray[i];
}
console.log(sommaElementi);





//ok
console.log("03. Stampare la somma dei soli elementi dispari");

let sommaDispari = 0;
for (i = 0; i < mioArray.length; i++) {
  if (
    mioArray[i] % 2 != 0) {
    sommaDispari = sommaDispari + mioArray[i];
  };
};
console.log("la somma dei numeri dispari è " + sommaDispari);






//ok
console.log("04. Stampare quante volte compare l'elemento 2");

quantiDue = 0;
for (i = 0; i < mioArray.length; i++) {
  if (mioArray[i] === 2) {
    quantiDue = quantiDue + 1;
  };
};
console.log("il numero 2 compare " + quantiDue + " volte");






//ok
console.log("05. Stampare quanti numeri positivi (compreso lo zero) ci sono nell'array");

numeriPositivi = 0;
for (i = 0; i < mioArray.length; i++) {
  if (mioArray[i] >= 0) {
    numeriPositivi = numeriPositivi + 1;
  };
};
console.log("i numeri positivi sono " + numeriPositivi);





//ok
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





//ok (usando però il while)
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





//ok senza push
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



//ok usando push
console.log("09/b. Inserire in un nuovo array solo gli elementi negativi");

numNegativi = [];
for (i = 0; i < mioArray.length; i++) {
  if (mioArray[i] < 0) {
    numNegativi.push(mioArray[i]);
  }
}
console.log(numNegativi);


//usando push e while
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



//ok
console.log("10/a. calcola il doppio di ogni elemento");

doppio = 0;
for (i = 0; i < mioArray.length; i++) {
  doppio = mioArray[i] * 2;
  console.log("il doppio di " + mioArray[i] + " è " + doppio);
}

//ok? senza push
console.log("10/b. Creare un nuovo array dove ogni elemento del nuovo è uguale al doppio di quello dato");

arrayDoppio = [];
doppio = 0;
for (i = 0; i < mioArray.length; i++) {
  doppio = mioArray[i] * 2;
  arrayDoppio[i] = doppio;
};
console.log(arrayDoppio);


//ok senza push con variabile nuovo indice
console.log("10/c. Creare un nuovo array dove ogni elemento del nuovo è uguale al doppio di quello dato");

arrayConDoppi = [];
indiceNuovoArray = 0;
for (i = 0; i < mioArray.length; i++) {
  arrayConDoppi[indiceNuovoArray] = 2 * mioArray[i];
  indiceNuovoArray++;
};
console.log(arrayConDoppi);







//no
console.log("11. Creare un nuovo array in cui inserisco due volte (una di seguito all'altra) l'array dato");

doppioArray = [];
nuovoIndice = 0;
i = 0;

doppioArray = mioArray.push(mioArray);

console.log(doppioArray);
console.log(mioArray);



// 12a ok - ma non in un array
console.log("12a. Stampare al contrario gli elementi dell'array:[1, 5, 2, 0, -3, -2, 10, 9, 6, 2]");

mioArray = [1, 5, 2, 0, -3, -2, 10, 9, 6, 2];

alContrario = "";
for (i = 0; i < mioArray.length; i++) {
  alContrario = mioArray[i] + " " + alContrario;
}
console.log(alContrario);




// 12b OK
// Stampare l'array con gli elementi al contrario usando: (i < array)

console.log("12b. Stampare l'array con gli elementi al contrario");
i = 0;
while (i < mioArray.length) {
  i = i + 1;
};
console.log(mioArray);


// 12c OK
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



//quanto è lungo il nostro array?
// console.log(indice);



// array1 = [1, 2, 2, 3, 4];
// array2 = [4, 2, 2, 4];

// console.log("13) Creare un array3 con la somma degli elementi dell'array1 e dell'array2 [5, 4, 4, 7, 4]");

// indiceNuovoArray = 0;
// nuovoArray = [];
// for (i = 0; i < array1.lentgh; i++);





// console.log("14) Creare un array3 con gli elementi (non la posizione) dispari di array1 e gli elementi pari di array2: versione1 [1,3,4,2,2,4] 	versione2 [1,4,2,2,3,4]");

// console.log("15) Aggiornare l'array2 con elemento = il suo valore diviso il valore nella posizione lunghezza-posizione dell'array1");

// console.log("16) Verificare se gli array sono palindromi come ad esempio anna, radar, emme");








