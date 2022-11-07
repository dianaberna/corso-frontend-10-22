/* commento su più righe */
// commento su una riga
console.log("ciao mondo");

// variabile

var primavariabile = 1;
var secondavariabile = 2;
var terzavariabile;
console.log(primavariabile);
primavariabile = 10;
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

const primacostante = 4;
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