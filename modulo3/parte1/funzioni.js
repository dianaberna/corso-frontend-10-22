let a = 5;
let b = 5;

function somma() {

}

function controlloSePari(numero) {
    let provaLet = 3;
    const provaConst = 6;
    var provaVar = 9;

    // return provaLet;
    
    let controllo;
    if (numero % 2 != 0) {
        // console.log('dispari');
        controllo = false;
    } else {
        // console.log('dispari');
        controllo = true;
    }
    return controllo;

    // return provaVar, provaConst;
}

// la funzione mi restitutisce solo il primo return che scrivo
// oppure se faccio "return x, y, z  -> qui mi restitutisce solo l'ultimo, ovvero z"

console.log(controlloSePari(3));
console.log(controlloSePari(8));


// NEL FUNCTION SCOPE TUTTEL LE VARIABILI HANNO BLOCK SCOPE: PURE VAR NON è GLOBALE MA ESISTE SOLO NEL BLOCCO DELLA FUNZIONE 
// console.log(provaLet);
// console.log(provaConst);
// console.log(provaVar);
// infatti non mi stampa nulla: mi dice che non ho "definito" le mie variabili, ovvero non esistono



// controllo = 5;

//  non posso accedere alle variabili dentro alla funzione
// console.log(controllo);



