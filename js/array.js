// array
let animali = ["gatto", "cane", "coniglio"];
console.log(animali)        // 
console.log(animali[1])     // cane
console.log(animali.length) // 3
console.log(animali.indexOf("cane")) // 1
console.log(animali) 
animali.sort()
console.log(animali) 
animali.push("tartaruga")
animali.push("topo")
console.log(animali) 
animali.pop()
console.log(animali) 
animali.splice(2 , 2, "fenicottero")
console.log(animali) 
let elemento = animali.slice(1)
console.log(elemento)

console.log("--- stampa arraymisto ---")
let arraymisto = ["gatto", 2, 5, "topo", 3, 299];

// "gatto" è in posizione/indice 0
// 2 è in posizione 1
// 5 è in posizione 2
// "topo" è in posizione 3

console.log(arraymisto);
console.log(arraymisto.length); // stampa 6

let a = 2;
let b = 6;
let c = 3;
let d = 10;
// se ne ho 100?
let arraynumericovariabili = [a, b, c, d]; // array di variabili

let arraynumerico = [2, 6, 3, 10];
/*
    3 è in posizione 0 -> arraynumerico[0] = 3
    5 è in posizione 1 -> arraynumerico[1] = 5
    10 è in posizione 2 -> arraynumerico[2] = 10
    40 è in posizione 3 -> arraynumerico[3] = 40

    la lunghezza dell'array è 4
*/
console.log(arraynumerico);
console.log("---");

// sommare tutti gli elementi dell'array arraynumerico
let somma =
    arraynumerico[0] + arraynumerico[1] + arraynumerico[2] + arraynumerico[3]; // ... per 100 elementi
console.log(somma);
console.log(arraynumerico.length); // lunghezza - 1

console.log("---");
let i = 0; // variabile che ci aiuterà a scorrere l'array
console.log("stampo gli elementi con il while");
while (i < arraynumerico.length) {
    // finchè i non raggiunge la lunghezza dell'array continua a stampare
    console.log("i = " + i);
    console.log("arraynumerico [" + i + "] =" + arraynumerico[i]);
    i = i + 1;
}

console.log("stampo gli elementi con il for");
for (let pippo = 0; pippo < arraynumerico.length; pippo = pippo + 1) {
    // non è eseguito all'istante
    console.log("pippo = " + pippo);
    console.log("arraynumerico [" + pippo + "] =" + arraynumerico[pippo]);
}

console.log("---");
// let arraynumerico = [2, 6, 3, 10]
console.log("stampo la somma degli elementi");
let indice = 0;
let sommabella = 0;
while (indice < 4) {
    console.log("indice = " + indice);
    sommabella = sommabella + arraynumerico[indice]; //elemento in posizione indice nell'array arraynumerico
    console.log("sommabella = " + sommabella);
    indice = indice + 1;
}
console.log("sommabella fine while = " + sommabella);

console.log("prova");
indice = 0;
sommabella = 0;
while (indice < 4) {
    console.log("indice = " + indice);
    sommabella = sommabella + arraynumerico[3]; //elemento in posizione indice nell'array arraynumerico
    console.log("sommabella = " + sommabella);
    indice = indice + 1;
}
console.log("sommabella prova= " + sommabella);

/*

i = 0, sommabella = 0
i < 4? 0 < 4? si, sommabella = 0 + arraynumerico[0] = 0 + 2 = 2, i = i + 1 = 0 + 1 = 1
i < 4? 1 < 4? si, sommabella = 2 + arraunumerico[1] = 2 + 6 = 8, i = i + 1 = 1 + 1 = 2
i < 4? 2 < 4? si, sommabella = 8 + arraynumerico[2] = 8 + 3 = 11, i = i + 1 = 2 + 1 = 3
i < 4? 3 < 4? si, sommabella = 11 + arraynumerico[3] = 11 + 10 = 21, i = i + 1 = 3 + 1 = 4
i < 4? 4 < 4? no
esco dal while e stampo sommabella

i = 0, sommabella = 0
i > 4? 0 > 4? no
esco dal while e stampo sommabella

*/

console.log("---");
arraynumerico = [-5, 3, 2, -1, -6];
// somma di tutti gli elementi positivi (>0) dell'array
console.log("stampo la somma degli elementi positivi");
indice = 0;
sommapositivi = 0;
while (indice < arraynumerico.length) {
    console.log("indice = " + indice);
    if (arraynumerico[indice] > 0) {
        sommapositivi = sommapositivi + arraynumerico[indice];
    }
    console.log("sommapositivi = " + sommapositivi);
    indice = indice + 1;
}
console.log("sommapositivi fine while = " + sommapositivi);

console.log("---");

// somma di tutti gli elementi con indice/posizione pari
/*
arraynumerico = [-5, 3, 2, -1, -6, 1]
    posizioni   [ 0, 1, 2,  3,  4, 5]

sommo 2 e -6? somma di tutti i numeri pari
sommo -5, 2, -6? somma di tutti gli elementi in posizione pari
*/

console.log("stampo la somma degli elementi in posizione pari");
indice = 0;
sommaposizionepari = 0;
while (indice < arraynumerico.length) {
    console.log("indice = " + indice);
    sommaposizionepari = sommaposizionepari + arraynumerico[indice];
    console.log("sommaposizionepari = " + sommaposizionepari);
    indice = indice + 2; // invece di fare un if e vedere se l'indice è pari 
}

// con indice = indice + 1 --> per scorrere tutto l'array impiegheremo n volte
// con indice = indice + 2 --> per scorrere tutto l'array impiegheremo n/2 volte -> algoritmica 
console.log("sommaposizionepari fine while = " + sommaposizionepari);

// spread operator --> ...   ci estrae gli elementi dell'array
let arrayNuovo = [1, 2, 3, 4]
let arrayNuovo2 = [3, 6, 4, 2]
console.log(arrayNuovo)
console.log(...arrayNuovo)

let arrayRisultante = [...arrayNuovo, ...arrayNuovo2]
console.log(arrayRisultante)

// Creare (e stampare) un nuovo array in cui inserisco due volte (una di seguito l’altra) l’array dato
let array = [ 2, 6, 9, 10, -2, -3, 0, 2, 5, 1]
let arrayRis = [array, array]
console.log(arrayRis)
let arrayRisultateEsercizio = [...array, ...array]
console.log(arrayRisultateEsercizio)

let array2 = array // sono la stessa scatola 
console.log("----")
console.log(array)
console.log(array2)
console.log("reverse")
console.log(array.reverse())
console.log(array)
console.log(array2)

let array3 = [...array] // sto creando una nuova scatola 
console.log(array3)
let array4 = [array]
console.log(array4)