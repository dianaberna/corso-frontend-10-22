console.log("-- stampa isNan --");

// isNaN -> restituisce true se il valore passata all'interno delle parentesi "non è un Number" altrimenti falso
if (isNaN(provastringanuova)) {
  console.log("si isNaN"); // se isNaN cioè isNotANumber è true vuol dire che è stringa
} else {
  console.log("no isNaN");
}

console.log(provastringanuova + 3);

// 1 di tipo numer è uguale ad 1 di tipo stringa ? si
if (provanumeronuova == "1") {
  // controllami il valore/dato
  console.log("si");
} else {
  console.log("no");
}

// 1 di tipo numer è uguale ad 1 di tipo stringa ? no
if (provanumeronuova === "1") {
  // controllami il valore/dato e il tipo
  console.log("si");
} else {
  console.log("no");
}

x = true;
if (isNaN(x) == false) {
  console.log("x è un numero di tipo " + typeof x + ", e vale " + x);
} else {
  console.log("x non è un numero, ma un valore di tipo " + typeof x);
}

// by Luca
let x = 0;
if (isNaN(x) == false) {
  console.log("x è un numero di tipo " + typeof x + ", e vale " + x);
} else {
  console.log("x non è un numero, ma un valore di tipo " + typeof x);
}
x = null;
if (isNaN(x) == false) {
  console.log("x è un numero di tipo " + typeof x + ", e vale " + x);
} else {
  console.log("x non è un numero, ma un valore di tipo " + typeof x);
}
x = "NaN";
if (isNaN(x) == false) {
  console.log("x è un numero di tipo " + typeof x + ", e vale " + x);
} else {
  console.log("x non è un numero, ma un valore di tipo " + typeof x);
}
x = 10;
if (isNaN(x) == false) {
  console.log("x è un numero di tipo " + typeof x + ", e vale " + x);
} else {
  console.log("x non è un numero, ma un valore di tipo " + typeof x);
}
x = "10";
if (isNaN(x) == false) {
  console.log("x è un numero di tipo " + typeof x + ", e vale " + x);
} else {
  console.log("x non è un numero, ma un valore di tipo " + typeof x);
}