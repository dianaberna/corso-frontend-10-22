/* commento su più righe */
// commento su una riga

console.log("ciao");

var primavariabile = 1;
var secondavariabile = 2;
console.log(primavariabile);
console.log(secondavariabile);

var primastringa = "ciao2";
console.log(primastringa);

let nuovavariabile = 3;
console.log(nuovavariabile);

// costante
const primacostante = 4;
console.log(primacostante);

// typeof
console.log("--- typeof ---");

let a = "ciao";
console.log(typeof a);

let b = "ciao";
console.log(typeof b);

// typeof con somme
let c = 6;
let d = 9;
let somma = c + d;
console.group(somma);
console.log(typeof somma);

let sommastringhe = a + b;
console.log(sommastringhe);
console.log(typeof sommastringhe);

let sommastrana = a + c;
console.log(sommastrana);
console.log(typeof sommastrana);

let numerostringa1 = "1";
let numerostringa2 = "2";
let nuovasomma = numerostringa1 + numerostringa2;
console.log(nuovasomma);
console.log(typeof nuovasomma);

// let. var, scope
console.log("--- scope ---");

// scope globale
var e = 4;

/* console.log(f) --> errore */
let f = 5;
console.log(e);
console.log(f);

{
    var g = 6;
    let h = 7;
    // all'interno del blocco --> scope locale
    console.log(e);
    console.log(f);
    console.log("stampo g all'interno del blocco = " + g);
    console.log("stampo h all'interno del blocco = " + h);
}

console.log(e);
console.log(f);
console.log("stampo g fuori del blocco = " + g);
console.log("stampo h fuori del blocco = " + h);
