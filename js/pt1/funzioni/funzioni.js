console.log("-- funzioni --");

/**
 *
 * creazione funzione
 * function nomeFunzione(paramentro1, paramentr2, ...){
 *      blocco della funzione
 *      return valoreCheRitornoFuori -> termina la funzione
 * }
 *
 * sintassi per richiamare la funzione
 * nomefunzione(paramentro1, parametro2, ...) -> chiamata della funzioni
 * let valorediritorno = nomefunzione(paramentro1, parametro2, ...)
 *
 */

// se non ho la funzione somma ma voglio sommare numeri differenti
// devo necessariamente ripete l'operazione di somma
let i = 0;
let a = 5;
let b = 3;
let somma = a + b;
console.log(somma);

a = 3;
b = 30;
somma = a + b;

// creo la funzione somma
console.log("--- funzione somma ---")
function sommaFunzione(primonumero, secondonumero) {
    let s = primonumero + secondonumero;
    const prova = 4;
    var provavar = 6;
    console.log(s);
    return [s, prova, provavar]; // restuisco un array con tutte e tre le variabili
}

/* console.log(s) -> qui fuori non esiste */
/* console.log(prova) -> qui fuori non esiste */
/* console.log(provavar) -> qui fuori non esiste */

let risultato = sommaFunzione(5, 3); // risultato conterrà l'array con i valori [s, prova, provavar]
console.log("--" + risultato + "--");

risultato = sommaFunzione(3, 20);
console.log(risultato);

console.log(sommaFunzione(-4, 200)); // invece di salvarmi in un array di appoggio il ritorno della funzione lo stampo direttamente

// creo una funzione che controlla se il numero passato come parametro è pari 
// quindi se pari restituisce true, se dispari restituisce false
console.log("--- controllo se pari ---");
function controlloSePari(numero) {
    if (numero % 2 != 0) {
        console.log("dispari");
        return false;
        console.log("dispari 2"); // questo console non verrà eseguito perché è dopo il return, quindi è già uscito dalla funzione
    } else {
        return true;
        console.log("pari"); // questo console non verrà eseguito perché è dopo il return
    }
}

// richiamo la funzione con i valori che voglio
console.log(controlloSePari(4));
console.log(controlloSePari(3456));

console.log("--- somma array ---");

function sommaArray(array) {
    let somma = 0;
    for (let i = 0; i < array.length; i++) {
        somma = somma + array[i];
        console.log(`somma = ${somma}`); // template literal  ' " `
    }
    console.log(`somma finale = ${somma}`);
    return somma;
}

let nuovoarray = [1, 5, 3];
let s1 = sommaArray(nuovoarray);
console.log(s1)
console.log(sommaArray([5, 5, 2]));


console.log("--- modifica array ---");
// per ogni elemento dell'array moltiplica il numero passato come secondo parametro
// ([1, 2, 3], 4) -> [4, 8, 12]
function modificaArray(array, moltiplicatore) {
    /* console.log(array)
    console.log(moltiplicatore) */
    let i = 0;

    while (i < array.length) {
        array[i] = array[i] * moltiplicatore;
        i++;
    }
    console.log(array);
    return array;
}

let arraychepasso = [1, 5, 3];
console.log(modificaArray(arraychepasso, 4));
console.log(modificaArray(arraychepasso, 5));
console.log(modificaArray(arraychepasso, 6));

console.log("--- modifica array senza funzione ---");
nuovoarray = [1, 5, 3];
moltiplicatore = 4;
i = 0;
while (i < nuovoarray.length) {
    nuovoarray[i] = nuovoarray[i] * moltiplicatore;
    i++;
}
console.log(nuovoarray);

nuovoarray = [1, 5, 3];
moltiplicatore = 5;
i = 0;
while (i < nuovoarray.length) {
    nuovoarray[i] = nuovoarray[i] * moltiplicatore;
    i++;
}
console.log(nuovoarray);

nuovoarray = [1, 5, 3];
moltiplicatore = 6;
i = 0;
while (i < nuovoarray.length) {
    nuovoarray[i] = nuovoarray[i] * moltiplicatore;
    i++;
}
console.log(nuovoarray);

// funzioni annidate
console.log("-- funzioni annidate --");

function funzionetriste() {
    console.log("non vengo mai richiamata");
}

function funzioneinterna(numerointerno) {
    console.log(`stampa funzione interna= ${numerointerno + numerointerno}`);
    console.log(numerointerno);
    return numerointerno + numerointerno;
}

function funzioneesterna(numero) {
    console.log(`stampa funzione esterna= ${numero}`);
    let numerointerno = funzioneinterna(numero + 1);
    return numerointerno;
}

let mionumero = 2;

if (mionumero > 0) {
    console.log("è maggiore di 0");
}

let mionumeronuovo;
mionumeronuovo = funzioneesterna(mionumero);
console.log(mionumeronuovo);

if (mionumero == 2) {
    console.log("il mio numero è 2");
}

// è maggiore di 0
// stampa funzione esterna= 2
// stampa funzione interna= 6
// 3
// 6
// il mio numero è 2

console.log("--- stampa di stringhe ---");
function stampa(stringa) {
    console.log(stringa);
}

stampa("ciao mondo");

function funzionaSenzaParametri() {
    console.log("ciao ciao");
}

funzionaSenzaParametri();

/*

function controlloInputNome(){
    -> internamente vado a prelevare il valore input nome
}

function controlloInputEmail() {
    -> internamente vado a prelevare il valore input email
}

function ControlloForm(){
    controlloInputNome()
    controlloInputEmail()
}

......

ControlloForm()

*/

console.log("--- esempi overloading ---")

function funzioneSomma(a = 1, b = 1) {
    /* 
    if (b) {
        console.log("b inserito");
    } else {
        console.log("b NON inserito");
        return;
    } 
    */
    return a + b;
}

// non posso avere un'altra funzione con lo stesso nome 
/* 
function funzioneSomma(c) {
    return c + c;
}  
*/


console.log(funzioneSomma());
console.log(funzioneSomma(2));
console.log(funzioneSomma(2, 3));
console.log(funzioneSomma(4, -38));

console.log("--- numero argomenti ---")

function funzione() {
  console.log(arguments.length);
}

funzione();
funzione(7, 4);
funzione(90, 654, 32, 4);

console.log("map")
// funzione map 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
const array1 = [1, 4, 9, 16];

// simile al foreach per quello che riguarda lo scannerizzare tutto l'array
// per ogni elemento dell'array esegue la funzione x*2 
const map1 = array1.map(x => x * 2);

console.log(map1);
//  [2, 8, 18, 32]

// diverso da foreach perché ci aiuta solo a scorrere l'array -> non crea un nuovo array
array1.forEach(valore => console.log(valore))
