// esempio calcolatrice
let operatore = "+";
let primonumero = 1;
let secondonumero = 4;
let appoggio = 0;
switch (operatore) {
    case "+":
        appoggio = primonumero + secondonumero;
        break;
    case "-":
        appoggio = primonumero - secondonumero;
        break;
    case "*":
        appoggio = primonumero * secondonumero;
        break;
    case "/":
        if (secondonumero != 0) {
            appoggio = primonumero / secondonumero;
        } else {
            console.log("non posso dividere per zero");
        }
        break;
}
console.log(appoggio);