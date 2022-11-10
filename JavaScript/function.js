console.log('=== Ex. 1 ===');
// EX. 1 Crea una funzione che accetta due numeri come argomenti e ne restituisce la moltiplicazione.
function moltiplication(a, b) {
  return a * b;
}
console.log(moltiplication(3, 2));
console.log(moltiplication(-3, -6));
console.log(moltiplication(7, 3));

console.log('=== Ex. 2 ===');
// Ex. 2 Creare una funzione che prenda l'età in anni e restituisca l'età in giorni.
function yearsIntoDays(year) {
  let dayYear = 365;
  return year * dayYear;
}
console.log(yearsIntoDays(65));
console.log(yearsIntoDays(0));
console.log(yearsIntoDays(20));

console.log('=== Ex. 3 ===');
// Ex. 3 Crea una funzione che accetta un numero come unico argomento e restituisce true se è minore o uguale a zero, altrimenti restituisce false.
function lessThanZero(num) {
  return num <= 0 ? true : false;
}
console.log(lessThanZero(5));
console.log(lessThanZero(0));
console.log(lessThanZero(-2));

console.log('=== Ex. 4 ===');
/* Ex. 4 In questa sfida, un contadino ti chiede di dirgli quante zampe si possono contare tra tutti i suoi animali. L'agricoltore alleva tre specie: polli = 2 zampe, mucche = 4 zampe, maiali = 4 zampe
L'agricoltore ha contato i suoi animali e ti dà un subtotale per ogni specie. Devi implementare una funzione che restituisca il numero totale di zampe di tutti gli animali. */
function numberOfLegs(numChicken, numCows, numPigs) {
  const numPawChicken = 2;
  const numPawCows = 4;
  const numPawPigs = 4;
  let numTotalPaw =
    numChicken * numPawChicken + numCows * numPawCows + numPigs * numPawPigs;
  return numTotalPaw;
}
console.log(numberOfLegs(2, 3, 5));
console.log(numberOfLegs(1, 2, 3));
console.log(numberOfLegs(5, 2, 8));

console.log('=== Ex. 5 ===');
// Ex. 5 Crea una funzione che prenda un numero (step) come argomento e restituisca il numero di fiammiferi in quello step. Vedere i passaggi 1, 2 e 3 nell'immagine.
function numberOfMatches(step) {
  let sum = 0;
  for (let i = 0; i < step; i++) {
    sum = step * 6 - i;
  }
  return sum;
}
console.log(numberOfMatches(1));
console.log(numberOfMatches(4));
console.log(numberOfMatches(87));

console.log('=== Ex. 6 ===');
// Ex. 6 Crea una funzione che accetta un numero come argomento. Somma tutti i numeri da 1 al numero passato alla funzione. Ad esempio, se l'input è 4, la tua funzione dovrebbe restituire 10 perché 1 + 2 + 3 + 4 = 10.
function sumFromASingleNumber(num) {
  let sum = 0;
  for (let i = num; i > 0; i--) {
    sum += i;
  }
  return sum;
}
console.log(sumFromASingleNumber(4));
console.log(sumFromASingleNumber(13));
console.log(sumFromASingleNumber(600));

console.log('=== Ex. 7 ===');
// Ex. 6 Crea una funzione che accetta due argomenti: il prezzo originale e la percentuale di sconto come numeri interi e restituisce il prezzo finale dopo lo sconto.
function findTheDiscount(price, discount) {
  let calc = (price * discount) / 100;
  return Number(parseFloat(calc).toFixed(2));
  //  return Number(parseFloat((price * discount) / 100).toFixed(2));
}
//PS. La tua risposta dovrebbe essere arrotondata a due cifre decimali. (vedere parseFloat e toFixed)

