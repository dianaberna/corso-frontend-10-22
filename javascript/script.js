array = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1];
console.log(array);
console.log(array.length);
console.log("1-stampa elementi");
let i = 0;
while (i < array.length) {
    console.log(array[i]);
    i++;
}

console.log("2-sommare elementi");

i = 0;
let somma = 0;
while (i < array.length) {
    somma += array[i];

    i++;
}
console.log(somma);

console.log("3-sommare elementi pari");

i = 0;
somma = 0;
while (i < array.length) {
    if (array[i] % 2 == 0) {
        somma += array[i];
    }
    i++;
}
console.log(somma);

console.log("4-sommare elementi dispari");

i = 0;
somma = 0;
while (i < array.length) {
    if (array[i] % 2 != 0) {
        somma += array[i];
    }
    i++;
}
console.log(somma);

console.log("5-stampare quante volte compare 2");

i = 0;
let conta = 0;
while (i < array.length) {
    if (array[i] == 2) {
        conta++;
    }
    i++;
}
console.log(conta);

console.log("6-quanti elementi positivi");

i = 0;
conta = 0;
while (i < array.length) {
    if (array[i] >= 0) {
        conta++;
    }
    i++;
}
console.log(conta);

console.log("7-stampare num max");

i = 0;
let max = array[0];
while (i < array.length) {
    if (array[i] > max) {
        max = array[i];
    }
    i++;
}
console.log(max);

console.log("8-stampare num min");

i = 0;
let min = array[0];
while (i < array.length - 1) {
    if (array[i] < min) {
        min = array[i];
    }
    i++;
}
console.log(min);

console.log("9-crerare array con numeri negativi");

arrayNeg = [];
i = 0;
while (i < array.length) {
    if (array[i] < 0) {
        arrayNeg[i]= array[i];
    }
    i++;
}
console.log(arrayNeg);

console.log("11-crerare array con numeri doppi");

arrayDouble = [];

i = 0;
let doppio=0
while (i < array.length) {
    doppio=2*array[i]
    arrayDouble[i]=doppio;
    i++;
}
console.log(arrayDouble);

console.log("12-Creare (e stampare) un nuovo array in cui inserisco due volte (una di seguito l’altra)");

i = 0;
arrayx2=[];
while (i < array.length) {

    arrayx2[i]=array[i]
    arrayx2[i+10]=array[i]
    i++;
}

console.log(arrayx2);
console.log("13-Stampare al contrario gli elementi dell’array");

i=0
arrayContr=[];
while (i < array.length) {

    arrayContr[array.length-i-1]=array[i]
    i++;
}
console.log(arrayContr)