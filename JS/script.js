console.log("ciao");

var primavariabile = 1;
var secondavariabile = 2;
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

// typeof somma
/* 
1 -> numero 
2 -> numero 
2.5 -> numero
"a" -> stringa 
"ciao sono diana 1234" -> stringa
*/

// typeof

let a = 5;
console.log(typeof a);
a = "ciao";
console.log(typeof a);

let b = "ciao";
console.log(typeof b);

let somme = terzavariabile + nuovavariabile 
console.log(somme)

let sommestringhe = primastringa + nuovavariabile
console.log(sommestringhe)

console.log(typeof somme)  

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

let sommestrane = a + c;
console.log(sommestrane);
console.log(typeof sommestrane);

let numerostringa1 = "1"
let numerostringa2 = "2"
let nuovasomma = numerostringa1 + numerostringa2
console.log(nuovasomma)
console.log(typeof nuovasomma)


// let, var, scope 

console.log("--- scope ---");

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
console.log("---tipi di dato---")
let numero = 1
let stringa = "ciao mondo"
let booleano = true // solo 0/false oppure 1/true -> algebra booleana 

// operatore di assegnamento 
console.log("--- operatori di assegnamento ---")
let op1 = 2;
let op2 = 3;
console.log(op2 += op1) // op2 = op2 + op1
let op3 = 1;
console.log(op3)
op3++; // a = a + 1
console.log(op3)

// costrutti base 
console.log("--- costrutti base ---")
// condizionale 
a = 5;
if(a>0){ // rombo condizione vare 
    console.log("a è maggiore di 0")
}else{ // condiziona falsa
    console.log("a è minore di 0")
}
// operatore ternario (condizione)
a > 0 ? console.log("a è maggiore di 0") : console.log("a è minore di 0")

if( a < 10){
    if (a < 10) {
        console.log("cioa mondo")
        a = a + 1
    }else{
            console.log("paticolare")
            a = a + 5
        
    } 
}else{
    console.log("particolare2")
}

console.log(a) 

if (a > 0 && a < 10){ // sarà true solo se a è tra 0 e 10
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

console.log("inizio while");
let i = 0; 
while ( i < 4 ){
    console.log(i);
    // 400 righe di codice e per sbaglio uso la variabile i per contenere una stringa
    i++; // i = i + 1;
}
console.log("fine while");

/*
stampa "inizio while"
i = 0 ciao mondo 
i = 1 ciao mondo 
i = 2 ciao mondo 
i = 3 ciao mondo 
i < 4 dove i = 4 esce dal while e stampa "fine while"
*/

// for 
/*
for (dichiariazione/assegnazione variabile ; condizione ; incremento/aggiornamento){
    corpo del for
}
*/
console.log("inizio for");
for(let j = 0; j < 4; j = j + 1){ // j esiste solo nel for
    console.log(j)
} 
console.log("fine for");
/* for(i = 0; i < 4; i++){
    console.log(i)
} */

// do-while 
/*
dichiarazione/assegnazione variabile per la condizione
do{
    corpo del do-while
    incremento/aggiornamento della variabile per la condizione
}while(condizione)
*/

i = 40; 
console.log("inizio do-while");
do {
    console.log(i);
    i++; // i = i + 1
} while(i < 4);
console.log("fine do-while");

// Esercizio 

// stampare 4 numeri a partire da 0

console.log("inizio while")

i = 0 // inizio da 0

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

//Esercizi

// Stampa tutti gli elementi dell'array 

/* a = 2 
b = 6 
c = 9 
d = 10 
e = -2 
f = -3 
g = 0 
h = 2 
i = 5 
j = 1 

let arraynumeri = [a,b,c,d,e,f,g,h,i,j];
console.log(arraynumeri) 

// Stampare la somma di tutti gli elementi 

let sommaarray= arraynumeri[2] + arraynumeri [6] + arraynumeri [9] + arraynumeri [10] + arraynumeri[-2] + arraynumeri[-3] + arraynumeri[0] + arraynumeri[2] + arraynumeri[5] + arraynumeri[1];
console.log(somma) 

// Stampare la somma dei soli elementi dispari 

console.log("stampo la somma dei numeri dispari")
i = -3
sommanumeridispari = -3 
while( i < 10){
    i = i + 2 
    console.log("indice" + i)
    console.log("sommanumeridispari" + sommanumeridispari)
    
} 
console.log(sommanumeridispari) 

// Stampare la somma dei soli elementi in posizione pari 

console.log("stampo la somma dei elementi in posizione pari")
i = 0 
sommaposizionepari = 0
while( i < arraynumeri.length){
    console.log("indice="+ i); 
    sommaposizionepari = sommaposizionepari + arraynumeri[1]
    console.log("sommaposizionepari =" + sommaposizionepari)
    i = i + 2 
}
console.log(sommaposizionepari) */

console.log("stampa somma di tutti gli elementi")

let array = [2,6,9,10,-2,-3,0,2,5,1];

console.log(array)
i = 0

while(i < array.length){
    console.log(array[i])
    i = i + 1 
}

/* for(let i = 0; i < array.length; i=i+1){
    console.log(array[i])
} */

i=0
let sommaarray=0 
while(i < array.length){ // indice che inizia da zero di posizione minore della lunghezza cioè la fine (per non andare all'infinito)
    sommaarray=sommaarray+array[i] //noi dibbiamo contare 2+6=8,8+9=17...
    i = i + 1 
    console.log(sommaarray) //all'interno darà la stampa di ogni risultato 8,17,...
}
console.log(sommaarray) // stampa la somma finale
/* 
i=length-1 //3 
while(i<length){
    sommaarray= sommaarray+array[i]
    i=i-1
    //i=3 array(3)=10 somma=0+10=10; i=2 array(2)=9 somma=10+9=19; i=1 array(1)=6 somma=19+6=25; i=0 array(0)=2 somma=25+2=27; i=-1 devi uscire
}
console.log(sommaarray) */

/* console.log("stampa la somma degli elementi dispari")

i=0
let sommanumeridispari=0
while(i<=array.length){
    sommanumeridispari=sommanumeridispari+array[i]
    i=i+1
}
console.log(sommanumeridispari) */

console.log("stampo gli elementi dispari")
console.log("---2---")


/* while(i<array.length){
    if(array[i]%2!=0){
        /* sommaarray=sommanumeridispari+array[i] */
       /*  sommaarray=sommanumeridispari+array[i]
    }  
    i=i+1  */
/* console.log(sommaarray)  */


/* i=0 
somma=0 
while(i<array.length){
    sommanumeridispari=sommaarray+array[i]
    i++
}
console-log(sommanumeridispari) */

// eserzizio 9

let nuovoarray
i=0 
while(i<array.length){
    if(array[i]<0){
        console.log(arrey[i])
        nuovoarray.push(array[i])
    }
    i++
}
console.log(nuovoarray)

