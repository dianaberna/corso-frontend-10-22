/* MOLTIPLICAZIONE DI DUE NUMERI
Crea una funzione che accetta due numeri come argomenti e ne restituisce la moltiplicazione*/

function moltiplica(num1, num2){
  return num1 * num2;
}

console.log("MOLTIPLICAZIONE DI DUE NUMERI");
console.log(moltiplica(3,2));
console.log(moltiplica(-3,-6));
console.log(moltiplica(7,3));


/* CONVERTIRE ANNI IN GIORNI
Crea una funzione che prenda l'età in anni e restituisca l'età in giorni */

function anni_in_giorni(anni){
  let giorni = anni * 365;
  return giorni;
}

console.log("CONVERTIRE ANNI IN GIORNI");
console.log(anni_in_giorni(65));
console.log(anni_in_giorni(0));
console.log(anni_in_giorni(20));


/* MINORE O UGUALE A ZERO 
Crea una funzione che accetta un numero come unico argomento 
e restituisce true se è minore o uguale a zero, altrimenti restituisce false.
*/

function minore_zero(num){
  if(num <= 0){
    return true;
  }else{
    return false;
  }
}

console.log("MINORE O UGUALE A ZERO");
console.log(minore_zero(5));
console.log(minore_zero(0));
console.log(minore_zero(-2));


/* PROBLEMA DELLA FATTORIA 
In questa sfida, un contadino ti chiede di dirgli quante zampe si possono contare tra tutti i suoi animali. 
L'agricoltore alleva tre specie: polli = 2 zampe, mucche = 4 zampe, maiali = 4 zampe.
L'agricoltore ha contato i suoi animali e ti dà un subtotale per ogni specie. 
Devi implementare una funzione che restituisca il numero totale di zampe di tutti gli animali. */

function contaZampe(numPolli, numMucche, numMaiali){
  numPolli = numPolli * 2;
  numMucche = numMucche * 4;
  numMaiali = numMaiali * 4;
  tot_zampe = numPolli + numMucche + numMaiali;
  return tot_zampe;
}

console.log("PROBLEMA DELLA FATTORIA");
console.log(contaZampe(2,3,5));
console.log(contaZampe(1,2,3));
console.log(contaZampe(5,2,8));


/* CASE DI FIAMMIFERI 
Crea una funzione che prenda un numero (step) come argomento e restituisca il numero di fiammiferi in quello step. 
(1) Lo step 0 restituisce 0 fiammiferi. 
(2) L'input (cioè lo step) sarà sempre un numero intero non negativo. 
(3) Pensa all'input (cioè allo step) come al numero totale di case che sono state collegate tra loro.*/

function contaFiammiferi(step){
  numFiammiferi = 0;
  if(step == 1){
    numFiammiferi = step * 6;
  }else if(step > 0){
    numFiammiferi = step * 6 - step + 1;
  }else if(step < 0){
    console.log("Numero non valido!");
  }else{
    return numFiammiferi;
  }
  return numFiammiferi;
}

console.log("CASE DI FIAMMIFERI");
console.log(contaFiammiferi(1));
console.log(contaFiammiferi(4));
console.log(contaFiammiferi(87));


/* SOMMA I NUMERI DA UN UNICO NUMERO
Crea una funzione che accetta un numero come argomento. Somma tutti i numeri da 1 al numero passato alla funzione. 
Ad esempio, se l'input è 4, la tua funzione dovrebbe restituire 10 perché 1 + 2 + 3 + 4 = 10. */

function somma_daNumero(num){
  somma = num;
  num = num-1;
  while(num>0){
    somma = somma + num;
    num--;
  }
  return somma;
}

console.log("SOMMA I NUMERI DA UN UNICO NUMERO");
console.log(somma_daNumero(4));
console.log(somma_daNumero(13));
console.log(somma_daNumero(600));


/* TROVA LO SCONTO
Crea una funzione che accetta due argomenti: il prezzo originale e la percentuale di sconto come numeri interi 
e restituisce il prezzo finale dopo lo sconto.
PS. La tua risposta dovrebbe essere arrotondata a due cifre decimali. (vedere parseFloat e toFixed) */

function trovaSconto(prezzo, percentuale){
  sconto = prezzo/100*percentuale;
  spesa = prezzo - sconto;
  return spesa.toFixed(2);
}

console.log("TROVA LO SCONTO");
console.log(trovaSconto(1500, 50));
console.log(trovaSconto(89, 20));
console.log(trovaSconto(100, 75));


