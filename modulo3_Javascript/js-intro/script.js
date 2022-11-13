mioarray = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1];
console.log(mioarray);

//OK Stampare la somma degli elementi in posizione pari
console.log("00. Stampare la somma degli elementi in posizione pari");
i = 0;
sommaposizionepari = 0;

while (i < mioarray.length) {
  console.log("l'indice è " + i);
  sommaposizionepari = sommaposizionepari + mioarray[i];
  console.log("la somma è " + sommaposizionepari);
  i = i + 2;
}


// OK 
// 1 - Stampare tutti gli elementi dell'array
console.log("01. Stampare tutti gli elementi dell'array");

for (i = 0; i < mioarray.length; i++) {
  console.log(mioarray[i]);
}


// OK 
// 2 - Stampare la somma di tutti gli elementi dell'array
console.log("02. Stampare la somma di tutti gli elementi dell'array");

sommaElementi = 0;
for (i = 0; i < mioarray.length; i++) {
  sommaElementi = sommaElementi + mioarray[i];
}
console.log(sommaElementi);



// OK
// 3 - Stampare la somma dei soli elementi dispari
console.log("03. Stampare la somma dei soli elementi dispari");

let sommadispari = 0;
for (i = 0; i < mioarray.length; i++) {
  if (
    mioarray[i] % 2 != 0) {
    sommadispari = sommadispari + mioarray[i];
  };
};
console.log("la somma dei numeri dispari è " + sommadispari);


// OK
// 4 - Stampare la somma dei soli elementi in posizione pari (14)
console.log("04.Stampare la somma dei soli elementi in posizione pari");
i = 0;
somma = 0;

while (i < mioarray.length) {
  if (i % 2 != 1) {
    somma = somma + mioarray[i]
  }

  i++;
}
console.log(somma)


// OK
// 5 - Stampare quante volte compare l'elemento 2
console.log("05. Stampare quante volte compare l'elemento 2");

quantidue = 0;
for (i = 0; i < mioarray.length; i++) {
  if (mioarray[i] === 2) {
    quantidue = quantidue + 1;
  };
};
console.log("il numero 2 compare " + quantidue + " volte");



// OK
// 6 - Stampare quanti numeri positivi (compreso lo zero) ci sono nell'array
console.log("06. Stampare quanti numeri positivi (compreso lo zero) ci sono nell'array");

numeripositivi = 0;
for (i = 0; i < mioarray.length; i++) {
  if (mioarray[i] >= 0) {
    numeripositivi = numeripositivi + 1;
  };
};
console.log("i numeri positivi sono " + numeripositivi);




// OK
// 7 - Stampare il numero massimo (con FOR)
console.log("07. Stampare il numero massimo");

max = 0;
for (i = 0; i < mioarray.length; i++) {
  if (
    max >= mioarray[i]) {
    max = max;
  } else {
    max = mioarray[i];
  };
};
console.log("il numero massimo è " + max);


// OK
// 8 - Stampare il numero minimo (con WHILE)
console.log("08. Stampare il numero minimo");

min = 0;
i = 0
while (i < mioarray.length) {
  if (min <= mioarray[i]) {
    min = min
  } else {
    min = mioarray[i];
  };
  i++;
};
console.log("il numero minimo è " + min);



// OK senza push
// 9/a - Inserire in un nuovo array solo gli elementi negativi
console.log("09/a. Inserire in un nuovo array solo gli elementi negativi");

nuovoarray = [];
nuovoindice = 0;
for (i = 0; i < mioarray.length; i++) {
  if (mioarray[i] < 0) {
    nuovoarray[nuovoindice] = mioarray[i];
    nuovoindice++;
  };
};
console.log(nuovoarray);


// OK usando PUSH (e FOR)
// 9/b - Inserire in un nuovo array solo gli elementi negativi
console.log("09/b. Inserire in un nuovo array solo gli elementi negativi");

nuovoarray = [];
for (i = 0; i < mioarray.length; i++) {
  if (mioarray[i] < 0) {
    nuovoarray.push(mioarray[i]);
  }
}
console.log(nuovoarray);


// OK usando PUSH (e WHILE)
// 9/c - Inserire in un nuovo array solo gli elementi negativi
console.log("09 /b.Inserire in un nuovo array solo gli elementi negativi");

nuovoarray = [];
i = 0;
while (i < mioarray.length) {
  if (mioarray[i] < 0) {
    nuovoarray.push(mioarray[i]);
  }
  i++;
}
console.log(nuovoarray);


// ok ma NON un array
// 10/a - calcola il doppio di ogni elemento
console.log("10/a. Calcola il doppio di ogni elemento - NON array");

doppio = 0;
for (i = 0; i < mioarray.length; i++) {
  doppio = mioarray[i] * 2;
  console.log("il doppio di " + mioarray[i] + " è " + doppio);
}


// OK senza push, senza variabile nuovo indice (tanto è "OGNI" valore dell'array)
// 10/b - Creare un nuovo array dove ogni elemento del nuovo è uguale al doppio di quello dato
console.log("10/b. Creare un nuovo array dove ogni elemento del nuovo è uguale al doppio di quello dato");

arraydoppio = [];
doppio = 0;
for (i = 0; i < mioarray.length; i++) {
  doppio = mioarray[i] * 2;
  arraydoppio[i] = doppio;
};
console.log(arraydoppio);



