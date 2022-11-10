console.log("-- funzioni --")

let i = 0; 
let a = 5;
let b = 3;
let somma = a + b;
console.log(somma);

a=3
b=30
somma = a + b;


function sommaFunzione(primonumero, secondonumero) {
    let s =  primonumero + secondonumero
    const prova = 4
    var provavar = 6
    console.log(s)
    return [s, prova, provavar]
}

/* console.log(s) */
/* console.log(prova) */
/* console.log(provavar) */

let risultato = sommaFunzione(5, 3)

console.log("--"+risultato+"--")
risultato = sommaFunzione(3, 20)
console.log(risultato)
console.log(sommaFunzione(-4, 200))

// se pari = true , se dispari = false
// dichiarazione della funzione generico
// parametro numero 
function controlloSePari(numero){
    if(numero % 2 != 0){
        console.log("dispari")
        return false
        console.log("dispari 2")
    }else{
        return true
        console.log("pari")
    }
}

// richiamare la funzione con i valori che gli passiamo
// nomefunzione(parametri)
console.log(controlloSePari(4))
console.log(controlloSePari(3456))

console.log("--- somma array ---")

function sommaArray(array){
    let somma = 0;
    for(let i=0; i< array.length; i++){
        somma = somma + array[i]
        console.log(`somma = ${somma}`) // template literal  ' " `
    }
    console.log(`somma finale = ${somma}`)
    return somma;
}

let nuovoarray = [1, 5, 3]
let s1 = sommaArray(nuovoarray) 
sommaArray( [5, 5, 2] )

console.log("--- modifica array ---")
// per ogni elemento dell'array 
// moltiplica x il numero passato come secondo parametro
function modificaArray(array, moltiplicatore){
    /* console.log(array)
    console.log(moltiplicatore) */
    let i = 0;

    while( i< array.length){
        array[i] = array[i] * moltiplicatore
        i++;
    }

    return array;
}

let arraychepasso = [1,5,3]
console.log(modificaArray(arraychepasso, 4))
console.log(modificaArray(arraychepasso, 5))
console.log(modificaArray(arraychepasso, 6))
/* console.log(modificaArray([1,5,2,-6], 5)) */

console.log("---")
nuovoarray = [1, 5, 3]
moltiplicatore = 4
i = 0
while( i< nuovoarray.length){
    nuovoarray[i] = nuovoarray[i] * moltiplicatore
    i++;
}
console.log(nuovoarray)

nuovoarray = [1, 5, 3]
moltiplicatore = 5
i = 0
while( i< nuovoarray.length){
    nuovoarray[i] = nuovoarray[i] * moltiplicatore
    i++;
}
console.log(nuovoarray)

nuovoarray = [1, 5, 3]
moltiplicatore = 6
i = 0
while( i< nuovoarray.length){
    nuovoarray[i] = nuovoarray[i] * moltiplicatore
    i++;
}
console.log(nuovoarray)

// funzioni annidate
console.log("-- funzioni annidate --")

// creo la funzione
function funzionetriste(){
    console.log("non vengo mai richiamata")
}

function funzioneinterna(numerointerno){
    console.log(`stampa funzione interna= ${numerointerno+numerointerno}`)
    console.log(numerointerno)
    return numerointerno+numerointerno
}

function funzioneesterna(numero) {
    console.log(`stampa funzione esterna= ${numero}`)
    let numerointerno = funzioneinterna(numero+1);
    return numerointerno
}

let mionumero = 2

if(mionumero > 0){
    console.log("è maggiore di 0")
}

let mionumeronuovo 
mionumeronuovo = funzioneesterna(mionumero)
console.log(mionumeronuovo)

if(mionumero == 2){
    console.log("il mio numero è 2")
}

// è maggiore di 0
// stampa funzione esterna= 2
// stampa funzione interna= 6
// 3
// 6
// il mio numero è 2

function stampa(stringa){
    console.log(stringa)
}

stampa("ciao mondo")

function funzionaSenzaParametri(){
    console.log("ciao ciao")
}

funzionaSenzaParametri()


/*

function controlloInputNome(){
    -> internamente vado a prelevare il valore input nome
}

function controlloInputEmail() {
    -> internamente vado a prelevare il valore input email
}

function ControlloForm(){
    controlloInputNome()
    controlloInputEmail()
}

......

ControlloForm()

*/