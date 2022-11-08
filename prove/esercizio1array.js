let array = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1];

//1
console.log(" 1) Stampa degli elementi dell array iniziale");

let i;
for (i = 0; i < array.length; i++) {
  console.log("Elemento in posizione " + i + ": " + array[i]);
}
console.log(array);

//2
console.log(" 2) Stampa della somma di tutti gli elementi dell array:");

let sum = 0;
for (i = 0; i < array.length; i++) {
  sum = sum + array[i];
}
console.log("La somma di tutti gli elementi dell array è: " + sum);

//3
console.log(" 3) Stampa della somma dei soli elementi dispari dell array:");

sum = 0;
for (i = 0; i < array.length; i++) {
  if (!(array[i] % 2 == 0)) {
    sum = sum + array[i];
  }
}
console.log("La somma di tutti gli elementi dispari dell array è: " + sum);

//4
console.log(" 4) Stampa della somma dei soli elementi in posizione pari dell array:");

sum = 0;
for (i = 0; i < array.length; i = i + 2) {
  sum = sum + array[i];
}
console.log("La somma di tutti gli elementi in posizione pari dell array è: " + sum);

//5
console.log(" 5) Stampa delle volte che il numero 2 compare nell array:");

let c = 0;
for (i = 0; i < array.length; i++) {
  if (array[i] == 2) {
    c++;
  }
}
console.log("Il numero di volte che il numero 2 appare è: " + c);

//6
console.log(" 6) Stampa delle volte che un numero positivo compare nell array (0 compreso):");

c = 0;
for (i = 0; i < array.length; i++) {
  if (array[i] >= 0) {
    c++;
  }
}
console.log("Il numero di volte che un numero positivo (0 compreso) appare nell array è: " +c);

//7
console.log(" 7) Stampa del numero massimo all'interno dell array");

let max = array[0];
for (i = 1; i < array.length; i++) {
  if (array[i] > max) {
    max = array[i];
  }
}
console.log("Il numero massimo dell array è: " + max);

//8
console.log(" 8) Stampa del numero minimo all'interno dell array");

let min = array[0];
for (i = 1; i < array.length; i++) {
  if (array[i] < min) {
    min = array[i];
  }
}
console.log("Il numero minimo dell array è: " + min);

//9
console.log(" 9) Inserimento e stampa degli elementi negativi in un nuovo array:");

let arrayneg = [];
let j = 0;
for (i = 0; i < array.length; i++) {
  if (array[i] < 0) {
    arrayneg[j] = array[i];
    j++;
  }
}
console.log("Stampa degli elementi nel nuovo array che contiene solo elementi negativi: ");

for (j = 0; j < arrayneg.length; j++) {
  console.log("Elemento in posizione " + j + ": " + arrayneg[j]);
}

console.log(arrayneg);

//10
console.log(" 10) Creazione e stampa del doppio di ogni elemento dell array iniziale:");

let arraydou = [];
for (i = 0; i < array.length; i++) {
  arraydou[i] = array[i] * 2;
}
console.log("Stampa degli elementi del nuovo array che contiene il doppio di ogni elemento dell array iniziale: ");

for (i = 0; i < arraydou.length; i++) {
    console.log("Elemento in posizione " + i + ": " + arraydou[i]);
}

console.log(arraydou);

//11
console.log(" 11) Creazione e stampa di un array che contiene 2 volte gli elementi dell array iniziale:");

let array2x = [];
for (i = 0; i < array.length*2; i++) {
    if (i<array.length) {
        array2x[i] = array[i];
    }else{
        array2x[i] = array[i-10];
    }
}
console.log("Stampa degli elementi del nuovo array che contiene 2 volte l array iniziale: ");

for (i = 0; i < array2x.length; i++) {
    console.log("Elemento in posizione " + i + ": " + array2x[i]);
}

console.log(array2x);

//12
console.log(" 12) Stampa al contrario dell array iniziale");

for (i = array.length-1; i >= 0; i--) {
  console.log("Elemento in posizione " + i + ": " + array[i]);
}