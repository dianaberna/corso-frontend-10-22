// Esercizio moltiplicazione
console.log("______________________________________________________");
console.log("moltiplicazione");

function moltiplicazione(a, b) {
    if (b) {
        console.log("b è stato inserito");
    } else {
        console.log("b non è stato inserito");
        return "non è stato inserito b";
    }
    return a * b;
}

console.log(moltiplicazione(3, 2));
console.log(moltiplicazione(-3, -6));
console.log(moltiplicazione(7, 3));

// Esercizio convertire anni in giorni
console.log("______________________________________________________");
console.log("anni in giorni");

function anniInGiornni(anni, giorni) {
    return anni * 365;
}

console.log(anniInGiornni(65));
console.log(anniInGiornni(0));
console.log(anniInGiornni(20));

// Esercizio minore o uguale a zero
console.log("______________________________________________________");
console.log("minore o uguale a zero");

function minoreUgualeAZero(a) {
    if (a <= 0) {
        return true;
    } else {
        return false;
    }
}

console.log(minoreUgualeAZero(5));
console.log(minoreUgualeAZero(0));
console.log(minoreUgualeAZero(-2));

// Il problema della fattoria
console.log("______________________________________________________");
console.log("il problema della fattoria");

function numeroZampe(polli, mucche, maiali) {
    return polli * 2 + mucche * 4 + maiali * 4;
}

console.log(numeroZampe(2, 3, 5));
console.log(numeroZampe(1, 2, 3));
console.log(numeroZampe(5, 2, 8));

// Case di fiammiferi
console.log("______________________________________________________");
console.log("case di fiammiferi");

function numeroDiFiammiferi(step) {
    if (step >= 0 && step <= 1) {
        return step * 6;
    } else {
        return step * 6 - step + 1;
    }
}

console.log(numeroDiFiammiferi(1));
console.log(numeroDiFiammiferi(4));
console.log(numeroDiFiammiferi(87));

// Somma i numeri da un unico numero
console.log("______________________________________________________");
console.log("somma i numeri da un unico numero");

function sommaDaUnUnicoNumero(a) {
    let sommaA = 0;
    while (a > 0) {
        sommaA = sommaA + a;
        a--;
    }
    return sommaA;
}

console.log(sommaDaUnUnicoNumero(4));
console.log(sommaDaUnUnicoNumero(13));
console.log(sommaDaUnUnicoNumero(600));

// Trova lo sconto
console.log("______________________________________________________");
console.log("trova lo sconto");

function trovaSconto(prezzo, percentualeSconto) {
    return prezzo - (prezzo * percentualeSconto) / 100;
}

console.log(trovaSconto(1500, 50));
console.log(trovaSconto(89, 20));
console.log(trovaSconto(100, 75));

// Posizione nell'alfabeto
console.log("______________________________________________________");
console.log("posizione nell'alfabeto");

function letteraInPosizione(a) {
    if (Number.isInteger(a) && 0 < a && a < 27) {
        return String.fromCharCode(a + 96);
    } else {
        return "invalid";
    }
}

console.log(letteraInPosizione(1));
console.log(letteraInPosizione(26.0));
console.log(letteraInPosizione(0));
console.log(letteraInPosizione(4.5));

// Calcolatrice di base
console.log("______________________________________________________");
console.log("calcolatrice di base");

function calcolatrice(a, b, c) {
    if (b === "+") {
        return a + c;
    } else if (b === "-") {
        return a - c;
    } else if (b === "/") {
        if (c === 0) {
            return "impossibile dividere per 0";
        } else {
            return a / c;
        }
    } else if (b === "*") {
        return a * c;
    }
}

console.log(calcolatrice(2, "+", 2));
console.log(calcolatrice(10, "-", 2));
console.log(calcolatrice(2, "*", 2));
console.log(calcolatrice(4, "/", 2));
console.log(calcolatrice(5, "/", 0));

// Fare la somma di tutti gli elementi di un array
console.log("______________________________________________________");
console.log("somma elementi array");

function sommaElementiArray(array) {
    let sommaArray = 0;
    for (let i = 0; i < array.length; i++) {
        sommaArray += array[i];
    }
    return sommaArray;
}

console.log(sommaElementiArray([1, 2, 4]));
console.log(sommaElementiArray([4, 2, 10, 2]));
console.log(sommaElementiArray([1]));

// Quante volte è vero?
console.log("______________________________________________________");
console.log("quante volte è vero?");

function quantiTrue(array2) {
    let sommaTrue = 0;
    if (array2.length === 0) {
        sommaTrue = 0;
    } else {
        for (let i = 0; i < array2.length; i++) {
            if (array2[i] === true) {
                sommaTrue++;
            }
        }
    }
    return sommaTrue;
}

