let divCard = document.createElement("div");

divCard.className = "card";
document.body.appendChild(divCard);

let divCardBody = document.createElement("div");

divCardBody.className = "card-body";
divCard.appendChild(divCardBody);

let nuovaImmagine = document.createElement("img");

nuovaImmagine.src = "caffe.jpg";
nuovaImmagine.alt = "caffe";
divCardBody.appendChild(nuovaImmagine);

let divTitoli = document.createElement("div");

let titolo = document.createElement("h1");

let testoTitolo = document.createTextNode("Vanilla Latte");

titolo.appendChild(testoTitolo);
divTitoli.appendChild(titolo);
divCardBody.appendChild(divTitoli);

let paragrafo = document.createElement("p");
let testoParagrafo = document.createTextNode("21K");

paragrafo.appendChild(testoParagrafo);
divTitoli.appendChild(paragrafo);

let cardFooter = document.createElement("div");
cardFooter.className = "card-footer";

let divEtichette = document.createElement("div");
divEtichette.className = "etichette";

/*
let divSpan1 = document.createElement("span");
let testoSpan1 = document.createTextNode("Hot");
divSpan1.appendChild(testoSpan1);
divEtichette.appendChild(divSpan1);

let divSpan2 = document.createElement("span");
let testoSpan2 = document.createTextNode("Cold");
divSpan2.appendChild(testoSpan2);
divEtichette.appendChild(divSpan2);
*/

let arrayEtichette = ["Hot", "Cold", "provenzano"];

for( let i = 0; i < arrayEtichette.length; i++  )
{

    let divSpan = document.createElement("span");
    let testoSpan = document.createTextNode(arrayEtichette[i]);
    divSpan.appendChild(testoSpan);
    divEtichette.appendChild(divSpan);

}

cardFooter.appendChild(divEtichette);
divCardBody.appendChild(cardFooter);

let tasto = document.createElement("button");
let scrittaTasto = document.createTextNode("Compra");

tasto.appendChild(scrittaTasto);
cardFooter.appendChild(tasto);












