console.log("\n");
console.log("\n");

console.log("ESERCIZI FUNZIONI JAVASCRIPT");
console.log("1. Crea una funzione che accetta due numeri come argomenti e ne restituisce la moltiplicazione");

function moltiplicazione(numero1, numero2){
    return numero1 * numero2;
}

console.log(moltiplicazione(3,2));
console.log(moltiplicazione(-3,-6));
console.log(moltiplicazione(7,3));

console.log("--------");
console.log("\n");

console.log("2. Creare una funzione che prenda l'età in anni e restituisca l'età in giorni.");

function anniInGiorni (età){
    return età * 365;
}

console.log(anniInGiorni(65));
console.log(anniInGiorni(0));
console.log(anniInGiorni(20));

console.log("--------");
console.log("\n");


console.log("3. Crea una funzione che accetta un numero come unico argomento e restituisce true se è minore o uguale a zero, altrimenti restituisce false.");

function minoreUgualeAZero(numero){
    
    /*if(numero <= 0){
        return true;
    } else{
        return false;
    }*/

    return numero <= 0 ? true : false; //si può usare un operatore ternario
}



console.log(minoreUgualeAZero(5));
console.log(minoreUgualeAZero(0));
console.log(minoreUgualeAZero(-2));

console.log("--------");
console.log("\n");


//INSERIRE CONTROLLO AL 4
//magari fare una funzione nella funzione
console.log("4. Numero zampe animali");

function numeroZampe (polli, mucche, maiali){
    return (polli*2) + (mucche*4) + (maiali*4);
}

console.log(numeroZampe(2,3,5));
console.log(numeroZampe(1,2,3));
console.log(numeroZampe(5,2,8));


console.log("--------");
console.log("\n");



console.log("5. Crea una funzione che prenda un numero (step) come argomento e restituisca il numero di fiammiferi in quello step. Vedere i passaggi 1, 2 e 3 nell'immagine.");

function numeroDiFiammiferi (step){
    
    if (step < 0){
        return "il numero è minore di 0";
    } 
    if (step == 0) {
        return 0;
    }
    if (step > 0){
        return (step*5) + 1;
    }

    /*return 6 * step - (step - 1);*/
}

console.log(numeroDiFiammiferi(0));
console.log(numeroDiFiammiferi(-2));
console.log(numeroDiFiammiferi(1));
console.log(numeroDiFiammiferi(4));
console.log(numeroDiFiammiferi(87));

console.log("--------");
console.log("\n");


console.log("6. Crea una funzione che accetta un numero come argomento. Somma tutti i numeri da 1 al numero passato alla funzione");

function sommaDaUnUnicoNumero (number){

    i = number;
    somma = 0;

    if(number < 0){
        while (i <= 0){
            somma = somma + i;
            i++;
        }
    } else{
        while (i >= 0){
            somma = somma + i;
            i--;
        }
    }
    return somma;
}

console.log(sommaDaUnUnicoNumero(4));
console.log(sommaDaUnUnicoNumero(13));
console.log(sommaDaUnUnicoNumero(600));
console.log(sommaDaUnUnicoNumero(-4));
console.log(sommaDaUnUnicoNumero(-600));

console.log("--------");
console.log("\n");


console.log("7. Trova lo sconto");

function trovaSconto (prezzoOriginale, sconto){
    if (prezzoOriginale <= 0 || sconto < 0){
        return "non posso calcolare lo sconto"
    } else {
        return parseFloat(prezzoOriginale - ((prezzoOriginale * sconto)/ 100));

    }
}

console.log(trovaSconto(1500,50));
console.log(trovaSconto(89,20));
console.log(trovaSconto(100,75));
console.log(trovaSconto(-25, 25));
console.log(trovaSconto(75,0));
console.log(trovaSconto(65, -1));


console.log("--------");
console.log("\n");



console.log("8. Posizione nell'alfabeto");

function letteraInPosizione (numero){
    if (numero >= 1 && numero <= 26){
        numero = numero + 96;
        return String.fromCharCode(numero);
    }
    else {
        return "non valido";
    }
}

console.log(letteraInPosizione(65));
console.log(letteraInPosizione(1));
console.log(letteraInPosizione(7));
console.log(letteraInPosizione(20));
console.log(letteraInPosizione(26));
console.log(letteraInPosizione(26.0));
console.log(letteraInPosizione(27));

console.log("--------");
console.log("\n");



