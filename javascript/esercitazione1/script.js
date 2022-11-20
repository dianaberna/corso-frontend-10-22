// moltiplico due numeri
function moltiplicazione(valore1, valore2) {
    let risultato = valore1 * valore2;
    return risultato
}

console.log(moltiplicazione(7, 3));

// converto anni in giorni
function convertitoreAnni(eta) {
    if (eta != isNaN) {
        return eta * 365
    } else {
        return console.log("inserire l'eta' in numero")
    }
}

console.log(convertitoreAnni(65));

// creo una funzione che mi dica se un numero e' minore o uguale a zero
// function isMinoreUgualeZero(valore){
//         if(valore !== isNaN){
//             return valore>=0
//         } else { return console.log("inserire un numero")
//         }
// }
function isMinoreUgualeZero(valore) {
    if (isNaN(valore) == false) { return valore >= 0 }
    else { return "inserire un numero" }
}

// return valore <= 0 ? true : false;

console.log(isMinoreUgualeZero(5));
console.log(isMinoreUgualeZero(-5));
console.log(isMinoreUgualeZero("5"));
console.log(isMinoreUgualeZero("ciao"));

// In questa sfida, un contadino ti chiede di dirgli quante zampe si possono contare tra tutti i suoi animali. L'agricoltore alleva tre specie: polli = 2 zampe, mucche = 4 zampe, maiali = 4 zampe
// L'agricoltore ha contato i suoi animali e ti dà un subtotale per ogni specie. Devi implementare una funzione che restituisca il numero totale di zampe di tutti gli animali. 
function zampeAnimali(polli, mucche, maiali) {
    let sommaZampe = (polli * 2) + (mucche * 4) + (maiali * 4);
    return sommaZampe
}
console.log(zampeAnimali(5, 2, 8));

// Crea una funzione che prenda un numero (step) come argomento e restituisca il numero di fiammiferi in quello step. Vedere i passaggi 1, 2 e 3 nell'immagine.
function numeroFiammiferi(step) {
    let numero = 0
    if (step === 0) { return numero }
    else {
        numero = 6 + 5 * (step - 1);
        return numero
    }
}
console.log(numeroFiammiferi(5));

// Crea una funzione che accetta un numero come argomento. Somma tutti i numeri da 1 al numero passato alla funzione. Ad esempio,
// se l'input è 4, la tua funzione dovrebbe restituire 10 perché 1 + 2 + 3 + 4 = 10.
function sommaDaUnNumero(numero) {
    let somma = 0;
    for (let i = numero; i > 0; i--) {
        somma += i;
    }
    return somma;
}
console.log(sommaDaUnNumero(5));

// Crea una funzione che accetta due argomenti: il prezzo originale e la percentuale di sconto
// come numeri interi e restituisce il prezzo finale dopo lo sconto.
function trovaSconto(prezzo, percentuale) {
    let sconto = prezzo * percentuale / 100;
    let risultato = prezzo - sconto;
    return risultato.toFixed(2)
}
console.log(trovaSconto(1500, 50));
console.log(trovaSconto(12, 10));
console.log(trovaSconto(100, 75));

// Dato un numero compreso tra 1 e 26 (vedere codice ASCII), restituisci quale lettera si trova in quella
// posizione dell'alfabeto. Restituisce "non valido" se il numero fornito non rientra in tale intervallo o non è un numero intero.
function getLetteraNumero(numero) {
    if (numero >= 1 && numero <= 26 && numero % 1 == 0) {
        lettera = String.fromCharCode(numero + 96);
        return lettera
    } else { return "invalid" }
}
console.log(getLetteraNumero(17.0));

// Crea una funzione che accetta due numeri e un operatore matematico + - / * ed eseguirà un calcolo con i numeri indicati.
function calcolatriceBase(numero1, operatore, numero2) {
    if (operatore === "+") {
        return numero1 + numero2
    } else if (operatore === "*") {
        return moltiplicazione(numero1, numero2)
    } else if (operatore === "-") {
        return numero1 - numero2
    } else if (operatore === "/") { 
        if (numero2 == 0) {
            return "Impossibile dividere per 0"
        } else {
            let risultato = numero1 / numero2;
            return risultato.toFixed(2)
        }
    } else { return "inserire operatore valido " }
}
console.log(calcolatriceBase(2, "/", 0));
console.log(calcolatriceBase(2, "+", 4));
console.log(calcolatriceBase(2, "*", 5));
console.log(calcolatriceBase(2, "-", 6));
console.log(calcolatriceBase(2, "/", 5));
console.log(calcolatriceBase(2, "ciao", 3));

// Crea una funzione che restituisce la somma di tutti i valori di un array.
function sommaArray(array) {
    let somma = 0;
    for (let i = 0; i < array.length; i++) {
        somma += array[i]
    }
    return somma
}
console.log(sommaArray([1, 2, 3, 4]));

// Crea una funzione che restituisce il numero di valori uguali a true presenti in un array.
function quantiTrue(array) {
    let contatore = 0;
    if (!array) {
        return 0
    } else {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === true) {
                contatore++
            } else { continue }
        }
    } return contatore
}

console.log(quantiTrue([true, false, true, false, true, false]));

// Creare una funzione che restituisca lo spessore (in metri) di un foglio di carta dopo averlo piegato n numero di volte. La carta inizia con uno spessore di 0,5 mm.
function getSpessore(numeroPieghe) {
    let contatore = 0.5;
    for (let i = 0; i < numeroPieghe; i++) {
        contatore *= 2;
    }
    return contatore / 1000;
}

console.log(getSpessore(4) + "m");

