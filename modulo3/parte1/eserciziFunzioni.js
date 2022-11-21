// PRIMO ESERCIZIO
console.log('PRIMO ESERCIZIO');
// function moltiplicazione(a, b) {
//     return a * b;
// }

// console.log(moltiplicazione(3, 2));
// console.log(moltiplicazione(-3, -6));
// console.log(moltiplicazione(7, 3));


// SECONDO ESERCIZIO
console.log('SECONDO ESERCIZIO');
// function anniInGiorni(anni) {
//     return anni * 365;
// }

// console.log(anniInGiorni(65));
// console.log(anniInGiorni(0));
// console.log(anniInGiorni(20));

// TERZO ESERCIZIO
console.log('TERZO ESERCIZIO');
// function minoreUgualeAZero(numero) {
//     if (numero <= 0) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(minoreUgualeAZero(5));
// console.log(minoreUgualeAZero(0));
// console.log(minoreUgualeAZero(-2));


// QUARTO ESERCIZIO
console.log('QUARTO ESERCIZIO');

// function numeroZampe(polli, mucche, maiali) {

//     if ( Number(polli) && Number(mucche) && Number(maiali)  
//         && (polli >= 0 && mucche >= 0 && maiali >= 0)) {
//         zampePollo = polli * 2;
//         zampeMucca = mucche * 4;
//         zampeMaiale = maiali * 4;
    
//         zampeTotali = zampePollo + zampeMucca + zampeMaiale;
//     } else {
//         zampeTotali = 'impossibile eseguire il calcolo, dei insierire 3 numeri positivi';
//     }

//     return zampeTotali

// }

// console.log(numeroZampe(2, 3, 5));
// console.log(numeroZampe(1, 2, 3));
// console.log(numeroZampe(5, 2, 8));
// console.log(numeroZampe(5, 'ciao', 8));
// console.log(numeroZampe(0, 2, 8));
// console.log(numeroZampe(0, 0, 0));
// console.log(numeroZampe(0, -2, 8));
// console.log(numeroZampe(0, 2, -8));



// QUINTO
console.log('QUINTO ESERCIZIO');

// function numeroDiFiammiferi(numeroCase) {

//     let casa = 6;
//     let fiammiferiCheServono;

//     if (numeroCase > 1) {
//         fiammiferiCheServono = (casa * numeroCase) - (numeroCase-1);
//     } else if (numeroCase === 1) {
//         fiammiferiCheServono = casa;
//     } else {
//         fiammiferiCheServono = 'non è possibile';
//     }
//     return fiammiferiCheServono;
// }

// console.log(numeroDiFiammiferi(1));
// console.log(numeroDiFiammiferi(4));
// console.log(numeroDiFiammiferi(87));
// console.log(numeroDiFiammiferi(-1));
// console.log(numeroDiFiammiferi('ciao'));



// SESTO ESERCIZIO
console.log('SESTO ESERCIZIO');

// console.log('GUARDA QUI');
// function sommaDaUnUnicoNumero(numero) {
//     let somma = 0;
//     while (numero >= 0) {
//         somma = somma + numero;
//         numero--;
//     }
//     return somma;
// }

// console.log(sommaDaUnUnicoNumero(4));
// console.log(sommaDaUnUnicoNumero(13));
// console.log(sommaDaUnUnicoNumero(600));



// OTTAVO ESERCIZIO
console.log('OTTAVO ESERCIZIO');

// function trovaSconto(prezzoIntero, percentualeSconto) {
    
//     let sconto = (prezzoIntero * percentualeSconto) / 100;
//     let prezzoDaPagare = prezzoIntero - sconto;
//     return prezzoDaPagare.toFixed(2);
//     // return parseFloat(prezzoDaPagare);
// }

// parseFloat e toFixed sono quasi la stessa cosa

