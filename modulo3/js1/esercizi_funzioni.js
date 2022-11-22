// console.log("---1.Moltiplicazione di due numeri---");

// function moltiplicazione(primonumero, secondonumero) {
//     let risultato = primonumero * secondonumero;
//     return risultato;
// }
// console.log(moltiplicazione(2, 5));
// console.log(moltiplicazione(3, 2));
// console.log(moltiplicazione(3, 5));

// console.log("---2.Convertire anni in giorni---");

// function anniInGiorni(anni, giorni) {
//     let risultatoGiorni;

//     return (risultatoGiorni = anni * 365);
// }

// console.log(anniInGiorni(25));

// console.log(anniInGiorni(65));
// console.log(anniInGiorni(0));
// console.log(anniInGiorni(20));

// console.log("---3.Minore o uguale a zero---");

// function minoreUgualeAZero(numero) {
//     if (numero <= 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(minoreUgualeAZero(5));
// console.log(minoreUgualeAZero(0));
// console.log(minoreUgualeAZero(-2));

// console.log("---4. Il problema della fattoria---");

// function numeroZampe(polli, mucche, maiale) {
//     let zampePolli = 2;
//     let zampeMucche = 4;
//     let zampeMaiale = 4;
//     let risultatoZampe =
//         zampePolli * polli + zampeMucche * mucche + zampeMaiale * maiale;
//     return risultatoZampe;
// }

// console.log(numeroZampe(2, 3, 5));
// console.log(numeroZampe(1, 2, 3));
// console.log(numeroZampe(5, 2, 8));

// console.log("---5. Case di fiammiferi---");

// function numeroDiFiammiferi(step) {
//     if (step == 0) {
//         return 0;
//     }
//     let fiammiferi = 6;
//     let numerocasette = step - 1;
//     return fiammiferi * step - (step - numerocasette);
// }
// console.log(numeroDiFiammiferi(1));
// console.log(numeroDiFiammiferi(3));
// console.log(numeroDiFiammiferi(4));
// console.log(numeroDiFiammiferi(87));

// console.log("---6.Somma i numeri da un unico numero---");

// function sommaDaUnicoNumero(numero) {
//     if (numero > 0) {
//         somma = (numero * (numero + 1)) / 2;
//     }
//     return somma;
//     // i=1
//     // somma =0
//     // while (i <= numero ){
//     //     somma = somma + 1
//     //     i++;
//     // }
// }

// console.log(sommaDaUnicoNumero(4));
// console.log(sommaDaUnicoNumero(13));
// console.log(sommaDaUnicoNumero(600));

// console.log("---7.Trova lo sconto---");

// function trovaSconto(prezzo, sconto) {
//     if (prezzo > 0) {
//         prezzoScontato = (prezzo * sconto) / 100;
//         prezzoFinale = parseFloat(prezzo - prezzoScontato);
//     }
//     return prezzoFinale;
// }
// console.log(trovaSconto(1500, 50));
// console.log(trovaSconto(89, 20));
// console.log(trovaSconto(100, 75));

// console.log("---8.Posizione nell’alfabeto---");

// function letteraInPosizione(numero) {
//     if (numero >= 0 && numero <= 26 && numero % 1 == 0) {
//         lettera = String.fromCharCode(numero + 96);
//     } else {
//         return invalid;
//     }
//     return lettera;
// }

// console.log(letteraInPosizione(26));
// console.log(letteraInPosizione(1));
// console.log(letteraInPosizione(4.5));

console.log("---9.Calcolatrice di base---");

function calcolatrice(numero1, numero2, operatore) {
    console.log("appena dentro la funzione", operatore);
    let risultato = null;
    // SE HO UN OPERAZIONE valida aggiungo 5 aal risultato dell'operazione e poi faccio return
    // in questo caso devo usare il break nello switch case
    switch (operatore) {
        case "+":
            risultato = numero1 + numero2;
            break;
        case "-":
            risultato = numero1 - numero2;
            break;
        case "*":
            risultato = numero1 * numero2;
            break;

        case "/":
            if (numero2 == 0) {
                risultato = "impossibile dividere per 0";
            } else {
                risultato = numero1 / numero2;
            }
            break;
        default:
            risultato = "operatore sconosciuto";
            break;
    }
    if (isNaN(risultato)) {
        // verifico se il risultato  non è un numero!!
        return risultato;
    } else {
        return risultato;
    }
}
console.log("chiamo la calcolatrice", calcolatrice(2, 2, "+"));
console.log("chiamo la calcolatrice", calcolatrice(2, 0, "/"));
console.log("chiamo la calcolatrice", calcolatrice(2, 2, "%"));

