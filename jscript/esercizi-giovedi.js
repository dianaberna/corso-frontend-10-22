/* Crea una funzione che accetta due numeri come argomenti e ne restituisce la moltiplicazione.
N° 1

Esempi:
moltiplicazione(3, 2) ➞ 6
moltiplicazione(-3, -6) ➞ 18
moltiplicazione(7, 3) ➞ 21
 */

function moltiplicazione (primonumero, secondonumero) {
    return primonumero * secondonumero; }
    console.log(moltiplicazione(2,3))
    
/* Creare una funzione che prenda l'età in anni e restituisca l'età in giorni.
N° 2

Esempi:
anniInGiorni(65) ➞ 23725
anniInGiorni(0) ➞ 0
anniInGiorni(20) ➞ 7300 */

function anniInGiorni (anni) {
return anni * 365; }
console.log(anniInGiorni(65))
console.log(anniInGiorni(0))
console.log(anniInGiorni(20))

/* Crea una funzione che accetta un numero come unico argomento e restituisce true se è minore o uguale a zero, altrimenti restituisce false.
N° 3

Esempi:
minoreUgualeAZero(5) ➞ false
minoreUgualeAZero(0) ➞ true
minoreUgualeAZero(-2) ➞ true */

function minoreUgualeAZero (n) {
    return n <= 0; }
    console.log(minoreUgualeAZero(5))
    console.log(minoreUgualeAZero(0))
    console.log(minoreUgualeAZero(-2))

/* In questa sfida, un contadino ti chiede di dirgli quante zampe si possono contare tra tutti i suoi animali. L'agricoltore alleva tre specie: polli = 2 zampe, mucche = 4 zampe, maiali = 4 zampe
L'agricoltore ha contato i suoi animali e ti dà un subtotale per ogni specie. Devi implementare una funzione che restituisca il numero totale di zampe di tutti gli animali. 
N° 4

Esempi:
numeroZampe(2, 3, 5) ➞ 36
numeroZampe(1, 2, 3) ➞ 22
numeroZampe(5, 2, 8) ➞ 50 */


function numeroZampe (polli, mucche, maiali) {   
        polli = polli * 2 ;
        mucche = mucche * 4 ;
        maiali = maiali * 4 ; 
    return polli + mucche + maiali}
console.log(numeroZampe(2, 3, 5))
console.log(numeroZampe(1, 2, 3))
console.log(numeroZampe(5, 2, 8))

/* ------------------------------------------------------------------------------------------------ 
Crea una funzione che prenda un numero (step) come argomento e restituisca
il numero di fiammiferi in quello step. Vedere i passaggi 1, 2 e 3 nell'immagine.
N° 5

Esempi:
numeroDiFiammiferi(1) ➞ 6
numeroDiFiammiferi(4) ➞ 21
numeroDiFiammiferi(87) ➞ 436
PS. (1) Lo step 0 restituisce 0 fiammiferi. (2)
L'input (cioè lo step) sarà sempre un numero intero non negativo. (3) 
Pensa all'input (cioè allo step) come al numero totale di case che sono state collegate tra loro. */


function numeroDiFiammiferi (casette) {
        if (casette == 0) 
        return 0
        fiammiferi = 6 ;
        numero = casette - 1;
        return fiammiferi*casette-numero}
    
    console.log(numeroDiFiammiferi(6))
    console.log(numeroDiFiammiferi(4))
    console.log(numeroDiFiammiferi(87))
/* 
1 casetta -> fiammiferi * casette - 0 = 6
2 casetta -> fiammiferi * casette - 1 = 11
3 casetta -> fiammiferi * casette - 2 = 16
*/


/* ------------------------------------------------------------------------------------------------ 
Crea una funzione che accetta un numero come argomento.
Somma tutti i numeri da 1 al numero passato alla funzione.
Ad esempio, se l'input è 4, la tua funzione dovrebbe restituire 10 perché 1 + 2 + 3 + 4 = 10.
N° 6

Esempi:
sommaDaUnUnicoNumero(4) ➞ 10
sommaDaUnUnicoNumero(13) ➞ 91
sommaDaUnUnicoNumero(600) ➞ 180300 */

function sommaDaUnUnicoNumero(numero) {
    i = 1; /*parte da 1 il conteggio 1+2+3+4+5+6 */
    tot1 = 0;
    while (i<=numero) { /*Esegue fino a che i(i=1) non raggiunge il valore 6*/
        tot1 = tot1 + i; /*Esegue l'addizione fino al numero(6) */
        i++; /* INCREMENTO +1 (i=1)*/
    }
    return tot1;
}
console.log(sommaDaUnUnicoNumero(10))
console.log("FINE ESERCIZIO 6")
    


