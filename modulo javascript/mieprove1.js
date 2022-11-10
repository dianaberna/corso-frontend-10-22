let array = [2,6,9,10,-2,-3,0,2,5,1]

//esercizio 1 - Stampare tutti gli elementi dell’array
console.log("esercizio 1");
let i=0;

while (i<array.length){
    console.log(array[i]);
    i++;
}

//esercizio 2 - Stampare la somma di tutti gli elementi dell’ array
console.log("esercizio 2");

i=0;
let somma=0;

while(i<array.length){
    somma=somma+array[i];
    i++
}console.log(somma)

//esercizio 3 - stampare la somma dei soli elementi dispari
console.log("esercizio 3");

i=0;
let sommadispari=0;

while(i<array.length){
    if(array[i]%2!=0){
        sommadispari=sommadispari+array[i];
    }i++
}console.log(sommadispari)

//esercizio 4 - Stampare la somma dei soli elementi in posizione pari
console.log("esercizio 4");

i=0;
let sommpari=0;

while(i<array.length){
    if(i%2==0){
        sommpari=sommpari+array[i]
    }i++
}console.log(sommpari)