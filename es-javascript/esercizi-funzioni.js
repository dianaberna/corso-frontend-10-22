/*ES. Moltiplicazione di due numeri*/

function moltiplica(numero1, numero2) {
  let risultato = numero1 * numero2;
  document.write(` ${numero1} * ${numero2} fa: ${risultato}`);
}
moltiplica(5, 4);

/*ES. Convertire anni in giorni*/

function anniInGiorni(anni) {
  let risultato = anni * 365;
  document.write(`<br>In ${anni} anni ci sono ${risultato} giorni`);
}
anniInGiorni(65);

/*ES. Minore o uguale a zero*/

function minoreUgualeAZero(numero) {
  if (numero <= 0) return true;
  else return false;
}
document.write(`<br>${minoreUgualeAZero(-10)}`);

/*ES. Il problema della fattoria*/

function quanteZampe(polli, mucche, maiali) {
  let sommaZampePolli = polli * 2;
  let sommaZampeMucche = mucche * 4;
  let sommaZampeMaiali = maiali * 4;
  return sommaZampePolli + sommaZampeMucche + sommaZampeMaiali;
}
document.write(`<br>Le zampe totali sono ${quanteZampe(2, 3, 5)}`);

/*ES. Case di fiammiferi*/

function numeroDiFiammiferi(numero) {
  let risultato;
  if (!isNaN(numero) && numero >= 0 && numero % 1 == 0) {
    if (numero == 6) {
      return (risultato = numero * 6);
    } else return (risultato = numero * 6 - (numero - 1));
  }
  return "il numero di step inserito è errato";
}
document.write(
  `<br>Il numero totale di fiammiferi è: ${numeroDiFiammiferi(4)}`
);

/*ES. Somma i numeri da un unico numero*/

function sommaUnicoNumero(numero) {
  let somma = 0;
  for (let i = 0; i <= numero; i++) {
    somma += i;
  }
  return somma;
}
document.write(`<br>La somma è ${sommaUnicoNumero(13)}`);

/*ES. Trova lo sconto*/

function trovaSconto(prezzoOrig, sconto) {
  let risultato = (prezzoOrig / 100) * sconto;
  return parseFloat(risultato.toFixed(2));
}

document.write(`<br>Il prezzo finale è: ${trovaSconto(89, 13)}`);

/*ES. Posizione nell’alfabeto*/

function letteraInPosizione(numeroDato) {
  let lettera = "";
  if (numeroDato >= 1 && numeroDato <= 26 && numeroDato % 1 == 0) {
    lettera = String.fromCharCode(Math.floor(numeroDato) + 96);
    return lettera;
  } else return "invalid";
}
document.write(`<br>La lettera è ${letteraInPosizione(25.0)}`);

/*ES. Calcolatrice di base */
numero1 = 1;
operatore = "+";
numero2 = 1;

function calcolatrice(numero1, operatore, numero2) {
  switch (operatore) {
    case "*":
      return numero1 * numero2;
    case "/":
      if (numero2 != 0) {
        return numero1 / numero2;
      } else return "Impossibile dividere per 0!";
    case "+":
      return numero1 + numero2;
    case "-":
      return numero1 - numero2;
    default:
      return "Operatore errato";
  }
}

document.write(
  `<br>${numero1} ${operatore} ${numero2} = ${calcolatrice(
    numero1,
    operatore,
    numero2
  )}`
);

/*Fare la somma di tutti gli elementi di un array */

let arrayDato = [2, 5, 5];
function sommaElemArray(arrayDato) {
  let somma = 0;
  for (let i = 0; i < arrayDato.length; i++) {
    somma += arrayDato[i];
  }
  return somma;
}

document.write(
  `<br>La somma totale dell'array è: ${sommaElemArray(arrayDato)}`
);

/*ES. Quante volte è vero? */

let arrayBoolean = [true, true, false, true, false];
function quantiTrue(arrayBoolean) {
  let contaTrue = 0;
  if (arrayBoolean.length != 0) {
    for (let i = 0; i < arrayBoolean.length; i++) {
      if (typeof arrayBoolean[i] === "boolean") {
        if (arrayBoolean[i] === true) contaTrue++;
      } else return "Gli elementi devono essere tutti booleani";
    }
    return contaTrue;
  } else return "L'array è vuoto!";
}
document.write(`<br>Nell'array ci sono ${quantiTrue(arrayBoolean)}  true`);

/*ES. Piegare un pezzo di carta */

function spessore(npieghe) {
  return Math.pow(2, npieghe) / 2 / 1000;
}
document.write(`<br>Lo spessore del foglio è ${spessore(2)}m`);

