


var array = [ 2, 6, 9, 10, -2, -3, 0, 2, 5, 1];


console.log (array);

console.log ("somma elementi")


var somma1 = array[0] +  array[1] +  array[2] +  array[3] +  array[4] +  array[5] +  array[6] +  array[7] 
+  array[8] +  array[9] ;

console.log (somma1);



let i = 0;
let somma = 0;
while (i < array.length) {
    console.log("i = " + i);
    somma = somma + array[i]; 
    console.log("somma = " + somma);
    i  = i + 1;
}
console.log("somma finale = " + somma);


console.log ("esercizio somma dispari")


// let dispari = 0;
// for (i < array.length, i= i+1)
// if (array[i] % 2 === 1) { dispari= dispari+ array[i]; }

// console.log (dispari)

i = 0;
let sommadispari= 0;
while (i < array.length) {
    
console.log ("i=" +i)

   if (array[i] % 2 != 0){
    sommadispari = sommadispari + array[i]
    console.log (sommadispari) 
   }
   i= i +1;
}

console.log(sommadispari)

console.log ("esercizio somma pari")

i=0;
sommaposizionepari= 0;

while (i < array.length) {
    console.log ("i=" + i);
    sommaposizionepari= sommaposizionepari + array[i];
    console.log (sommaposizionepari);



    i=i+2;
}

console.log (sommaposizionepari);

console.log ("stampre quanto volte numero 2");

i=0;
numerodue= 0;

while (i < array.length) {
    console.log ("i=" +i);
    if(array[i] === 2) {
        numerodue = numerodue + 1;
        console.log (numerodue)
    }

    i= i+1;
}

console.log (numerodue);

console.log ("stampre quanti numeri positivi");

i=0;
sommapositivi= 0;

while (i < array.length) {
    console.log ("i=" +1);

    if (array[i] >= 0) {
        sommapositivi = sommapositivi +1;
        console.log (sommapositivi);

    }


    i= i + 1;
}

console.log (sommapositivi)


console.log ("stampare il numero massimo");

// var array = [ -2, -6, -9, -10, -2, -3, -2, -5, -1];




i=0;
numeromassimo= array[0];

while (i < array.length){
     
    if (array[i]>numeromassimo) {
        console.log (array[i]);
        numeromassimo=array[i];
    }


    i++
}

console.log (numeromassimo)


//i=0 , 0<10? si , -2 >-2? no

//i=1 , 1<10? si, -6 > -2? no, 

//i=2 , 2<10? si, -9>-2? no

//i=3, 3 <10? si, -10>-2? sno

//i=4, 4<10? si, -2>10? no

// i=5, 5<10? si, -3>10? no 



// i=7, 7<10? si, 2>10? no

// i=8, 8<10? si, 5>10? no

// i=9, 9<10? si, -1>-2? si numeromassimo = -1


 

// var array = [ 2, 6, 9, 10, -2, -3, 0, 2, 5, 1];



console.log ("stampare il numero minimo - es 8")


i=0;
numerominimo= array[0];

while (i < array.length){
     
    if (array[i]<numerominimo) {
        console.log (array[i]);
        numerominimo=array[i];
    }


    i++
}

console.log (numerominimo)


console.log ("inserire in un nuovo array solo gli elementi negativi - es9")

let array2= []
// let nuovoindice = 0                 versione alternativa
i=0

while (i < array.length) {

    if (array[i]<0) {
        array2.push(array[i])
        // array2 [nuovoindice] = array[i]
        //nuovoindice ++
    }


    i++
}

console.log (array2)


console.log ("Creare un nuovo array dove ogni elemento del nuovo è uguale al doppio di quello dato - es 10")


i=0

let arraydoppio = []

while ( i < array.length) {

    arraydoppio[i] = array[i]*2

    i++
}


console.log ("Creare un nuovo array in cui inserisco due volte (una di seguito l’altra) l’array dato - es 11")


// versione meno veloce

i=0
i2=0

arrayripetuto = []

while (i < array.length){
    
    arrayripetuto[i2]= array[i] 
    
    i2++
    i++
}

while (i < array.length){
    
    arrayripetuto[i2]= array[i] 
    
    i2++
    i++
}


//versione più veloce

i=0
arrayripetzione []

while (i<array.length) {
    
    arrayripetzione[i]= array[i]

    arrayripetzione[array.length + i]= array[i]

    i++
}

console.log [arrayripetzione]

console.log (" - es 12")