/* 
10 - > 1+2+3=6 6+4+5+6
*/
/* Crea una funzione che accetta due argomenti: il prezzo originale e la percentuale di sconto come numeri interi e restituisce il prezzo finale dopo lo sconto.
trovaSconto(1500, 50) ➞ 750
trovaSconto(89, 20) ➞ 71.2
trovaSconto(100, 75) ➞ 25
PS. La tua risposta dovrebbe essere arrotondata a due cifre decimali. (vedere parseFloat e toFixed)
 */

function trovaSconto (prezzo, perc) {
    sconto = prezzo*perc / 100;
    return prezzo - sconto }
    console.log(trovaSconto(1500, 50))
    console.log(trovaSconto(89, 20))
    console.log(trovaSconto(100, 75))

/*Dato un numero compreso tra 1 e 26 (vedere codice ASCII), restituisci quale lettera si trova in quella posizione dell'alfabeto. Restituisce "non valido" se il numero fornito non rientra in tale intervallo o non è un numero intero.
letteraInPosizione(1) ➞ "a"
letteraInPosizione(26.0) ➞ "z"
letteraInPosizione(0) ➞ "invalid"
letteraInPosizione(4.5) ➞ "invalid"

PS. (1) Restituisci una lettera minuscola. (2) I numeri che terminano con ".0" sono validi. (3) Una funzione che javascript ci mette a disposizione per questi casi è fromCharCode
 */

function letteraInPosizione (num) {
    if (num > 0 && num < 27 && num % 1 ===0) {
        lettera = String.fromCharCode(num + 96);
        return lettera;
    } else {
        return "Invalid"
    }
}
console.log(letteraInPosizione(1))
console.log(letteraInPosizione(26.0))
console.log(letteraInPosizione(0))
console.log(letteraInPosizione(4.5))

/* Crea una funzione che accetta due numeri e un operatore matematico + - / * 
ed eseguirà un calcolo con i numeri indicati.
calcolatrice(2, "+", 2) ➞ 4
calcolatrice(2, "*", 2) ➞ 4
calcolatrice(4, "/", 2) ➞ 2
PS. Se l'input tenta di dividere per 0, restituisce: "Impossibile dividere per 0!"
 */
console.log("------------")

function calcolatrice(num1, op, num2) {
    if (op == "+") {
        risultato = num1 + num2;
        return risultato;
    } else if (op == "*") {
        risultato = num1 * num2;
        return risultato;
    } else if (op == "/") {
        if (num2 == 0) {
           return "Impossibile dividere per 0!";
         } else {
           risultato = num1 / num2;
             return risultato;
          }
     } else if (op == "-") {
          risultato = num1 - num2;
            return risultato;
        } else {
            return "non hai inserito un operatore corretto";
        }
    }
    console.log(calcolatrice(2, "+", 2))
    console.log(calcolatrice(2, "*", 2))
    console.log(calcolatrice(4, "/", 2))

/* Crea una funzione che restituisce la somma di tutti i valori di un array.

sommaElementiArray([1, 2, 4]) ➞ 7
sommaElementiArray([4, 2, 10, 2]) ➞ 18
sommaElementiArray([1]) ➞ 1 */

console.log("-------------")
i = 0;
function sommaElementiArray(array) {
    somma = 0 /*CREO UN INDICE PER CONTARE DA ZERO */
    for (let i = 0; i < array.length; i++) /* LEGGO L'ARRAY */ { 
    somma = somma + array[i]; /* ADDIZZIONO SOMMA (zero) CON TUTTI GLI ELEMENTI NELL'ARRAY APPENA LETTI*/
}
return somma; }
array = [1, 2, 4]
array2 = [4, 2, 10, 2]
array3 = [1]
console.log(sommaElementiArray(array))
console.log(sommaElementiArray(array2))
console.log(sommaElementiArray(array3))

/* Crea una funzione che restituisce il numero di valori uguali a true presenti in un array.
Esempi: 
quantiTrue([true, false, false, true, false]) ➞ 2
quantiTrue([false, false, false, false]) ➞ 0
quantiTrue([]) ➞ 0
PS. (1) Restituisce 0 se viene fornito un array vuoto. (2) Tutti gli elementi dell'array sono di tipo bool (true o false).*/
  
array = []
function quantiTrue (array) {
    let conto = 0;
for (let i = 0; i < array.length; i++) {
    array[i] === true ? conto++ : (conto += 0);
}
return j;
}
console.log(quantiTrue[true, true, false, false, true])

/* Crea una funzione che accetta una stringa, controlla se è un indirizzo email valido e restituisce true o false, a seconda della valutazione.
La stringa deve contenere un carattere @.
La stringa deve contenere un . carattere.
La @ deve avere almeno un carattere davanti. (ad esempio "d@ciao.com" è valido mentre "@ciao.com" non è valido.
Il . e la @ deve trovarsi nei posti appropriati. (ad esempio "hello.email@com" non è valido mentre "mario.rossi@email.com" è valido.
Se la stringa supera questi test, 
viene considerata un indirizzo email valido.
 */