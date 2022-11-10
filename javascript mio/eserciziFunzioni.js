// Moltiplicazione di due numeri

console.log("Moltiplicazione tra due numeri");
function moltiplicazioneDueNumeri(primonumero, secondonumero) {
    let m = primonumero * secondonumero;

    return m;
} // fine moltiplicazioneDuenumeri

molt = moltiplicazioneDueNumeri(4, 8);

console.log(moltiplicazioneDueNumeri(5, 6));
console.log(molt);

console.log("\n");

// Convertire anni in giorni

console.log("Convertire anni in giorni");
function convertitoreAnniGiorni(anni) {
    let g = anni * 365;

    return g;
} // fine convertitoreAnnigiorni

giorni = convertitoreAnniGiorni(5);

console.log(giorni);
console.log(convertitoreAnniGiorni(1));

console.log("\n");

// Minore o uguale a zero

console.log("Minore o uguale a zero");
function minoreUgualeAZero(numero) {
    if (numero <= 0) {
        return true;
    } else {
        return false;
    }
}

let rest = minoreUgualeAZero(-4);

console.log(minoreUgualeAZero(6));
console.log(rest);

console.log("\n");

// Il problema della fattoria

console.log("Il problema della fattoria");

function quanteZampe(polli, mucche, maiali) {
    zampePolli = polli * 2;
    zampeMucche = mucche * 4;
    zampeMaiali = maiali * 4;

    console.log("le zampe dei polli sono: " + zampePolli);
    console.log("le zampe delle mucche sono: " + zampeMucche);
    console.log("le zampe dei maiali sono: " + zampeMaiali);

    totaleZampe = zampePolli + zampeMucche + zampeMaiali;

    console.log("il totale delle zampe è: ");

    return totaleZampe;
}

console.log(quanteZampe(3, 4, 5));

console.log("\n");

// Case di fiammiferi

console.log("Case di fiammiferi");

function numeroDiFiammiferi(step) {
    if (step == 0) {
        console.log("hai inserito 0");
    } else if (step < 0) {
        console.log("hai inserito un numero negativo");
    } else if (step > 0) {
        totale = step * 6 - (step - 1);
        return totale;
    }
} // fine casa fiammiferi

console.log(numeroDiFiammiferi(1));
console.log(numeroDiFiammiferi(4));
console.log(numeroDiFiammiferi(87));

console.log("\n");

// Somma i numeri da un unico numero


console.log("Somma i numeri da un unico numero");

function sommaDaUnUnicoNumero(numero) {
    i = 1;
    somma = 0;
    while (i <= numero) {
        somma = somma + i;
        i++;
    }
    return somma;
}

console.log(sommaDaUnUnicoNumero(6));

console.log("\n");

// Trova lo sconto

console.log("Trova lo sconto");

function trovaSconto(prezzo, sconto)
{

    sott = (sconto * prezzo)/ 100;

    scontato = parseFloat(prezzo - sott);

    return scontato;
}

console.log(trovaSconto(1500, 50));
console.log(trovaSconto(89, 20));
console.log(trovaSconto(100, 75));

console.log("\n");

// Posizione nell'alfabeto 


