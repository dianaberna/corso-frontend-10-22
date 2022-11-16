// let array = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1];

// //1
// console.log(" 1) Stampa degli elementi dell array iniziale");

// let i;
// for (i = 0; i < array.length; i++) {
//   console.log("Elemento in posizione " + i + ": " + array[i]);
// }
// console.log(array);

// console.log(" ");

// //2
// console.log(" 2) Stampa della somma di tutti gli elementi dell array:");

// let sum = 0;
// for (i = 0; i < array.length; i++) {
//   sum = sum + array[i];
// }
// console.log("La somma di tutti gli elementi dell array è: " + sum);

// console.log(" ");

// //3
// console.log(" 3) Stampa della somma dei soli elementi dispari dell array:");

// sum = 0;
// for (i = 0; i < array.length; i++) {
//   if (!(array[i] % 2 == 0)) {
//     sum = sum + array[i];
//   }
// }
// console.log("La somma di tutti gli elementi dispari dell array è: " + sum);

// console.log(" ");

// //4
// console.log(" 4) Stampa della somma dei soli elementi in posizione pari dell array:");

// sum = 0;
// for (i = 0; i < array.length; i = i + 2) {
//   sum = sum + array[i];
// }
// console.log("La somma di tutti gli elementi in posizione pari dell array è: " + sum);

// console.log(" ");

// //5
// console.log(" 5) Stampa delle volte che il numero 2 compare nell array:");

// let c = 0;
// for (i = 0; i < array.length; i++) {
//   if (array[i] == 2) {
//     c++;
//   }
// }
// console.log("Il numero di volte che il numero 2 appare è: " + c);

// console.log(" ");

// //6
// console.log(" 6) Stampa delle volte che un numero positivo compare nell array (0 compreso):");

// c = 0;
// for (i = 0; i < array.length; i++) {
//   if (array[i] >= 0) {
//     c++;
//   }
// }
// console.log("Il numero di volte che un numero positivo (0 compreso) appare nell array è: " +c);

// console.log(" ");

// //7
// console.log(" 7) Stampa del numero massimo all'interno dell array");

// let max = array[0];
// for (i = 1; i < array.length; i++) {
//   if (array[i] > max) {
//     max = array[i];
//   }
// }
// console.log("Il numero massimo dell array è: " + max);

// console.log(" ");

// //8
// console.log(" 8) Stampa del numero minimo all'interno dell array");

// let min = array[0];
// for (i = 1; i < array.length; i++) {
//   if (array[i] < min) {
//     min = array[i];
//   }
// }
// console.log("Il numero minimo dell array è: " + min);

// console.log(" ");

// //9
// console.log(" 9) Inserimento e stampa degli elementi negativi in un nuovo array:");

// let arrayneg = [];
// let j = 0;
// for (i = 0; i < array.length; i++) {
//   if (array[i] < 0) {
//     arrayneg[j] = array[i];
//     j++;
//   }
// }
// console.log("Stampa degli elementi nel nuovo array che contiene solo elementi negativi: ");

// for (j = 0; j < arrayneg.length; j++) {
//   console.log("Elemento in posizione " + j + ": " + arrayneg[j]);
// }

// console.log(arrayneg);

// console.log(" ");

// //10
// console.log(" 10) Creazione e stampa del doppio di ogni elemento dell array iniziale:");

// let arraydou = [];
// for (i = 0; i < array.length; i++) {
//   arraydou[i] = array[i] * 2;
// }
// console.log("Stampa degli elementi del nuovo array che contiene il doppio di ogni elemento dell array iniziale: ");

// for (i = 0; i < arraydou.length; i++) {
//     console.log("Elemento in posizione " + i + ": " + arraydou[i]);
// }

// console.log(arraydou);

// console.log(" ");

// //11
// console.log(" 11) Creazione e stampa di un array che contiene 2 volte gli elementi dell array iniziale:");

// let array2x = [];
// for (i = 0; i < array.length; i++) {
//     array2x[i] = array[i];
//     array2x[i+array.length] = array[i];
//     //array.concat(array);
// }
// console.log("Stampa degli elementi del nuovo array che contiene 2 volte l array iniziale: ");