/* POSIZIONE NELL'ALFABETO
Dato un numero compreso tra 1 e 26 (vedere codice ASCII), restituisci quale lettera si trova 
in quella posizione dell'alfabeto. Restituisce "non valido" se il numero fornito non rientra in tale
intervallo o non è un numero intero.
(1) Restituisci una lettera minuscola. 
(2) I numeri che terminano con ".0" sono validi. 
(3) Una funzione che javascript ci mette a disposizione per questi casi è charCodeAt/fromCharCode */

function letteraPosizione (num){
  if(num > 0 && num < 27 && num % 1 == 0){
    lettera = String.fromCharCode(num + 96);
    return lettera;
  }else{
    return "Numero non valido";
  }
}

console.log("POSIZIONE NELL'ALFABETO");
console.log(letteraPosizione(1));      //a
console.log(letteraPosizione(26.0));   //z
console.log(letteraPosizione(0));      //invalid
console.log(letteraPosizione(4.5));    //invalid


/* CALCOLATRICE DI BASE 
Crea una funzione che accetta due numeri e un operatore matematico + - / * 
ed eseguirà un calcolo con i numeri indicati.
PS. Se l'input tenta di dividere per 0, restituisce: "Impossibile dividere per 0!"*/

function calcolatrice(num1, operatore, num2){
  switch(operatore){
    case "+": return num1 + num2;
    case "-": return num1 - num2;
    case "*": return num1 * num2;
    case "/": 
      if(num2 != 0){
        return num1 / num2;
      }else{
        return console.log("Impossibile dividere per 0!");
      }
  }
}

console.log("CALCOLATRICE DI BASE");
console.log(calcolatrice(2,"+", 2));
console.log(calcolatrice(2,"*", 2));
console.log(calcolatrice(4,"/",2));


/* FARE LA SOMMA DI TUTTI GLI ELEMENTI DI UN ARRAY
Crea una funzione che restituisce la somma di tutti i valori di un array */

function sommaArray(array){
  somma = 0;
  for(i=0; i<array.length; i++){
    somma = somma + array[i];
  }
  return somma;
}

console.log("SOMMARE TUTTI GLI ELEMENTI DI UN ARRAY");
console.log(sommaArray([1,2,4]));
console.log(sommaArray([4,2,10,2]));
console.log(sommaArray([1]));


/* QUANTE VOLTE E' VERO? 
Crea una funzione che restituisce il numero di valori uguali a true presenti in un array.
(1) Restituisce 0 se viene fornito un array vuoto. 
(2) Tutti gli elementi dell'array sono di tipo bool (true o false).*/

function quantiTrue(array){
  n = 0;
  for(i=0; i<array.length; i++){
    if(array[i] == true){
      n++;
    }
  }
  return n;
}

console.log("QUANTI 'true' CI SONO NELL'ARRAY");
console.log(quantiTrue([true, false, false, true, false]));
console.log(quantiTrue([false, false, false, false]));
console.log(quantiTrue([]));


/* PIEGARE UN PEZZO DI CARTA
Creare una funzione che restituisca lo spessore (in metri) di un foglio di carta 
dopo averlo piegato n numero di volte. La carta inizia con uno spessore di 0,5 mm.
(1) Ci sono 1000 mm in un solo metro. 
(2) Non arrotondare le risposte.*/

function spessoreCarta(n_pieghe){
  const foglio = 0.0005;
  n_fogli = Math.pow(2,n_pieghe);
  spessore = foglio * n_fogli;
  return spessore;
}

console.log("PIEGARE UN PEZZO DI CARTA");
console.log(spessoreCarta(1));           //"0.001m" // carta piegata una volta = 1mm 
console.log(spessoreCarta(4));           //"0.008m" // carta piegata 4 volte = 8mm 
console.log(spessoreCarta(21));          //"1048.576m" // carta piegata 21 volte = 1048576mm 
console.log("----- PIEGARE UN PEZZO DI CARTA: DA RIVEDERE ----");


/* VALIDARE UN'EMAIL 
Crea una funzione che accetta una stringa, controlla se è un indirizzo email valido e 
restituisce true o false, a seconda della valutazione.
- La stringa deve contenere un carattere @.
- La stringa deve contenere un . carattere.
- La @ deve avere almeno un carattere davanti. (ad esempio "d@ciao.com" è valido mentre "@ciao.com" non è valido.
- Il . e la @ deve trovarsi nei posti appropriati. (ad esempio "hello.email@com" non è valido mentre "mario.rossi@email.com" è valido.
Se la stringa supera questi test, viene considerata un indirizzo email valido*/

