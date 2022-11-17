//Esercizio 8 - Stampare il numero minimo

let array=[2,6,9,10,-2,-3,0,2,5,1];

i=0
min=0

while (i<array.length){
    if (array[i]<min){ //array[i] indica la posizione
    min=array[i]
    }  
    i++
}
console.log(array)

//Esercizio 9 - Stampare in un nuovo array solo elementi negativi

let array2= []
i=0

while (i<array.length) {
    if (array[i]<0){
        array2.push(array[i])
    }
    i++;
}
console.log(array2)

// let array2= []
// i=0
//let nuovoindice=0

// while (i<array.length) {
//     if (array[i]<0){
//         nuovoindice++
//     }
//     i++;
// }
// console.log(array2)

// Esercizio 10 - Creare e stampare nuovo array dove ogni elemento del nuovo è uguale al doppio del vecchio
i=0
let arraydoppio = []

while (i<array.length){
    arraydoppio[i]=array[i]*2
    i++
}
console.log (arraydoppio)

//Esercizio 11 - Creare nuovo array in cui inserisco 2 volte gli elementi, di seguito

i=0
let arrayripetuto=[]
let i2=0
while (i<array.length){
    arrayripetuto[i2]=array[i]
    i++
    i2++
}
//arrayripetuto = array, i=4 i2=4
i=0
while (i<array.length){
    arrayripetuto[i2]=array[i]
    i++
    i2++
}
console.log (arrayripetuto)

/*versione rapida - Esercizio 11 - Potresti fare anche con CONCAT */
// i=0
// let arrayripetuto=[]

// while (i<array.length){
//     arrayripetuto[i]=array[i]
//     arrayripetuto[array.length+i]=array[i]
//     i++
// }

// Esercizio 12 - Stampare al contrario array

// let array=[2,6,9,10,-2,-3,0,2,5,1];

// let i = array.length-1;

// while (i>=0){
//     console.log(array[i]);
//     i--;
// }

// Esercizio 13 - Creare un array3 con la somma di array1 e array2
// console.log("Esercizio 13")

// let array1 = [1, 2, 2, 3, 0]
// let array2 = [4, 2, 2, 4]
// let array3 = []

// i=0

// while (i<array1.length || i<array2.length) {
//     array3[i]=0;
//     if (array2.length == array1.legth){  
//         // se array1 e array2 sono stessa lunghezza sommano
//         array3[i]=array1[i]+array2[i];
//     }

//     if {
//         if (array2.length < array1.length){
//         array3[]
//         }
//     }
//     if {

//     }

//     i++;
// }

// for(let i = 0; i < array1.length || i < array2.length; i++){
//     if(array1[i] && array2[i]){
//         array3[i] = array1[i] + array2[i]
//     }

//     if(array1[i] && !array2[i]){
//         array3[i] = array1[i];
//     }

//     if(!array1[i] && array2[i]){
//         array3[i] = array2[i];
//     }
// }

console.log ("-------Esercizio 14--------")
//Creare un array3 con gli elementi (non la posizione) dispari di array1 e gli elementi pari di array2

array1 = [1,2,2,3,4]
array2 = [4,2,2,4]
array3=[]

// for (i=0 ; i<array.length ; i++)