// for (i = 0; i < array2x.length; i++) {
//     console.log("Elemento in posizione " + i + ": " + array2x[i]);
// }

// console.log(array2x);

// console.log(" ");

// //12
// console.log(" 12) Stampa al contrario dell array iniziale");

// for (i = array.length-1; i >= 0; i--) {
//   console.log("Elemento in posizione " + i + ": " + array[i]);
// }

// console.log(" ");

// //13
// console.log(" 13) Creazione di un array3 con la somma degli elementi dell’array1 e dell’array2");

// let array1=[1, 2, 2, 3, 4];
// let array2=[4, 2, 2, 4];

// let array3=[];

// //prima   verificare quale dei due array è maggiore

// for (i = 0; i < array1.length; i++) {
//   if (i < array2.length) {
//     array3[i]=array1[i]+array2[i];
//   }else{
//     array3[i]=array1[i];
//   }
// }
// console.log("Stampa degli elementi dell array 3");

// for (i = 0; i < array3.length; i++) {
//   console.log("Elemento in posizione " + i + ": " + array3[i]);
// }

// console.log(array3);

// console.log(" ");

// //14
// console.log(" 14) Creare un array3 con gli elementi dispari di array1 e gli elementi pari di array2");

// array3=[];

// for (i = 0; i < array1.length; i++) {
//   if (array1[i]%2!=0) {
//     array3.push(array1[i]);
//   }

//   if (array2[i]%2==0) {
//     array3.push(array2[i]);
//   }
// }
// console.log("Stampa degli elementi dell array 3");

// for (i = 0; i < array3.length; i++) {
//   console.log("Elemento in posizione " + i + ": " + array3[i]);
// }

// console.log(array3);

// console.log(" ");

// //15
// console.log(" 15) Aggiornare l array2, facendo in modo che ogni elemento dell array2 sarà uguale all'attuale elemento, diviso l'elemento nella stessa posizione nell array1 ");

// for ( i = 0; i < array2.length; i++) {
//   if (i!=0) {
//     array2[i]=array2[i]/array1[array1.length-i];
//   }
// }
// console.log("Stampa degli elementi dell array 2");

// for (i = 0; i < array2.length; i++) {
//   console.log("Elemento in posizione " + i + ": " + array2[i]);
// }

// console.log(array2);

// console.log(" ");

// //16
// console.log(" 16) Verificare se gli array sono palindromi");

// let bool=true;

// console.log("Controllo palindromo per array1:");

// i=0;
// while (i<array1.length/2 && bool==true) {
//   if (i==0) {
//     if (array1[0]!=array1[array1.length-1]) {
//       bool=false;
//     }
//   }else{
//     if (array1[i]!=array1[array1.length-(i+1) ]) {
//       bool=false;
//     }
//   }
//   i++;
// }

// if (bool==true) {
//   console.log("Array1 è palindromo");ù
//   console.log(array1);
// }else{
//   console.log("Array1 non è palindromo");
//   console.log(array1);
// }

// console.log("Controllo palindromo per array2:");
// array2=[4, 2, 1, 2, 4];

// i=0;
// bool=true;
// while (i<array2.length/2 && bool==true) {
//   if (i==0) {
//     if (array2[0]!=array2[array2.length-1]) {
//       bool=false;
//     }
//   }else{
//     if (array2[i]!=array2[array2.length-(i+1) ]) {
//       bool=false;
//     }
//   }
//   i++;
// }

// if (bool==true) {
//   console.log("Array2 è palindromo");
//   console.log(array2);
// }else{
//   console.log("Array2 non è palindromo");
//   console.log(array2);
// }

// ESERCIZI CON FUNZIONI

// 1 - Moltiplicazione di due numeri

console.log(" 1) Funzione che restituisce il prodotti di due numeri:");

function moltiplicazione(n1, n2) {
  return n1 * n2;
}

