console.log ("-------Esercizio 14--------")
//Creare un array3 con gli elementi (non la posizione) dispari di array1 e gli elementi pari di array2

let array1 = [1,2,2,3,4];
let array2 = [4,2,2,4];

let array3=[];
let nuovoindice=0;

for (i=0 ; i<array1.length ; i++){
    if (array1[i] % 2 != 0) {
        array3[nuovoindice]=array1[i];

        nuovoindice++;

    }
}

// for (i=0 ; i<array1.length ; i++){
//     if (array1[i] % 2 != 0) {
//           nuovoindice=array3.length;
//        array3[nuovoindice] = array1[i]

//     }
// }

console.log(array3); //primo ciclo FOR array1 = 1,3


for (i=0 ; i<array2.length ; i++){
    if (array2[i] % 2 == 0) {
        
        array3[nuovoindice]=array2[i];

        nuovoindice++;
        
    }
}
console.log(array3); //secondo ciclo FOR array2 = 4,2,2,4




// console.log("---altro metodo------")
// array3=[];
// nuovoindice=0;
// for (i=0 ; i<array1.length || i<array2.length; i++){
//     if (array2[i] % 2 != 0) {
//         array3[nuovoindice]=array2[i];
//         nuovoindice++;
//         console.log(nuovoindice);
//         console.log(array3);

//     }
//     if (array2[i]%2==0){
//         array3[nuovoindice]=array2[i];
//         nuovoindice++;
//         console.log (nuovoindice+i);
//         console.log(array3);
//     }
// }


// let array1 = [1,2,2,3,4];
// let array2 = [4,2,2,4];

console.log("-------Esercizio 16 -------")

let palindromo=false;
let j;

for (i=0; i<array1.length; i++){
    j= array1.length-i-1;
    if (array1[i]==array1[j]){
        palindromo=true;
    }
    else {
        palindromo=false;
        break;
    }
    
}
console.log("Array1 è palindromo?="+palindromo)

for (i=0; i<array2.length; i++){
    j= array2.length-i-1;
    if (array2[i]==array2[j]){
        palindromo=true;
    }
    else {
        palindromo=false;
        break;
    }
    
}
console.log("Array2 è palindromo?="+palindromo)
