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


