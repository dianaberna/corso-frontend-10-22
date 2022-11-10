console.log("moltiplicazione");

function moltiplicazione(val1, val2) {
    return val1 * val2;
}

console.log(moltiplicazione(2, 3));
console.log(moltiplicazione(5, 10));
console.log(moltiplicazione(9, 9));

console.log("\nanni in giorni");

function anniInGiorni(anni) {
    return anni * 365;
}
console.log(anniInGiorni(2));
console.log(anniInGiorni(65));

console.log("\nminoreUgualeAZero");

function minoreUgualeAZero(numero) {
    if (numero <= 0) {
        return numero + " " + true;
    } else {
        return numero + " " + false;
    }
}

console.log(minoreUgualeAZero(5));
console.log(minoreUgualeAZero(0));
console.log(minoreUgualeAZero(-5));

console.log("\nnumeroZampe");

function numeroZampe(num1, num2, num3) {
    if (num1 && num2 && num3) {
        let totale = num1 * 2 + num2 * 4 + num3 * 4;
        let stringa = "hai un totale di " + totale + " zampe";
        return stringa;
    } else {
        return "devi inserire tre valori";
    }
}

console.log(numeroZampe(2, 3, 5));
console.log(numeroZampe(1, 2, 3));
console.log(numeroZampe(5, 2, 8));
console.log(numeroZampe(5, 2));

console.log("\nnumeroDiFiammiferi");

function numeroDiFiammiferi(num) {
    if (num > 0) {
        let numeroFiammiferi = num * 6 - (num - 1);
        return numeroFiammiferi;
    } else if (num == 0) {
        return 0;
    } else {
        return "inserisci un numero positivo";
    }
}

console.log(numeroDiFiammiferi(0));
console.log(numeroDiFiammiferi(-1));
console.log(numeroDiFiammiferi(1));
console.log(numeroDiFiammiferi(4));
console.log(numeroDiFiammiferi(87));

console.log("\nsommaDaUnUnicoNumero");

function sommaDaUnUnicoNumero(num) {
    let i;
    let somma = 0;
    for (i = 0; i < num; i++) {
        somma += num - i;
    }
    return somma;
}

console.log(sommaDaUnUnicoNumero(4));
console.log(sommaDaUnUnicoNumero(13));
console.log(sommaDaUnUnicoNumero(600));

console.log("\ntrovaSconto");

function trovaSconto(prezzo, sconto) {
    if (sconto <= 100) {
        let totale = parseFloat(prezzo - (prezzo / 100) * sconto);
        return totale.toFixed(2);
    } else {
        return "inserisci un  sconto max del 100%";
    }
}

console.log(trovaSconto(1500, 50));
console.log(trovaSconto(89, 20));
console.log(trovaSconto(100, 75));

console.log("\nletteraInPosizione");

function letteraInPosizione(car) {
    if (car > 0 && car <= 26 && Number.isInteger(car)) {
        car = parseInt(car);
        risultato = String.fromCharCode(car + 96);
        return risultato;
    } else {
        risultato = "invalid";
        return risultato
    }
}

console.log(letteraInPosizione(1));
console.log(letteraInPosizione(26.0));
console.log(letteraInPosizione(0));
console.log(letteraInPosizione(4.5));
