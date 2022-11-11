console.log("moltiplicazione");

function moltiplicazione(val1, val2) {
    return val1 * val2;
}

console.log(moltiplicazione(2, 3));
console.log(moltiplicazione(5, 10));
console.log(moltiplicazione(9, 9));

console.log("\nanni in giorni");

function anniInGiorni(anni) {
    return anni * 365;
}
console.log(anniInGiorni(2));
console.log(anniInGiorni(65));

console.log("\nminoreUgualeAZero");

function minoreUgualeAZero(numero) {
    if (numero <= 0) {
        return numero + " " + true;
    } else {
        return numero + " " + false;
    }
}

console.log(minoreUgualeAZero(5));
console.log(minoreUgualeAZero(0));
console.log(minoreUgualeAZero(-5));

console.log("\nnumeroZampe");

function numeroZampe(num1, num2, num3) {
    if (num1 && num2 && num3) {
        let totale = num1 * 2 + num2 * 4 + num3 * 4;
        let stringa = "hai un totale di " + totale + " zampe";
        return stringa;
    } else {
        return "devi inserire tre valori";
    }
}

console.log(numeroZampe(2, 3, 5));
console.log(numeroZampe(1, 2, 3));
console.log(numeroZampe(5, 2, 8));
console.log(numeroZampe(5, 2));

console.log("\nnumeroDiFiammiferi");

function numeroDiFiammiferi(num) {
    if (num > 0) {
        let numeroFiammiferi = num * 6 - (num - 1);
        return numeroFiammiferi;
    } else if (num == 0) {
        return 0;
    } else {
        return "inserisci un numero positivo";
    }
}

console.log(numeroDiFiammiferi(0));
console.log(numeroDiFiammiferi(-1));
console.log(numeroDiFiammiferi(1));
console.log(numeroDiFiammiferi(4));
console.log(numeroDiFiammiferi(87));

console.log("\nsommaDaUnUnicoNumero");

function sommaDaUnUnicoNumero(num) {
    let i;
    let somma = 0;
    for (i = 0; i < num; i++) {
        somma += num - i;
    }
    return somma;
}

console.log(sommaDaUnUnicoNumero(4));
console.log(sommaDaUnUnicoNumero(13));
console.log(sommaDaUnUnicoNumero(600));

console.log("\ntrovaSconto");

function trovaSconto(prezzo, sconto) {
    if (sconto <= 100) {
        let totale = parseFloat(prezzo - (prezzo / 100) * sconto);
        return totale.toFixed(2);
    } else {
        return "inserisci un  sconto max del 100%";
    }
}

console.log(trovaSconto(1500, 50));
console.log(trovaSconto(89, 20));
console.log(trovaSconto(100, 75));

console.log("\nletteraInPosizione");

function letteraInPosizione(car) {
    if (car > 0 && car <= 26 && Number.isInteger(car)) {
        car = parseInt(car);
        risultato = String.fromCharCode(car + 96);
        return risultato;
    } else {
        risultato = "invalid";
        return risultato;
    }
}

console.log(letteraInPosizione(1));
console.log(letteraInPosizione(26.0));
console.log(letteraInPosizione(0));
console.log(letteraInPosizione(4.5));

console.log("\ncalcolatrice");

function calcolatrice(num1, op, num2) {
    if (op == "+") {
        risultato = num1 + num2;
        return risultato;
    } else if (op == "*") {
        risultato = num1 * num2;
        return risultato;
    } else if (op == "/") {
        if (num2 == 0) {
            return "Impossibile dividere per 0!";
        } else {
            risultato = num1 / num2;
            return risultato;
        }
    } else if (op == "-") {
        risultato = num1 - num2;
        return risultato;
    } else {
        return "non hai inserito un operatore corretto";
    }
}

console.log(calcolatrice(2, "+", 4));
console.log(calcolatrice(2, "*", 4));
console.log(calcolatrice(2, "/", 4));
console.log(calcolatrice(2, "-", 4));

console.log("\nsommaElementiArray");

function sommaElementiArray(array) {
    let i = 0;
    let somma = 0;
    while (i < array.length) {
        somma += array[i];
        i++;
    }
    return somma;
}

console.log(sommaElementiArray([1, 2, 4]));
console.log(sommaElementiArray([4, 2, 10, 2]));
console.log(sommaElementiArray([1]));

console.log("\nquantiTrue");

function quantiTrue(array) {
    let i = 0;
    let conta = 0;
    while (i < array.length) {
        if (array[i] == true || array[i] == false) {
            if (array[i] == true) {
                conta++;
            }
        } else {
            return "i valori non sono tutti booleani";
        }
        i++;
    }
    return conta;
}

console.log(quantiTrue([true, true, true, false]));
console.log(quantiTrue([]));
console.log("prova con un valore non booleano");
console.log(quantiTrue([true, true, true, false, 2]));

console.log("\nspessore pezzo di carta (in progress)");

function spessore(pieghe) {
    let i = 0;
    spessore1 = 0.0005;
    while (i < pieghe) {
        spessore1 = spessore1 * 2;
        i++;
    }

    return spessore1;
}

console.log(spessore(21));
console.log(spessore(4));

console.log("\nvalidateEmail");

function validateEmail(email) {
    console.log(email.slice(0,(email.indexOf("@"))))
    if (!email.includes("@")) {
        return "l'email non contiene la @"
    }else if (!email.includes(".")){
        return "l'email non contiene il ."
    }else if (!email.slice((email.indexOf("@")+2)).includes(".")){
        return "l'email deve contenere il . dopo la @ e il dominio"
    }else if(!email.slice(0,(email.indexOf("@")))){
        return "l'email deve contenere caratteri prima della @"
    }else{
        return email
    }
    
}

console.log(validateEmail("billerifabio@gmail.com"))


/* 
String indexOf()
String lastIndexOf()
String search()
String match()
String matchAll()
String includes()
String startsWith()
String endsWith()

String length
String slice()
String substring()
String substr()
String replace()
String replaceAll()
String toUpperCase()
String toLowerCase()
String concat()
String trim()
String trimStart()
String trimEnd()
String padStart()
String padEnd()
String charAt()
String charCodeAt()
String split()
*/
console.log("\nsassoCartaForbici");


function sassoCartaForbici(p1,p2){
let sasso="sasso"
let carta="carta"
let forbici="forbici"  
    if ((p1==sasso || p1==carta || p1== forbici)&&(p2==sasso || p2==carta || p2== forbici)){
        if (p1==sasso && p2 ==forbici){
            return "ha vinto il giocatore 1"
        }else if(p1==sasso && p2 ==carta){
            return "ha vinto il giocatore 2"
        }else if(p1==carta && p2 ==sasso){
            return "ha vinto il giocatore 1"
        }else if(p1==carta && p2 ==forbici){
            return "ha vinto il giocatore 2"
        }else if(p1==forbici && p2 ==sasso){
            return "ha vinto il giocatore 2"
        }else if(p1==forbici && p2 ==carta){
                return "ha vinto il giocatore 1"
        }else{
            return "Pareggio"
        }
    } else{
        return "non hai inserito valori corretti"
    }
}

console.log(sassoCartaForbici("sasso","sasso"));
console.log(sassoCartaForbici("sasso","forbici"));
console.log(sassoCartaForbici("forbici","sasso"));
console.log(sassoCartaForbici("forbici","carta"));
console.log(sassoCartaForbici("carta","forbici"));
console.log(sassoCartaForbici("carta","sasso"));
console.log(sassoCartaForbici("carta","saso"));

