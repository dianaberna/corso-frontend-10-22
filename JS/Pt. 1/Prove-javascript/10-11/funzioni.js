console.log("---funzioni---")

let i = 0; 
let a = 5; 
let b = 3; 
let somma = a + b; 
console.log(somma);

a=3;
b=30;
somma = a + b;

/*function name(params){

}*/

function sommaFunzione(primonumero, secondonumero){
    return primonumero + secondonumero;
}

console.log(sommaFunzione(5, 3));

function risultatoSomma (primonumero, secondonumero){
    let s = primonumero + secondonumero;
    console.log(s);
    return s;
}

let risultato = risultatoSomma(5, 3);
console.log(risultato);
risultato = risultatoSomma(3, 20);
console.log(risultato);
console.log(risultatoSomma(-4, 200));


function controlloSePari (numero){
    let controllo
    if(numero % 2 != 0){
        console.log("dispari"); //se ci fosse sopra return, il console.log non verrebbe fatto
        return false; //con return lui chiude la funzione e restituisce il valore
    } else {
        console.log("pari")
        return true;
    }
}

console.log(controlloSePari(2));
console.log(controlloSePari(3));


function varLetConst (primovalore, secondovalore){
    let s = primovalore + secondovalore;
    var a = 4;
    const b = 6;
    return s;
} 

//var, const e let esistono solo all'interno della funzione
//quindi se richiamati non vengono visti


//posso avere anche un array come variabile
function sommaArray(array){
    let i = 0;
    let somma = 0;
    while (i < array.length){
        somma = somma + array[i];
        i++;
    }
    return somma;
}

console.log(sommaArray([1,5,2]));

console.log("--------");
function modificaArray (array, moltiplicatore){
    let i = 0;
    while (i < array.length){
        array[i] = array[i] * moltiplicatore;
        i++;
    }
    return array;
}

console.log(modificaArray([1,5,2], 3));