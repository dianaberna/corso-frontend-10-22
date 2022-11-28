// moltiplicazione di due numeri
console.log("moltiplicazione di due numeri");
function moltiplicazione(a, b) {
    if (b) {
        console.log("b inserito");
    } else {
        console.log("b NON inserito");
        return;
    }
    return a * b;
}

console.log(moltiplicazione(3));
console.log(moltiplicazione(-3, -6));
console.log(moltiplicazione(7, 3));

// convertire anni in giorni
console.log("convertire anni in giorni");
function anniInGiorni(anni) {
    return anni * 365;
}
console.log(anniInGiorni(65));
console.log(anniInGiorni(0));
console.log(anniInGiorni(20));

// minore o uguale a zero
console.log("minore o uguale a zero");
function minoreUgaleAZero(a) {
    if (a <= 0) {
        return true;
    } else {
        return false;
    }
}
console.log(minoreUgaleAZero(5));
console.log(minoreUgaleAZero(0));
console.log(minoreUgaleAZero(-2));

function minoreUgaleAZero(a) {
    return a <= 0 ? true : false;
}
console.log(minoreUgaleAZero(5));
console.log(minoreUgaleAZero(0));
console.log(minoreUgaleAZero(-2));

// problema della fattoria
console.log("problema della fattoria");
function numeroZampe(polli, mucche, maiali) {
    return polli * 2 + (mucche + maiali) * 4;
}
console.log(numeroZampe(2, 3, 5));
console.log(numeroZampe(1, 2, 3));
console.log(numeroZampe(5, 2, 8));

// casa di fiammiferi
// 1 casa = 6 fiammiferi (1*5 + 1 = 6)
// 2 case = 11 fiammiferi (2*5 + 1 = 11)
// 3 case = 16 fiammiferi (3*5 + 1 = 16)

console.log("casa di fiammiferi");
function numeroDiFiammiferi(step) {
    return step == 0 ? 0 : step * 5 + 1;
}
console.log(numeroDiFiammiferi(0)); // se step=0 restituisce 0
console.log(numeroDiFiammiferi(1));
console.log(numeroDiFiammiferi(4));
console.log(numeroDiFiammiferi(87));

// somma i numeri da un unico numero
console.log("somma i numeri da un unico numero");
function sommaDaUnUnicoNumero(numero) {
    let somma = 0;
    for (let i = numero; i > 0; i--) {
        somma += i;
    }
    return somma;
}
console.log(sommaDaUnUnicoNumero(4));
console.log(sommaDaUnUnicoNumero(13));
console.log(sommaDaUnUnicoNumero(600));

// trova lo sconto
console.log("trova lo sconto");
function trovaSconto(prezzo, sconto) {
    return prezzo - (prezzo * sconto) / 100;
}

console.log(trovaSconto(1500, 50));
console.log(trovaSconto(89, 20));
console.log(trovaSconto(100, 75));

// posizione nell'alfabeto
console.log("posizione nell'alfabeto ");
function letteraInPosizione(posizione) {
    if (posizione >= 1 && posizione <= 26 && posizione % 1 == 0) {
        return String.fromCharCode(posizione + 96);
    } else {
        return "invalid";
    }
}

console.log(letteraInPosizione(1));
console.log(26.0)
console.log(letteraInPosizione(26.0));
console.log(letteraInPosizione(0));
console.log(letteraInPosizione(4.5));

// calcolatrice di base
console.log("calcolatrice di base");
function calcolatrice(a, operazione, b) {
    switch (operazione) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
        case "x":
            return a * b;
        case "/": {
            return b == 0 ? "Impossibile dividere per 0!" : a / b;
        }
    }
}

console.log(calcolatrice(2, "/", 0));
console.log(calcolatrice(2, "+", 2));
console.log(calcolatrice(2, "*", 2));
console.log(calcolatrice(2, "x", 2));
console.log(calcolatrice(4, "/", 2));

// somma di n numeri
console.log("somma di elementi array ");
function sommaElementiArray(array) {
    let somma = 0;
    for (let i = 0; i < array.length; i++) {
        somma = somma + array[i];
    }
    return somma;
}

console.log(sommaElementiArray([1, 2, 4]));
console.log(sommaElementiArray([4, 2, 10, 2]));
console.log(sommaElementiArray([1]));

// quante volte è vero
console.log("quante volte è vero");
function quantiTrue(array) {
    let contatore = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == true) {
            contatore++;
        }
    }
    return contatore;
}
console.log(quantiTrue([true, false, false, true, false]));
console.log(quantiTrue([false, false, false, false]));
console.log(quantiTrue([]));

