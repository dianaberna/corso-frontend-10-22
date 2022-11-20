let divCard = document.createElement ("div");

divCard.className = "card";
document.body.appendChild(divCard);


let divCardBody = document.createElement ("div");

divCardBody.className = "card-body";
divCard.appendChild(divCardBody);

let img = document.createElement ("img");

img.src = "./assets/caffe.jpeg";
img.alt = "fotografia tazza caffe";
divCardBody.appendChild(img);

let divTesti = document.createElement("div");

let testoTag = document.createElement("h1");
let testoTitolo = document.createTextNode("Vanilla Latte VER1");

testoTag.appendChild(testoTitolo);
divTesti.appendChild(testoTag);


let paragrafoTag = document.createElement("p");
let paragrafoTesto = document.createTextNode("21K");
paragrafoTag.appendChild(paragrafoTesto);
divTesti.appendChild(paragrafoTag);

divCardBody.appendChild(divTesti);

divCard.appendChild(divCardBody);

let cardFooter = document.createElement("div");
cardFooter.className = "card-footer";

let etichetteElement = document.createElement ("div");
etichetteElement.className ="etichette";

let arrayetichette = ["Hot", "Cold"];
for (i=0; i<arrayetichette.length; i++){
    let etichette = document.createElement("span");
    let etichetteText = document.createTextNode(arrayetichette[i]);

    etichette.appendChild(etichetteText);
    etichetteElement.appendChild(etichette);
}
cardFooter.appendChild(etichetteElement);

let pulsante = document.createElement("button");
let testoPulsante = document.createTextNode("Aggiungi");
pulsante.appendChild(testoPulsante);

cardFooter.appendChild(pulsante);
divCard.appendChild(cardFooter);

/* classe dentro un tag : è un ATTRIBUTO
<p class="blue" id="pippo"></p>
class e id : sono attributi del nostro TAG
<input type="text" placeholder="Aggiungi">
nuovo_elemento.placeholder=attributi.placeholder
*/