// Moltiplicazione di due numeri
// Crea una funzione che accetta due numeri come argomenti e ne restituisce la moltiplicazione.
// Esempio: moltiplicazione(3, 2) ➞ 6
console.log("--> Moltiplicazione di due numeri");

function moltiplicazione(num1, num2) {
  risultato = num1 * num2;
  return risultato;
};

console.log(moltiplicazione(-3, 4));
console.log(moltiplicazione(3, 2));



// Convertire anni in giorni
// Creare una funzione che prenda l'età in anni e restituisca l'età in giorni.
// Esempi: anniInGiorni(65) ➞ 23725; anniInGiorni(0) ➞ 0
console.log("--> Convertire anni in giorni");

function anniInGiorni(anni) {
  risultato = anni * 365;
  return risultato;
}
console.log(anniInGiorni(65));
console.log(anniInGiorni(0));



// Minore o uguale a zero
// Crea una funzione che accetta un numero come unico argomento e restituisce true se è minore o uguale a zero, altrimenti restituisce false.
// Es: minoreUgualeAZero(5) ➞ false; minoreUgualeAZero(0) ➞ true
console.log("--> Minore o uguale a zero");

function minoreUgualeAZero(num) {
  if (num != NaN && num <= 0) {
    return true;
  } else {
    return false;
  };
};
console.log(minoreUgualeAZero(10));
console.log(minoreUgualeAZero(-2));



// Il problema della fattoria
// In questa sfida, un contadino ti chiede di dirgli quante zampe si possono contare tra tutti i suoi animali. L'agricoltore alleva tre specie: polli = 2 zampe, mucche = 4 zampe, maiali = 4 zampe
// L'agricoltore ha contato i suoi animali e ti dà un subtotale per ogni specie. Devi implementare una funzione che restituisca il numero totale di zampe di tutti gli animali. 
//Esempi: numeroZampe(2, 3, 5) ➞ 36
console.log("--> Il problema della fattoria");


function numeroZampe(polli, mucche, maiali) {
  zampetotali = 2 * polli + 4 * (mucche + maiali);
  return zampetotali;
}
console.log(numeroZampe(2, 3, 5));



// Case di fiammiferi
// Crea una funzione che prenda un numero (step) come argomento e restituisca il numero di fiammiferi in quello step. Vedere i passaggi 1, 2 e 3 nell'immagine. 
//Esempi: numeroDiFiammiferi(1) ➞ 6; numeroDiFiammiferi(4) ➞ 21; numeroDiFiammiferi(87) ➞ 436
console.log("--> Case di fiammiferi");

function numeroDiFiammiferi(step) {
  if (step > 0 && step <= 1) {
    fiammiferi = 6 * step;
  } else if (step > 0 && step > 1) {
    fiammiferi = 5 * step + 1;
  }
  return fiammiferi;
}
console.log(numeroDiFiammiferi(1));
console.log(numeroDiFiammiferi(4));
console.log(numeroDiFiammiferi(87));



// Somma i numeri da un unico numero
// Crea una funzione che accetta un numero come argomento. Somma tutti i numeri da 1 al numero passato alla funzione. Ad esempio, se l'input è 4, la tua funzione dovrebbe restituire 10 perché 1 + 2 + 3 + 4 = 10.
// Es: sommaDaUnUnicoNumero(4) ➞ 10; sommaDaUnUnicoNumero(13) ➞ 91; sommaDaUnUnicoNumero(600) ➞ 180300
console.log("--> Somma i numeri da un unico numero");

function sommaDaUnUnicoNumero(num) {
  i = 0;
  while (i < num) {
    x = num;
    num = num + (num - x);
    return num;
  };
};
console.log(sommaDaUnUnicoNumero(4));
console.log(sommaDaUnUnicoNumero(13));
console.log(sommaDaUnUnicoNumero(600));



// Trova lo sconto
// Crea una funzione che accetta due argomenti: il prezzo originale e la percentuale di sconto come numeri interi e restituisce il prezzo finale dopo lo sconto.
// PS. La tua risposta dovrebbe essere arrotondata a due cifre decimali. (vedere parseFloat e toFixed)
// es. trovaSconto(1500, 50) ➞ 750; trovaSconto(89, 20) ➞ 17.8; trovaSconto(100, 75) ➞ 75
console.log("--> Trova lo sconto");

function trovaSconto(prezzo, percentuale) {
  if (prezzo >= 0 && (prezzo % 1 == 0)) {
    scontato = prezzo * percentuale / 100;
  };
  scontato = scontato.toFixed();
  return (scontato);
};
console.log(trovaSconto(1500, 50));
console.log(trovaSconto(89, 20));
console.log(trovaSconto(100, 75));



// Posizione nell’alfabeto
// Dato un numero compreso tra 1 e 26 (vedere codice ASCII), restituisci quale lettera si trova in quella posizione dell'alfabeto. Restituisce "non valido" se il numero fornito non rientra in tale intervallo o non è un numero intero.
// PS. (1) Restituisci una lettera minuscola. (2) I numeri che terminano con ".0" sono validi. (3) Una funzione che javascript ci mette a disposizione per questi casi è fromCharCode
// Es. letteraInPosizione(1) ➞ "a"; letteraInPosizione(26.0) ➞ "z"; letteraInPosizione(0) ➞ "invalid"; letteraInPosizione(4.5) ➞ "invalid"

console.log("--> Posizione nell’alfabeto");
