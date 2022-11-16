let card = document.createElement("div");
card.className="card";
document.body.appendChild(card);

let cardBody = document.createElement("div");
cardBody.className="card-body";
card.appendChild(cardBody);

let img = document.createElement("img");
img.src = "caffe.jpg"
img.alt = "caffe"
cardBody.appendChild(img);

let divTitoli = document.createElement("div");
cardBody.appendChild(divTitoli);

let titolo = document.createElement("h1");
let titoloTesto = document.createTextNode("Vanilla Latte")
titolo.appendChild(titoloTesto);
divTitoli.appendChild(titolo);


let paragrafo = document.createElement("p");
let paragrafoTesto = document.createTextNode("21K")
paragrafo.appendChild(paragrafoTesto);
divTitoli.appendChild(paragrafo);


let cardFooter = document.createElement("div");
cardFooter.className="card-footer";
card.appendChild(cardFooter);

let etichette = document.createElement("div");
etichette.className="etichette";
cardFooter.appendChild(etichette);

let span = document.createElement("span");
let spanTesto = document.createTextNode("Hot")
span.appendChild(spanTesto);
etichette.appendChild(span);

let span1 = document.createElement("span");
let span1Testo = document.createTextNode("Cold")
span1.appendChild(span1Testo);
etichette.appendChild(span1);




let button = document.createElement("button");
let buttonTesto = document.createTextNode("Aggiungi")
button.appendChild(buttonTesto);
cardFooter.appendChild(button);