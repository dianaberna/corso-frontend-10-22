let linguaggi = ["HTML","CSS","Javascript","Python","PHP"]
// let mix = ["Tizio","Caio",32,22,[10,20]] 
// console.log(mix[1]) // Caio
// console.log(mix[4][1]) // 20
console.log(linguaggi.length + " " + "elementi contiene l'array linguaggi");

let mixNumeri = [10, 17,30]
mixNumeri.push(3)   // aggiunge un numero alla fine di un array
console.log( mixNumeri); 



let numeri = [40, 50, 60]
numeri.pop()   // toglie un numero alla fine di un array
console.log( numeri); 

// Esercizio
let array = [ 2, 6, 9, 10, -2, -3, 0, 2, 5, 1]
console.log(array);
// somma degli elementi all'interno dell'array con for
let sommArray = 0;
for(let j = 0; j < array.length; j++) {
    sommArray += array[j];
}
console.log("somma Array con for" + " " + sommArray);

// somma degli elementi all'interno dell'array while
let i = 0;
let somma = 0;
while (i < array.length) {
    somma = somma + array[i]; 
    i = i + 1;
}
console.log("somma Array con while" + " " + somma);



// somma degli elementi all'interno dell'array solo numeri dispari con while e for
let sommaDispari = 0;
for(let i =0; i< array.length; i++) {
    if(array[i]%2!=0){
        sommaDispari = sommaDispari + array[i]
    }
}
console.log("somma dispari con  for" + " " + sommaDispari);


while ( i < array.length) {
    sommaDispari = sommaDispari + array[i];
    i = i + 1;
}
console.log("somma dispari con while" + " " + sommaDispari);


// somma degli elementi all'interno dell'array solo numeri pari con while e for
i = 0;
sommaPari = 0;
while (i < array.length) {
    sommaPari = sommaPari + array[i];
    i = i + 2; 
}
console.log("sommapari con while = " + sommaPari);

for(let i = 0; i < array.length; i++) {
    if(array[i]%2==2) {
        sommaPari = sommaPari + array[i]
    }
}
console.log("sommapari con for = " +sommaPari);