// definizione di funzione che deve ricevere in input numero1 numero2 e operatore
//successivamente posso chiamare questa funzione passando i parametri nello stesso ordine
// MOLTO IMPORTANTE l'ordine dei parametri nella chiama della funzione sono importanti!!!!!
function calcolatrice2(numero1, numero2, operatore) {
    console.log("appena dentro la funzione", operatore);
    /// uso return al posto di break;
    // in questo caso posso tornare l operazione tra i due numeri senza fare altro lavoro
    // quindi posso usare retun all' interno del mio swichcase
    switch (operatore) {
        case "+":
            return numero1 + numero2;
        case "-":
            return numero1 - numero2;
        case "*":
            return numero1 * numero2;

        case "/":
            if (numero2 == 0) {
                return "impossibile dividere per 0";
            } else {
                return numero1 / numero2;
            }
        default:
            return "operatore sconosciuto";
    }
}
// sto usando la funzione definita sopra e il risultato della funzione la salvo nella
//variabile r2

let r2 = calcolatrice2(2, 2, "+");
console.log(r2);
// console.log("chiamo la calcolatrice", calcolatrice(2, 2, "+"));
// console.log("chiamo la calcolatrice", calcolatrice(2, 0, "/"));
// console.log("chiamo la calcolatrice", calcolatrice(2, 2, "%"));

console.log("---10. Fare la somma di tutti gli elementi di un array---");

function sommaElementiArray(array) {
    somma1 = 0;
    for (let i = 0; i < array.length; i++) {
        somma1 = somma1 + array[i];
    }

    return somma1;
}

let array1 = [1, 2, 4];
console.log(sommaElementiArray(array1));
console.log(sommaElementiArray([4, 2, 10, 2]));
console.log(sommaElementiArray([1]));

console.log("---11. Quante volte è vero?---");

function quantiTrue(array7) {
    let conta = 0;
    for (i = 0; i < array7.length; i++) {
        if (array7[i] == true) {
            conta++;
        }
    }
    return conta;
}
console.log(quantiTrue([true, false, false, true, false]));
console.log(quantiTrue([false, false, false, false]));
console.log(quantiTrue([]));

console.log("---12.Piegare un pezzo di carta---");
//Creare una funzione che restituisca lo spessore (in metri) di un foglio di carta
//dopo averlo piegato n numero di volte. La carta inizia con uno spessore di 0,5 mm.
// spessore(1) ➞ "0.001m"    // carta piegata una volta = 1mm (cioè 0.001m)
// spessore(4) ➞ "0.008m"  // carta piegata 4 volte = 8mm (cioè 0.008m)
// spessore(21) ➞ "1048.576m" // carta piegata 21 volte = 1048576mm (cioè 1048.576m)
function spessore(piegamenti) {
    const spessoreCartaInizialeInMetri = 0.0005; // 0,5 / 1000

    if (piegamenti < 0) {
        return "non posso piegare la carta";
    }

    if (piegamenti == 0) {
        return spessoreCartaInizialeInMetri + "m";
    }

    // let risultato = spessoreCartaInizialeInMetri * 2 ** piegamenti; // equivale a =>
    // let risultato = spessoreCartaInizialeInMetri * (2 ** piegamenti); // cioè viene prima eseguita l'elevamento alla potenza, poi la moltiplicazione per lo psessore della carta
    // Un'altro modo di fare la stessa operazione, ma un pocchino più leggibile.
    return spessoreCartaInizialeInMetri * Math.pow(2, piegamenti) + "m";
}
console.log(spessore(1));

console.log(spessore(4));
console.log(spessore(21));

console.log("---13. Validare un’e-mail---");
/* Crea una funzione che accetta una stringa, controlla se è un indirizzo email valido e restituisce true o false, a seconda della valutazione.
La stringa deve contenere un carattere @.
La stringa deve contenere un . carattere.
La @ deve avere almeno un carattere davanti. (ad esempio "d@ciao.com" è valido mentre "@ciao.com" non è valido.
Il . e la @ deve trovarsi nei posti appropriati. (ad esempio "hello.email@com" non è valido mentre "mario.rossi@email.com" è valido.
Se la stringa supera questi test, 
viene considerata un indirizzo email valido.
// */
//
// ATTENZIONE INDEXOF RITORNA -1 SE IL CARATTERE NON ESISTE NELLA STRINGA CERCATA\
// SE

