/* 
    commento 
    su 
    più 
    righe 
*/
// commento su una riga
console.log("ciao mondo");

// variabile

// var -> globale, quindi esiste fuori e dentro il blocco
// let/const -> locale al blocco cioè a {  }

var primavariabile; // dichiaro una nuova variabile -> ho una scatola vuota
primavariabile = 1; // assegno un nuovo valore -> ho aggiunto un valore nella scatola
var secondavariabile = 2 + 1;
var terzavariabile;
console.log(primavariabile); // stampa 1
primavariabile = 10; // riassegno un nuovo valore
console.log(primavariabile); // stampa 10
console.log(secondavariabile); // stampa 3
terzavariabile = 30;
console.log(terzavariabile); // stampa 30

var primastringa = "prima stringa"; // nuova scatola di tipo stringa
console.log(primastringa); // stampa "prima stringa"

let nuovavariabile = 3; // nuova scatola
console.log(nuovavariabile); // stampa 3
nuovavariabile = 13;
console.log(nuovavariabile); // stampa 13

const primacostante = 4; // dichiarazione + assegnazione
console.log(primacostante); // stampa 4
const secondacostante = nuovavariabile;
console.log(secondacostante);

/* 
    1 -> numero 
    2 -> numero 
    2.5 -> numero
    "a" -> stringa 
    "ciao sono diana 1234" -> stringa
*/

// typeof = restituisce il tipo del dato che gli passiamo
console.log("--- typeof ---");

let a = 5;
let tipodidato = typeof a;
console.log(tipodidato);    // stampa number
a = "ciao";                 // assegno una stringa alla variabile che era numero --> conversione implicita
console.log(typeof a);      // stampa string

let b = "mario";
console.log(typeof b);      // stampa string
b = 9;
console.log(typeof b);

// typeof con somme quindi conversione esplicita 
console.log("--- typeof e operatore somma (+) quindi conversione esplicita ---");

let c = 6;                  // number
let d = 9;                  // number
let somma = c + d;          // 6+9 -> 15
console.log(somma);         // stampa 15
console.log(typeof somma);  // stampa number

b = "mario"
console.log(typeof a);          // string -> ciao
console.log(typeof b);          // string -> mario
let sommastringhe = a + b;      // concatenare a con b, cioè "ciaomario"
sommastringhe = a + " " + b;    // concatenare a con b, cioè "ciao mario"
console.log(sommastringhe);
console.log(typeof sommastringhe); // string

console.log(a); // ciao -> string
console.log(c); // 6 -> number
let sommastrana = c + a; 
// il + se ho due stringhe oppure uno dei due è una
// stringa diventa concatenazione delle due variabili
// non più somma di due numeri
console.log(sommastrana);
console.log(typeof sommastrana);

/*
stringa + numero -> stringa (concatenazione di caratteri)
numero + stringa -> stringa (concatenazione di caratteri)
stringa + stringa -> stringa (concatenazione di caratteri)
numero + numero -> numero (somma aritmetica)
*/

// conversione di tipo
console.log(Number("30ciao"));      // NaN = Not a Number 
console.log(Number("50"));          // 50

// fa il parsing del valore e recupera il valore (parseInt è un più intelligente di Number)
console.log(parseInt("30px"));      // 30 (di tipo number)
console.log(parseInt("size-30"));   // NaN  "size" "30"
console.log(parseInt("50"));        // 50

// altri esempi
console.log(Number());              // 0
console.log(Number(null));          // 0
console.log(Number(true));          // 1
console.log(Number(""));            // 0

console.log(parseInt());            // NaN
console.log(parseInt(null));        // NaN
console.log(parseInt(true));        // NaN
console.log(parseInt(""));          // NaN

console.log("--- stampa provanumero con Number ---");
let provanumero = "1";
console.log(typeof provanumero);
let provanumeronuova = Number(provanumero); // conversione esplicita del tipo di dato da stringa a numero
console.log(typeof provanumeronuova);       // stampa number
console.log(provanumeronuova);              // 1 di tipo number

console.log("-- stampa provastringa con Number --");
let provastringa = "ciao";
console.log(typeof provastringa);           // stampa string
let provastringanuova = Number(provastringa); // --> va a "sporcare" la nostra variabile perché non riesce a fare la conversione
console.log(typeof provastringanuova);      // NaN
console.log(provastringanuova);             // NaN 

console.log("-- stampa con String --");
// String converte un numero in stringa
let nuovovalore = 12;                   
console.log(typeof nuovovalore);            // stampa number
let nuovastringa = String(nuovovalore);
console.log(nuovastringa);                  // "12"
console.log(typeof nuovastringa);           // stampa string

// stop

console.log("-- stampa isNan --");

if (isNaN(provastringanuova)) {
    console.log("si isNaN"); // se isNaN cioè isNotANumber è true vuol dire che è stringa
} else {
    console.log("no isNaN");
}

console.log(provastringanuova + 3);

// 1 di tipo numer è uguale ad 1 di tipo stringa ? si
if (provanumeronuova == "1") {
    // controllami il valore/dato
    console.log("si");
} else {
    console.log("no");
}

