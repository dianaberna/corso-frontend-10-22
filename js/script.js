/* commento su più righe */
// commento su una riga
console.log("ciao mondo");

// variabile

var primavariabile; // dichiaro una nuova variabile 
primavariabile = 1; // assegno un nuovo valore
var secondavariabile = 2 + 1;
var terzavariabile;
console.log(primavariabile);
primavariabile = 10; // riassegno un nuovo valore
console.log(primavariabile);
console.log(secondavariabile);
terzavariabile = 30;
console.log(terzavariabile);

var primastringa = "prima stringa";
console.log(primastringa);

let nuovavariabile = 3;
console.log(nuovavariabile);
nuovavariabile = 13;
console.log(nuovavariabile);

const primacostante = 4; // dichiarazione + assegnazione 
console.log(primacostante);

/* 
1 -> numero 
2 -> numero 
2.5 -> numero
"a" -> stringa 
"ciao sono diana 1234" -> stringa
*/

// typeof
console.log("--- typeof ---");

let a = 5;
console.log(typeof a);
a = "ciao";
console.log(typeof a);

let b = "ciao";
console.log(typeof b);

// typeof con somme
console.log("--- typeof con somme ---");

let c = 6; 
let d = 9;
let somma = c + d;
console.log(somma);
console.log(typeof somma);

let sommastringhe = a + b;
console.log(sommastringhe);
console.log(typeof sommastringhe);

let sommastrana = a + c;
console.log(sommastrana);
console.log(typeof sommastrana);

let numerostringa1 = "1"
let numerostringa2 = "2"
let nuovasomma = numerostringa1 + numerostringa2
console.log(nuovasomma)
console.log(typeof nuovasomma)

// let, var, scope 
console.log("--- scope ---")

// scope globale => scope = contesto 
var e = 4
/* console.log(f) -> errore */
let f = 5
console.log(e)
console.log(f)

{
    var g = 6
    let h = 7
    // all'interno del blocco -> scope locale
    console.log(e)
    console.log(f)
    console.log("stampo g all'interno del blocco = " + g)
    console.log("stampo h all'interno del blocco = " + h)
    const nuovacostante = 10
    console.log(nuovacostante)
}

var g = 10
console.log(e)
console.log(f)
console.log("stampo g fuori dal blocco = " + g)
/* console.log("stampo h fuori del blocco = " + h) -> errore*/
/* console.log("stampo nuovacostante fuori dal blocco = " + nuovacostante) -> errore */

// tipi di dato 
console.log("--- tipi di dato ---")
let numero = 1
let stringa = "ciao mondo"
let booleano = true // solo 0/false oppure 1/true -> algebra booleana

// operatori di assegnamento 
console.log("--- operatori di assegnamento ---")
let op1 = 2;
let op2 = 3;
console.log(op2 += op1) // op2 = op2 + op1
let op3 = 1;
console.log(op3)
op3++; // a = a + 1
console.log(op3)

// costrutti base
console.log("--- costrutti base ---");
// condizionale
a = 5;
if( a > 0 ){ // rombo
    // condizione vera
    console.log("a è maggiore di 0")
}else{
    // condizione false
    console.log("a è minore di 0")
}

// operatore ternario (condizionale)
a > 0 ? console.log("a è maggiore di 0") : console.log("a è minore di 0")

if( a > 0 ){
    if( a < 10 ){
        console.log("ciao mondo")
        a = a + 1
    }else{
        console.log("particolare")
        a = a + 5
    }
}else {
    console.log("particolare 2")
    a = a + 10
}

console.log(a)

if( a > 0 && a < 10){ // sarà true solo se a è compreso tra 0 e 10 (esclusi)
    console.log("ciao mondo")
}

// switch case

const espressione = 'Papayas';
switch (espressione) {
  case 'Oranges':
    console.log('Oranges');
    // ... operazioni
    break; // esci dal case
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas');
    break;
  default:
    console.log("Niente frutta");
}

// se espressione è uguale a "Oranges" allora stampa "Oranges"
// se espressione è uguale a "Mangoes" oppure è uguale a "Papayas" allora stampa "Mangoes and papayas "
// altrimenti stampa "Niente frutta"

// 