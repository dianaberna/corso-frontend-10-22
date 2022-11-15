let numeri = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1];


//Esercizio 1
console.log("1. Stampare tutti gli elementi dell’array")
console.log(numeri);
console.log ("---");
//Fine esercizio 1


//Esercizio 2
console.log("2. Stampare la somma di tutti gli elementi dell’ array");

i=0;
somma=0;
while(i < numeri.length){
    somma = somma + numeri[i];
    i = i + 1;
}
console.log(somma);

console.log ("---");
//Fine esercizio 2


//Esercizio 3
console.log("3. Stampare la somma dei soli elementi dispari");

i = 0;
somma = 0;
while (i < numeri.length){
    if(numeri[i] % 2 == 0){
    }
    else{
        somma = somma + numeri[i];    
    }
    i = i + 1;
}
console.log(somma);

console.log("---");
//Fine esercizio 3


//Esercizio 4
console.log("4. Stampare la somma dei soli elementi in posizione pari");

i = 0 
somma = 0
while(i < numeri.length){
    if (numeri[i] % 2 == 0){
        somma = somma + numeri [i];
    }
    i = i + 1;
}
console.log(somma);

console.log("---");
//Fine esercizio 4


//Esercizio 5
console.log("5. Stampare quante volte compare il numero 2");
console.log(numeri);
console.log(numeri.indexOf(numeri[2]));

console.log("---");
//Fine esercizio 5


//Esercizio 6
console.log("6. Stampare quanti numeri positivi (compreso lo zero) ci sono nell’array");

i = 0;
positivi = 0;
while (i < numeri.length){
    if (numeri[i] >= 0){
        positivi = positivi + 1;
    }
    i = i + 1;
}
console.log(positivi);

console.log("---");
//Fine esercizio 6


//Esercizio 7
console.log("7. Stampare il numero massimo");

i = 0;
max = numeri[0];

while (i < numeri.length){
    if (numeri[i] > max){
        max = numeri[i];
    }
    i = i + 1;
}
console.log(max);

console.log("---");
//Fine esercizio 7


//Esercizio 8
console.log("8. Stampare il numero minimo");

i = 0;
min = numeri[0];

while (i < numeri.length){
    if (numeri[i] < min){
        min = numeri[i];
    }
    i = i + 1;
}
console.log(min);

console.log("---");
//Fine esercizio 8

//Esercizio 9
console.log("9. Inserire in un nuovo array solo gli elementi negativi 🤯");

/*i = 0;
let nuovoarray = [];

while (i < numeri.length){
    if (numeri[i] < 0){ 
        nuovoarray.push(numeri[i]);
    }
    i = i + 1;
}
console.log(nuovoarray);*/

i=0;
let nuovoarray = [];
j=0;

while (i < numeri.length){
    if (numeri[i] < 0){
        nuovoarray [j] = numeri[i];
        j = j + 1;
    }
    i = i + 1;
}
console.log(nuovoarray);

console.log("---");
//Fine esercizio 9


//Esercizio 10
console.log("10. Creare un nuovo array dove ogni elemento del nuovo è uguale al doppio di quello dato 🤯");

i = 0;
let arraydoppio = [];

while (i < numeri.length){
    arraydoppio [i] = numeri[i] * 2;
    i = i + 1;
}
console.log(arraydoppio);

console.log("---");
//Fine esercizio 10


//Esercizio 11
console.log("11. Creare un nuovo array in cui inserisco due volte (una di seguito l’altra) l’array dato 🤯 🤯");

i=0;
let arrayDueVolte = [];

for (i=0; i < numeri.length; i++){
    arrayDueVolte[i] = numeri[i];
}
for(let j = 0; j < numeri.length; j++){
    arrayDueVolte[i] = numeri[j];
    i++
}
console.log(arrayDueVolte);

console.log("---");
//Fine esercizio 11



//Esercizio 12
console.log("12. Stampare al contrario gli elementi dell’array");
let arrayStraight = [1, 5, 2, 0, -3, -2, 10, 9, 6, 2]
let inverseArray = [];
i = arrayStraight.length - 1;
n = 0;

while(i >= 0){
    inverseArray[n] = arrayStraight[i];
    i--;
    n++;
}

console.log(inverseArray);

console.log("---");
//Fine esercizio 12


