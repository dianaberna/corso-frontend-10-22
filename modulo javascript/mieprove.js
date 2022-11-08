let array = [2,6,9,10,-2,-3,0,2,5,1]

console.log(array);
let i = 0;

while (i < array.length) {
    
    console.log(array[i])
    i =i+1;
} 

for (let i=0;i<array.length;i=i+1)
  {console.log(array[i])}

  //esercizio 2

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
console.log("-")
while (i<array.length){
      if(array[i]>numeromassimo){
        numeromassimo= array[i];

      }

    i=i+1
}console.log(numeromassimo)


//esercizio 8 - Stampare il numero minimo → -3

i=0;
let numerominimo=array[0];
