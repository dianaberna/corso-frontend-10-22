
let array = [2,6,9,10,-2,-3,0,2,5,1]

//esercizio 1 - Stampare tutti gli elementi dell’array
console.log(array);
let i = 0;

while (i < array.length) {
    
    console.log(array[i]);
    i =i+1;
} 

for (let i=0;i<array.length;i=i+1)
  {console.log(array[i])}

  //esercizio 2 - Stampare la somma di tutti gli elementi dell’ array

i=0;
let somma=0;

while (i<array.length) {
    somma=somma + array[i];
    i=i+1;
} console.log(somma)

//esercizio 3 - stampare la somma dei soli elementi dispari

i=0;
let sommadispari=0;
while (i<array.length){

    if(array[i] % 2 != 0) {
    sommadispari=sommadispari + array[i]
    }

    i=i+1
}console.log(sommadispari)

//esercizio 4 - Stampare la somma dei soli elementi in posizione pari 

i=0;
let sommapari=0;
while (i<array.length) {
      if (i % 2 == 0) {
        sommapari=sommapari + array[i]
      }
i=i+1
}console.log(sommapari) 

//esercizio 5 - Stampare quante volte compare il numero 2

i=0;
let quantidue=0;

while (i<array.length){
    if (array[i] ==2){
        quantidue=quantidue +1
    }
    i=i+1
}console.log(quantidue)

//esercizio 6 - Stampare quanti numeri positivi (compreso lo zero) ci sono nell’array → 8

i=0;
let quantinumeripositivi=0;
console.log("esercizio 6")
while (i<array.length){
    if(array[i] >= 0){
        quantinumeripositivi=quantinumeripositivi+1
    }
    i=i+1
}console.log(quantinumeripositivi)

//esercizio 7 - Stampare il numero massimo (senza usare funzioni matematiche)
//array=[-10,-5,-4,-3]
i=0;
let numeromassimo=array[0]; //importante mettere così perchè se metto numeromassimo=0 0 è già > dei numeri negativi.
                            // in questo modo prende in considerazione i numeri a partire dal primo valore
console.log("esercizio 7")
while (i<array.length){
      if(array[i]>numeromassimo){
        numeromassimo= array[i];

      }

    i=i+1
}console.log(numeromassimo)


//esercizio 8 - Stampare il numero minimo → -3

i=0;
let numerominimo=array[0];

console.log("esercizio 8")

while (i<array.length){
   if(array[i]<numerominimo){
    numerominimo=array[i];
   }
   i=i+1
} console.log(numerominimo)

//esercizio 9 - Inserire in un nuovo array solo gli elementi negativi 

i=0;
let nuovoarray= [];
inuovo=0;

console.log("esercizio 9")

/*while (i<array.length){
    if(array[i]<0){
        nuovoarray[inuovo]=array[i];
        inuovo=inuovo+1;
    }
    i++;
}console.log(nuovoarray)

oppure*/

while(i<array.length){
    if(array[i]<0){
        nuovoarray.push(array[i])
    }
    i++;
}console.log(nuovoarray)

//esercizio 10 - Creare un nuovo array dove ogni elemento del nuovo è uguale al doppio di quello dato

i=0;
let doppioarray= [];
idoppio=0;

console.log("esercizio 10")

/*while (i<array.length) {
   doppioarray[idoppio]=array[i]*2;
   idoppio=idoppio+1;
    i=i+1;
}console.log(doppioarray)*/

while(i<array.length) {
    doppioarray.push(array[i]*2);
i++
}console.log(doppioarray)

//esercizio 11 - Creare (e stampare) un nuovo array in cui inserisco due volte (una di seguito l’altra) l’array dato

console.log("esercizio 11")


let arrayripetuto=[];


for(i=0;i<array.length;i++){
    arrayripetuto[i]=array[i];
}console.log(arrayripetuto);
for(let iripetuto=0;iripetuto<array.length;iripetuto++){
    arrayripetuto[i]=array[iripetuto];
    i++;
}console.log(arrayripetuto)

console.log("es 11 col while")
i=0;
let array11=[];
let iarray11=0;

while (i<array.length){
    array11[i]=array[i];
    i++;
}console.log(array11);
while (iarray11<array.length){
    array11[i]=array[iarray11];
    iarray11++;
    i++;
}console.log(array11)

//con spreadoperator

console.log("con spreadoperator")
i=0;
let arrayDoppio=[...array,...array];
console.log(arrayDoppio)


//esercizio 12 - Stampare al contrario gli elementi dell’array

let inversearray=[];
console.log("esercizio 12")
for(i=array.length-1;i>=0;i--){
    
    inversearray.push(array[i]);
}console.log(inversearray)





//esercizio 13 - Creare un array3 con la somma degli elementi dell’array1 e dell’array2 
let array1 = [ 1, 2, 2, 3, 4] 
let array2 = [4, 2, 2, 4]   
let array3=[];
i=0;
i3=0;
console.log("esercizio 13")

while (i<array1.length || i<array2.length){     
    array3[i]=0;                                
    if(array1[i]){                              
        array3[i]=array3[i]+array1[i];
    } 
    if(array2[i]){
        array3[i]=array3[i]+array2[i];
    }
    i++
}console.log(array3)



//esercizio 14 - Creare un array3 con gli elementi (non la posizione) dispari di array1 e gli elementi pari di array2 → versione1 [1,3,4,2,2,4] 	versione2 [1,4,2,2,3,4]
array1 = [ 1, 2, 2, 3, 4] ;
array2 = [4, 2, 2, 4];
array4=[];
i=0;
i4=0;
console.log("esercizio 14")
console.log("versione 1")

while (i<array1.length){
     if (array1[i]%2==1) {
    array4[i4]=array1[i];
    i4++;
    }
i++;
} console.log(array4)
i=0;
while(i<array2.length){
if(array2[i]%2==0){
    array4[i4]=array2[i];
    i4++
} i++
}console.log(array4)

console.log("versione 2")

i=0;
array4=[];
i4=0;

while(i<array1.length || i<array2.length){
    if (array1[i]%2==1) {
        array4[i4]=array1[i];
        i4++;
        }
        if(array2[i]%2==0){
            array4[i4]=array2[i];
            i4++
        } i++
        }console.log(array4)

// esercizio 15 - Aggiornare l’array2 con elemento = il suo valore diviso il valore nella posizione lunghezza-posizione dell’array1
console.log("-- 15 --");
array1 = [1, 2, 2, 3, 4];
array2 = [4, 2, 2, 4];
i = 0;
while (i < array2.length) {
    if (array1.length >= array2.length) {
        array2[i] = array2[i] / array1[array2.length - i];
    }

    // 0 -> 4 / array1[4 - 0]
    // 1 -> 2 / array1[4 - 1]
    // 2 -> 2 / array1[4 - 2]
    // 3 -> 4 / array1[4 - 3]

    console.log(array2[i]);
    i++;
}console.log(array2)

// esercizio 16 - Verificare se gli array sono palindromi come ad esempio “anna”, “radar”, “emme”

console.log("-- 16 --");

array1 = [1, 2, 2, 3, 4];
array2 = [4, 2, 2, 4];

while(cont== array2.length/2 || cont == Math.floor(array2.length/2)+1){
    console.log("è palindromo");
}else {console.log("non è palindromo")}

while(cont== array1.length/2 || cont == Math.floor(array1.length/2)+1){
    console.log("è palindromo");
} else {console.log("non è palindromo")}