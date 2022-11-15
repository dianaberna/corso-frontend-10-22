//somma dei primi 4 numeri 
console.log ("--inizio stampa la somma dei primi 4 numeri");
let somma = 0;
for(let i=0; i < 4; i++){
    somma = somma + i;
}
console.log (somma);
console.log("--fine stampa la somma dei primi 4 numeri");


//stampa dei primi 4 numeri pari
console.log("--inizio stampa i primi 4 numeri pari");
i = 0;
while (i < 8){
    i = i + 2;
    console.log(i);
}
console.log("--fine stampa i primi 4 numeri pari");



//quanti numeri pari ci sono da 1 a un certo numero
console.log ("--inizio quanti numeri pari ci sono da 1 a 100");
i = 1;
cont = 0;
while (i < 100){

    if(i % 2 == 0){
        cont = cont + 1;
    }

    i = i + 1; //equivale a i++
}
console.log(cont);

console.log ("--fine quanti numeri pari ci sono da 1 a 100");