console.log(findTheDiscount(1500, 50));
console.log(findTheDiscount(89, 19.5));
console.log(findTheDiscount(100, 75));
console.log('=== Ex. 8 ===');
// Ex. 7 Dato un numero compreso tra 1 e 26 (vedere codice ASCII), restituisci quale lettera si trova in quella posizione dell'alfabeto. Restituisce "non valido" se il numero fornito non rientra in tale intervallo o non è un numero intero.
function letterInPlace(a) {
  let decimalUTF16;
  if (a > 0 && a <= 26 && a % 1 === 0) {
    decimalUTF16 = 96 + a;
    return String.fromCharCode(decimalUTF16);
  } else {
    return `This numer is Invalid`;
  }
}
console.log(letterInPlace(2.3));
console.log('=== Ex. 9 ===');
// Ex.8 Crea una funzione che accetta due numeri e un operatore matematico + - / * ed eseguirà un calcolo con i numeri indicati.
function calculator(x, operatore, y) {
  let sum = 0;
  switch (operatore) {
    case '+':
      sum = x + y;
      console.log(`The result of my function is ${sum}`);
      break;
    case '-':
      sum = x - y;
      console.log(`The result of my function is ${sum}`);
      break;
    case '*':
      sum = x * y;
      console.log(`The result of my function is ${sum}`);
      break;
    case '/':
      if (y !== 0) {
        sum = x / y;
        console.log(`The result of my function is ${sum}`);
      } else {
        console.log('Impossible to divide by 0! :)');
      }
      break;
    default:
      console.log('Are you sure you have entered a number?');
      break;
  }
}
calculator(10, '+', 2);
calculator(10, '-', 2);
calculator(10, '*', 2);
calculator(10, '/', 2);
// ======================
function calculator2(x, operatore, y) {
  let sum = 0;
  if (operatore === '+') {
    sum = x + y;
  } else if (operatore === '-') {
    sum = x - y;
  } else if (operatore === '*') {
    sum = x * y;
  } else if (operatore === '/' && y !== 0) {
    sum = x / y;
  }

  y !== 0
    ? console.log(`The result of my function is ${sum}`)
    : console.log('Impossible to divide by 0! :)');
}
calculator2(10, '+', 2);
calculator2(10, '-', 2);
calculator2(10, '*', 2);
calculator2(10, '/', 0);
console.log('=== Ex. 10 ===');
// Ex. 9 Crea una funzione che restituisce la somma di tutti i valori di un array.
let arr = [1, 2, 4];
let arr2 = [4, 2, 10, 2];
let arr3 = [1];
function sumArrayElement(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

console.log(sumArrayElement(arr));
console.log(sumArrayElement(arr2));
console.log(sumArrayElement(arr3));
console.log(sumArrayElement([...arr, ...arr2, ...arr3]));
console.log('=== Ex. 11 ===');
// Ex. 10 Crea una funzione che restituisce il numero di valori uguali a true presenti in un array.
function howManyTrue(array) {
  let cont = 0;
  for (let i = 0; i < array.length; i++) {
    array[i] === true ? cont++ : (cont += 0);
  }
  return cont;
}

console.log(howManyTrue([true, false, false, true, false]));
console.log(howManyTrue([false, false, false, false]));
console.log(howManyTrue([]));
console.log('=== Ex. 12 ===');
// Ex. 11 Creare una funzione che restituisca lo spessore (in metri) di un foglio di carta dopo averlo piegato n numero di volte. La carta inizia con uno spessore di 0,5 mm.
function thinkness(num) {
  let thinknessPaper = 0.5;
  for (let i = num; i > 0; i--) {
    thinknessPaper *= 2;
  }
  let convertToMeters = thinknessPaper / 1000;
  return `"${thinknessPaper}mm" // carta piegata una volta = ${thinknessPaper}mm (cioè ${convertToMeters}m)`;
}
console.log(thinkness(1));
console.log(thinkness(4));
console.log(thinkness(21));
console.log('=== Ex. 13 ===');
// Crea una funzione che accetta una stringa, controlla se è un indirizzo email valido e restituisce true o false, a seconda della valutazione.
// La stringa deve contenere un carattere @.
// La stringa deve contenere un . carattere.
// La @ deve avere almeno un carattere davanti. (ad esempio "d@ciao.com" è valido mentre "@ciao.com" non è valido.
// Il . e la @ deve trovarsi nei posti appropriati. (ad esempio "hello.email@com" non è valido mentre "mario.rossi@email.com" è valido.
// Se la stringa supera questi test, viene considerata un indirizzo email valido.
function validateEmail(email) {
  const str = email;
  return str.includes('@') &&
    str.includes('.') &&
    str.indexOf('@') > 0 === true &&
    str.indexOf('@') - str.lastIndexOf('.') < -1
    ? true
    : false;
}
console.log(validateEmail('@gmail.com'));
console.log(validateEmail('hello.gmail@.com'));
console.log(validateEmail('gmail'));
console.log(validateEmail('hello@gmail'));
console.log(validateEmail('hello@edabit.com'));

console.log('=== Ex. 14 ===');
// Crea una funzione che accetta due stringhe (p1 e p2 ⁠— che rappresentano i giocatori 1 e 2) come argomenti e restituisce una stringa che indica il vincitore in una partita a stone, Carta, Forbici.
// Ogni argomento conterrà una singola stringa: "Sasso", "Carta" o "Forbici". Restituisci il vincitore secondo le seguenti regole:
// Il sasso batte le forbici / Le forbici battono la carta / La carta batte il sasso
// Se p1 vince, restituisci la stringa "Il vincitore è p1". Se p2 vince, restituisci la stringa "Il vincitore è p2" e se p1 e p2 sono gli stessi, restituisci "È un pareggio".
function rps(p1, p2) {
  let stone = 'Stone';
  let paper = 'Paper';
  let scissors = 'Scissors';
  if (
    (p1 === paper && p2 === stone) ||
    (p1 === stone && p2 === scissors) ||
    (p1 === scissors && p2 === paper)
  ) {
    console.log('The winner is p1');
  } else if (p1 === p2) {
    console.log("It's Draw");
  } else {
    console.log('The winner is p2');
  }
}
rps('Stone', 'Scissors');
rps('Paper', 'Scissors');
rps('Scissors', 'Scissors');
rps('Scissors', 'Paper');
rps('Stone', 'Paper');
rps('Paper', 'Paper');
rps('Paper', 'Stone');
rps('Stone', 'Stone');
rps('Scissors', 'Stone');

console.log('=== Ex. 15 ===');
