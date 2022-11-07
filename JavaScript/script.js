'use strict';

// I miei appunti di JS

// Variabili var, let e const
var a = 1; // var si utilizzava fino al 2015 che sono state inoltrate le variabili let e const
let b = 2; // la grande differenza da var, che le variabili con let che dichiariamo all'interno di un blocco non si possono chiamare al di fuori del nostro blocco. Questo ci da dei vanataggi, uno è quello che su progetti molto grandi la nostra variabile non rimane salvata in memoria tutto il tempo quindi questo permette di avere dei programmi più leggeri rispetto al totale utilizzo di var.
const c = '3'; // se siamo consapevoli che la nostra variabile non cambierà mai, allora per non avere errori non voluti impostiamo la nostra variabile con const così siamo consapevoli che non cambierà mai.
console.log(typeof c);
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
// In questo caso io vado a verificare se c è maggiore di 0? se non lo è passo alla condizione sucessiva e vado a vedere se c è minore di 0? se non lo è passo alla condizione sucessiva c è uguale a 0? se non si verifica nessuna di queste condizioni allora mi stamperà
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