console.log("Utilizziamo i numeri 7 e 3 per la moltiplicazione");
console.log("Il prodotto dei due numeri scelti è: " + moltiplicazione(7, 3));
console.log(" ");

// 2 - Conversione di anni in giorni

console.log(" 2) Funzione che converte il numero di anni in giorni:");

function anniAGiorni(nAnni) {
  return nAnni * 365;
}

console.log("Inseriamo 20 anni");
console.log("La conversione di anni 20 in giorni è: " + anniAGiorni(20));
console.log(" ");

// 3 - Minore o uguale a zero

console.log(
  " 3) Funzione che restituisce true, se il numero inserito è minore o ugale a zero:"
);

function minoreUgualeAZero(n) {
  if (n <= 0) {
    return true;
  } else {
    return false;
  }
}

console.log("Inseriamo -9 come numero");
console.log(
  "Il controllo sul numero inserito risulta: " + minoreUgualeAZero(-9)
);
console.log(" ");

// 4 - Il problema della fattoria

console.log(
  " 3) Funzione che calcola quante zampe ci sono tra tutti i tipi di animali:"
);

function numeroZampe(polli, mucche, maiali) {
  return polli * 2 + mucche * 4 + maiali * 4;
}

console.log("Inseriamo 2 polli, 3 mucche e 5 maiali");
console.log(
  "Il numero di zampe totali risulta essere: " + numeroZampe(2, 3, 5)
);
console.log(" ");

// 5 - Case di fiammiferi

console.log(
  " 5) Funzione che calcola quanti fiammiferi sono stati usati per creare le case realizzate:"
);

function numeroDiFiammiferi(nCase) {
  return (nCase - 1) * 5 + 6;
}

console.log("Inseriamo 4 case di fiammiferi");
console.log(
  "Il numero di fiammiferi utilizzati risulta: " + numeroDiFiammiferi(4)
);
console.log(" ");

// 6 - Somma i numeri da un unico numero

console.log(
  " 6) Funzione che restituisce la somma del numero inserito e di tutti i suoi precdenti:"
);

function sommaDaUnUnicoNumero(n) {
  let s = 0;
  while (n > 0) {
    s = s + n;
    n--;
  }
  return s;
}

console.log("Inseriamo 13 come numero");
console.log(
  "La somma del numero inserito più i suoi precedenti è: " +
    sommaDaUnUnicoNumero(13)
);
console.log(" ");

// 7 - Trova lo sconto

console.log(" 7) Funzione che calcola il prezzo scontato:");

function calcolaPrezzo(prezzo, sconto) {
  return prezzo - (prezzo / 100) * sconto;
}

console.log(
  "Inseriamo 89 come prezzo iniziale e 20 come percentuale di sconto"
);
console.log(
  "Il nuovo prezzo calcolato dopo lo sconto è: " + calcolaPrezzo(89, 20)
);
console.log(" ");

// 8 - Posizione nell’alfabeto

console.log(
  " 8) Funzione che restituisce la lettera corrispondete al numero dato, nell'alfabeto:"
);

function letteraInPosizione(n) {
  if (n % 2 == 0) {
    if (n >= 1 && n <= 26) {
      return String.fromCharCode(n + 96);
    } else {
      console.log("Non corrisponde ad una lettera");
    }
  } else {
    console.log("Numero inserito non valido");
  }
}

console.log("Inseriamo 2 come numero");
console.log(
  "La lettera corrispondente al numero inserito è: " + letteraInPosizione(2)
);
console.log(" ");

// 9 - Calcolatrice di base

console.log(
  " 9) Funzione che svolge una delle semplici operazioni di una calcolatrice dati 2 numeri:"
);

function calcolatrice(n1, operando, n2) {
  switch (operando) {
    case "+":
      return n1 + n2;

    case "-":
      return n1 - n2;

    case "*":
      return n1 * n2;

    case "/":
      return n1 / n2;

    default:
      console.log("Non è stato inserito un operatore valido");
      break;
  }
}

