// esercizio 1
const array = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1];
i = 0;
console.log("Gli elementi dell'array sono: ");
while (i < array.length) {
    console.log(array[i]);
    i = i + 1;
}

// esercizio 2
i = 0;
somma = 0;
while (i < array.length) {
    somma = somma + array[i];
    i = i + 1;
}
console.log("la somma è: " + somma);

// esericizio 3
i = 0;
sommad = 0;
while (i < array.length) {
    if (i % 2 != 0) {
        sommad = sommad + array[i];
    }
    i = i + 1;
}
console.log("la somma degli elementi dispari è: " + sommad);

console.log();

// esercizio 4
i = 0;
sommap = 0;
while (i < array.length) {
    if (i % 2 == 0) {
        sommap = sommap + array[i];
    }
    i = i + 1;
}

console.log("la somma degli elementi pari è: " + sommap);

// esercizio 5
i = 0;
num2 = 0;

while (i < array.length) {
    if (array[i] == 2) {
        num2++;
    }
    i = i + 1;
}
console.log("il numero 2 è presente: " + num2 + " volte");

// esercizio 6
nump = 0;
i = 0;

while (i < array.length) {
    if (array[i] >= 0) {
        nump = nump + 1;
    }

    i = i + 1;
}

console.log("i numeri positivi(compreso lo zero) sono: " + nump);

// esercizio 7
max = 0;
i = 0;
while (i < array.length) {
    if (array[i] > max) {
        max = array[i];
    }

    i = i + 1;
}

console.log("il numero massimo è: " + max);

// esercizio 8
min = 0;
i = 0;
while (i < array.length) {
    if (array[i] < min) {
        min = array[i];
    }

    i = i + 1;
}

console.log("il numero minimo è: " + min);

// esercizio 9

i = 0;
numj = 0;

while (i < array.length) {
    if (array[i] < 0) {
        numj = numj + 1;
    }
    i = i + 1;
}

let arrayneg = new Array(numj);

i = 0;
j = 0;

while (i < array.length) {
    if (array[i] < 0) {
        arrayneg[j] = array[i];
        j = j + 1;
    }

    i = i + 1;
}

console.log("l'array di soli elementi negativi è: ");
i = 0;

while (i < arrayneg.length) {
    console.log(arrayneg[i]);
    i = i + 1;
}

// esericizio 10

i = 0;
long = array.length;

let arraydop = new Array(long);

while (i < array.length) {
    arraydop[i] = array[i] + array[i];
    i = i + 1;
}

console.log("l'array costituito da tutti gli elementi raddoppiati è: ");

i = 0;

while (i < arraydop.length) {
    console.log(arraydop[i]);
    i = i + 1;
}

// esercizi 11

i = 0;
j = 0;
k = 0;

long2 = array.length + array.length;

let duevolte = new Array(long2);

while( i < array.length)
{
    duevolte[i] = array[i];
    i++;
}

j = i + 1;
i = 0;

while( j < duevolte.length)
{

    duevolte[j] = array[i];
    j = j + 1;
    i = i + 1;
}

console.log("L'array con due volte gli elementi di array è: ")

while( k < duevolte.length)
{
    console.log(duevolte[k])
    k = k + 1;
}