function controlloEmail(email){
  c1 = "@";
  c2 = ".";
  posMax_c1 = 0; //ultima posizione della "@""
  posMax_c2 = 0; //ultima posizione del "."
  //N.B. Il "." deve trovarsi obbligatoriamente DOPO la "@", ma può trovarsi anche prima.
  
  if(email.includes(c1) && email.includes(c2)){
    for(i=0; i<email.length; i++){
      if(email[i] == c1){
        posMax_c1 = i;
      }
      if(email[i] == c2){
        posMax_c2 = i;
      }
    }
    if(posMax_c2 < posMax_c1){
      return false;
    }
    if(email.indexOf("@") == 0 || email.indexOf(".") == 0){
      return false;
    }else{
      return true;
    }
  }else{
    return false;
  }
}

console.log("VALIDARE UN'EMAIL");
console.log(controlloEmail("@gmail.com"));        //false
console.log(controlloEmail("hello.gmail@com"));   //false
console.log(controlloEmail("gmail"));             //false
console.log(controlloEmail("hello@gmail"));       //false
console.log(controlloEmail("hello@edabit.com"));  //true


/* SASSO, CARTA, FORBICI 
Crea una funzione che accetta due stringhe (p1 e p2 — che rappresentano i giocatori 1 e 2) come argomenti 
e restituisce una stringa che indica il vincitore in una partita a Sasso, Carta, Forbici.
Ogni argomento conterrà una singola stringa: "Sasso", "Carta" o "Forbici". 
Restituisci il vincitore secondo le seguenti regole:
Il sasso batte le forbici / Le forbici battono la carta / La carta batte il sasso.
Se p1 vince, restituisci la stringa "Il vincitore è p1".
Se p2 vince, restituisci la stringa "Il vincitore è p2".
Se p1 e p2 sono gli stessi, restituisci "È un pareggio".*/


function calcolaVincitore(p1, p2){
  op = ["Sasso", "Carta", "Forbici"];
  if(p1 == p2){
    return "È un pareggio!";
  }
  else if((p1 == op[0] && p2 == op[2]) || (p1 == op[1] && p2 == op[0]) || (p1 == op[2] && p2 == op[1])){
    return "Il vincitore è GIOCATORE 1";
  }
  else if((p2 == op[0] && p1 == op[2]) || (p2 == op[1] && p1 == op[0]) || (p2 == op[2] && p1 == op[1])){
    return "Il vincitore è GIOCATORE 2";
  }
  return "Valore errato!";
}

console.log("SASSO, CARTA, FORBICI");
console.log(calcolaVincitore("Sasso","Carta"));     //p2
console.log(calcolaVincitore("Forbici","Carta"));   //p1
console.log(calcolaVincitore("Carta","Carta"));


/* QUANTI GIORNI TRA DUE DATE 
Crea una funzione che accetta due date e restituisce il numero di giorni 
tra la prima e la seconda data.*/

function nGiorni(data1, data2){
  d1 = new Date(data1);
  d2 = new Date(data2);
  giorni = Math.floor((d2-d1)/(1000*60*60*24));
  return giorni;
}

// secondi = millisecondi/1000
// minuti = secondi/60
// ore = minuti/60
// Giorni = ore/24

console.log("QUANTI GIORNI TRA DUE DATE");
console.log(nGiorni("June 14, 2019","June 20, 2019"));          //6
console.log(nGiorni("December 29, 2018","January 1, 2019"));    //3
console.log(nGiorni("July 20, 2019","July 30, 2019"));          //10


/* RIMUOVERE I DUPLICATI DA UN ARRAY (DA FARE)
Crea una funzione che accetta un array di elementi, rimuove tutti gli elementi duplicati 
e restituisce un nuovo array nello stesso ordine sequenziale del vecchio array (meno i duplicati).
(1) I test contengono array con stringhe e numeri.
(2) I test fanno distinzione tra maiuscole e minuscole. */

function eliminaDuplicati(array){

  return array;
}

console.log("RIMUOVERE I DUPLICATI DA UN ARRAY ---- DA FARE");
console.log(eliminaDuplicati([1, 0, 1, 0]));                 // [1, 0]
console.log(eliminaDuplicati(["The", "big", "cat"]));        // ["The", "big", "cat"]
console.log(eliminaDuplicati(["John", "Taylor", "John"]));   // ["John", "Taylor"]