// piegare un pezzo di carta
console.log("piegare un pezzo di carta");
function spessore(numero) {
    return 0.0005 * 2 ** numero;
}
console.log(spessore(1));
console.log(spessore(4));
console.log(spessore(21));

// validare un'e-mail
console.log("validare un'e-mail");
function validareEmail(email) {
    if (
        email.indexOf("@") < 1 ||
        email.indexOf(".") < 0 ||
        email.indexOf("@") > email.lastIndexOf(".")
    )
        return false;
    return true;
}

function validareEmail2(email) {
    return /.+@.+\..+/.test(email);
}

console.log(validareEmail("@gmail.com"));
console.log(validareEmail("hello.gmail@com"));
console.log(validareEmail("mario.rossi@gmail.com"));
console.log(validareEmail("gmail"));
console.log(validareEmail("hello@gmail"));
console.log(validareEmail("hello@edabit.com"));

// sasso carta forbici
console.log("sasso carta forbici");
function sassoCartaForbici(p1, p2) {
    return p1 == p2
        ? `It's a draw`
        : p1 == `Rock` && p2 == "Scissors"
        ? `The winner is p1`
        : p1 == `Rock`
        ? `The winner is p2`
        : p1 == `Paper` && p2 == `Scissors`
        ? `The winner is p2`
        : p1 == `Paper` && p2 == `Rock`
        ? `The winner is p1`
        : p1 == `Scissors` && p2 == `Paper`
        ? `The winner is p1`
        : `The winner is p2`;
}

function sassoCartaForbici2(p1, p2) {
    let w = {
        Rock: "Scissors",
        Scissors: "Paper",
        Paper: "Rock",
    };
    if (p1 === p2) return "It's a draw";
    console.log("-------" + w[p1]);
    return `The winner is ${w[p1] === p2 ? "p1" : "p2"}`;
}

console.log(sassoCartaForbici("Rock", "Paper"));
console.log(sassoCartaForbici("Scissors", "Paper"));
console.log(sassoCartaForbici("Paper", "Paper"));

// quanti giorni tra due date
console.log("quanti giorni tra due date");
function quantiGiorni(primaData, secondaData) {
    const unGiorno = 24 * 60 * 60 * 1000;
    return (diffDays = 
        Math.round(Math.abs((primaData - secondaData) / unGiorno)
    ));
}

console.log(quantiGiorni(new Date("June 14, 2019"), new Date("June 20, 2019")));
console.log(
    quantiGiorni(new Date("December 29, 2018"), new Date("January 1, 2019"))
);
console.log(quantiGiorni(new Date("July 20, 2019"), new Date("July 30, 2019")));

// rimuovere i duplicati di un array
console.log("rimuovere i duplicati di un array");
function soloUnici(valore, indice, singolo) {
    return singolo.indexOf(valore) === indice;
}

function rimuoviDuplicati(array) {
    let risultato = array.filter(soloUnici);
    return risultato;
}
console.log(rimuoviDuplicati([1, 0, 1, 0]));
console.log(rimuoviDuplicati(["The", "big", "cat"]));
console.log(rimuoviDuplicati(["John", "Taylor", "John"]));

// budget totale
console.log("budget totale");
function budgetTotale(oggetto) {
    let totale = 0;
    for (let i = 0; i < oggetto.length; i++) {
        totale = totale + oggetto[i].budget;
    }

    return totale;
}

console.log(
    budgetTotale([
        { name: "John", age: 21, budget: 23000 },
        { name: "Steve", age: 32, budget: 40000 },
        { name: "Martin", age: 16, budget: 2700 },
    ])
);

console.log(
    budgetTotale([
        { name: "John", age: 21, budget: 29000 },
        { name: "Steve", age: 32, budget: 32000 },
        { name: "Martin", age: 16, budget: 1600 },
    ])
);

// prezzo totale alimenti
console.log("prezzo totale alimenti");
function prezzoTotaleAlimenti(alimenti) {
    let totale = 0;
    for (let i = 0; i < alimenti.length; i++) {
        totale = totale + alimenti[i].price * alimenti[i].quantity;
    }

    return totale.toFixed(2);
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
        { product: "eggs", quantity: 12, price: 0.1 },
        { product: "bread", quantity: 2, price: 1.6 },
        { product: "cheese", quantity: 1, price: 4.5 },
    ])
);
console.log(
    prezzoTotaleAlimenti([
        { product: "chocolate", quantity: 1, price: 0.1 },
        { product: "lollipop", quantity: 1, price: 0.2 },
    ])
);
