// Esercizio moltiplicazione

console.log("moltiplicazione");

function moltiplicazione(a, b) {
    return a * b;
}

console.log(moltiplicazione(3, 2));
console.log(moltiplicazione(-3, -6));
console.log(moltiplicazione(7, 3));

// Esercizio convertire anni in giorni

console.log("anni in giorni");

function anniInGiornni(anni, giorni) {
    return anni * 365;
}

console.log(anniInGiornni(65));
console.log(anniInGiornni(0));
console.log(anniInGiornni(20));

// Esercizio minore o uguale a zero

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