// se il carattere @ è minore di 1 , la chicciola non è in posizione 0 --negazione quindi vero
//
// oppure
// il carattere punto è minore di 0 index of mi restitusce -1 cioè il punto non esiste
//oppure
// se il carattere chiocciola è maggiore del carattere punto
// ritornami un falso => l email non è valida
//function validareEmail1(email) {
//     if (
//         email.indexOf("@") < 1 ||
//         email.indexOf(".") < 0 ||
//         email.indexOf("@") > email.lastIndexOf(".")
//     )
//         return false;
//     return true;
// }

// function validareEmail(email) {
//     if (
//         email.includes("@") &&
//         email.includes(".") &&
//         // email.includes("string") == email.indexOf(".") < 1  // se la email ha il carattere string e il punto al primo posto
//     )
//         return true; {}
// }

function validareEmail(email) {
    if (!email.includes("@") || !email.includes(".")) {
        return false;
    }
    if (email.indexOf("@") < 1) {
        // la chiocciola NON è in posizione 0 =>  è già al suo posto
        return false;
    }

    if (email.indexOf("@") > email.lastIndexOf(".")) {
        // se l'indice della @ è minore dell'indice del punto la email sicuramente NON è valida
        // usando lastIndexOf mi vado controllo se esiste un punto dopo la chicciola
        return false;
    }
    return true;
}

console.log(validareEmail("gmailcom")); //gmailcom.indexOf('@') === -1 =>
//      index of non trova il carattere all interno di gmail com e ritorna
//      - 1 come risultato, invece di tornare la posizione effettiva

console.log(validareEmail("@gmail.com"));
console.log(validareEmail("hello@gmail"));
console.log(validareEmail("gmail"));
console.log(validareEmail("hello@edabit.com"));

console.log("---14. Sasso, carta, forbici---");
/* 
Crea una funzione che accetta due stringhe 
p1 e p2 ⁠— che rappresentano i giocatori 1 e 2) come argomenti e restituisce una stringa 
che indica il vincitore in una partita a Sasso, Carta, Forbici.
Ogni argomento conterrà una singola stringa: "Sasso", "Carta" o "Forbici".
 Restituisci il vincitore secondo le seguenti regole:
Il sasso batte le forbici / Le forbici battono la carta / La carta batte il sasso
Se p1 vince, restituisci la stringa "Il vincitore è p1".
 Se p2 vince, restituisci la stringa "Il vincitore è p2" e se p1 e p2 sono gli stessi, restituisci
"È un pareggio".


*/
function rps(p1, p2) {
    if (
        (p1 == "sasso" || p1 == "carta" || p1 == "forbici") &&
        (p2 == "sasso" || p2 == "carta" || p2 == "forbici")
    ) {
        if (p1 == "sasso" && p2 == "carta") return "Il vincitore è p2";
        if (p1 == "sasso" && p2 == "forbici") return "il vinvitore è p1";
        if (p1 == "sasso" && p2 == "sasso") return "pareggio";

        if (p1 == "forbici" && p2 == "carta") return "Il vincitore è p1";
        if (p1 == "forbici" && p2 == "forbici") return "pareggio";
        if (p1 == "forbici" && p2 == "sasso") return "Il vincitore è p2";

        if (p1 == "carta" && p2 == "sasso") return "Il vincitore è p1";
        if (p1 == "carta" && p2 == "carta") return "pareggio";
        if (p1 == "carta" && p2 == "forbici") return "Il vincitore è p1";
    }

    return "giocata non valida";
}

console.log(rps("sasso", "carta"));
console.log(rps("forbici", "carta"));
console.log(rps("carta", "carta"));
console.log(rps("sassso", "carta"));

function rps1(p1, p2) {
    let valid = ["sasso", "carta", "forbici"];
    if (!valid.includes(p1) || !valid.includes(p2)) {
        return "giocata non valida";
    }

    switch (p1) {
        case "carta":
            if (p2 == "carta") return "pareggio";
            if (p2 == "sasso") return "Il vincitore è p1";
            if (p2 == "forbici") return "Il vincitore è p2";
        case "sasso":
            if (p2 == "carta") return "Il vincitore è p2";
            if (p2 == "sasso") return "pareggio";
            if (p2 == "forbici") return "Il vincitore è p1";
        case "forbici":
            if (p2 == "carta") return "Il vincitore è p1";
            if (p2 == "sasso") return "Il vincitore è p2";
            if (p2 == "forbici") return "pareggio";
    }
}

console.log(rps1("sasso", "carta"));
console.log(rps1("forbici", "carta"));
console.log(rps1("carta", "carta"));
console.log(rps1("sassso", "carta"));