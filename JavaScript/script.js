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

let arrNum = [2, 3, 6, 9, 22, 23, 45];

// Ex. 1
let array = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1];
for (let i = 0; i < array.length; i++) {
  console.log(`Gli elementi del mio array ${array[i]}`);
}

// Ex. 2
array = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1];
let sum = 0;
for (let i = 0; i < array.length; i++) {
  sum += array[i];
}
console.log(`La somma del mio array è ${sum}`);

// Ex. 3
array = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1];
sum = 0;
for (let i = 0; i < array.length; i++) {
  // utilizzo !== da 0 perchè se ci sono i numeri negativi dopo mi trovo in una situazione in cui anche se il numero è dispari ma negativo allora non lo conta il sistema se metto === 1
  if (i / 2 !== 0) {
    sum += array[i];
  }
  i++;
}
console.log(`La somma dei soli numeri dispari è ${sum}!!!☕️`);

// Ex. 4
array = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1];
sum = 0;
for (let i = 0; i < array.length; i++) {
  if (i % 2 === 1) {
    sum += array[i];
  }
}

console.log(`La somma dei elementi in posizione dispari è ${sum}`);
// Ex. 5
let numberTwoOnArray = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] === 2) {
    numberTwoOnArray++;
  } else {
    i++;
  }
}
console.log(`Il numero 2 comprare ${numberTwoOnArray} volta nel mio array`);
// Ex. 6
sum = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] >= 0) {
    sum++;
  } else {
    i++;
  }
}
console.log(`I numeri positivi compreso lo zero sono ${sum}!🏆`);
// Ex. 7
let numMax = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] > numMax) {
    numMax = array[i];
  } else {
    i++;
  }
}
console.log(`Il numero max del mio array è ${numMax}`);
// ex. 8
let numMin = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] < numMin) {
    numMin = array[i];
  } else {
    i++;
  }
}
console.log(`Il numero min del mio array è ${numMin}`);
// Ex.9
let negativeArr = [];
for (let i = 0; i < array.length; i++) {
  if (array[i] < 0) {
    negativeArr.push(array[i]);
  } else {
    i++;
  }
}
console.log(negativeArr);
// Ex. 10
let doubleArray = [];
for (let i = 0; i < array.length; i++) {
  doubleArray.push(array[i] * 2);
}
console.log(doubleArray);
// Ex. 11
let sumArray = [];
for (let i = 0; i < array.length; i++) {
  sumArray.push(array[i]);
}
for (let i = 0; i < array.length; i++) {
  sumArray.push(array[i]);
}
console.log(sumArray);

// Ex. 12
let inverseArray = [];
for (let i = array.length - 1; i >= 0; i--) {
  inverseArray.push(array[i]);
}
console.log(inverseArray);
