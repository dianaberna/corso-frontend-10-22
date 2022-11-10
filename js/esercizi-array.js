let array = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1];

console.log(array);

let i;
// 1 - Stampare tutti gli elementi dell’array → 2, 6, 9, 10, -2, -3, 0, 2, 5, 1
console.log("-- 1 --");
i = 0;
while (i < array.length) {
    console.log(array[i]);
    i++;
}
// 2 - Stampare la somma di tutti gli elementi dell’ array → 30
console.log("-- 2 --");
i = 0;
somma = 0;
while (i < array.length) {
    somma = somma + array[i];
    i++;
}
console.log(somma);

// 3 - Stampare la somma dei soli elementi dispari → 12
console.log("-- 3 --");
i=0; 
somma=0;

while(i<array.length){
    if(array[i] % 2 != 0){
        somma = somma + array[i] 
    }
    
    i++;
}
console.log(somma)
// 4 - Stampare la somma dei soli elementi in posizione pari  → 14
console.log("-- 4 --");
i=0; 
somma=0;

while(i<array.length){
    if(i % 2 != 1){
        somma = somma + array[i] 
    }
    
    i++;
}
console.log(somma)
// 5 - Stampare quante volte compare il numero 2 → 2
console.log("-- 5 --");
let cont=0;
i=0;
while(i<array.length){
    if(array[i] === 2){
        cont = cont + 1
    }
    
    i++;
}
console.log(cont)
// 6 - Stampare quanti numeri positivi (compreso lo zero) ci sono nell’array → 8
console.log("-- 6 --");
i=0; 
cont=0;

while(i<array.length){
    if(array[i] >= 0){
        cont = cont + 1
    }
    
    i++;
}
console.log(cont)

// 7 - Stampare il numero massimo (senza usare funzioni matematiche) → 10
console.log("-- 7 --");
i=0; 
somma=0;
let max=array[0]
while(i<array.length){
    if(array[i] >= max){
        max = array[i] 
    }
    
    i++;
}
console.log(max)

// 8 - Stampare il numero minimo → -3
console.log("-- 8 --");
i=0; 
somma=0;
let min=array[0]
while(i<array.length){
    if(array[i] <= min){
        min = array[i] 
    }
    
    i++;
}
console.log(min)

// 9 - Inserire in un nuovo array solo gli elementi negativi 🤯 → [-2, -3]
console.log("-- 9 --");
i = 0;
let nuovoarray = [];
while (i < array.length) {
    if (array[i] < 0) {
        console.log(array[i]);
        nuovoarray.push(array[i]);
    }
    i++;
}
console.log(nuovoarray); // -2, -3

i = 0;
nuovoarray = [];
let indicenuovoarray = 0;
while (i < array.length) {
    if (array[i] < 0) {
        console.log(array[i]);
        nuovoarray[indicenuovoarray] = array[i];
        indicenuovoarray++;
    }
    i++;
}
console.log(nuovoarray); // -2, -3
console.log("---");
//  let array = [2, 6, -9, -10];   [2, 6, 9, 10, -2, -3, 0, 2, 5, 1]

let negativi = 0; // una variabile inizializzata a zero
let arraynegativi = []; // -> array vuoto
let contoinegativi = 0;
i = 0;
while (i < array.length) {
    if (array[i] < 0) {
        console.log(array[i]);
        negativi = array[i];
        arraynegativi[contoinegativi] = array[i]; //arraynegativi[0] = -3
        contoinegativi = contoinegativi + 1;
    }
    i = i + 1;
}
console.log(negativi);
console.log(arraynegativi);
console.log("---");

// i = 0, 0 < 10 ? si -> if(array[0]<0) no, i=i+1 = 1
// i = 1, 1 < 10 ? si -> if(array[1]<0) no, i=i+1 = 2
// i = 2, 2 < 10 ? si -> if(array[2]<0) negativi = array[2] = -9, i = i+1 = 3
// i = 3, 3 < 10 ? si -> if(array[3]<0) negativi = array[3] = -10

// 10 - Creare (e stampare) un nuovo array dove ogni elemento del nuovo è uguale al doppio di quello dato 🤯 → [4, 12, 18, 20, -4, -6, 0, 4, 10, 2]
console.log("-- 10 --");