// console.log(trovaSconto(1500, 50));
// console.log(trovaSconto(89, 20));
// console.log(trovaSconto(100, 75));
// console.log(trovaSconto(100.43, 75));
// console.log(trovaSconto(100.46, 75));



// POSIZIONE DELL'ALFABETO
console.log('POSIZIONE ALFABETO');

// function letteraInPosizione(numero) {

//     if ( Number.isInteger(numero) && numero > 0 && numero <= 26) {
//         let converti = String.fromCharCode(numero + 96);
//         return converti;
//     } else {
//         let invalid = 'invalid';
//         return invalid;
//     }

// }

// console.log(letteraInPosizione(1));
// console.log(letteraInPosizione(26.0));
// console.log(letteraInPosizione(0));
// console.log(letteraInPosizione(4.5));


    // return fromCharCode(numero)
    // return String.fromCharCode(numero)


// CALCOLATRICE
console.log('CALCOLATRICE');
// function calcolatrice(a, operatore, b) {
//     if (operatore === '+') {
//         return a + b;
//     } else if (operatore === '-') {
//         return a - b;
//     } else if (operatore === '*') {
//         return a * b;
//     } else if (operatore === '/') {
//         if (b === 0) {
//             return 'impossibile dividere per 0';
//         }
//         return a / b;
//     }
// }

// console.log(calcolatrice(2, "+", 2));
// console.log(calcolatrice(2, "*", 2));
// console.log(calcolatrice(4, "/", 2));
// console.log(calcolatrice(4, "/", 4));
// console.log(calcolatrice(4, "*", 4));
// console.log(calcolatrice(4, "-", 4));
// console.log(calcolatrice(4, "/", 0));
// console.log(calcolatrice(0, "/", 4));


// SOMMA DI TUTTI GLI ELEMENTI DI UN ARRAY
console.log('SOMMA ARRAY');

// function sommaElementiArray(arrayInserito) {

//     let sommaElementi = 0;

//     for (let i = 0; i < arrayInserito.length; i++) {
//         // sommaElementi = sommaElementi + sommaElementi[i];
//         sommaElementi += arrayInserito[i];
//     }

//     // senza return non funziona
//     return sommaElementi;
// }

// console.log(sommaElementiArray([1, 2, 4]));
// console.log(sommaElementiArray([4, 2, 10, 2]));
// console.log(sommaElementiArray([1]));


//  QUANTE VOLTE è VERO?
console.log('QUANTE VOLTE è VERO?');

// function quantiTrue(array) {
//     let contaTrue = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === true) {
//             contaTrue++
//         } 
//     }
//     return contaTrue;
// }

// console.log(quantiTrue([true, false, false, true, false]));
// console.log(quantiTrue([false, false, false, false]));
// console.log(quantiTrue([]));




// PIEGARE UN PEZZO DI CARTA
// function spessore(numeroVoltePiegato) {

//     let spessorePiatto = 0.001;

//     let risultato = numeroVoltePiegato  * spessorePiatto;

//     return risultato;
// }

// console.log(spessore(1));
// console.log(spessore(4));
// console.log(spessore(21));




// VALIDARE UNA EMAIL
console.log('VALIDARE UNA EMAIL');
// function validateEmail(emailInserita) {

//     let trueOrFalse;

//     // cercare come si fa con espressioni regolari

//     // metti che deve avere 'it' oppure 'org' oppure 'com'

//     if ( 
//         emailInserita.includes('@') &&
//         emailInserita.includes('.') &&
//         // (emailInserita.indexOf('@') < emailInserita.indexOf('.')) && 
//         (emailInserita.indexOf('@') < emailInserita.lastIndexOf('.')) && 
//         (emailInserita.indexOf('@') != 0) &&
//         (emailInserita.indexOf('.') < emailInserita.length - 2)
//         ) {
//         trueOrFalse = true;
//     } else {
//         trueOrFalse = false;
//     }
//     return console.log(trueOrFalse);
// }

