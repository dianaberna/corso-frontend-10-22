/* commento su più righe */
// commento su una riga //
console.log("ciao");

var x; // dichiarazione variabile
x = 1; // assegnazione valore alla variabile
const y = 2; // dichiarazione ed assegnazione valore ad una costante

var primaVariabile = 1; // se le variabili sono formate da più parole, si usa il "camelcase", cioè la maiuscola su tuttel le parole successive alla prima
var secondavariabile = 2;

console.log(primaVariabile);
console.log(secondavariabile);
var primastringa = "ciao2";
console.log(primastringa);
let nuovavariabile = 3;
console.log(nuovavariabile);
const primacostante = 4;
console.log(primacostante);

let numerostringa1 = "1";
let numerostringa2 = "2";

//

let somma = primaVariabile + secondavariabile;
console.log(somma);

let sommastrana = primastringa + primaVariabile;
console.log(sommastrana);

console.log("--- type of ---");
console.log(typeof sommastrana);

let sommastringhe = numerostringa1 + numerostringa2;
console.log(sommastringhe);
console.log("--- type of ---");
console.log(typeof sommastringhe);

sommastringhe = parseFloat(sommastringhe); // conversione da stringa a numero //
console.log(sommastringhe + somma);

// let, var, scope

// scope globale
var a = 42;
let b = 54;

{
  // all'interno del blocco lo scope è locale
  console.log(a);
  console.log(b);
  var c = 56;
  let d = 27;
  console.log("stampa variabili all'interno dello scope locale");
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
}
console.log("stampa variabili nello scope generale");
console.log(a);
console.log(b);
console.log(c);
//console.log(d); // questa riga restituirà un errore, perchè la variabile d è locale e sto provando a stamparla in globale

// tipi di dato
console.log("--- tipi di dato ---");

let numero = 1;
let stringa = "ciao";
let booleano = true; // 0 falso oppure 1 true --> algebra booleana
let valoreiniziale = null;

// operatori

//unari
/* 
- operarore di assegnametno (=) 
  - si possono usare gli aritmetici davanti all'assegnamento (+=, -=, *=, /=, %=, **=)
- operatori di comparazione (==, ===, <, <=, >=, !=)
  - === controlla il valore ed il tipo di dato
- operarori aritmetici (+, -, * ,/ ,%, **)
- operatori bit abit
- operatori logici (AND = &&, OR = ||, NOT =!)  --> vale per i valori booleani
- operatore condizionale ternario --
- operatori su stringhe --
*/

//binari
//ternari

if (a > 0) {
  console.log("a > 0");
} else {
  console.log("a <=0");
}

/**/
switch (new Date().getDay()) {
  case 0:
    day = "Domenica";
    break;
  case 1:
    day = "Lunedì";
    break;
  case 2:
    day = "Martedì";
    break;
  case 3:
    day = "Mercoledì";
    break;
  case 4:
    day = "Giovedì";
    break;
  case 5:
    day = "Venerdì";
    break;
  case 6:
    day = "Sabato";
}
console.log(day);

/* CICLI */
let i = 0;
while (i < 4) {
  i++;
  console.log("Hai ripetuto il ciclo while per " + i + " volte");
}

for (i = 0; i < 4; i++) {
  console.log("Hai ripetuto il ciclo for per " + (i+1) + " volte");
}

console.log("Adesso j vale " + i);
i = 0;
console.log("Adesso abbiamo re-inizializzato i a " + i);
do {
  i++;
  console.log("Hai ripetuto il ciclo while.do per " + i + " volte");
} while (i < 4);

// conversione esplicita tramite parseInt
console.log("conversione esplicita tramite parseInt")
console.log(parseInt("30px"));
console.log(parseInt("60"));
console.log(parseInt());
console.log(parseInt(null));
console.log(parseInt(true));
console.log(parseInt(""));
// conversione esplicita tramite Number
console.log("conversione esplicita tramite Number")
console.log(Number("30px"));
console.log(Number("60"));
console.log(Number());
console.log(Number(null));
console.log(Number(true));
console.log(Number(""));
// conversione esplicita tramite String
console.log(String(30));
console.log(String());
console.log(String(null));
console.log(String(true));
console.log(String(""));

x=true
if (isNaN(x) == false){
  console.log("x è un numero di tipo "+(typeof(x))+", e vale "+x)
}
else{
  console.log("x non è un numero, ma un valore di tipo "+(typeof(x)))
}