// OK senza push, con variabile NUOVO INDICE
// 10/c - Creare un nuovo array dove ogni elemento del nuovo è uguale al doppio di quello dato
console.log("10/c. Creare un nuovo array dove ogni elemento del nuovo è uguale al doppio di quello dato");

arrayDoppi = [];
nuovoindice = 0;
for (i = 0; i < mioarray.length; i++) {
  arrayDoppi[nuovoindice] = mioarray[i] * 2;
  nuovoindice++;
};
console.log(arrayDoppi);

// OK con PUSH
// 10/d - Creare un nuovo array dove ogni elemento del nuovo è uguale al doppio di quello dato
console.log("10/d. con PUSH");

nuovoarray = [];
for (i = 0; i < mioarray.length; i++) {
  nuovoarray.push(mioarray[i] * 2);
};
console.log(nuovoarray);



// OK
// 11 - Creare un nuovo array in cui inserisco due volte (una di seguito all'altra) l'array dato
console.log("11. Creare un nuovo array in cui inserisco due volte (una di seguito all'altra) l'array dato");

i = 0;
let arraydouble = [];
while (i < mioarray.length) {
  arraydouble[i] = mioarray[i]; // stessi elementi
  arraydouble[i + mioarray.length] = mioarray[i]; // aggiungo 10 alla numerazione dell'indice per gli ulteriori elementi.
  i++;
}
console.log(arraydouble);


// da DIANA:
// 11 - metodo bello
console.log("11. Metodo bello ...array");

arraydoppio = [...mioarray, ...mioarray];
console.log(arraydoppio);

// da DIANA:
// 11 - metodo ok 2
i = 0;
arraydoppio = []
while (i < mioarray.length) {
  // a = b = 2
  // arraydoppio[0] = arraydoppio[10+0] = amiorray[0]
  // arraydoppio[0] = arraydoppio[10] = 2
  arraydoppio[i] = arraydoppio[mioarray.length + i] = mioarray[i]
  i++;
}
console.log(arraydoppio)



// OK - NO array (giusto così)
// 12a - Stampare al contrario gli elementi dell'array -  
console.log("12a. Stampare al contrario gli elementi dell'array: [1, 5, 2, 0, -3, -2, 10, 9, 6, 2];")

mioarray = [1, 5, 2, 0, -3, -2, 10, 9, 6, 2];

alContrario = "";
for (i = 0; i < mioarray.length; i++) {
  alContrario = mioarray[i] + " " + alContrario;
}
console.log(alContrario);



// OK
// Contare quante parole di 4 lettere ci sono nel nostro array
console.log("Contare quante parole di 4 lettere ci sono nel nostro array")

mioarray = ["gatto", "cane", "coniglio", "topo"];
i = 0;
let conteggio = 0;
while (i < mioarray.length) {
  if (mioarray[i].length == 4) {
    conteggio = conteggio + 1;
  };
  i++;
};
console.log("Ci sono " + conteggio + " parole di quattro lettere");



// 13. Versione Diana
// Creare un array3 con la somma degli elementi dell'array1 e dell'array2 [5, 4, 4, 7, 4]
let array1 = [1, 2, 2, 3, 4];
let array2 = [4, 2, 2, 4];

console.log("13. Creare un array3 con la somma degli elementi dell'array1 [1, 2, 2, 3, 4] e dell'array2 [4, 2, 2, 4]");

i = 0;
let indicearray3 = 0;
let array3 = [];

while (i < array1.length || i < array2.length) { // lunghezza maggiore
  array3[i] = 0;
  if (array1[i]) { // se esiste
    array3[i] = array3[i] + array1[i]; 
  }
  if (array2[i]) {
    array3[i] = array3[i] + array2[i];
  }
  i++;
}
console.log(array3); // [5, 4, 4, 7, 4]




// OK
// 14 - Creare un array3 con gli elementi (non la posizione) dispari di array1 e gli elementi pari di array2
console.log("14. Creare un array3 con gli elementi(non la posizione) dispari di array1 e gli elementi pari di array2: versione1 [1,3,4,2,2,4] 	versione2 [1,4,2,2,3,4]");

array3 = [];
j = 0;
i = 0;
while (i < array1.length || i < array2.length) {
  if (array1[i] % 2 != 0) {
    array3[j] = array1[i];
    j++;
  };
  if (array2[i] % 2 == 0) {
    array3[j] = array2[i];
    j++;
  };
  i++;
};
console.log(array3); // versione 2: [1,4,2,2,3,4]



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


// OK
// Verificare se gli array sono palindromi come ad esempio anna, radar, emme
console.log("16) Verificare se un array è palindromo");
//mioarray = [1, 2, 2, 3, 4];
mioarray = [4, 2, 2, 4];

n = 0;
i = 0;
while (i < Math.round(mioarray.length) / 2) {
  if (mioarray[i] === mioarray[mioarray.length - (i + 1)]) {
    n = n + 1;
  };
  i++;
};
if (n === Math.round(mioarray.length / 2)) {
  console.log("l'array " + mioarray + " è palindromo")
} else {
  console.log("l'array " + mioarray + " non è palindromo")
};


// IDEM, con il FOR:

n = 0;
i = 0;
for (i = 0; i < Math.round(mioarray.length / 2); i++) {
  if (mioarray[i] === mioarray[mioarray.length - (i + 1)]) {
    n++;
  };
};
if (n === Math.round(mioarray.length / 2)) {
  console.log("l'array " + mioarray + " è palindromo")
} else {
  console.log("l'array " + mioarray + " non è palindromo")
};





