const array = [10, -1, -9, -3, -45, 2];
let somma = 0;

console.log(array)

console.log("FINE PRIMO ESERCIZIO")
for (let i = 0; i < array.length; i++) {
    somma += array[i];
}
console.log(somma);

console.log("FINE SECONDO ESERCIZIO")

let dispari = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i]%2!=0) {
        dispari = dispari + array[i];
    }
}    
console.log(dispari)

console.log("FINE TERZO QUARTO")

let pari = 0;
for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
        pari = pari + array[i];
    }
}    
console.log(pari);
console.log("FINE QUARTO ESERCIZIO");

let numero_ripetuto = 0
for (let i=0; i<array.length; i++) {
    if (array[i] === 2) {
        numero_ripetuto = array[i];

    }
}
console.log(numero_ripetuto);
console.log("FINE QUINTO ESERCIZIO");

let positivi = 0
for (let i=0; i < array.length; i++) {
    if (i > 0) {
        positivi = i-1;
    }
}
console.log(positivi)

console.log("FINE SESTO ESERCIZIO");

let i = 0;
maggiore = array[0];
while(i<array.length){
    
    if (array[i]>=maggiore) {
        max = array[i]
    } i=i+1;  
}
console.log(maggiore)
console.log("FINE SETTIMO ESERCIZIO");

i = 0
minimo = array[0];
while(i>array.length) {
    
    if (array[i]<= minimo) {
        minimo = array[i] 
    }
    i=i+1;
}
console.log(minimo)
console.log("FINE OTTAVO ESERCIZIO");

let arraynegativi = [];
i = 0;
while(i<array.length) {
    if (array[i]<0) {
        console.log(array[i])
        arraynegativi = array[i]
    }
    i=i+1;
}
console.log(arraynegativi)
console.log("FINE NONO ESERCIZIO")

i = 0;
let arraynuovo = [];

while (i<array.length) {
    
    arraynuovo[i] = array[i] *2
    i++;
}
console.log(array)
console.log (arraynuovo)
console.log("FINE DECIMO ESERCIZIO")

let arraynuovo2 = [2,7,3,2,10,34]
let arraycontenitore = []
i = 0;

while (i<array.length) {
    arraycontenitore[i] = arraynuovo2
    i=i+1;
}
console.log(arraycontenitore)

console.log("FINE UNDICESIMO ESERCIZIO")

i = array.length - 1;
while (i>=0) {
    console.log(array[i]);
    i = i - 1; 
}
console.log("FINE DODICESIMO ESERCIZIO")

let Array1 = [1, 2, 2, 3, 0];
let Array2 = [4, 2, 2, 4];
let Array3 = []
for (let i=0; i<Array1.length || i<Array2.length; i++) {
    if(Array1[i] && Array2[i]) {
    Array3[i] = Array1[i]+ Array2[i] }
        if (Array1[i] && !Array2[i]) {
        Array3[i] = Array1[i];
    }
        if (Array2[i] && !Array1[i]){
        Array3[i] = Array2[i];
    }
    }
console.log(Array3)


let Array1n = [ 1, 2, 2, 3, 4]
let Array2n = [4, 2, 2, 4]
let Array3n = []
ni = 0 
i=0;
for (let i=0; i<Array1n.length; i++) {
   
    if(Array1n[i] %2==1) {
    Array3n[ni] = Array1n[i] 
    ni++
    }

    for (let i=0; i<Array2n.length; i++) {
    if(Array2n[i]%2==0) {
        Array3n[ni] = Array2n[i]; }
        ni++
    }
}
console.log(Array3n)
console.log("--------------------")

Array3n = [];
ni = 0;
for (i=0; i<Array1n.length || i<Array2n.length; i++) { // CONTROLLO DELL'INDICE ARRAY1N & ARRAY2N
    if (Array1n[i] % 2 !=0) { // Si cercano i dispari
        Array3n[ni] = Array1n[i]; // Array3        
        ni++;
        console.log(ni)
    }
    if (Array2n[i] % 2 == 0) {
        Array3n[ni] = Array2n[i];
        ni++;
        console.log(Array3n)
    }
    console.log(Array3n)
}
console.log("FINE TREDICESIMO ESERCIZIO")

Array1n = [ 1, 2, 2, 3, 4]
Array2n = [4, 2, 2, 4]

for (let i=0; i<Array2n.length; i++) {
    
    if (Array1n[Array2n.length-i-1])
    Array2n[i] = Array2n[i] / Array1n[Array2n.length-i]

}
console.log(Array2n)