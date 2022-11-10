var array = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1];

/*--------ES 1------------*/
/*-------STAMPA TUTTI GLI ELEMENTI DELL'ARRAY----------*/

var i;
for (i = 0; i < array.length; i++) {
  document.write(array[i] + "<br>");
}

/*--------ES 2------------*/
/*-------STAMPARE LA SOMMA DI TUTTI GLI ELEMENTI DELL'ARRAY----------*/

var somma = 0;
for (i = 0; i < array.length; i++) {
  somma += array[i];
}
document.write("La somma è " + " " + somma + "<br>");

/*--------ES 3------------*/
/*-------STAMPARE LA SOMMA DI TUTTI GLI ELEMENTI DISPARI DELL'ARRAY----------*/
var sommaDispari = 0;
for (i = 0; i < array.length; i++) {
  if (array[i] % 2 != 0) sommaDispari += array[i];
}
document.write("La somma dispari è " + " " + sommaDispari + "<br>");

/*--------ES 4------------*/
/*-------STAMPARE LA SOMMA DI TUTTI GLI ELEMENTI NELLE POSIZIONI PARI DELL'ARRAY----------*/

var sommaPosizioniPari = 0;
for (i = 0; i < array.length; i++) {
  if (i % 2 == 0) sommaPosizioniPari += array[i];
}
document.write(
  "La somma delle posizioni pari è " + " " + sommaPosizioniPari + "<br>"
);

/*--------ES 5------------*/
/*-------STAMPARE QUANTE VOLTE COMPARE IL NUMERO DUE----------*/

var numeroVolte = 0;
for (i = 0; i < array.length; i++) {
  if (array[i] == 2) numeroVolte++;
}
document.write("Il numero 2 appare" + " " + numeroVolte + " " + "volte <br>");

/*--------ES 6------------*/
/*-------STAMPARE QUANTI NUMERI POSITIVI (COMPRESO LO ZERO) CI SONO NELL'ARRAY----------*/

var numeroVolteParu = 0;
for (i = 0; i < array.length; i++) {
  if (array[i] % 2 == 0) numeroVolte++;
}
document.write("Ci sono" + " " + numeroVolte + " " + "numeri positivi <br>");

/*--------ES 7------------*/
/*-------STAMPARE IL NUMERO MASSIMO----------*/

var numeroMassimo = 0;
for (i = 0; i < array.length; i++) {
  if (array[i] >= numeroMassimo) numeroMassimo = array[i];
}
document.write("Il numero massimo è" + " " + numeroMassimo + "<br>");

/*--------ES 8------------*/
/*-------STAMPARE IL NUMERO MINIMO----------*/

var numeroMinimo = 0;
for (i = 0; i < array.length; i++) {
  if (array[i] <= numeroMinimo) numeroMinimo = array[i];
}
document.write("Il numero minimo è" + " " + numeroMinimo + "<br>");

/*--------ES 9------------*/
/*-------STAMPARE IL NUMERO MINIMO----------*/
var arrayNegativo = [];
for (i = 0; i < array.length; i++) {
  if (array[i] < 0) arrayNegativo.push(array[i]);
}
document.write("Array negativo:" + arrayNegativo);

/*--------ES 10------------*/
/*-------CREARE UN NUOVO ARRAY DOVE OGNI ELEMENTO DEL NUOVO è UGUALE AL DOPPIO DEL DATO----------*/

var arrayDoppio = [];
for (i = 0; i < array.length; i++) {
  arrayDoppio.push(array[i] * 2);
}
document.write("<br>Array doppio: " + arrayDoppio);

/*--------ES 11------------*/
/*-------CREARE UN NUOVO ARRAY in CUI INSERISCO DUE VOLTE ( una di seguito l'altra) L'ARRAY DATO----------*/
var arrayRipetuto = [];
for (i = 0; i < array.length; i++) {
  arrayRipetuto[i] = array[i];
  arrayRipetuto[array.length + i] = array[i];
}
document.write("<br>L'array ripetuto è: " + arrayRipetuto);

/*METODO CON LO SPREAD OPERATOR
arrayRipetuto= [...array,...array];
*/

/*--------ES 12------------*/
/*-------Stampare al contrario gli elementi dell’array----------*/

document.write("<br> Array al contrario: ");
for (i = array.length - 1; i >= 0; i--) {
  document.write(array[i] + ",");
}

/*--------ES 13------------*/
/*--------CREARE UN ARRAY 3 CON LA SOMMA DEGLI ELEMENTI DELL'ARRAY1 E DELL'ARRAY2---------*/
var array1 = [1, 2, 2, 3, 4];
var array2 = [4, 2, 2, 4];
var sommaElemArray = [];
var maxLength = 0; // ho aggiunto maxLenght così funzionerà sempre, quindi nel caso di array con differenti lunghezze da quelle date
if (array1.length > array2.length) {
  maxLength = array1.length;
} else maxLength = array2.length;
document.write("<br> La lunghezza max è: " + maxLength);

for (i = 0; i < maxLength; i++) {
  if (isNaN(array1[i])) {
    //ho fatto un controllo per verificare se il numero c'era o no, e nel caso non c'era ho aggiunto uno 0 alla posizione dell array selezionato
    sommaElemArray.push(array2[i]);
  } else if (isNaN(array2[i])) {
    sommaElemArray.push(array1[i]);
  } else {
    sommaElemArray.push(array1[i] + array2[i]);
  }
}
document.write("<br> L'array somma è: " + sommaElemArray);

/*--------ES 14------------*/
/*--------CREARE UN ARRAY 3 CON GLI ELEMENTI (NON LA POSIZIONE) DISPARI DI ARRAY1 E GLI ELEMENTI PARI DI ARRAY2---------*/

var array3 = [];
for (i = 0; i < maxLength; i++) {
  if (!isNaN(array1[i])) {
    if (array1[i] % 2 != 0) {
      array3.push(array1[i]);
    }
  }
  if (!isNaN(array2[i])) {
    if (array2[i] % 2 == 0) {
      array3.push(array2[i]);
    }
  }
}
document.write("<br> L'array3 è: " + array3);

/*--------ES 15------------*/
/*--------AGGIORNARE ARRAY2 CON ELEMENTO = IL SUO VALORE DIVISO IL VALORE NELLA POSIZIONE [LUNGHEZZA-POSIZIONE DELL ARRAY]---------*/

for (i = 0; i < array2.length; i++) {
  array2[i] = array2[i] / array1[array1.length - 1 - i];
}
document.write("<br> L'array2 aggiornato è: " + array2);

/*--------ES 16------------*/
/*--------VERIFICARE SE GLI ARRAY SONO PALINDROMI---------*/
var arrayPrimo = [1, 2, 2, 3, 4];
var arraySecondo = [4, 2, 2, 4];
var contatore = 0;
i = 0;

palindromo(arrayPrimo);
function palindromo(arrayPassato) {
  while (i < Math.floor(arrayPassato.length / 2)) {
    if (arrayPassato[i] === arrayPassato[arrayPassato.length - 1 - i]) {
      contatore++;
    }
    i++;
  }
  if (
    contatore == arrayPassato.length / 2 ||
    contatore == Math.floor(arrayPassato.length / 2) + 1
  ) {
    document.write("<br>" + arrayPassato + "è palindromo");
  } else {
    document.write("<br>" + arrayPassato + " " + "non è palindromo");
  }
}
