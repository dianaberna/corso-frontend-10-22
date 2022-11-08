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

x=0
if (isNaN(x) == false){
  console.log("x è un numero di tipo "+(typeof(x))+", e vale "+x)
}
else{
  console.log("x non è un numero, ma un valore di tipo "+(typeof(x)))
}
x=null
if (isNaN(x) == false){
  console.log("x è un numero di tipo "+(typeof(x))+", e vale "+x)
}
else{
  console.log("x non è un numero, ma un valore di tipo "+(typeof(x)))
}
x="NaN"
if (isNaN(x) == false){
  console.log("x è un numero di tipo "+(typeof(x))+", e vale "+x)
}
else{
  console.log("x non è un numero, ma un valore di tipo "+(typeof(x)))
}
x=10
if (isNaN(x) == false){
  console.log("x è un numero di tipo "+(typeof(x))+", e vale "+x)
}
else{
  console.log("x non è un numero, ma un valore di tipo "+(typeof(x)))
}
x="10"
if (isNaN(x) == false){
  console.log("x è un numero di tipo "+(typeof(x))+", e vale "+x)
}
else{
  console.log("x non è un numero, ma un valore di tipo "+(typeof(x)))
}





switch (new Date().getDay()) {
  case 0:
    day = "Domenica";
    break;
  case 1:
    day = "Lunedì";
    break;
/*   case 2:
    day = "Martedì";
    break; */
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
    break;
  default:
    day = "Martedì"
}
console.log("Oggi è "+day);



/* ARRAY */
let animali = ["cane","gatto","coniglio"]

for (let i = 0; i < animali.length; i++) {
  console.log(animali[i])  
}
console.log(animali)

console.log("-------------------------------")

let array4 = [1,2,3,4,5,6,7,8]
let array2 = ["cane",1,"gatto",2,"coniglio",3,true,4,"10",5,null,6,7,"prova",8,array4]
let somma_luca=0
let somma_luca2=0
let somma_luca3=0
let somma_luca5=0
for (let i = 0; i < array2.length; i++) {
  console.log(array2[i])
  if (i%2 != 0) {
    somma_luca=somma_luca+array2[i]
  }  
  if (isNaN(array2[i]) == false) {
    somma_luca2=somma_luca2+array2[i]
  }
  if (typeof (array2[i]) == 'number') {
    somma_luca3=somma_luca3+array2[i]
  }
  somma_luca5=0 // tutta questa operazione non ha senso, in quanto potrebbe essere fatta al di fuori del primo ciclo for 
  for (let j = 0; j < array4.length; j++) {
    if (typeof (array4[j]) == 'number') {
      somma_luca5=somma_luca5+array4[j]
    }
  }

}
console.log("La somma dei numeri è "+somma_luca)
console.log("La somma dei numeri è "+somma_luca2)
console.log("La somma dei numeri è "+somma_luca3)
console.log("La somma dei numeri dentro l'array annidato è "+somma_luca5)
console.log("La somma dei numeri del vettore più i numeri del vettore annidiato è "+(somma_luca3+somma_luca5))