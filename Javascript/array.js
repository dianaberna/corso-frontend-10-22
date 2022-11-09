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
Pari = 0;
while (i < array.length) {
    Pari = Pari + array[i];
    i = i + 2; 
}
console.log("somma pari con while = " + Pari);

for(let i = 0; i < array.length; i++) {
    if(array[i]%2==2) {
        Pari = Pari + array[i]
    }
}
console.log("somma pari con for = " +Pari);


//somma quante volte il valore 2 si trova all'interno dell'array con for e while
let j = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i]==2) {                                               
        j++
    }
}

console.log("somma di quante volte il valore 2 si trova nell' array con for" + " " + j);


while( i < array.length){
    j = j +array[i]
    j++
}
console.log("somma di quante volte il valore 2 si trova nell' array con while" + " " + j);



//verificaquanti numeri positivi ci sono nell'array
let k = 0;
for (let i = 0; i < array.length; i++){
    if (array[i]>=0) {                                            
        k++
    }
    
}

console.log("numeri positivi nell'array con for" + " " + k);
while(k >= array.length){
    k = k +array[i]
    k++
}
console.log("numeri positivi nwll' array con while" + " " + k);
// valore massimo in un array
let massimo = array[0];
for (let i = 0; i < array.length; i++){
    if (massimo < array[i]) {                                            
        massimo = array[i]
    }
    
}
console.log("valore massimo in un array con for"+ " " + massimo);

while (i < array.length) {
    massimo = massimo + array[i]
    i++
}
console.log("valore massimo in un array con while"+ " " + massimo);

// valore minimo in un array
let minimo = array[0]
for( let i = 0; i < array.length; i++){
    if(minimo > array[i]){
        minimo = array[i]
    }
}
console.log("valore minimo in un array con for"+ " " + minimo);
while( i < array.length){
    minimo = minimo + array[i]
    i++
}
console.log("valore minimo in un array con while"+ " " + minimo);



// let animali = ["gatto" , "cane", "coniglio", "topo", "ape"  ]
// let indice = 0;
// let newarray = [];
// let contatotre = 0;
// while(indice < animali.length){
//     if(animali[indice].length == 4){
//         newarray[contatotre] = animali[indice]
//         contatotre = contatotre +1
         
//     }
//     indice = indice + 1;
// }
// console.log(newarray);


// inserire in un nuovo array solo gli elementi negativi  → [-2, -3]
let newArray = [];
i=0;
while( i < array.length){
    if(array[i] < 0){
        newArray.push(array[i])
    }
    i++
}
console.log("nuovo array solo gli elementi negativi con while" + " " + newArray);