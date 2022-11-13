// OK
// Moltiplicazione di due numeri
// Crea una funzione che accetta due numeri come argomenti e ne restituisce la moltiplicazione.
// Esempio: moltiplicazione(3, 2) ➞ 6
console.log("--> Moltiplicazione di due numeri");

function moltiplicazione(num1, num2) {
  return num1 * num2;
};
console.log(moltiplicazione(-3, 4));
console.log(moltiplicazione(3, 2));


// OK
// Convertire anni in giorni
// Creare una funzione che prenda l'età in anni e restituisca l'età in giorni.
// Esempi: anniInGiorni(65) ➞ 23725; anniInGiorni(0) ➞ 0
console.log("--> Convertire anni in giorni");

function anniInGiorni(anni) {
  return anni * 365;
}
console.log(anniInGiorni(65));
console.log(anniInGiorni(0));


// OK
// Minore o uguale a zero
// Crea una funzione che accetta un numero come unico argomento e restituisce true se è minore o uguale a zero, altrimenti restituisce false.
// Es: minoreUgualeAZero(5) ➞ false; minoreUgualeAZero(0) ➞ true
console.log("--> Minore o uguale a zero");

function minoreUgualeAZero(num) {
  return num <= 0 ? true : false;
};
console.log(minoreUgualeAZero(10));
console.log(minoreUgualeAZero(-2));



// OK
// Il problema della fattoria
// In questa sfida, un contadino ti chiede di dirgli quante zampe si possono contare tra tutti i suoi animali. L'agricoltore alleva tre specie: polli = 2 zampe, mucche = 4 zampe, maiali = 4 zampe
// L'agricoltore ha contato i suoi animali e ti dà un subtotale per ogni specie. Devi implementare una funzione che restituisca il numero totale di zampe di tutti gli animali. 
//Esempi: numeroZampe(2, 3, 5) ➞ 36
console.log("--> Il problema della fattoria");

function numeroZampe(polli, mucche, maiali) {
  return 2 * polli + 4 * (mucche + maiali);
}
console.log(numeroZampe(2, 3, 5));



// OK
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



// OK
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



// OK
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



// OK
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



// OK
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




// OK
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




// OK
// Quante volte è vero?
// Crea una funzione che restituisce il numero di valori uguali a true presenti in un array. Restituisce 0 se viene fornito un array vuoto. (Gli elementi sono tutti true o false).
console.log("--> Quante volte è vero?");

function quantiTrue(array) {
  cont = 0;
  if (array.length === 0) {
    return 0;
  } else {
    for (i = 0; i < array.length; i++) {
      array[i] === true ? cont++ : null;
    };
    return cont;
  };
};

console.log(quantiTrue([])); // 0
console.log(quantiTrue([true, false, false, true, false])); // 2
console.log(quantiTrue([true, true, true, true])); // 4
console.log(quantiTrue([false, false, false])); // 0




// OK
// Piegare un pezzo di carta 
// Creare una funzione che restituisca lo spessore (in metri) di un foglio di carta dopo averlo piegato n numero di volte. La carta inizia con uno spessore di 0,5 mm.
console.log("--> Piegare un pezzo di carta ");

function spessoreTot(p) {
  return Math.pow(2, p) / 2 / 1000;
};

console.log((spessoreTot(1))); //0.001m
console.log((spessoreTot(4))); //0.008m
console.log((spessoreTot(10))); //0.512mm
console.log((spessoreTot(21))); //1048.576mm



// NO! ritorna sempre "false"
// Validare un'e-mail 
// Crea una funzione che accetta una stringa, controlla se è un indirizzo email valido e restituisce true o false, a seconda della valutazione.
// La stringa deve contenere un carattere @.
// La stringa deve contenere un . carattere.
// La @ deve avere almeno un carattere davanti. (ad esempio "d@ciao.com" è valido mentre "@ciao.com" non è valido.
// Il . e la @ deve trovarsi nei posti appropriati. (ad esempio "hello.email@com" non è valido mentre "mario.rossi@email.com" è valido.
// Se la stringa supera questi test, viene considerata un indirizzo email valido.

// console.log("--> Validare un'e-mail ");

// function validaEmail(mail) {
//   if (mail == '') {
//     console.log("il campo è vuoto, inserisci la tua email")
//   } else {
//     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.value)) {
//       console.log("Ottimo! " + mail + " è un formato valido")
//       return (true);
//     } else {
//       console.log(mail + " non è un formato valido!")
//       return (false);
//     }
//   };
// };


// console.log(validaEmail("dwwdd"));
// console.log(validaEmail("hello2@email.com"));
// console.log(validaEmail("@dwwdd"));
// console.log(validaEmail("dwwd.d"));




