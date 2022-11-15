// stampa quello scritto in log
 console.log("ciao");

 var primavariabile = 1; //dichiarazione: dichiaro una nuova variabile
 primavariabile = 1; //assegno un nuovo valore
 var secondavariabile = 2;
 console.log(primavariabile);
 primavariabile = 10; //riassegno un nuovo valore
 console.log(primavariabile);
 console.log(secondavariabile);

 var miastringa = "ciao";
 console.log(miastringa);

 let nuovavariabile = 3;
 console.log(nuovavariabile);
 nuovavariabile = 13;
 console.log(nuovavariabile);

 const primacostante = 4; //dichiarazione + assegnazione
 console.log(primacostante);

 //come javascript capisce che una variabile è numerica o stringa

 let somma = nuovavariabile + secondavariabile;
 console.log(somma);

 let sommastrana = primavariabile + miastringa;
 console.log(sommastrana);

 let nuovastringa = "1";
 let nuovastringa2 = "2";
 let nuovasomma = nuovastringa + nuovastringa2;
 console.log(nuovasomma);

//codice per capire qual è la tipologia di qualcosa, se stringa o numero
 console.log(typeof nuovasomma);
 console.log (typeof somma);
 console.log(typeof nuovasomma);

 //let, var, scope
var e = 4;
let f = 5;
console.log(e);
console.log(f);

{
    var g = 6;
    let h = 7;
    //all'interno del blocco --> scopo locale, non scope globale
    console.log(e);
    console.log(f);
    console.log("stampo g all'interno del blocco = " + g);
    console.log("stampo g all'interno del blocco = " + h);
}

console.log(e);
console.log(f);
console.log("stampo g all'interno del blocco = " + g);
// questo ci restituirà errore, perchè let ha solo uno scopo locale e non globale
//console.log("stampo g all'interno del blocco = " + h);

//tipi di dato
console.log("--tipi di dato--");
let numero = 1;
let strings = "ciao mondo";
let booleano = true; // solo 0/false oppure 1/tru --> algebra booleana

let valoreiniziale = 0;
let nullo = null;

//costrutti base
console.log ("--costrutti di base--");
a = 5 
if (a > 0){//rombo
    //condizione vera
    console.log("a è minore di 0");

}

//operatore ternario
a>0? console.log("a è maggiore di 0") : console.log("a è minore di 0");

if ( a > 0 && a <10){ //sarà true solo se a è compreso tra 0 e 10
    console.log("ciao mondo");
}

//switch
const espressione = "Papayas";
switch (espressione){
    case 'Oranges':
        console.log('Oranges');
    // ...operazioni
        break; //esci dal case
    case 'Mangoes':
    case 'Papayas':
        console.log ("Mangoes and papayas");
        break;
    default:
        console.log ("no fruits");
        break;
}

//loop
console.log ("--loop--");
//while
/*
    dichiarazione variabile
    while (condizione){
        corpo del while
        aggiornamento della variabile nella condizione
    }
*/

console.log("inizio while");
let i = 0;
while (i < 4){
    console.log("ciao mondo");
    i++; //i = i + 1;
}
console.log ("fine while");

/*
i = 0 ciao mondo
i = 1 ciao mondo
i = 2 ciao mondo
i = 3 ciao mondo 
i < 4 dove i = 4 esce dal while e stampa "fine while"
*/

//for
/*
dichiarazione assegnazione variabile per la condizione
for {
    corpo del do-while
    incremento/aggiornamento della variabile per la condizione
}while (condizione)
}
*/
console.log("inizio for");

for (i = 0; i < 4; i++){
    console.log(i);
}
console.log("fine for");

//do-while
/*
dichiarazione assegnazione variabile per la condizione
do {
    corpo del do-while
    incremento/aggiornamento della variabile per la condizione
}while (condizione)
}
*/

console.log("inizio do-while");
i=0;
do {
    console.log(i);
    i++; 
}while(i<4);
console.log ("fine do-while");
