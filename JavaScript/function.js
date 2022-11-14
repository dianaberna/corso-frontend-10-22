'use strict';
/*
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
//  Ex. 4 In questa sfida, un contadino ti chiede di dirgli quante zampe si possono contare tra tutti i suoi animali. L'agricoltore alleva tre specie: polli = 2 zampe, mucche = 4 zampe, maiali = 4 zampe
// L'agricoltore ha contato i suoi animali e ti dà un subtotale per ogni specie. Devi implementare una funzione che restituisca il numero totale di zampe di tutti gli animali. 
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
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    case '/':
      if (y !== 0) {
        return x / y;
      } else {
        return 'Impossible to divide by 0! :)';
      }
    default:
      return 'Are you sure you have entered a operator?';
  }
}

console.log(`The result of my function is ${calculator(10, '+', 2)}`);
console.log(`The result of my function is ${calculator(10, '-', 2)}`);
console.log(`The result of my function is ${calculator(10, '*', 2)}`);
console.log(`The result of my function is ${calculator(10, '/', 0)}`);
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
calculator2(10, '+', 0);
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
    array[i] === true ? cont++ : null;
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
  let arrDomini = ['it', 'com', 'net', 'org'];
  let strSplit = str.split('.');
  return str.includes('@') &&
    str.includes('.') &&
    str.indexOf('@') > 0 === true &&
    str.indexOf('@') - str.lastIndexOf('.') < -1 &&
    str.lastIndexOf('.') < str.length - 1 &&
    arrDomini.includes(strSplit[strSplit.length - 1])
    ? true
    : false;
}
console.log(validateEmail('@gmail.org'));
console.log(validateEmail('hello.gmail@.it'));
console.log(validateEmail('gmail'));
console.log(validateEmail('hello@gmail.'));
console.log(validateEmail('heßllo.prova@edabit.com'));
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
// Crea una funzione che accetta due date e restituisce il numero di giorni tra la prima e la seconda data.
// function calcDays(d1, d2) {
//   let utc1 = d1.getDate();
//   let utc2 = d2.getDate();
//   return console.log(utc2 - utc1);
// }
// calcDays(new Date('June 14, 2019'), new Date('June 20, 2019'));
function calcDays2(d1, d2) {
  let millesecADay = (d2 - d1) / 1000 / 60 / 60 / 24;
  return console.log(Math.abs(millesecADay));
}
calcDays2(new Date('June 14, 2019'), new Date('June 20, 2019'));
calcDays2(new Date('January 01, 2019'), new Date('December 29, 2018'));
calcDays2(new Date('July 20, 2019'), new Date('July 30, 2019'));

console.log('=== Ex. 16 ===');
// Crea una funzione che accetta un array di elementi, rimuove tutti gli elementi duplicati e restituisce un nuovo array nello stesso ordine sequenziale del vecchio array (meno i duplicati).
function removeDups(array) {
  return [...new Set(array)];
}
console.log(removeDups([1, 0, 1, 0]));
console.log(removeDups(['The', 'big', 'cat']));
console.log(removeDups(['John', 'Taylor', 'John']));

// Soluzione di Andrea
function removeDups(array) {
  let arrayNuovo = [];
  for (let i = 0; i < array.length; i++) {
    if (arrayNuovo.includes(array[i])) {
    } else {
      arrayNuovo.push(array[i]);
    }
  }
  return arrayNuovo;
}
console.log(removeDups([1, 0, 1, 0]));
console.log(removeDups(['The', 'big', 'cat']));
console.log(removeDups(['John', 'Taylor', 'John']));

// Soluzione diEmanuela

console.log('=== Ex. 17 ===');
// Crea la funzione che accetta un array con oggetti e restituisce la somma dei budget delle persone.
let budgetPeople = [
  { name: 'John', age: 21, budget: 23000 },
  { name: 'Steve', age: 32, budget: 40000 },
  { name: 'Martin', age: 16, budget: 2700 },
];

let budgetPeople2 = [
  { name: 'John', age: 21, budget: 29000 },
  { name: 'Steve', age: 32, budget: 32000 },
  { name: 'Martin', age: 16, budget: 1600 },
];

function totalBudget(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i].budget;
  }
  return sum;
}
console.log(totalBudget(budgetPeople));
console.log(totalBudget(budgetPeople2));

console.log('=== Ex. 18 ===');
// Crea una funzione che prenda un array di oggetti (alimentari) che calcoli il prezzo totale e lo restituisca come un numero. Un oggetto alimentare ha un prodotto, una quantità e un prezzo, ad esempio:
function totalPriceFoods(array) {
  let sumPrice = 0;
  for (let i = 0; i < array.length; i++) {
    sumPrice += array[i].price * array[i].quantity;
  }
  return console.log(`Final price is ${sumPrice.toFixed(2)}$`);
}
totalPriceFoods([{ product: 'milk', quantity: 1, price: 1.5 }]);

totalPriceFoods([
  { product: 'milk', quantity: 1, price: 1.5 },
  { product: 'cereals', quantity: 1, price: 2.5 },
]);
totalPriceFoods([{ product: 'milk', quantity: 3, price: 1.5 }]);

totalPriceFoods([
  { product: 'milk', quantity: 1, price: 1.5 },
  { product: 'eggs', quantity: 12, price: 0.1 },
  { product: 'bread', quantity: 2, price: 1.6 },
  { product: 'cheese', quantity: 1, price: 4.5 },
]);

totalPriceFoods([
  { product: 'chocolate', quantity: 1, price: 0.1 },
  { product: 'lollipop', quantity: 1, price: 0.2 },
]);

// let hasDrivesLicens = false;
// const passDrive = true;

// if (passDrive) hasDrivesLicens = true;
// if (hasDrivesLicens) console.log('I can drive :D');

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const orangeJuice = fruitProcessor(0, 4);
console.log(orangeJuice);

// Function declaration
// Questo tipo di funzione la si puó invocare anche prima della sua creazione
// Questo tipo di funzione non produce un valore(non ho ancora capito cosa vuol dire questa frase)
function calc1(a, b) {
  return a + b;
}
// function expression
// Questo tipo di funzione non si può invocare anche prima della sua creazione
// Questo tipo di funzione produce un valore(non ho ancora capito cosa vuol dire questa frase)
const calc2 = function (a, b) {
  return a + b;
};
budgetPeople = [
  { name: 'John', age: 21, budget: 23000 },
  { name: 'Steve', age: 32, budget: 40000 },
  { name: 'Martin', age: 16, budget: 2700 },
];
console.log(budgetPeople[0].budget);
console.log(budgetPeople[0]['budget']);
console.log([
  [1, 2],
  [4, 5],
]);

const calcAge = function (birthYear) {
  return 2022 - birthYear;
};

const calcAge2 = (birthYear) => 2022 - birthYear;
const age2 = calcAge2(1997);
console.log(age2);

const yearsUntilRetirement = (birthYear) => {
  const year = 2022;
  const age = year - birthYear;
  const retirement = 65 - age;
  return retirement;
};
console.log(yearsUntilRetirement(1997));

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

// EX.
console.log('==== function ex ====');
// Punteggi delle due squadre
const teamPlay = {
  team1: 'Doplhins',
  team2: 'Koals',
  scoreTeam1: [30, 30, 30],
  scoreTeam2: [13, 13, 13],
};
// Creo una funzione per calcolare la media
const calcAverage = function (score) {
  let sum = 0;
  for (let i = 0; i < score.length; i++) {
    sum += score[i];
  }
  let average = sum / score.length;
  return average;
};
// Creo una funzione per verificare chi ha vinto
const checkWinner = function (team1, team2) {
  const averageFirstTeam = calcAverage(team1);
  const averageSecondTeam = calcAverage(team2);
  if (averageFirstTeam >= averageSecondTeam * 2) {
    return `${teamPlay.team1} win 🏆 (${averageFirstTeam} vs ${averageSecondTeam})`;
  } else if (averageSecondTeam >= averageFirstTeam * 2) {
    return `${teamPlay.team2} win 🏆 (${averageSecondTeam} vs ${averageFirstTeam})`;
  } else {
    return `No team wins...`;
  }
};
const winner = checkWinner(teamPlay.scoreTeam1, teamPlay.scoreTeam2);
console.log(winner);

console.log('==== array ex ===');
const calcTip = function (bill) {
  const tip = bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;
  return tip;
};
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);
console.log('=== soluzione intelligente ===');
const calcTip2 = function (bill) {
  let total = [];
  for (let i = 0; i < bill.length; i++) {
    const tip = bill[i] > 50 && bill[i] < 300 ? bill[i] * 0.15 : bill[i] * 0.2;
    total.push(bill[i] + tip);
  }
  return total;
};
console.log(calcTip2(bills));

const sasha = {
  firstName: 'Oleksandr',
  secondName: 'Oleksyuk',
  job: 'Student',
  yearBorn: 1997,
  nationality: 'Ukraine',
  hasDriversLicense: true,
  friend: ['Lester', 'Davide', 'Giuseppe'],

  // calcAge: function (year){
  //   return year - this.yearBorn
  // } // per evitare che il nostro programma scriva del codice doppio, andiamo a fare in modo che lo faccia solo una volta.
  calcAge: function (year) {
    this.age = year - this.yearBorn;
    return this.age;
  }, // in questo caso, cosa facciamo? creiamo una variabile in che modo? 'this.age' cosi nel nostro oggetto si crea questa nuova key che si chiama age
  getSummary: function () {
    const keyName = 'Name';
    const str =
      `${this['first' + keyName]} ${
        this['second' + keyName]
      } have ${this.calcAge(2022)} years, him from ${this.nationality} ` +
      `${
        this.hasDriversLicense
          ? 'has a driver license'
          : `hasn't a driver license`
      }`;
    return str;
  },
};
console.log(sasha.getSummary());
console.log(sasha.calcAge(2022));
console.log(sasha.age);
console.log(sasha.age); // alo stesso tempo ora non chiamiamo più la funzione machiamiamo il age allínterno del nostro oggetto
console.log(sasha.age);
console.log(sasha.firstName);
console.log(sasha['yearBorn']);
const keyName = 'Name';
console.log(sasha['first' + keyName]);
console.log(sasha['second' + keyName]);


// const interestedIn = prompt(
//   'Che cosa vuoi sapere su Sasha? scegli tra firstName, secondName, job, yearBorn, nationality'
// );
// sasha[interestedIn]
//   ? console.log(
//       `Hai selezionato ${interestedIn}, la risposta è: ${sasha[interestedIn]}`
//     )
//   : console.log(
//       'Richiesta errata! scegli tra firstName, secondName, job, yearBorn, nationality'
//     );

// console.log(
//   `${sasha.firstName} ha ${sasha.friend.length} friend, and his best friend is called ${sasha.friend[0]}`
// );
// console.log(
//   `${sasha['firstName']} ha ${sasha['friend'].length} friend, and his best friend is called ${sasha['friend'][0]}`
// );

console.log('==== coding challenge after study object and this===');

const mark = {
  firstName: 'Mark',
  lastName: 'Miller',
  mass: 78,
  height: 1.9,
  calcBMI: function () {
    this.bmi = (this.mass / this.height ** 2).toFixed(2);
    return this.bmi;
  },
};
const john = {
  firstName: 'John',
  lastName: 'Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = (this.mass / this.height ** 2).toFixed(2);
    return this.bmi;
  },
};
const avgMark = mark.calcBMI();
const avgJohn = john.calcBMI();
console.log(john, mark);

avgMark > avgJohn
  ? console.log(
      `${mark.firstName}'s BMI (${mark.bmi}) is higher than ${john.firstName}'s (${john.bmi})`
    )
  : console.log(
      `${john.firstName}'s BMI (${john.bmi}) is higher than ${mark.firstName}'s (${mark.bmi})`
    );


const arr = [
  "Oleksandr",
  "Oleksyuk",
  1997,
  ["Ela", "Alona", "Pietro"],
  true,
  "sono una stringa",
];
// console.log('=== ONLY STRING ===');
// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] !== 'string') continue;
// }
let excersiceGym = ["panca piana", "squat", "pressa"];
for (let excercise = 0; excercise < excersiceGym.length; excercise++) {
  console.log(`====== Starting excercie ${excersiceGym[excercise]}`);
  for (let rep = 3; rep < 16; rep += 3) {
    console.log(
      `Exercise ${excersiceGym[excercise]}: Lifting Weight reppetition ${rep} 🏋🏼‍♀️`
    );
  }
}
let dice = Math.trunc(Math.random() * 6) + 1;

console.log(dice);
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log(`You rolled a ${dice} 😇`);
  }
}
 

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let total = [];
const calcTip = function (bill) {
  for (let i = 0; i < bill.length; i++) {
    bill > 50 && bill < 300
      ? tips.push(bill[i] * 0.15)
      : tips.push(bill[i] * 0.2);
  }
};
const caclTotal = function (bill, tip) {
  for (let i = 0; i < bill.length; i++) {
    total.push(bill[i] + tip[i]);
  }
};
calcTip(bills);
caclTotal(bills, tips);
console.log(total);
const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage(total));
*/

