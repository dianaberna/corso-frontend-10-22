// Moltiplicazione di due numeri
// Crea una funzione che accetta due numeri come argomenti e ne restituisce la moltiplicazione.
// Esempio: moltiplicazione(3, 2) ➞ 6
console.log("--> Moltiplicazione di due numeri");

function moltiplicazione(num1, num2) {
  return num1 * num2;
};
console.log(moltiplicazione(-3, 4));
console.log(moltiplicazione(3, 2));



// Convertire anni in giorni
// Creare una funzione che prenda l'età in anni e restituisca l'età in giorni.
// Esempi: anniInGiorni(65) ➞ 23725; anniInGiorni(0) ➞ 0
console.log("--> Convertire anni in giorni");

function anniInGiorni(anni) {
  return anni * 365;
}
console.log(anniInGiorni(65));
console.log(anniInGiorni(0));


// Minore o uguale a zero
// Crea una funzione che accetta un numero come unico argomento e restituisce true se è minore o uguale a zero, altrimenti restituisce false.
// Es: minoreUgualeAZero(5) ➞ false; minoreUgualeAZero(0) ➞ true
console.log("--> Minore o uguale a zero");

function minoreUgualeAZero(num) {
  return num <= 0 ? true : false;
};
console.log(minoreUgualeAZero(10));
console.log(minoreUgualeAZero(-2));



// Il problema della fattoria
// In questa sfida, un contadino ti chiede di dirgli quante zampe si possono contare tra tutti i suoi animali. L'agricoltore alleva tre specie: polli = 2 zampe, mucche = 4 zampe, maiali = 4 zampe
// L'agricoltore ha contato i suoi animali e ti dà un subtotale per ogni specie. Devi implementare una funzione che restituisca il numero totale di zampe di tutti gli animali. 
//Esempi: numeroZampe(2, 3, 5) ➞ 36
console.log("--> Il problema della fattoria");

function numeroZampe(polli, mucche, maiali) {
  return 2 * polli + 4 * (mucche + maiali);
}
console.log(numeroZampe(2, 3, 5));



// Case di fiammiferi
// Crea una funzione che prenda un numero (step) come argomento e restituisca il numero di fiammiferi in quello step. Vedere i passaggi 1, 2 e 3 nell'immagine. 
//Esempi: numeroDiFiammiferi(1) ➞ 6; numeroDiFiammiferi(4) ➞ 21; numeroDiFiammiferi(87) ➞ 436
console.log("--> Case di fiammiferi");

function numeroDiFiammiferi(step) {
  if (step > 0 && step <= 1) {
    return 6 * step;
  } else if (step > 0 && step > 1) {
    return 5 * step + 1;
  };
};
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
  return scontato.toFixed();
};
console.log(trovaSconto(1500, 50));
console.log(trovaSconto(89, 20));
console.log(trovaSconto(100, 75));



// Posizione nell’alfabeto
// Dato un numero compreso tra 1 e 26 (vedere codice ASCII), restituisci quale lettera si trova in quella posizione dell'alfabeto. Restituisce "non valido" se il numero fornito non rientra in tale intervallo o non è un numero intero.
// PS. (1) Restituisci una lettera minuscola. (2) I numeri che terminano con ".0" sono validi. (3) Una funzione che javascript ci mette a disposizione per questi casi è fromCharCode
// Es. letteraInPosizione(1) ➞ "a"; letteraInPosizione(26.0) ➞ "z"; letteraInPosizione(0) ➞ "invalid"; letteraInPosizione(4.5) ➞ "invalid"
console.log("--> Posizione nell’alfabeto");

function letteraInPosizione(num) {
  if (num % 1 == 0 && num > 0 && num < 27) {
    let lettera = String.fromCharCode(num + 96);
    return (lettera);
  } else {
    return ("non valido");
  }
};

console.log(letteraInPosizione(1));
console.log(letteraInPosizione(26));
console.log(letteraInPosizione(0));
console.log(letteraInPosizione(27.8));




// Calcolatrice di base
// Crea una funzione che accetta due numeri e un operatore matematico + - / * ed eseguirà un calcolo con i numeri indicati.
// PS. Se l'input tenta di dividere per 0, restituisce: "Impossibile dividere per 0!"
// es. calcolatrice(2, "+", 2) ➞ 4; calcolatrice(2, "*", 2) ➞ 4; calcolatrice(4, "/", 2) ➞ 2
console.log("--> Calcolatrice di base");

function calcolatrice(num1, operazione, num2) {
  if (num1, operazione, num2) {
    if (operazione == "+") {
      return num1 + num2;
    } else if (operazione == "-") {
      return num1 - num2;
    } else if (operazione == "*") {
      return num1 * num2;
    } else if (operazione == "/") {
      if (num2 != 0) {
        return num1 / num2;
      } else {
        return "Impossibile dividere per 0!";
      };
    };
  } else {
    return "NON sono stati inseriti tutti i paramentri richiesti"
  };
};
console.log(calcolatrice(2, "+", 3));
console.log(calcolatrice(2, "*", 2));
console.log(calcolatrice(4, "/", 0));
console.log(calcolatrice(4, "/", 2));
console.log(calcolatrice(4, "/"));




// Fare la somma di tutti gli elementi di un array
// Crea una funzione che restituisce la somma di tutti i valori di un array.
// Es.sommaElementiArray([1, 2, 4]) ➞ 7; sommaElementiArray([4, 2, 10, 2]) ➞ 18; sommaElementiArray([1]) ➞ 1
console.log("--> Fare la somma di tutti gli elementi di un array");

function sommaElementiArray(num) {

  for (i = 0; i < num.length; i++) {
    if (arguments.length == 1) {
      return num;
    } else {
      num[i] = num[i + 1];
      return num;
    };
  };
};
console.log(sommaElementiArray([1, 2, 4]));
console.log(sommaElementiArray([4, 2, 10, 2]));
console.log(sommaElementiArray([-2]));


// NO!! (da rifare)
// Quante volte è vero?
// Crea una funzione che restituisce il numero di valori uguali a true presenti in un array.
// PS. (1) Restituisce 0 se viene fornito un array vuoto. (2) Tutti gli elementi dell'array sono di tipo bool (true o false) > if ((array[i] = false) || (array[i] = true)) <
// Es:  quantiTrue([true, false, false, true, false]) ➞ 2; quantiTrue([false, false, false, false]) ➞ 0; quantiTrue([]) ➞ 0
console.log("--> Quante volte è vero?");

function quantiTrue(array) {
  if (array.length === 0) {
    return 0;
  } else {
    i = 0;
    elementi_true = 0;
    while (i < array.length) {
      if (array[i] == true) {
        elementi_true = elementi_true + 1;
        i++;
      } else {
        elementi_true = elementi_true;
        i++;
      };
      return elementi_true;
    };
  };
};
console.log(quantiTrue([]));
console.log(quantiTrue([true, false, false, true, false]));
console.log(quantiTrue([true, true, true, true]));
console.log(quantiTrue([false, false, false]));