console.log("9. Calcolatrice di base");

    function calcolatrice (numero1, operator, numero2){
        if (operator == "+"){
            return numero1 + numero2;
        }
        if (operator == "-"){
            return numero1 - numero2;
        }
        if (operator == "*"){
            return numero1 * numero2;
        }
        if (operator == "/" && numero2 == 0){
            return "Impossibile dividere per 0!";
        } else if (numero2 != 0){
            return numero1 / numero2;
        }
        
    }

    console.log (calcolatrice (2, "+", 2));
    console.log (calcolatrice (2, "-", 2));
    console.log (calcolatrice (2, "*", 2));
    console.log (calcolatrice (2, "/", 2));
    console.log (calcolatrice (2, "/", 0));
    console.log (calcolatrice (7, "/", 2));

console.log("--------");
console.log("\n");



console.log("10. Fare la somma di tutti gli elementi di un array");

    function sommaElementiArray(arrayGenerico){
        
        somma = 0;
        for (i = 0; i < arrayGenerico.length; i++){
            somma = somma + arrayGenerico[i];
        }
        return somma;
    }
   

    console.log(sommaElementiArray([1,2,4]));
    console.log(sommaElementiArray([4,2,10,2]));
    console.log(sommaElementiArray([1]));
    console.log(sommaElementiArray([4,8,3,9,0]));

    console.log("--------");
console.log("\n");




console.log("11. Quante volte è vero?");

    function quantiTrue (arrayTrueFalse){
        
        i = 0;
        conteggioTrue = 0;
        while (i < arrayTrueFalse.length){
            if (arrayTrueFalse[i] == true){
                conteggioTrue = conteggioTrue + 1;
            }
            i++;
        }
        return conteggioTrue;
       
    }

    console.log(quantiTrue([true, false, false, true, false]));
    console.log(quantiTrue([false, false, false, false]));
    console.log(quantiTrue([]));

    console.log("--------");
console.log("\n");



console.log("12. Piegare un pezzo di carta");
        
    
    function spessore (pieghe){
        let spessoreIniziale = 0.0005;

        return (spessoreIniziale * (2**pieghe)) + "m";


    }

    console.log(spessore(1));
    console.log(spessore(4));
    console.log(spessore(21));

    console.log("--------");
console.log("\n");



console.log("13. Validare un’e-mail");
    
    function validateEmail (email){
        const str = email;
        
        let arrDomini = ["it", "com", "org", "net"];
        let strSplit = str.split(".");
        
        console.log ();
        
        return str.includes ("@") &&
                str.includes (".") &&
                str.indexOf ("@") > 0 === true &&
                str.lastIndexOf (".") < str.length - 1 === true &&
                str.indexOf ("@") - str.lastIndexOf(".") < -1 &&
                arrDomini.includes(strSplit[strSplit.length - 1])
                ?true
                :false;  

    }

    console.log (validateEmail("@gmail.com"));
    console.log (validateEmail("hello@gmail."));
    console.log (validateEmail("hello@gmail.com"));
    console.log (validateEmail ("hello.prova@dabit.com"));

    


console.log("--------");
console.log("\n");
    
        

console.log ("14. Sasso, carta, forbici");
    function cartaSassoForbice(p1, p2){
        
            if (p1 == p2){
                return "è un pareggio";
            } 

            if (p1 == "sasso" && p2 == "carta"){
                return "il vincitore è p2";
            } else if (p1 == "carta" && p2 == "sasso") {
                return "il vincitore è p1";
            }

            if (p1 == "carta" && p2 == "forbici"){
                return "il vincitore è p2";
            } else if (p1 == "forbici" && p2 =="carta"){
                return "il vincitore è p1";
            }

            if (p1 == "forbici" && p2 == "sasso"){
                return "il vincitore è p2";
            } else if (p1 == "sasso" && p2 == "forbici") {
                return "il vincitore è p1";
            }
        }

        //si poteva vedere questione di pareggio 
        //e in caso di p1 vincita
        //e mettere in else  la vittoria di p2

    console.log(cartaSassoForbice ("sasso", "sasso"));
    console.log(cartaSassoForbice ("carta", "sasso"));
    console.log(cartaSassoForbice ("sasso", "carta"));
    console.log(cartaSassoForbice ("forbici", "carta"));
    console.log(cartaSassoForbice ("carta", "carta"));
console.log("--------");
console.log("\n");




console.log("13. Quanti giorni tra due date");
       function calcDays (d1, d2){
        let millesecADay = Math.abs((d2 - d1) / 1000 / 60 / 60 / 24);
        return millesecADay;
       } 

       console.log(calcDays (new Date ("June 14, 2019"), new Date ("June 20, 2019")));
       console.log (calcDays (new Date ("December 29, 2018"), new Date ("January 01, 2019")));
       console.log (calcDays (new Date ("July 20, 2019"), new Date ("July 30, 2019")));



console.log("--------");
console.log("\n");
    



