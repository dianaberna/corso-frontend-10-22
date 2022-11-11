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
        return 0;
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

function trovaSconto(prezzo, sconto) {
    sott = (sconto * prezzo) / 100;

    scontato = parseFloat(prezzo - sott);

    return scontato;
}

console.log(trovaSconto(1500, 50));
console.log(trovaSconto(89, 20));
console.log(trovaSconto(100, 75));

console.log("\n");

// Posizione nell'alfabeto
console.log("Posizione nell'alfabeto");
function letteraInPosizione(numero) {
    if (numero >= 1 && numero <= 26) {
        lettera = String.fromCharCode(numero + 96);
    }

    return lettera;
}

console.log(letteraInPosizione(26));

console.log("\n");

// Calcolatrice di base

console.log("Calcolatrice");

function calcolatrice(n1, n2, op) {
    switch (op) {
        case "+": {
            risultato = n1 + n2;
            return risultato;
        }

        case "-": {
            risultato = n1 - n2;
            return risultato;
        }

        case "*": {
            risultato = n1 * n2;
            return risultato;
        }

        case "/": {
            if (n2 == 0) {
                console.log("Impossibile dividere per 0!");
            } else {
                risultato = n1 / n2;
                return risultato;
            }
        }
    }
}

console.log(
    "La somma, la sottrazione, la moltiplicazione, la divisione di 4 e 2, sono:"
);

console.log(calcolatrice(4, 2, "+"));
console.log(calcolatrice(4, 2, "-"));
console.log(calcolatrice(4, 2, "*"));
console.log(calcolatrice(4, 2, "/"));
console.log(calcolatrice(4, 0, "/"));

console.log("\n");

// Fare la somma di tutti gli elementi di un array

function sommaElementiArray(array) {
    
    somma = 0;
    i = 0;

    while(i < array.length)
    {

        somma = somma + array[i];
        i++
    }

    return somma;

}

array1 = [4, 3, 6, 8];
array2 = [5, 7, 8, 3, 2];

console.log("La somma degli elementi degli elementi dell'array è: ");

console.log(sommaElementiArray(array1));
console.log(sommaElementiArray(array2));

console.log("\n");

// Quante volte è vero?

function quantiTrue(array)
{
    let t = 0;
    let i = 0
    
    while( i < array.length)
    {
        if(array[i] == true || array[i] == false )
        {
            if( array[i] == true )
            {
                t++;
            } 
        } else {
            return "L'array non è booleano o è vuoto"
        }  
        
        i++;

    } // fine dell'array    
    
    return t;

}

arr = [true, true, true, false];
console.log(quantiTrue(arr));
console.log(quantiTrue([false, true, false, false]));

// Piegare un pezzo di carta



