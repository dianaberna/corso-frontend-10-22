//creazione <div class="card"></div>
let divCardElement = document.createElement ("div");
divCardElement.className = "card";
document.body.appendChild(divCardElement);


//creazione <div class="cardBody"></div>
let divCardBody = document.createElement ("div");
divCardBody.className = "cardBody";
divCardElement.appendChild (divCardBody);

//aggiunta elementi di .cardBody
let imgCard = document.createElement ("img");
imgCard.src = "assets/cappuccino.png";
imgCard.alt = "cappuccino";
divCardBody.appendChild(imgCard);


//div con h1 e p
let cardTitle = document.createElement ("div");
cardTitle.className = "cardTitle";
divCardBody.appendChild(cardTitle);

let testoH1 = document.createTextNode ("Vanilla Latte");
let contenitoreH1 = document.createElement ("h1");
cardTitle.appendChild(contenitoreH1);
contenitoreH1.appendChild(testoH1);

let testoP = document.createTextNode ("21K");
let contenitoreP = document.createElement ("p");
cardTitle.appendChild(contenitoreP);
contenitoreP.appendChild(testoP);

//creazione divCardFooter
let divCardFooter = document.createElement ("div");
divCardFooter.className = "divFooter";
divCardElement.appendChild(divCardFooter);

//creazione divCardSpan
let divCardSpan = document.createElement ("div");
divCardSpan.className = "divCardSpan";
divCardFooter.appendChild (divCardSpan);

//aggiunta contenuti a divCardFooter
arraySpan = ["Hot", "Cold"];
for (i=0; i < arraySpan.length; i++){
    let textSpan = document.createTextNode (arraySpan[i]);
    let cardSpan = document.createElement ("span");
    cardSpan.className = "cardSpan";
    cardSpan.appendChild (textSpan);
    divCardSpan.appendChild(cardSpan);
}

let buttonCardText = document.createTextNode ("Aggiungi");
let buttonCard = document.createElement ("button");
divCardFooter.appendChild (buttonCard);
buttonCard.appendChild (buttonCardText);