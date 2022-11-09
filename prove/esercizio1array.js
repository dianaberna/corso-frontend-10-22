let array = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1];

//1
console.log(" 1) Stampa degli elementi dell array iniziale");

let i;
for (i = 0; i < array.length; i++) {
  console.log("Elemento in posizione " + i + ": " + array[i]);
}
console.log(array);

console.log(" ");

//2
console.log(" 2) Stampa della somma di tutti gli elementi dell array:");

let sum = 0;
for (i = 0; i < array.length; i++) {
  sum = sum + array[i];
}
console.log("La somma di tutti gli elementi dell array è: " + sum);

console.log(" ");

//3
console.log(" 3) Stampa della somma dei soli elementi dispari dell array:");

sum = 0;
for (i = 0; i < array.length; i++) {
  if (!(array[i] % 2 == 0)) {
    sum = sum + array[i];
  }
}
console.log("La somma di tutti gli elementi dispari dell array è: " + sum);

console.log(" ");

//4
console.log(" 4) Stampa della somma dei soli elementi in posizione pari dell array:");

sum = 0;
for (i = 0; i < array.length; i = i + 2) {
  sum = sum + array[i];
}
console.log("La somma di tutti gli elementi in posizione pari dell array è: " + sum);

console.log(" ");

//5
console.log(" 5) Stampa delle volte che il numero 2 compare nell array:");

let c = 0;
for (i = 0; i < array.length; i++) {
  if (array[i] == 2) {
    c++;
  }
}
console.log("Il numero di volte che il numero 2 appare è: " + c);

console.log(" ");

//6
console.log(" 6) Stampa delle volte che un numero positivo compare nell array (0 compreso):");

c = 0;
for (i = 0; i < array.length; i++) {
  if (array[i] >= 0) {
    c++;
  }
}
console.log("Il numero di volte che un numero positivo (0 compreso) appare nell array è: " +c);

console.log(" ");

//7
console.log(" 7) Stampa del numero massimo all'interno dell array");

let max = array[0];
for (i = 1; i < array.length; i++) {
  if (array[i] > max) {
    max = array[i];
  }
}
console.log("Il numero massimo dell array è: " + max);

console.log(" ");

//8
console.log(" 8) Stampa del numero minimo all'interno dell array");

let min = array[0];
for (i = 1; i < array.length; i++) {
  if (array[i] < min) {
    min = array[i];
  }
}
console.log("Il numero minimo dell array è: " + min);

console.log(" ");

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

console.log(" ");

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

console.log(" ");

//11
console.log(" 11) Creazione e stampa di un array che contiene 2 volte gli elementi dell array iniziale:");

let array2x = [];
for (i = 0; i < array.length; i++) {
    array2x[i] = array[i];
    array2x[i+array.length] = array[i];
    //array.concat(array);
}
console.log("Stampa degli elementi del nuovo array che contiene 2 volte l array iniziale: ");

for (i = 0; i < array2x.length; i++) {
    console.log("Elemento in posizione " + i + ": " + array2x[i]);
}

console.log(array2x);

console.log(" ");

//12
console.log(" 12) Stampa al contrario dell array iniziale");

for (i = array.length-1; i >= 0; i--) {
  console.log("Elemento in posizione " + i + ": " + array[i]);
}

console.log(" ");

//13
console.log(" 13) Creazione di un array3 con la somma degli elementi dell’array1 e dell’array2");

let array1=[1, 2, 2, 3, 4];
let array2=[4, 2, 2, 4];

let array3=[];

//prima   verificare quale dei due array è maggiore 

for (i = 0; i < array1.length; i++) {
  if (i < array2.length) {
    array3[i]=array1[i]+array2[i];
  }else{
    array3[i]=array1[i];
  }
}
console.log("Stampa degli elementi dell array 3");


for (i = 0; i < array3.length; i++) {
  console.log("Elemento in posizione " + i + ": " + array3[i]);
}

console.log(array3);

console.log(" ");

//14
console.log(" 14) Creare un array3 con gli elementi dispari di array1 e gli elementi pari di array2");

array3=[];

for (i = 0; i < array1.length; i++) {
  if (array1[i]%2!=0) {
    array3.push(array1[i]);
  }

  if (array2[i]%2==0) {
    array3.push(array2[i]);
  }
}
console.log("Stampa degli elementi dell array 3");

for (i = 0; i < array3.length; i++) {
  console.log("Elemento in posizione " + i + ": " + array3[i]);
}

console.log(array3);

console.log(" ");

//15
console.log(" 15) Aggiornare l array2, facendo in modo che ogni elemento dell array2 sarà uguale all'attuale elemento, diviso l'elemento nella stessa posizione nell array1 ");

for ( i = 0; i < array2.length; i++) {
  if (i!=0) {
    array2[i]=array2[i]/array1[array1.length-i];
  }
}
console.log("Stampa degli elementi dell array 2");

for (i = 0; i < array2.length; i++) {
  console.log("Elemento in posizione " + i + ": " + array2[i]);
}

console.log(array2);

console.log(" ");

//16
console.log(" 16) Verificare se gli array sono palindromi");

let bool=true;

console.log("Controllo palindromo per array1:");

i=0;
while (i<array1.length/2 && bool==true) {
  if (i==0) {
    if (array1[0]!=array1[array1.length-1]) {
      bool=false;
    }
  }else{
    if (array1[i]!=array1[array1.length-(i+1) ]) {
      bool=false;
    }
  }
  i++;
} 

if (bool==true) {
  console.log("Array1 è palindromo");ù
  console.log(array1);
}else{
  console.log("Array1 non è palindromo");
  console.log(array1);
}

console.log("Controllo palindromo per array2:");
array2=[4, 2, 1, 2, 4];

i=0;
bool=true;
while (i<array2.length/2 && bool==true) {
  if (i==0) {
    if (array2[0]!=array2[array2.length-1]) {
      bool=false;
    }
  }else{
    if (array2[i]!=array2[array2.length-(i+1) ]) {
      bool=false;
    }
  }
  i++;
} 

if (bool==true) {
  console.log("Array2 è palindromo");
  console.log(array2);
}else{
  console.log("Array2 non è palindromo");
  console.log(array2);
}