/* validare una mail 
 Crea una funzione che accetta una stringa,
 controlla se è un indirizzo email valido
 e restituisce true o false, a seconda della valutazione.
*/
function mailValidator(mail) {
    const str = mail;
    return str.includes("@") &&
    str.includes(".") &&
    str.indexOf("@") > 0 === true &&
    str.indexOf(".") > 0 === true &&
    str.lastIndexOf(".") < mail.length-1 &&
    str.indexOf("@") - str.lastIndexOf(".") < -1
    ? true
    : false;
}

console.log(mailValidator("@gmail.com"));
console.log(mailValidator("ciao.gmail@com"));
console.log(mailValidator("gmail"));
console.log(mailValidator("ciao@gmail"));
console.log(mailValidator("ciao@gmail."));
console.log(mailValidator("ciao@gmail.com"));

// Sasso, carta, forbici
function paperRockScissors(giocatore1, giocatore2) {
    const giocateValide = ["carta", "forbici", "sasso"]
    if (!giocateValide.includes(giocatore1) || !giocateValide.includes(giocatore1)) {
        return "inserire giocate valide"
    }
    switch (giocatore1) {
        case giocatore2:
            return "E' un pareggio";
        case "carta":
            switch (giocatore2) {
                case "forbici":
                    return "Vince il giocatore 2"
                case "sasso":
                    return "Vince il giocatore 1"
            }
        case "forbici":
            switch (giocatore2) {
                case "carta":
                    return "Vince il giocatore 1"
                case "sasso":
                    return "Vince il giocatore 2"
            }
        case "sasso":
            switch (giocatore2) {
                case "carta":
                    return "Vince il giocatore 2"
                case "forbici":
                    return "Vince il giocatore 1"
            }
    }

}
console.log(paperRockScissors("sasso","forbici"));
console.log(paperRockScissors("carta","forbici"));
console.log(paperRockScissors("pietra","forbici"));

/*Crea una funzione che accetta due date e restituisce 
il numero di giorni tra la prima e la seconda data. */
function quantiGiorni(valore1, valore2) {
    let data1 = new Date(valore1); //trasformo i due valori inseriti in date
    let data2 = new Date(valore2);
    let differenzaMillisec = data1.getTime() - data2.getTime(); //getTime trasforma le date in millisecondi
    let differenzaGiorni = differenzaMillisec / (1000 * 3600 * 24); //divido i millisecondi per il numero di millisec in un giorno
    return "fra le due date ci sono " + Math.abs(differenzaGiorni) + " giorni"
}
//le date inserite mese/giorno/anno
console.log(quantiGiorni("01/01/2022", "02/01/2022"));

/*Crea una funzione che accetta un array di elementi, rimuove tutti gli elementi duplicati
e restituisce un nuovo array nello stesso ordine sequenziale del vecchio array (meno i duplicati).*/
function rimozioneDuplicati(array) {
    let arrayClean = [];
    for (let i = 0; i < array.length; i++) {
        if (!arrayClean.includes(array[i])) {
            arrayClean.push(array[i]);
        } else { continue }
    } return arrayClean
}

console.log(rimozioneDuplicati([1, 0, 1, 0]));
console.log(rimozioneDuplicati(["The", "big", "cat"]));
console.log(rimozioneDuplicati(["John", "Taylor", "John"]));

// Crea la funzione che accetta un array con oggetti e restituisce la somma dei budget delle persone.
function budgetTotale(array){
    let sommaBudgets = 0;
    for (let i = 0; i < array.length; i++) {
     // sommaBudgets += !Number.isNaN(parseInt(array[i].budget)) ? parseInt(array[i].budget) : 0;
        sommaBudgets += typeof array[i].budget == "number" ? array[i].budget : 0; //così la stringa con un numero dentro non è inclusa
     // sommaBudgets += typeof parseInt(array[i].budget) == "number" ? parseInt(array[i].budget) : 0; così include anche strighe con numero (come il primo)
    }
    return sommaBudgets
}
console.log(
    budgetTotale([
        { name: "John", age: 21, budget: 10000 },
        { name: "Steve", age: 32, budget: 40000 },
        { name: "Martin", age: 16, budget: 2500 },
    ])
);
console.log(
    budgetTotale([
        { name: "John", age: 21, budget: 30000 },
        { name: "Steve", age: 32, budget: 2000 },
        { name: "Martin", age: 16, budget: "a" },
    ])
);

/*Crea una funzione che prenda un array di oggetti (alimentari) che calcoli il prezzo totale e lo restituisca come un numero.
Un oggetto alimentare ha un prodotto, una quantità e un prezzo */
function prezzoTotaleAlimenti(array) {
    let sommaPrezzo = 0;
    for (let i = 0; i < array.length; i++) {
        sommaPrezzo += typeof parseFloat(array[i].price) == "number" ? parseFloat(array[i].price) : 0;
    }
    return sommaPrezzo.toFixed(2)
}

console.log(
    prezzoTotaleAlimenti([{ product: "milk", quantity: 1, price: 1.5 }])
);
console.log(
    prezzoTotaleAlimenti([
        { product: "milk", quantity: 1, price: 1.5 },
        { product: "cereals", quantity: 1, price: 2.5 },
    ])
);
console.log(
    prezzoTotaleAlimenti([{ product: "milk", quantity: 3, price: 1.5 }])
);
console.log(
    prezzoTotaleAlimenti([
        { product: "milk", quantity: 1, price: 1.5 },
        { product: "eggs", quantity: 12, price: 0.10 },
        { product: "bread", quantity: 2, price: 1.6 },
        { product: "cheese", quantity: 1, price: 4.5 },
    ])
);
console.log(
    prezzoTotaleAlimenti([
        { product: "chocolate", quantity: 1, price: 0.10 },
        { product: "lollipop", quantity: 1, price: 0.20 },
    ])
);