// 11 - Creare (e stampare) un nuovo array in cui inserisco due volte (una di seguito l’altra) l’array dato 🤯 🤯 → 
// [2, 6, 9, 10, -2, -3, 0, 2, 5, 1,    2, 6, 9, 10, -2, -3, 0, 2, 5, 1]
//  |->                                 |-> è la posizione 10
// let array = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1];
console.log("-- 11 --");

// metodo bello
let arraydoppio = [...array, ...array]
console.log(arraydoppio)

// metodo ok 
i=0;
arraydoppio = []
while(i<array.length){
    arraydoppio[i] = array[i] // creiamo la prima parte dell'array
    arraydoppio[array.length + i] = array[i] // creiamo la seconda copia
    i++;
}
console.log(arraydoppio)

// metodo ok 2
i=0;
arraydoppio = []
while(i<array.length){
    // a = b = 2
    // arraydoppio[0] = arraydoppio[10+0] = array[0]
    // arraydoppio[0] = arraydoppio[10] = 2
    arraydoppio[i] = arraydoppio[array.length + i] = array[i] 
    i++;
}
console.log(arraydoppio)


// metodo brutto
i=0;
let indicearraydoppio
arraydoppio = []
while(i<array.length){
    arraydoppio[i] = array[i];
    indicearraydoppio++;
    i++
}
// indicearraydoppio = i = 10
i=0
while(i<array.length){
    arraydoppio[indicearraydoppio] = array[i];
    indicearraydoppio++;
    i++
}

// 12 - Stampare al contrario gli elementi dell’array → [1, 5, 2, 0, -3, -2, 10, 9, 6, 2] 🙂
console.log("-- 12 --");
// stampo il mio array
// let array = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1];
i = 0;
while (i < array.length) {
    console.log(array[i]);
    i = i + 1;
}
i = array.length - 1;
console.log("lunghezza = " + array.length);
while (i >= 0) {
    console.log(array[i]);
    i = i - 1;
}

// 13 - Creare un array3 con la somma degli elementi dell’array1 e dell’array2
console.log("-- 13 --");
i = 0;
let indicearray3 = 0;
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

// 14 - Creare un array3 con gli elementi (non la posizione) dispari di array1 e gli elementi pari di array2 → versione1 [1,3,4,2,2,4] 	versione2 [1,4,2,2,3,4]
console.log("-- 14 --");
array1 = [1, 2, 2, 3, 4];
array2 = [4, 2, 2, 4];
i = 0;
array3 = [];
indicearray3 = 0;
// versione 1
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

//versione 2
i = indicearray3 = 0;
array3 = [];
while (i < array1.length || i < array2.length) {
    if (array1[i] % 2 == 1) {
        array3[indicearray3] = array1[i];
        indicearray3++;
    }
    if (array2[i] % 2 == 0) {
        array3[indicearray3] = array2[i];
        indicearray3++;
    }
    i++;
}

console.log("versione 2");
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

// 16 - Verificare se gli array sono palindromi come ad esempio “anna”, “radar”, “emme”
console.log("-- 16 --");
array2 = [4, 2, 3, 2, 4];
// array2 = [4, 2, 3, 2, 4];
i = 0;
cont = 0;
// array.lenght = 4 / 2
// i = 0 -> 4 == 4
// i = 1 -> 2 == 2
// array1 = [4, 2, 3, 2, 4]
// array.lenght = 5 / 2 = 2
// i = 0 -> 4 == 4 cont = 1
// i = 1 -> 2 == 2 cont = 2
while (i < Math.floor(array2.length) / 2) {
    // se lunghezza è pari
    if (array2[i] === array2[array2.length - i - 1]) {
        cont++;
    }
    i++;
}

if (cont == array2.length / 2 || cont == Math.floor(array2.length / 2) + 1) {
    console.log("è palindromo");
} else {
    console.log("non è palindromo");
}


// Math
// math.floor -> parte intera inferiore   5.1 -> 5  5.9 -> 5
// math.ceil -> parte intera superiore  5.1 -> 6  5.9 -> 6

console.log(Math.floor(array2.length / 2))
console.log(Math.ceil(array2.length / 2))

if(3 % 2 == 1){
    console.log("dispari")
 }else{
     console.log("pari")
 }
 
 if(Math.abs(-3 % 2) == 1){
     console.log("dispari")
 }else{
      console.log("pari")
 }

console.log(5 / 2)
console.log(Math.floor(5 / 2))
