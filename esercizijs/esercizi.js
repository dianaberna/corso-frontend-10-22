// Stampare tutti gli elementi dell’array 
array =[ 2, 6, 9, 10, -2, -3, 0, 2, 5, 1];
console.log(array);
console.log(array.length);
let i = 0
while (i<array.length) {
  console.log (array[i]);
  i= i+1;  
}

// Stampare la somma di tutti gli elementi dell’ array 
let somma = 0
i = 0
while (i<array.length ) {
    somma = somma + array[i];
    i= i+1;
}

// Stampare la somma dei soli elementi dispari 
console.log (somma);

let sommadispari = 0
i= 0
while (i<array.length ) {
    if (array[i]%2!=0) {
        sommadispari = sommadispari + array [i]
    }
    i= i+1;
}
console.log (sommadispari);

//ES. 4 Stampare la somma dei soli numeri in posizione pari
i = 0;
sommaposizionepari = 0;
while(i < array.length){
  sommaposizionepari = sommaposizionepari + array[i];
  i = i+2;
}
console.log("Es. 4) La somma dei numeri contenti in posizione pari è: "+sommaposizionepari);

//Es. 5 Stampare quante volte compare il numero 2
i = 0;
n = 0;
while(i < array.length){
  if(array[i]==2){
    n++;
  }
  i++;
}
console.log("Es. 5) Il numero 2 compare "+n+" volte nell'array");

//Es. 6 Stampare quanti numeri positivi (compreso zero) ci sono nell'array
i = 0;
n = 0;
while(i < array.length){
  if(array[i] % 2 == 0 || array[i] == 0){
    n++;
  }
  i++;
}
console.log("Es. 6) I numeri pari contenuti nell'array sono: "+n);

//Es. 7 Stampare il numero massimo
i = 0;
max = 0;
while(i < array.length){
  if(array[i] > max){
    max = array[i];
  }
  i++;
}
console.log("Es. 7) Il numero massimo contenuto nell'array è: "+max);

//ES. 8 Stampare il numero minimo
i = 0;
min = 0;
while(i < array.length){
  if(array[i] < min){
    min = array[i];
  }
  i++;
}
console.log("Es. 8) Il numero minimo contenuto nell'array è: "+min);

//Es. 9 Inserire in un nuovo array solo gli elementi negativi
i = 0;
j = 0;
let array_negativi = [];
while(i < array.length){
  if(array[i] < 0){
    array_negativi[j] = array[i];
    j++;
  }
  i++;
}
console.log("Es. 9) Il nuovo array di elementi negativi è composto da: "+array_negativi);

//Es. 10 Creare un nuovo array dove ogni elemento del nuovo è uguale al doppio di quello dato
let array_doppio = [];
for(i=0; i<array.length; i++){
  if(array[i] == 0){
    array_doppio[i] = array[i];
  }else{
    array_doppio[i] = array[i]*2;
  }
}
console.log("Es. 10) Il nuovo array in cui gli elementi sono il doppio del primo array è composto da: "+array_doppio);

//Es. 11 Creare un nuovo array in cui inserisco due volte (una di seguito all'altra) l'array dato
let array_ripetuto = [];
for(i=0, j=array.length; i<array.length; i++, j++){
  array_ripetuto[i] = array[i];
  array_ripetuto[j] = array[i];
}
console.log("Es. 11) Il nuovo array con gli elementi del primo array ripetuti è composto da: "+array_ripetuto);

//Es. 12 Stampare al contrario gli elementi dell'array
i = array.length-1;
j = 0;
array_alcontrario = [];
while(i >= 0){
  array_alcontrario[j] = array[i];
  i--;
  j++;
}
console.log("Es. 12) Gli elementi dell'array disposti al contrario sono: "+array_alcontrario);


//------------------------  ALTRI ESERCIZI  --------------------------//

let array1 = [1, 2, 2, 3, 4];
let array2 = [4, 2, 2, 4];
let x = 0;

/*Es. 13 Creare un array3 con la somma degli elementi dell'array1 e dell'array2
--- Soluzione: [5, 4, 4, 7, 4] */
array3 = [];
x = 0;
for (i=0, j=0; i<array1.length || j<array2.length; i++, j++){
  if(array1.length > array2.length){
    if(j<array2.length){
      array3[x] = array1[i] + array2[j];
    }else{
      array3[x] = array1[i];
    }
    x++;
  }else{
    if(i<array1.length){
      array3[x] = array1[i] + array2[j];
    }else{
      array3[x] = array2[j];
    }
    x++;
  }
}
console.log("Es. 13) L'array costituito dalla somma degli elementi (nella stessa posizione) dei due array è: "+array3);

/*Es. 14 Creare un array3 con gli elementi (non la posizione) dispari di array1 e gli elementi pari di array2
--- Soluzione1: [1, 3, 4, 2, 2, 4] --- Soluzione2: [1, 4, 2, 2, 3, 4] */
array3 = [];
array3bis = [];

//Soluzione 1
x = 0;
for(i=0; i<array1.length; i++){
  if(array1[i] % 2 != 0){
    array3[x] = array1[i];
    x++;
  }
}
for(i=0; i<array2.length; i++){
  if(array2[i] % 2 == 0){
    array3[x] = array2[i];
    x++;
  }
}

//Soluzione 2
x = 0;
for(j=0; j<array1.length || j<array2.length; j++){
  if(j<array1.length){
    if (array1[j] % 2 != 0){
      array3bis[x] = array1[j];
      x++;
    }
  }
  if(j<array2.length){
    if (array2[j] % 2 == 0){
      array3bis[x] = array2[j];
      x++;
    }
  }
}

console.log("Es. 14) L'array costituito dai numeri dispari del primo array e dai numeri pari del secondo array: soluzione1 ["+array3+"] --- soluzione2 ["+array3bis+"]");

/*Es. 15 Aggiornare l'array2 con elemento = il suo valore diviso il valore nella posizione lunghezza-posizione dell'array1
array2[i] = array2[i] / array1[lunghezza-1] */
for(i=0; i<array2.length; i++){
  array2[i] = array2[i] / array1[array1.length-1];
}
console.log("Es. 15) L'array2 con i valori aggiornati dividendo tutti i suoi elementi per l'ultimo elemento dell'array1 è costituito da: "+array2);
// Ritorno all'array2 originale per gli esercizi seguenti
array2 = [4, 2, 2, 4];

//Es. 16 Verificare se gli array sono palindromi, cioè se possono essere letti al contrario senza cambiare l'ordine di lettura degli elementi (es. "Anna")
let palindromo = 0;
for(i=0, j=array1.length-1; i<j; i++, j--){
  if(array1[i] == array1[j]){
    palindromo++;
  }
}
if(palindromo == array1.length/2 || palindromo == array1.length/2-1){
  console.log("Es. 16a)L'array1 è palindromo, infatti i suoi elementi sono: ["+array1+"]");
}else{
  console.log("Es. 16a) L'array1 NON è palindromo, infatti i suoi elementi sono: ["+array1+"]");
}

palindromo = 0;
for(i=0, j=array2.length-1; i<j; i++, j--){
  if(array2[i] == array2[j]){
    palindromo++;
  }
}
if(palindromo == array2.length/2 || palindromo == array2.length/2-1){
  console.log("Es. 16b) L'array2 è palindromo, infatti i suoi elementi sono: ["+array2+"]");
}else{
  console.log("Es. 16b) L'array2 NON è palindromo, infatti i suoi elementi sono: ["+array2+"]");
}