/*ES. Validare un’e-mail */
//DA FINIRE

function validate(str) {
  let primaChioc = str.substr(str.indexOf("@") - 1, 1);
  console.log(primaChioc.charCodeAt(0));
  if (
    (primaChioc.charCodeAt(0) >= 65 && primaChioc.charCodeAt(0) <= 90) ||
    (primaChioc.charCodeAt(0) >= 97 && primaChioc.charCodeAt(0) <= 122)
  ) {
    return true;
  } else return false;
}

console.log(validate("ciao@email.com"));

/*ES. Sasso, carta, forbici */

function vittoria(p1, p2) {
  if (isNaN(p1) && isNaN(p2)) {
    if (
      (p1 === "sasso" && p2 === "carta") ||
      (p1 === "carta" && p2 === "forbici") ||
      (p1 === "forbici" && p2 === "sasso")
    ) {
      return "Il vincitore è p2";
    } else if (
      (p1 === "carta" && p2 === "sasso") ||
      (p1 === "forbici" && p2 === "carta") ||
      (p1 === "sasso" && p2 === "forbici")
    ) {
      return "Il vincitore è p1";
    } else if (p1 === p2) {
      return "La partita è finita in parità";
    } else return "Inserisci correttamente gli argomenti!";
  } else return "Non inserire un numero!";
}

document.write(`<br> ${vittoria("sasso", "sasso")}`);

/*ES. Quanti giorni tra due date */

function getDays(data1, data2) {
  if (
    data1.getFullYear() === data2.getFullYear() &&
    data1.getMonth() === data2.getMonth()
  ) {
    if (data1.getDate() >= data2.getDate()) {
      let giorni = data1.getDate() - data2.getDate();
      return giorni;
    } else {
      giorni = data2.getDate() - data1.getDate();
      return giorni;
    }
  } else return "Non è nello stesso anno o mese";
}
document.write(
  `<br> ${getDays(new Date("June 20, 2019"), new Date("June 10, 2019"))}`
);

/*ES.  Rimuovere i duplicati da un array */

let arrayD = [1, 1, 0, 1, 0, 2, 2];

document.write(`<br>-----------------------------------------`);
/* Versione creando un nuovo array */
function checkDup(array) {
  arrayNuovo = [];
  for (i = 0; i < array.length; i++) {
    if (typeof array[i] === "string" || typeof array[i] === "number") {
      if (!arrayNuovo.includes(array[i])) {
        arrayNuovo.push(array[i]);
      }
    } else return "Inserisci valori validi!";
  }
  return arrayNuovo;
}
document.write(`<br>Il vecchio array con i duplicati: ${arrayD}`);
document.write(`<br>Il nuovo array senza duplicati: ${checkDup(arrayD)}`);

/* Versione 2, cancellando i duplicati direttanente nell'array dato */
/*function checkDup(arrayD) {
  for (i = 0; i < arrayD.length; i++) {
    for (j = 0; j < arrayD.length; j++) {
      if (i != j) {
        if (arrayD[i] === arrayD[j]) {
          arrayD.splice(j, 1);
        }
      }
    }
  }
  return arrayD;
}
document.write(`<br>Il vecchio array con i duplicati: ${arrayD}`);
document.write(`<br>Il vecchio array senza duplicati: ${checkDup(arrayD)}`);
*/

/* ES. Ottieni la somma del budget delle persone  */

document.write(`<br>-----------------------------------------`);

let utente = [
  { name: "Jhon", age: 21, budjet: 23000 },
  { name: "Steve", age: 32, budjet: 40000 },
  { name: "Martin", age: 16, budjet: 2700 },
];

function getBudgets(utentePassato) {
  let somma = 0;
  for (i = 0; i < utentePassato.length; i++) {
    somma += utentePassato[i].budjet;
  }
  return somma;
}

document.write(`<br>La somma totale dei budjets è: ${getBudgets(utente)}`);

document.write(`<br>-----------------------------------------`);

/* ES. Calcola il prezzo totale dei generi alimentari  */

let lista = [
  { prodotto: "latte", quantità: 1, prezzo: 1.5 },
  { prodotto: "Uova", quantità: 12, prezzo: 0.1 },
  { prodotto: "Pane", quantità: 2, prezzo: 1.6 },
  { prodotto: "Pasta", quantità: 1, prezzo: 4.5 },
];

function getTotPrice(lista) {
  let somma = 0;
  for (i = 0; i < lista.length; i++) {
    somma += lista[i].prezzo * lista[i].quantità;
  }
  return somma;
}
document.write(`<br>Il totale della spesa è: ${getTotPrice(lista)}`);

document.write(`<br>-----------------------------------------`);