// validateEmail('@gmail.com');
// validateEmail('hello.gmail@com');
// validateEmail('gmail');
// validateEmail('hello@gmail');
// validateEmail('hello@edabit.com');

// validateEmail('hello@gmail.')
// validateEmail("hello@edabit.com")
// validateEmail("hello.prova@edabit.com")





// SASSO CARTA FORBICE
console.log('SASSO CARTA FORBICE');

// function morraCinese(giocatore1, giocatore2) {

//     let sasso = 'sasso';
//     let carta = 'carta';
//     let forbice = 'forbice';

//     if (giocatore1 === 'sasso' && giocatore2 === 'forbice') {
//         return 'vince giocatore 1'
//     } else if (giocatore1 === 'carta' && giocatore2 === 'sasso') {
//         return 'vince giocatore 1'
//     } else if (giocatore1 === 'forbice' && giocatore2 === 'carta') {
//         return 'vince giocatore 1'
//     } else if (giocatore1 === giocatore2) {
//         return 'pareggio';
//     } else {
//         return 'vince giocatore 2';
//     }

// }


// console.log(morraCinese('sasso', 'carta'));
// console.log(morraCinese('forbice', 'carta'));
// console.log(morraCinese('carta', 'carta'));
// console.log(morraCinese('sasso', 'sasso'));
// console.log(morraCinese('forbice', 'forbice'));


// QUANTI GIORNI TRA DUE GIORNI
console.log('QUANTI GIORNI TRA DUE GIORNI');

// function getDays(primaData, secondaData) {

//     let data1 = new Date(primaData);
//     let data2 = new Date(secondaData);
//     // new date è una classe che mi crea un oggetto con i valori che gli dico

//     // let giorni = (data2 - data1) / 86400000;
//     // 1000 / 60 / 60 / 24

//     let giorni = Math.abs((data2 - data1) / 86400000);
//     // così mi dà sempre valori positivi

//     return giorni;
// }


// console.log(getDays("June 14 2019","June 20 2019"))
// console.log(getDays("December 29 2018","January 1 2019"))
// console.log(getDays("July 20 2019","July 30 2019"))
// console.log(getDays("July 30 2019", "July 20 2019"))

// console.log(getDays( new Date(2019, 5, 14), new Date(2019, 5, 20) ));
// console.log(getDays( new Date(2019, 5, 14), new Date(2019, 5, 20) ));
// console.log(getDays( new Date(2019, 5, 14), new Date(2019, 5, 20) ));


console.log('RIMUOVI I DUPLICATI ');
function removeDups(array) {
    let arrayNuovo = [];
    for (i = 0; i < array.length; i++) {
        if (arrayNuovo.indexOf(array[i]) === -1) {
            arrayNuovo.push(array[i]);
        }
    }
    return arrayNuovo;
}

console.log(removeDups([1, 0, 1, 0]));
console.log(removeDups(["The", "big", "cat"]));
console.log(removeDups(["John", "Taylor", "John"]));
console.log(removeDups(["John", "Taylor", "jim"]));
console.log(removeDups(["ciao", "mondo", "ciao", "mondo", "ciao", "mondo", "ciao"]));







// function removeDups(array) {
//     let arrayNuovo = [];
//     for (i = 0; i < array.length; i++) {
//         if (!arrayNuovo.includes(array[i])) {
//             arrayNuovo.push(array[i]);
//         }
//     }
//     return arrayNuovo;
// }

// console.log(removeDups([1, 0, 1, 0]));
// console.log(removeDups(["The", "big", "cat"]));
// console.log(removeDups(["John", "Taylor", "John"]));
// console.log(removeDups(["John", "Taylor", "jim"]));
// console.log(removeDups(["ciao", "mondo", "ciao", "mondo", "ciao", "mondo", "ciao"]));












// function funcONE(x, y) {
//     return x*y;
// }
// function funcONE(z) {
//     return z;
// }

// console.log(funcONE(3, 3));
// console.log(funcONE(3));