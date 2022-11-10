
// Moltiplicazione di due numeri

console.log("moltiplicazione");

function moltiplicazione(n1, n2) {
    return n1 * n2;
}

console.log(moltiplicazione(3, 2));
console.log(moltiplicazione(-3, -6));
console.log(moltiplicazione(7, 3));

// Convertire anni in giorni


console.log("anni in giorni");

function anni_in_giorni(anni) {
    return 365 * anni ;
}

console.log(anni_in_giorni(65));
console.log(anni_in_giorni(0));
console.log(anni_in_giorni(20));

// Minore o uguale a zero

console.log("minore o uguale a zero");

function minoreUgualeAZero(a) {
    if (a <= 0) {
        return true;
    } else {
        return false;
    }
}

console.log(minoreUgualeAZero(5));
console.log(minoreUgualeAZero(0));
console.log(minoreUgualeAZero(-2));

// Il problema della fattoria

console.log("il problema della fattoria");

function numeroZampe(polli, mucche, maiali) {
    return polli * 2 + mucche * 4 + maiali * 4;
}

console.log(numeroZampe(2, 3, 5));
console.log(numeroZampe(1, 2, 3));
console.log(numeroZampe(5, 2, 8));

// Case di fiammiferi

console.log("case di fiammiferi");

function numeroDiFiammiferi(step) {
    if (step >= 0 && step <= 1) {
        return step * 6;
    } else {
        return step * 6 - step + 1;
    }
}

console.log(numeroDiFiammiferi(1));
console.log(numeroDiFiammiferi(4));
console.log(numeroDiFiammiferi(87));

// Somma i numeri da un unico numero

console.log("somma i numeri da un unico numero");

function sommaDaUnUnicoNumero(a) {
    let sommaA = 0;
    while (a > 0) {
        sommaA = sommaA + a;
        a--;
    }
    return sommaA;
}

console.log(sommaDaUnUnicoNumero(4));
console.log(sommaDaUnUnicoNumero(13));
console.log(sommaDaUnUnicoNumero(600));

// Trova lo sconto

console.log("trova lo sconto");

function trovaSconto(prezzo, percentualeSconto) {
    return prezzo - (prezzo * percentualeSconto) / 100;
}

console.log(trovaSconto(1500, 50));
console.log(trovaSconto(89, 20));
console.log(trovaSconto(100, 75));

//Posizione nell’alfabeto
//Dato un numero compreso tra 1 e 26 (vedere codice ASCII), 
//restituisci quale lettera si trova in quella posizione dell'alfabeto. 
//Restituisce "non valido" se il numero fornito non rientra in tale intervallo 
//o non è un numero intero.
//letteraInPosizione(1) ➞ "a"
//letteraInPosizione(26.0) ➞ "z"
//letteraInPosizione(0) ➞ "invalid"
//letteraInPosizione(4.5) ➞ "invalid"

//PS. (1) Restituisci una lettera minuscola. (2) 
//I numeri che terminano con ".0" sono validi. (3) Una funzione che javascript 
//ci mette a disposizione per questi casi è fromCharCode

console.log(String.fromCharCode(189, 43, 190, 61));




//Crea una funzione che accetta due numeri e un operatore matematico + - / * 
//ed eseguirà un calcolo con i numeri indicati.
//calcolatrice(2, "+", 2) ➞ 4
//calcolatrice(2, "*", 2) ➞ 4
//calcolatrice(4, "/", 2) ➞ 2
//PS. Se l'input tenta di dividere per 0, 
//restituisce: "Impossibile dividere per 0!"

