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

// Esercizio 8
console.log("esercizio 8");

function lettere(posizione) {
    let i = posizione;
    let j = 0;
    while(i >= 1 && i <= 26 && i % 1 == 0) {
        j = j + i;
       console.log(j);
        return String.fromCharCode(i + 96);
        
    }
   
}

console.log(lettere(1));
console.log(lettere(26.0));
console.log(lettere(0));
console.log(lettere(4.5));

// Esercizio 9
console.log("calcolatrice di base");

function calcolatrice(nu1, operazione, nu2) {
    switch (operazione) {
        case "+":
            return nu1 + nu2;
        case "-":
            return nu1 - nu2;
        case "*":
            return nu1 * nu2;
        case '/':
            if(nu2 !== 0) {
               divi = nu1 / nu2;
                console.log( divi);
            }else{
                console.log("non si divide per 0");
            }
        break;
       

            
        
    }
}




console.log(calcolatrice(2, "+", 2));
console.log(calcolatrice(2, "*", 2));
console.log(calcolatrice(4, "/", 2));
console.log(calcolatrice(2, "/", 0));

// esercizo 10
console.log("somma di elementi array ");
function sommaArray(array) {
    let som = 0;
    for (let k = 0; k < array.length; k++) {
        som = som + array[k];
    }
    return som;
}

console.log(sommaArray([1, 2, 4]));
console.log(sommaArray([4, 2, 10, 2]));
console.log(sommaArray([1]));

// esercizio 11
console.log(" ese 11");

i = 0;
subtot = 0;

function budgetTotale(contenuto) {
    let subtot = 0;
    let i = 0;
    for(i=0; i < contenuto.length; i++){
        subtot += contenuto[i].budget
    }
    return subtot
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

