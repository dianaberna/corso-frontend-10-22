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

function numeroDiFiammiferi(step)
{

    if( step = 0)
    {
        return 0;

    } else if( step < 0 ){
        
        console.log("inserire un numero intero positivo");
        
    } else if( step > 0){

        numero = step * 6 - (step - 1);

        return numero;

    }

} // fine casa fiammiferi

console.log(numeroDiFiammiferi(0));
console.log(numeroDiFiammiferi(1));
console.log(numeroDiFiammiferi(4));
console.log(numeroDiFiammiferi(87));