console.log("Inseriamo 5 e 5 come numeri e '*' come operando");
console.log("Il risultato della operazione è: " + calcolatrice(5, "*", 5));
console.log(" ");

// 10 - Fare la somma di tutti gli elementi di un array

console.log(" 10) Funzione che somma tutti gli elementi di un array");

function sommaArray(array) {
  let s = 0;
  for (let i = 0; i < array.length; i++) {
    s = s + array[i];
  }

  return s;
}

array = [4, 2, 10, 2];

console.log("Inseriamo questo array:");
console.log(array);
console.log("La somma degli elementi dell'array è: " + sommaArray(array));
console.log(" ");

// 11 - Quante volte è vero?

console.log(
  " 11) Funzione che restituisce quante volte un elemento dell'array è true"
);

function contaTrue(array) {
  let c = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == true) {
      c++;
    }
  }
  return c;
}

array2 = [true, true, false, true, false, true];

console.log("Inseriamo questo array:");
console.log(array2);
console.log("Il numero di elementi 'true' dell'array è: " + contaTrue(array2));
console.log(" ");

// 12 - Piegare un pezzo di carta

console.log(
  " 12) Funzione che restituisca lo spessore (in metri) di un foglio di carta dopo averlo piegato n numero di volte"
);

function spessore(nPieghe) {
  let s = 0.5;
  for (let i = 0; i < nPieghe; i++) {
    s = s * 2;
  }
  return s / 1000;
}

console.log("Caso di un foglio piegato 21 volte:");
console.log(
  "Lo spessore del foglio piegato, in metri risulta: " + spessore(21) + "m"
);
console.log(" ");

// 13 - Validare un'e-mail

console.log(
  " 13) Funzione che accetta una stringa, controlla se è un indirizzo email valido e restituisce true o false"
);

function checkEmail(email) {
  let c = 0;
  if (email.includes("@") && email.includes(".")) {
      if (email.charAt(0)!="@" && email.charAt(0)!=".") {
        for (let i = email.indexOf("@")+1; i < email.length; i++) {
          if (email.charAt(i)==".") {
              c++;
          }
        }

        if (c==1) {
          return true;
        }else{
          return false;
        }
      }else{
        return false;
      }
  }else{
    return false;
  }
}

console.log("Inseriamo questa mail: @gmail.com");
console.log("La mail viene considerata valida? " + checkEmail("@gmail.com"));
console.log(" ");

// 14 - Sasso, carta, forbici

console.log(" 14) Funzione che accetta due stringhe, come argomenti e restituisce una stringa che indica il vincitore in una partita a Sasso, Carta, Forbici.");

function rps(p1, p2) {
  str1 = p1.toLowerCase();
  str2 = p2.toLowerCase();

  switch (str1) {
    case "rock":
      if (str2=="paper") {
        console.log("Vince il Giocatore 2");
      }else{
        if (str2=="scissors") {
          console.log("Vince il Giocatore 1");
        }else{
          if (str2=="rock") {
            console.log("Pareggio");
          }else{
            console.log("Il Giocatore 2 non ha inserito un oggetto non valido");
          }
        }
      }
      break;

      case "paper":
      if (str2=="paper") {
        console.log("Pareggio");
      }else{
        if (str2=="scissors") {
          console.log("Vince il Giocatore 2");
        }else{
          if (str2=="rock") {
            console.log("Vince il Giocatore 1");
          }else{
            console.log("Il Giocatore 2 non ha inserito un oggetto non valido");
          }
        }
      }
      break;
  
      case "scissors":
      if (str2=="paper") {
        console.log("Vince il Giocatore 1");
      }else{
        if (str2=="scissors") {
          console.log("Pareggio");
        }else{
          if (str2=="rock") {
            console.log("Vince il Giocatore 2");
          }else{
            console.log("Il Giocatore 2 non ha inserito un oggetto non valido");
          }
        }
      }
      break;

    default: console.log("Il Giocatore 1 non ha inserito un oggetto valido");
      break;
  }
}

console.log("Inseriamo questi oggetti: Carta, Forbice");
rps("paper", "scissors");
console.log(" ");