//Esercizio 13
console.log("13. Creare un array3 con la somma degli elementi dell’array1 e dell’array2");
let array1 = [ 1, 2, 2, 3, 4];
let array2 = [4, 2, 2, 4];
let array3 = [];
let k = 0;
let lunghezza;

/*if (array1.length >= array2.length){
    lunghezza = array1.length;
}
else {
    lunghezza = array2.length;
}*/

while(k < array1.length || k < array2.length){
    
    if (array1[k] && array2[k]){
        array3[k]= (array1[k] + array2[k]);
    }
    else if (array1[k]){
        array3.push(array1[k]);
    }
    else if (array1[k]){
        array3.push(array2[k]);
    }
    
    k++
}

console.log(array3);

console.log("---");
//Fine esercizio 13


//Esercizio 14
console.log("14. Creare un array3 con gli elementi (non la posizione) dispari di array1 e gli elementi pari di array2");
let arrayPri = [1,3,4,2,2,4];
let arraySec = [1,4,2,2,3,4];
arrayTer=[];
i = 0;
j = 0;


while(i < arrayPri.length || i < arraySec.length){
    if (arrayPri[i]%2 == 1){
        arrayTer[j] = arrayPri[i];
        j = j + 1;
    }
    if (arraySec[i]%2 == 1){
        arrayTer[j] = arraySec[i];
        j = j + 1;
    }   
    i++
}

console.log(arrayTer);

console.log("---");
//Fine esercizio 14




//Esercizio 15
console.log("15. Aggiornare l’array2 con elemento = il suo valore diviso il valore nella posizione lunghezza-posizione dell’array1");
// la posizione del valore di array1 non sarà i, ma lunghezza (di array2) meno i (posizione di array2)

array1 = [ 1, 2, 2, 3, 4];
array2 = [4, 2, 2, 4];
    
i = 0; 
while (i < array2.length){

    if (array1[array2.length - i -1]){ //-1 perchè senno non ci prende tutti i valori di array1 e in questo modo viene risolto
    array2[i] = array2[i] / array1[(array2.length - i -1)];
    }
    i++;
}

console.log (array2);

console.log("---");

//abbiamo aggiunto un -1 per far funzionare meglio l'algoritmo
/*
array1 = [2,3,4]
array2 = [3,4]
i = 0  0<2? sì, array1[1] esiste, array2[0]/array1[1] = 3/3;
i = 1 1<2? sì, array1[0] esiste, array2[1] = array2 [1] / array1 [0] = 4/2;
i = 2 2<2? no 
*/ 

/*
array1 = [2,3]
array2 = [3,4,5]
i = 0  0<3? sì, array1[2] non esiste;
i = 1 1<3? sì, array1[1] esiste, array2[1] = array2 [1] / array1 [1] = 4/3;
i = 2 2<3? sì, array1[0] esiste, array2[2] = array2 [2] / array1 [0] = 5/2;
i = 3 3<3? no
*/ 

/*
array1 = [2,3,4]
array2 = [3,4,5]
i = 0  0<3? sì, array1[2] esiste, array[0] = array[0] / array1[2] = 3/4;
i = 1 1<3? sì, array1[1] esiste, array2[1] = array2 [1] / array1 [1] = 4/3;
i = 2 2<3? sì, array1[0] esiste, array2[2] = array2 [2] / array1 [0] = 5/2;
i = 3 3<3? no
*/ 
//Fine esercizio 15



//Esercizio 16
console.log("16. Verificare se array1 e array2 dati sono palindromi");
array1 = [ 1, 2, 2, 3, 4];
array2 = [4, 2, 2, 2, 4];
   

    i = 0;
    j = array1.length - 1;
    controllo = 0;
    while (i < Math.floor(array1.length/2)){
        if (array1[i] == array1[j]){
            controllo ++;
        }
        i++;
        j--;
    }

    if (controllo == Math.floor(array1.length/2)){
        console.log ("è palindromo");
    } else {
        console.log ("non è palindromo");
    }



    i = 0;
    j = array2.length - 1;
    controllo = 0;

    while (i < Math.floor(array2.length/2)){
        if (array2[i] == array2[j]){
            controllo ++;
        }
        i++;
        j--;
    }

    if (controllo == Math.floor(array2.length/2)){
        console.log ("è palindromo");
    } else {
        console.log ("non è palindromo");
    }

console.log("---");
//Fine esercizio 16



