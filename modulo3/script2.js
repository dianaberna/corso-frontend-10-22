function moltiplicazione(a, b) {
   return a * b;
}
console.log("moltiplicazione 3x6 = " + moltiplicazione(3, 6));

function etaGiorni(e) {
   let g = 365;
   e = e * g;
   return e;
}
console.log("65 anni in giorni sono = " + etaGiorni(65));

function ugualeZero(n, x) {
   if (n <= 0) {
      x = true;
      return x;
   }
}
console.log("funzione uguale a zero " + ugualeZero(-1, false));

function animali(pollo, mucca, maiale) {
   return pollo + mucca + maiale;
}
console.log("il numero totale di zampe è " + animali(2, 4, 4));

function stepFiammiferi(casa) {
   if (casa == 0) {
      return 0;
   }
   let fiammiferi = 6;
   let totale = casa * fiammiferi - casa - 1;
   return totale;
}
console.log("i fiammiferi sono " + stepFiammiferi(4));

function somma(n) {
   let i = 1;
   let s = 0;
   while (i <= n) {
      s = s + i;
      i++;
   }
   return s;
}
console.log("la somma è " + somma(6));

function sconto(p, s) {
   let x = (p / 100) * s;
   let t = p - x;
   return t.toFixed();
}
console.log("lo sconto è di " + sconto(100, 75));

function alfabeto(n) {
   if (n >= 1 && n <= 26) {
      let l = String.fromCharCode(n + 96);
      return l;
   } else {
      return NaN;
   }
}
console.log("la lettera dell'alfabeto è " + alfabeto(16));

function calcolatrice(a, x, b) {
   let operazione;
   switch (x) {
      case "*":
         operazione = a * b;
         break;
      case "+":
         operazione = a + b;
         break;
      case "-":
         operazione = a - b;
         break;
      case "/":
         operazione = a / b;
         break;
      default:
         operazione = "operazione non possibile";
   }
   return operazione;
}
console.log("il risultato della calcolatrice è " + calcolatrice(5, "-", 3));

function fareSomma(arr) {
   let x = 0;
   let i = 0;
   while (i < arr.length) {
      x = x + arr[i];
      i++;
   }
   return x;
}
console.log("la somma degli elementi dell'array è " + fareSomma([1, 2, 4]));

function veroFalso(arr) {
   let x = 0;
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] == true) {
         x++;
      }
   }
   return x;
}
console.log("i true sono " + veroFalso([true, false, true, false, true]));

function pezzoCarta(pieghe) {
   let spessore = 0.001;
   let spessoreFinale = spessore * pieghe * 2;
   let risultato = [pieghe, "lo spessore finale è", spessoreFinale];

   return risultato;
}
console.log("il numero di pieghe è " + pezzoCarta(4));

function validaMail(mail) {
   const str = mail;
   return str.includes("@") &&
      str.includes(".") &&
      str.indexOf("@") > 0 === true &&
      str.indexOf("@") - str.lastIndexOf(".") < -1 &&
      str.lastIndexOf('.')< str.length - 1
      ? true
      : false;
}
console.log("la validazione della mail è " + validaMail("sedia@gmail.com"));

function morraCinese(p1, p2) {
   let vincitore;

   if (
      (p1 == "sasso" && p2 == "forbici") ||
      (p1 == "forbici" && p2 == "carta") ||
      (p1 == "carta" && p2 == "sasso")
   ) {
      vincitore = "p1";
   } else {
      vincitore = "p2";
   }

   return vincitore;
}
console.log("il vincitore è " + morraCinese("forbici", "carta"));

function giorniData(d1, d2) {
   let mil = (d2 - d1) / 1000 / 60 / 60 / 24;
   return console.log(mil);
}
calcD2(new Date('June 14 ,2019'), new Date('June 20,2019 '));

function checkUp(arr){
   arrN - [];
   for (var i = 0; i<arr.length; i++) {
         if (typeof array[i] === "str" || typeof arr[i] === "num") {
            if (!arrN.includes(arr[i])) {
               arrN.push(arr[i]);
            }

         }else return "inserisci valori";
   }

   return arrN;
}
