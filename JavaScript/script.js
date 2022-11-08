'use strict';

// I miei appunti di JS

// Il linguaggio JS è un linguaggio case sensitive

// Variabili var, let e const
var a = 1; // var si utilizzava fino al 2015 che sono state inoltrate le variabili let e const
let b = 2; // la grande differenza da var, che le variabili con let che dichiariamo all'interno di un blocco non si possono chiamare al di fuori del nostro blocco. Questo ci da dei vanataggi, uno è quello che su progetti molto grandi la nostra variabile non rimane salvata in memoria tutto il tempo quindi questo permette di avere dei programmi più leggeri rispetto al totale utilizzo di var.
const c = 3; // se siamo consapevoli che la nostra variabile non cambierà mai, allora per non avere errori non voluti impostiamo la nostra variabile con const così siamo consapevoli che non cambierà mai.

// Le variabili possono essere di tipo:
// Primitive types
let number = 1234; // Number
let string = 'ciao sono una stringa'; // String
let boolean = true; // Boolean
let nullo = null; // Null
let nonDefinito = undefined;
let simbolo = Symbol;

// Possiamo utilizzare il typeof per verificare che tipo di variabile abbiamo
console.log(typeof number);
// conversione di tipo
Number('30ciao'); // NaN = Not a Number
Number('50'); // 50

// fa il parsing del valore e recupera il valore (parseInt è un più intelligente di Number)
parseInt('30px'); // 30 (di tipo number)
parseInt('size-30'); // NaN
parseInt('50'); // 50

// altri esempi
Number(); // 0
Number(null); // 0
Number(true); // 1
Number(''); // 0

parseInt(); // NaN
parseInt(null); // NaN
parseInt(true); // NaN
parseInt(''); // NaN

// Possiamo

// CONDIZIONI
// Se b è magiore di zero allora la mia console farà vedere b è maggiore di 0 altrimenti la console stamperà che b è minore di 0
if (b > 0) {
  console.log('b è magiore di 0');
} else {
  console.log('b è minore di 0');
}
// Thernay operator -- > permette di scrivere una condizione semplice dove le risposte possono essere o true o false
b > 0 ? console.log('b è magiore di 0') : console.log('b è minore di 0');

// Else if --> quando abbiamo bisogno di verificare più condizioni all'interno del nostro programma.
// In questo caso io vado a verificare se c è maggiore di 0? se non lo è passo alla condizione sucessiva e vado a vedere se c è minore di 0? se non lo è passo alla condizione sucessiva c è uguale a 0? se non si verifica nessuna di queste condizioni allora mi stamperà caro utente sei sicuro di aver inserito un numero?
if (c > 0) {
  console.log(typeof c);
  console.log('c è magiore di 0');
} else if (c < 0) {
  console.log('c è minore di 0');
} else if (c === 0) {
  console.log('c è uguale a 0');
} else {
  console.log('caro utente sei sicuro di aver inserito un numero?');
}

// If annidati --> possiamo avere più condizioni insieme
// se a è maggiore di 0 allora entrera nella prossima condizione e verifica anche se é maggiore o minore di 10. Se invece a è uguale a 0 o minore di 0 non entra nel nostro if annidato
a = 11;
if (a > 0) {
  console.log('a è maggiore di 0');
  if (a < 10) {
    console.log('a è maggiore di 0 ma minore di 10');
  } else {
    console.log('a è maggiore di 0 ma maggiore di 10');
  }
} else if (a === 0) {
  console.log('a è uguale a 0');
} else {
  console.log('a è minore di 0');
}

// gli if annidati in alcuni casi possono essere scritti con l'utilizzo degli operatori logici
if (a > 0 && a < 10) {
  console.log('a è maggiore di 0 ma minore di 10');
} else if (a > 0 && a > 10) {
  console.log('a è maggiore di 0 ma maggiore di 10');
} else if (a === 0) {
  console.log('a è uguale a 0');
} else {
  console.log('a è minore di 0');
}

// SWITCH
// L'istruzione switch controlla una condizione (exrp), confrontando il valore dell'espressione con una serie di case ed esegue le istruzioni che si trovano all'interno, finché non viene incontrata un'istruzione break che interrompe il confronto. Se ci troviamo in una situazione che nessuna nostra condizione corrisponde al case, allora ci verrà stampata un'istruzione di default.
const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}
