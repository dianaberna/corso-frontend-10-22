// Stampare tutti gli elementi dell’array 
array =[ 2, 6, 9, 10, -2, -3, 0, 2, 5, 1];
console.log(array);
console.log(array.length);
let i = 0
while (i<array.length) {
  console.log (array[i]);
  i= i+1;  
}

// Stampare la somma di tutti gli elementi dell’ array 
let somma = 0
i = 0
while (i<array.length ) {
    somma = somma + array[i];
    i= i+1;
}

// Stampare la somma dei soli elementi dispari 
console.log (somma);

let sommadispari = 0
i= 0
while (i<array.length ) {
    if (array[i]%2!=0) {
        sommadispari = sommadispari + array [i]
    }
    i= i+1;
}
console.log (sommadispari);

// Stampare la somma dei soli elementi in posizione pari
