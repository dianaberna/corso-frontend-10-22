console.log("ciao mondo");

//1 Stampo tutto gli elementi 

console.log("stampa tutti gli elementi")

let array = [2,6,9,10,-2,-3,0,2,5,1]
console.log(array)

i=0 
while(i<array.length){
    console.log(array[i])
    i++
}

//2 Stampo la somma degli elementi 

console.log("Stampo la somma degli elementi")

i=0
somma=0
while(i<array.length){
    somma=somma+array[i]
    i++
}
console.log(somma)

//3 Stampo la somma dei soli elemtni dispari 

console.log("stampa somma dei numeri dispari ")

i=0
let dispari=1
while(i<array.length){
    dispari=dispari+array[i]
    i=i+2
}
console.log(dispari)
//non viene risultato 12 ma viene 15 


//4 Stampa la somma degli elementi in posizione pari
console.log("Stampo somma solo gli elementi posizionati alla pari")

i=0 
let pari=0 
while (i<array.length){
    pari=pari+array[i]
    i=i+2
}
console.log(pari)

// 6 - Stampare quanti numeri positivi (compreso lo zero) ci sono nell’array
console.log("Stampare quanti numeri positivi")

i=0
let numeripositivi=0
while(i<array.length){
    if(array[i] >= 0){
        numeripositivi=numeripositivi+1
    }
    i++
}
console.log(numeripositivi)

//7 - Stampare il numero massimo (senza usare funzioni matematiche)
console.log(" Stampare il numero massimo")

i=0 
let numeromassimo=0
while(i<array.length){
    if(array[i] > numeromassimo){
    numeromassimo=array[i]
    }
    i=i+1
}
console.log(numeromassimo)

//8 - Stampare il numero minimo 
console.log("Stampare il numero minimo ")

i=0
let numerominore=0
while(i<array.length){
    if(array[i] < numerominore){
    numerominore=array[i]
    }
    i=i+1
}
console.log(numerominore)

// 9 - Inserire in un nuovo array solo gli elementi negativi
console.log("// 9 - Inserire in un nuovo array solo gli elementi negativi")

i=0
let nuovoarray=[]
while(i<array.length){
    if(array[i]<0){
    nuovoarray.push(array[i])
    }
    i++
}
console.log(nuovoarray)

// 10 - Creare (e stampare) un nuovo array dove ogni elemento del nuovo è uguale al doppio di quello dato
console.log("// 10 - Creare un nuovo array dove ogni elemento del nuovo è uguale al doppio di quello dato")

i=0 
let arraydoppio=[]
while(i<array.length){
    arraydoppio[i]=array[i]*2
    i++
}
console.log(arraydoppio)


//11 - Creare (e stampare) un nuovo array in cui inserisco due volte (una di seguito l’altra) l’array dato 

i=0
let arrayripeti=[]
let ripeti2=0
while(i<array.length){
    arrayripeti[ripeti2]=array[i]
    i++
    ripeti2++
}
//arrayripeti = array, i=4, ripeti=4 la variabile ci serve per continuare a scorrere nel array ripeti 

i=0
while(i<array.length){
    arrayripeti[ripeti2]=array[i]
    i++
    ripeti2++
}
console.log(arrayripeti)

/* versione più rapida */ 

i=0 
arrayripeti=[]
while(i<array.length){
    arrayripeti[i]=array[i]
    arrayripeti[array.length+i]=array[i]
    i++
}
console.log(arrayripeti)

//12-Stampare al contrario gli elementi dell'array

i=array.length
while(i>=0){
    console.log(array[i])
    i--
}

//13-Creare un array3 con la somma degli elementi dell’array1 e dell’array2

i=0
let array3 = [];
let array1 = [1, 2, 2, 3, 4, 6, 4];
let array2 = [4, 2, 2, 4];

while (i < array1.length || i < array2.length) {
    array3[i] = 0;
    if (array1[i]) {
        array3[i] = array3[i] + array1[i];
    }
    if (array2[i]) {
        array3[i] = array3[i] + array2[i];
    }
    i++;
}

console.log(array3);

// 14 - Creare un array3 con gli elementi (non la posizione) dispari di array1 e gli elementi pari di array2

array1 = [1, 2, 2, 3, 4];
array2 = [4, 2, 2, 4];
i = 0;
array3 = [];
indicearray3 = 0;
while (i < array1.length) {
    if (array1[i] % 2 == 1) {
        array3.push(array1[i]);
    }
    i++;
}
i = 0;
while (i < array2.length) {
    if (array2[i] % 2 == 0) {
        array3.push(array2[i]);
    }
    i++;
}
console.log("versione 1");
console.log(array3);


// 15 - Aggiornare l’array2 con elemento = il suo valore diviso il valore nella posizione lunghezza-posizione dell’array1

console.log("-- 15 -- da aggiornare");
array1 = [1, 2, 2, 3, 4];
array2 = [4, 2, 2, 4]; // ne manca uno 
i = 0;
while (i < array1.length || i < array2.length) {
    if (array1.length >= array2.length) {
        if(array1[i] )
            array2[i] = array2[i] / array1[array2.length - i];
    }

    // 0 -> 4 / array1[4 - 0]
    // 1 -> 2 / array1[4 - 1]
    // 2 -> 2 / array1[4 - 2]
    // 3 -> 4 / array1[4 - 3]

    console.log(array2[i]);
    i++;
}

// 16 - Verificare se gli array sono palindromi come ad esempio “anna”, “radar”, “emme”, "112 211"

console.log("-- 16 --");
array2 = [4, 2, 5, 2, 4];
// array2 = [4, 2, 3, 2, 4];
i = 0;
cont = 0;

while (i < Math.floor(array2.length) / 2) {
    // se lunghezza è pari
    if (array2[i] === array2[array2.length - i - 1]) {
        cont++;
    }
    i++;
}

if (cont == array2.length / 2 || cont == Math.floor(array2.length / 2)) {
    console.log("è palindromo");
} else {
    console.log("non è palindromo");
}

