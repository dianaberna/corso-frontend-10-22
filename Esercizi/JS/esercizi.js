// console.log ("ciao")
// var primavariabile = 1
// var secondavariabile = 2
// console.log (primavariabile)
// console.log (secondavariabile)
// var primastringa = ciao

// let terzavariabile = 3
// const quartavariabile = 4 //deve rimanere sempre la stessa

// {var quintavariabile = 5} //agisce solo dentro lo scope



console.log("Esercizio n1 --- Stampare tutti gli elementi dell’array")

let array = [ 2, 6, 9, 10, -2, -3, 0, 2, 5, 1] 
         //   0  1  2   3   4   5  6  7  8  9


let i=0

while (i < array.length) {
    console.log(array[i])
    i=i+1;    
}  

console.log("Esercizio n2 --- Stampare la somma di tutti gli elementi dell’ array")

i=0 
let somma=0
while (i < array.length) { 
           somma=somma+array[i]
           i=i+1;
} console.log(somma)

console.log("Esercizio n3 --- Stampare la somma dei soli elementi dispari")

i=0
let sommadispari=0
 while (i < array.length) {
        if (array[i]%2!=0) {
            sommadispari=sommadispari+array[i]
          }
          i=i+1;

 }
 console.log("la somma dei numeri dispari è")
 console.log(sommadispari)

 console.log("Esercizio n4 --- Stampare la somma dei soli elementi in posizione pari")

i=0
let somma_posi_pari=0
while (i < array.length) {
            if (i % 2 == 0) {
                somma_posi_pari=somma_posi_pari+array[i]
            }
              i=i+1;
}
console.log(somma_posi_pari)

console.log("Esercizio n5 --- Stampare quante volte compare il numero 2")

i=0
let contatoredue=0
while (i < array.length) {
      if (array[i]==2) {
       contatoredue=contatoredue+1
      }     
    i=i+1;
}console.log (contatoredue)

console.log("Esercizio n6 --- Stampare quanti numeri positivi (compreso lo zero) ci sono nell’array")

i=0
let conta_positivi=0
while (i < array.length) {
    if (array[i]>=0) {
        conta_positivi=conta_positivi+1
       }    
    i=i+1;
} console.log(conta_positivi)

// --- Esercizio n7 ---

// let array = [ 2, 6, 9, 10, -2, -3, 0, 2, 5, 1] 
            //   0  1  2   3   4   5  6  7  8  9

i=0
let numeromax=0
while (i < array.length) {
    if (array[i] >= numeromax) {numeromax = array[i]}
    i=i+1;
} console.log(numeromax)

// --- Esercizio n8 ---

i=0
let numeromin=0
while (i < array.length) {
    if (array[i] <= numeromin) {numeromin = array[i]}
    i=i+1;
} console.log(numeromin)

console.log ("Esercizio n9 Inserire in un nuovo array solo gli elementi negativi")

i=0
let nuovoarray=[]
while (i < array.length) {
    if (array[i]< 0) {nuovoarray[i]=array[i]}
    i=i+1;
} 
console.log(nuovoarray.slice(4,10))


// --- Esercizio n10 Creare un nuovo array dove ogni elemento del nuovo è uguale al doppio di quello dato 🤯
// let array = [ 2, 6, 9, 10, -2, -3, 0, 2, 5, 1] 
            //   0  1  2   3   4   5  6  7  8  9
i=0
let arraynuovo = []
while (i < array.length) {
        arraynuovo[i]=array[i]*2
    i++
} console.log(arraynuovo)

console.log("Esercizio n11 Creare un nuovo array in cui inserisco due volte (una di seguito l’altra) l’array dato 🤯 🤯")

arraynuovo = array.concat(array)
console.log(arraynuovo)

console.log("12) Stampare al contrario gli elementi dell’array")

let icontrario=array.length -1
i = 0
let arraycontrario =[]
while (icontrario >= 0) {
    arraycontrario[i]=array[icontrario]
    icontrario--
    i++
} console.log(arraycontrario)

