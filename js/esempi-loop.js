<<<<<<< HEAD
=======

>>>>>>> main
// stampo 4 numeri pari 
console.log("inizio stampo 4 numeri pari ")
i = 0;
while( i < 20 ){
    i = i + 2
    console.log(i) 
}
console.log("inizio stampo 4 numeri pari ")

// stampo solo i primi 4 numeri pari -> aggiungo un if

i = 2;
while( i < 20 ){
    if(i <= 8){
        console.log(i) 
    }
    i = i + 2
}

console.log("----")
// quanti numeri pari ci sono da 1 a 100 
i = 1;
let cont = 0;
while( i <= 100 ){

    if(i % 2 == 0){ 
        // % operazione modulo --> i/2 mi restituisce il resto della divisione 
        // se il resto è 0 il numero è pari, se il resto è 1 il numero dispari
        cont = cont + 1
        //console.log("stampo i=" + i + " stampo cont="+cont)
    }
    
    //console.log(i) 
    i = i + 1;
}
console.log(cont)
console.log("----")

i = 0;
while (i <= 6){   
    i = i + 2;
    console.log("stampo i ="+i)
}
console.log("----")

console.log("----")

<<<<<<< HEAD


=======
>>>>>>> main
// quanti numeri pari ci sono da 1 a 100 TRANNE da 40 a 60
i = 1;
cont = 0;
while( i <= 100){
    // && = and logico
    // || = or logico 
    // ! = not logico / negazione 
    if((i % 2 == 0) && (i < 40 || i > 60)){ 
        /*
            A | B | A AND B
            0 | 0 | 0
            0 | 1 | 0
            1 | 0 | 0
            1 | 1 | 1
        */
        /*
            A | B | A OR B
            0 | 0 | 0
            0 | 1 | 1
            1 | 0 | 1
            1 | 1 | 1
        */
        // (controllare se i è pari) AND (se i è minore di 40 OR se i è maggiore di 60)
        // ho 20 -> 20 è pari E ( 20 minore di 40 = vero OPPURE 20 maggiore di 60 = falso)
        // vero E ( vero OPPPURE falso)
        // vero E vero
        // vero
        // ho 51 -> 51 è falso E (ignoro tutto)
        // falso E ( ignoro )
        // falso
        // (controllare se i è pari) AND (se i è minore di 40 OR se i è maggiore di 60)
        // ho 82 -> 82 è pari E ( 82 minore di 40 = falso OPPURE 82 maggiore di 60 = vero)
        // vero E ( falso OPPPURE vero )
        // vero E vero
        // vero
        cont = cont + 1
        //console.log("stampo i=" + i + " stampo cont="+cont)
    }
    
    //console.log(i) 
    i = i + 1; // equivalente a scrivere i++ 
    // i = i++ attenzione!
}
console.log("numeri dispari da 0 a 100 = "+cont)
console.log("----")
<<<<<<< HEAD
console.log("fine esempi-loop.js");
=======
console.log("fine esempi-loop.js");
>>>>>>> main
