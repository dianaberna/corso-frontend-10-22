//esercizio 12 - Stampare al contrario gli elementi dell’array


console.log("esercizio 12")

let array = [2,6,9,10,-2,-3,0,2,5,1]

let i=array.length -1; //altrimenti parte da posizione 10 e stampa undefined

while(i>=0){
    console.log(array[i]);
    i--;
}

//13) Creare un array3 con la somma degli elementi dell’array1 e dell’array2 
console.log("esercizio 13")

let array1 = [ 1, 2, 2, 3, 1] 
let array2 = [4, 2, 2, 4] 
let array3=[];

for (let i=0; i<array1.length || i<array2.length; i++){
    if(array1[i]&&array2[i]){array3[i]=array1[i]+array2[i];
    } else {
         if(array1[i] && !array2[i]){
            array3[i]=array1[i]
         }else if(array2[i] && !array1[i]){
array3[i]=array2[i]
         }
    }
} console.log(array3)

// esercizio 14 - Creare un array3 con gli elementi (non la posizione) dispari di array1 e gli elementi pari di array2 → versione1 [1,3,4,2,2,4] 	versione2 [1,4,2,2,3,4]
array1 = [ 1, 2, 2, 3, 1] 
array2 = [4, 2, 2, 4] 
array3=[];
let i3=0;

for(i=0;i<array1.length;i++){
    if(array1[i]%2!=0){
        array3[i3]=array1[i];
        i3++
    }
}
for(i=0;i<array2.length;i++){
    if(array2[i]%2==0){
        array3[i3+i]=array2[i]
    }
} console.log(array3)

for (i=0; i<array1.length || i<array2.length;i++){
    if(array1[i]%2!=0){
        array3[i]=array1[i];
        i3++;

    }
    if(array2[i]%2==0){
        array3[i3+i]=array2[i];
    
    }
}console.log(array3)

//esercizio 15
//Aggiornare l’array2 con elemento = il suo valore diviso il valore nella posizione lunghezza-posizione dell’array1
//array2[i] = array2[i] / array1[lunghezza-i]

array1 = [ 1, 2, 2, 3, 1] 
array2 = [4, 2, 2, 4] 
i=0;

while(i<array2.length){
      if(array1[array2.length-1])
    array2[i]=array2[i]/array1[array2.length-1]

    i++
}
