console.log(quantiTrue([true, false, false, true, false]));
console.log(quantiTrue([false, false, false, false]));
console.log(quantiTrue([]));

// Piegare un pezzo di Paper
console.log("______________________________________________________");
console.log("piegare un pezzo di Paper");

function spessore(n) {
    let s = 0.0005;
    return 2 ** n * s;
}

console.log(spessore(1));
console.log(spessore(4));
console.log(spessore(21));

// Validare un'email
console.log("______________________________________________________");
console.log("validare un'email");

function validateEmail(mail) {
    if (mail.includes("@") && mail.includes(".")) {
        if (
            mail.indexOf("@") > 0 &&
            mail.lastIndexOf(".") > mail.indexOf("@") + 1 &&
            mail.lastIndexOf(".") < mail.length - 1
        ) {
            return "L'indirizzo mail è valido";
        } else {
            return "L'indirizzo mail non è valido";
        }
    } else {
        return "L'indirizzo mail non è valido";
    }
}

console.log(validateEmail("@gmail.com"));
console.log(validateEmail("hello.gmail@com"));
console.log(validateEmail("gmail"));
console.log(validateEmail("hello@gmail"));
console.log(validateEmail("hello@edabit.com"));

// Sasso carta forbici
console.log("______________________________________________________");
console.log("sasso carta forbici");

function rps(p1, p2) {
    if (
        (p1 == "Rock" || p1 == "Paper" || p1 == "Scissors") &&
        (p2 == "Rock" || p2 == "Paper" || p2 == "Scissors")
    ) {
        if (p1 === p2) {
            return "It's a draw";
        } else if (p1 === "Rock") {
            if (p2 === "Paper") {
                return "The winner is p2";
            } else if (p2 === "Scissors") {
                return "The winner is p1";
            }
        } else if (p1 === "Paper") {
            if (p2 === "Scissors") {
                return "The winner is p2";
            } else if (p2 === "Rock") {
                return "The winner is p1";
            }
        } else if (p1 === "Scissors") {
            if (p2 === "Paper") {
                return "The winner is p1";
            } else if (p2 === "Rock") {
                return "The winner is p2";
            }
        }
    } else {
        return "Please write 'Rock, Paper or Scissors'";
    }
}
console.log(rps("Rock", "Paper"));
console.log(rps("Scissors", "Paper"));
console.log(rps("Paper", "Paper"));
console.log(rps("Prova", "else"));

// Quanti giorni tra due date
console.log("______________________________________________________");
console.log("quanti giorni tra due date");

function getDays(d1, d2) {
    let millisecADay = (d2 - d1) / 1000 / 60 / 60 / 24;
    return console.log(millisecADay);
}

console.log(getDays(new Date("June 14, 2019"), new Date("June 20, 2019")));

// Rimuovere duplicati da un array
console.log("______________________________________________________");
console.log("rimuovere duplicati da un array");

// Somma budget persone
console.log("______________________________________________________");
console.log("budget totale");

/* class lavoratore {
    name = "";
    age = "";
    budget = "";

    constructor({ name, age, budget }) {
        // this -> mi serve per accedere alle proprietà della classe
        this.name = name;
        this.age = age;
        this.budget = budget;
    }
}

let primoLavoratore = new lavoratore({ name: "John", age: 21, budget: 23000 });
let secondoLavoratore = new lavoratore({
    name: "Steve",
    age: 32,
    budget: 40000,
});
let terzoLavoratore = new lavoratore({ name: "Martin", age: 16, budget: 2700 }); */

/*     return (
        primoLavoratore.budget +
        secondoLavoratore.budget +
        terzoLavoratore.budget
    ); */

function budgetTotale(lavoratori) {
    let somma = 0;
    for (let i = 0; i < lavoratori.length; i++) {
        somma += lavoratori[i].budget;
    }
    return somma;
}

console.log(
    budgetTotale([
        { name: "John", age: 21, budget: 23000 },
        { name: "Steve", age: 32, budget: 40000 },
        { name: "Martin", age: 16, budget: 2700 },
    ])
);

// Calcola il prezzo totale dei generi alimentari

console.log("______________________________________________________");
console.log("prezzo totale degli alimenti");

function prezzoTotaleAlimenti(alimenti) {
    let prezzoTot = 0;
    for (let i = 0; i < alimenti.length; i++) {
        prezzoTot += alimenti[i].price * alimenti[i].quantity;
    }
    return prezzoTot;
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
