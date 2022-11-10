// eserci 1
console.log("Esercizio 1");
function moltiPlica(primo , secondo) {
    
    return primo * secondo;
}
console.log(moltiPlica(3,2));
console.log(moltiPlica(-3,-6));
console.log(moltiPlica(7,3));

// Esercizio 2
console.log("Esercizio 2");
let anno = 365;
function converti(giorni , anno) {


    return giorni * anno;
}
console.log(converti(65, anno));
console.log(converti(0, anno));
console.log(converti(20, anno));

// Esercizo 3
console.log("Esercizio 3");
function verificaMinore(numero) {
    if(numero <= 0 ){
        return true;
    }else{
        return false;
    }
}
console.log(verificaMinore(5));
console.log(verificaMinore(0));
console.log(verificaMinore(-2));

// Esercizio 4
console.log("Esercizio 4");
function animali(polli, mucche, maiali) {
    if (polli && mucche && maiali) {
        totale = polli * 2 + mucche * 4 + maiali * 4;
        return totale;
    }
        
}
console.log(animali(2, 3, 5));
console.log(animali(1, 2, 3));
console.log(animali(5, 2, 8));


// Esercizio 5









// Esercizio 6
console.log("Esercizio 6");

function sommaNumero(somma) {
    let conteggio = 0;
    for ( i = somma; i > 0; i--) {
        conteggio += i;
    }
    return conteggio;
}
console.log(sommaNumero(4));
console.log(sommaNumero(13));
console.log(sommaNumero(600));

// Esercizio 7

console.log("Esercizio 7");

function trovaSconto(prezzo, sconto) {
    if (sconto <= 100) {
        totale = prezzo - (prezzo / 100) * sconto;
        return totale;
    } 
}

console.log(trovaSconto(1500, 50));
console.log(trovaSconto(89, 20));
console.log(trovaSconto(100, 75));