// BUG;
// FIXME

const whiteListPrice = 0.11;
const buyMatic = 140;
const valueMaticHowToBuy = 1.09;
const numCoin = (buyMatic / whiteListPrice).toFixed(2);
console.log(`Io possiedo ${numCoin} al lancio`);
console.log(`Ho pagato ${(buyMatic * valueMaticHowToBuy).toFixed(2)}$`);
const valueMaticNow = 0.95;
console.log(
  `Il valore dei miei mutic ora é: ${buyMatic * valueMaticNow}$
Quindi recapitolando ho perso: ${(152.6 - 126).toFixed(2)}$
Cosa devo fare ora per recuperare?`
);
const launchPrice = 0.14;
console.log(
  `Al Lancio quindi il portafoglia varrà: ${(
    numCoin *
    launchPrice *
    valueMaticNow
  ).toFixed(2)}$
Quindi se vendessi subito al lancio sarei in perdita di ${(
    numCoin * launchPrice * valueMaticNow * 0.85 -
    152.6
  ).toFixed(2)}`
);
const exitPrice = 0.16;
console.log(
  `Se uscissi a 0.16 sarei in profitto di : ${(
    numCoin * exitPrice * valueMaticNow * 0.85 -
    152.6
  ).toFixed(2)}$`
);

const obj = {
  Address: {
    Street: 'Main',
    Number: 100,
    Apartament: {
      Floor: 3,
      Number: 301,
    },
  },
};