// OK (c'è una soluzione migliore?)
// 14 - Sasso, carta, forbici 
// Crea una funzione che accetta due stringhe (p1 e p2 - che rappresentano i giocatori 1 e 2) come argomenti e restituisce una stringa che indica il vincitore in una partita a Sasso, Carta, Forbici. Ogni argomento conterrà una singola stringa: "Sasso", "Carta" o "Forbici". Restituisci il vincitore secondo le seguenti regole: Il sasso batte le forbici / Le forbici battono la carta / La carta batte il sasso
// Se p1 vince, restituisci la stringa "Il vincitore è p1". Se p2 vince, restituisci la stringa "Il vincitore è p2" e se p1 e p2 sono gli stessi, restituisci "È un pareggio".
console.log("--> Sasso, carta, forbici");

function scf(p1, p2) {
  if ((p1 == "s" && p2 == "f") || (p1 == "f" && p2 == "c") || (p1 == "c" && p2 == "s")) {
    return "Il vincitore è p1";
  } else if ((p1 == "s" && p2 == "s") || (p1 == "f" && p2 == "f") || (p1 == "c" && p2 == "c")) {
    return "È un pareggio";
  } else {
    return "Il vincitore è p2";
  };
};


console.log(scf("s", "c")); // p2
console.log(scf("s", "f")); // p1
console.log(scf("f", "c")); // p1



// OK
// 15 - Quanti giorni tra due date 
// Crea una funzione che accetta due date e restituisce il numero di giorni tra la prima e la seconda data.".

console.log("--> Quanti giorni tra due date");

function getDays(data1, data2) {
  return Math.abs((data2 - data1) / 1000 / 60 / 60 / 24);
}

console.log(getDays(new Date('June 14, 2019'), new Date('June 20, 2019'))); // 6
console.log(getDays(new Date('January 01, 2019'), new Date('December 29, 2018'))); // 3
console.log(getDays(new Date('July 20, 2019'), new Date('July 30, 2019'))); // 10




// NO...
// 16 - Rimuovere i duplicati da un array
// Crea una funzione che accetta un array di elementi, rimuove tutti gli elementi duplicati e restituisce un nuovo array nello stesso ordine sequenziale del vecchio array (meno i duplicati). PS. I test contengono array con stringhe e numeri. I test fanno distinzione tra maiuscole e minuscole.
// removeDups([1, 0, 1, 0]) ➞ [1, 0]; removeDups(["The", "big", "cat"]) ➞ ["The", "big", "cat"] ; removeDups(["John", "Taylor", "John"]) ➞ ["John", "Taylor"]


console.log("--> Rimuovere i duplicati da un array ");

function removeDups(mioarray) {
  num = 0;
  nuovoarray = [];
  for (i = 0; i < mioarray.length; i++) {
    for (j = 0; j < mioarray.length; j++) {
      if (mioarray[i] != mioarray[i + j]) {
        num = mioarray[i];
        console.log(num);
      };
    };
    nuovoarray.push(num);
  };
  return nuovoarray;
  console.log(num);
};




// OK
// 17 - Ottieni la somma del budget delle persone 
// Crea la funzione che accetta un array con oggetti e restituisce la somma dei budget delle persone.
console.log("--> Ottieni la somma del budget delle persone ");


function budgetTotale(persona) {
  quota = 0;
  for (i = 0; i < persona.length; i++) {
    quota += persona[i].budget;
  };
  return quota;
};

console.log(
  budgetTotale([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve", age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 },
  ])
);

console.log(
  budgetTotale([
    { name: "John", age: 21, budget: 29000 },
    { name: "Steve", age: 32, budget: 32000 },
    { name: "Martin", age: 16, budget: 1600 },
  ])
);


// OK
// 18 - Calcola il prezzo totale dei generi alimentari 
// Crea una funzione che prenda un array di oggetti (alimentari) che calcoli il prezzo totale e lo restituisca come un numero. Un oggetto alimentare ha un prodotto, una quantità e un prezzo.
console.log("--> Calcola il prezzo totale dei generi alimentari ");


function prezzoTotaleAlimenti(alimento) {

  prezzo_array = 0;
  for (i = 0; i < alimento.length; i++) {
    prezzo_array += alimento[i].price;
  };
  return prezzo_array;
};

console.log(
  prezzoTotaleAlimenti([{ product: "milk", quantity: 1, price: 1.5 }])
);
console.log(
  prezzoTotaleAlimenti([
    { product: "milk", quantity: 1, price: 1.5 },
    { product: "cereals", quantity: 1, price: 2.5 },
  ])
);
console.log(
  prezzoTotaleAlimenti([{ product: "milk", quantity: 3, price: 1.5 }])
);
console.log(
  prezzoTotaleAlimenti([
    { product: "milk", quantity: 1, price: 1.5 },
    { product: "eggs", quantity: 12, price: 0.10 },
    { product: "bread", quantity: 2, price: 1.6 },
    { product: "cheese", quantity: 1, price: 4.5 },
  ])
);
console.log(
  prezzoTotaleAlimenti([
    { product: "chocolate", quantity: 1, price: 0.10 },
    { product: "lollipop", quantity: 1, price: 0.20 },
  ])
);