// 1 di tipo numer è uguale ad 1 di tipo stringa ? no
if (provanumeronuova === "1") {
    // controllami il valore/dato e il tipo
    console.log("si");
} else {
    console.log("no");
}

let numerostringa1 = "1";
let numerostringa2 = "2";
let nuovasomma = numerostringa1 + numerostringa2;
console.log(nuovasomma);
console.log(typeof nuovasomma);

// let, var, scope
console.log("--- scope ---");

// scope globale => scope = contesto
var e = 4;
/* console.log(f) -> errore */
let f = 5;
console.log(e);
console.log(f);

{
    // qualsiasi tipo di blocco if, switch, while, for, do-while
    var g = 6;
    let h = 7;
    // all'interno del blocco -> scope locale
    console.log(e);
    console.log(f);
    console.log("stampo g all'interno del blocco = " + g);
    console.log("stampo h all'interno del blocco = " + h);
    const nuovacostante = 10;
    console.log(nuovacostante);
}

var g = 10;
console.log(e);
console.log(f);
console.log("stampo g fuori dal blocco = " + g);
/* console.log("stampo h fuori del blocco = " + h) -> errore*/
/* console.log("stampo nuovacostante fuori dal blocco = " + nuovacostante) -> errore */

// tipi di dato
console.log("--- tipi di dato ---");
let numero = 1;
let stringa = "ciao mondo";
let booleano = true; // solo 0/false oppure 1/true -> algebra booleana

// operatori di assegnamento
console.log("--- operatori di assegnamento ---");
let op1 = 2;
let op2 = 3;
console.log((op2 += op1)); // op2 = op2 + op1
let op3 = 1;
console.log(op3);
op3++; // a = a + 1
console.log(op3);

// costrutti base
console.log("--- costrutti base ---");
// condizionale
a = 5;
if (a > 0) {
    // rombo --> nei diagrammi di flusso
    // condizione vera
    console.log("a è maggiore di 0");
} else {
    // altrimenti
    // condizione false
    console.log("a è minore di 0");
}

if (a > 0) {
    console.log("a è maggiore di 0");
} else if (a > -10) {
    console.log("a è minore di 0 ma maggiore di -10");
}

// operatore ternario (condizionale)
// condizione ? codice se la condizione è vera : codice se la condizione è falsa
a > 0 ? console.log("a è maggiore di 0") : console.log("a è minore di 0");

if (a > 0) {
    if (a < 10) {
        // if annidati
        console.log("ciao mondo");
        a = a + 1;
    } else {
        console.log("particolare");
        a = a + 5;
    }
} else {
    console.log("particolare 2");
    a = a + 10;
}

if (a > 0) {
    console.log("a maggiore di 0");
} else if (a < 10) {
    console.log("a è minore di 10");
}

console.log(a);

if (a > 0 && a < 10) {
    // sarà true solo se a è compreso tra 0 e 10 (esclusi)
    console.log("ciao mondo");
    var ciaomondo = true;
    console.log(ciaomondo);
}
console.log(ciaomondo);

// switch case
console.log("--- switch ---");
const espressione = "Papayas";
switch (espressione) {
    case "Oranges":
        console.log("Oranges");
        // ... operazioni
        break; // esci dal case
    case "Mangoes":
    case "Papayas":
        console.log("Mangoes and papayas");
        break;
    default:
        console.log("Niente frutta");
}

// se espressione è uguale a "Oranges" allora stampa "Oranges"
// se espressione è uguale a "Mangoes" oppure è uguale a "Papayas" allora stampa "Mangoes and papayas "
// altrimenti stampa "Niente frutta"

// loop
console.log("--- loop ---");

// while
/*
dichiarazione/assegnazione variabile per la condizione
while(condizione){
    corpo del while
    incremento/aggiornamento della variabile per la condizione
}
*/

// stampare 4 numeri a partire da 0
console.log("inizio while");
let i = 0; // inizio da 0
while (i < 4) {
    // finché la variabile i è minore di 4 allora eseguo il corpo del while
    console.log(i);
    // stampa dentro all'html
    i = i + 1;
}
console.log("fine while");
// for
/*
for (dichiariazione/assegnazione variabile ; condizione ; incremento/aggiornamento){
    corpo del for
}
*/
console.log("inizio for");
for (let j = 0; j < 4; j = j + 1) {
    // j esiste solo nel for
    console.log(j);
}
console.log("fine for");

console.log("inizio for");
for (let j = 4; j > 0; j = j - 1) {
    // j esiste solo nel for
    console.log(j - 1);
}
console.log("fine for");

/* for(i = 0; i < 4; i++){
    console.log(i)
} */

// do-while -> esegue il corpo almeno una volta
/*
dichiarazione/assegnazione variabile per la condizione
do{
    corpo del do-while
    incremento/aggiornamento della variabile per la condizione
}while(condizione)
*/

// ciclo/loop infinito = la condizione che fa uscire/terminare il loop non si verifica mai

i = 40;
console.log("inizio do-while");
do {
    console.log(i);
    i++; // i = i + 1
} while (i < 4);
console.log("fine do-while");

console.log("fine script.js");

let arraynumerico1 = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1]
let i = 0;
while ( i < arraynumerico1.lenght)
{
    console.log(arraynumerico[i]);
}