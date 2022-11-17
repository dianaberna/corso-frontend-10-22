let pageHeader = document.createElement("header");
let pageMain = document.createElement("main");
document.body.appendChild(pageHeader);
document.body.appendChild(pageMain);

let profilePicture = document.createElement("div");
profilePicture.className = "profile-picture";
pageHeader.appendChild(profilePicture);

let follower = document.createElement("follower");
follower.className = "follower";
pageHeader.appendChild(follower);

//provo pagina app senza funzioni

let f1 = document.createElement("div");
let f2 = document.createElement("div");
let f3 = document.createElement("div");

let title2f1 = document.createElement("h2");
let title3f1 = document.createElement("h3");
let title2f2 = document.createElement("h2");
let title3f2 = document.createElement("h3");
let title2f3 = document.createElement("h2");
let title3f3 = document.createElement("h3");

let title2f1Text = document.createTextNode("FOLLOWER");
let title3f1Text = document.createTextNode("2.3K");
let title2f2Text = document.createTextNode("FOLLOWING");
let title3f2Text = document.createTextNode("898");
let title2f3Text = document.createTextNode("FRIENDS");
let title3f3Text = document.createTextNode("200");

title2f1.appendChild(title2f1Text);
title3f1.appendChild(title3f1Text);
title2f2.appendChild(title2f2Text);
title3f2.appendChild(title3f2Text);
title2f3.appendChild(title2f3Text);
title3f3.appendChild(title3f3Text);

f1.appendChild(title2f1);
f1.appendChild(title3f1);
f2.appendChild(title2f2);
f2.appendChild(title3f2);
f3.appendChild(title2f3);
f3.appendChild(title3f3);

follower.appendChild(f1);
follower.appendChild(f2);
follower.appendChild(f3);

// provo funzione creaNodo

function creaNodo(tipo, classe, posizione) {
    let nuovoElemento = document.createElement(tipo);
    nuovoElemento.className = classe;
    posizione.appendChild(nuovoElemento);
    return nuovoElemento;
}

let profile = creaNodo("div", "profile", pageMain);
let user = creaNodo("div", "user", profile);
let userH1 = creaNodo("h1", "", user);
let userH1Text = document.createTextNode("John Doe");
userH1.appendChild(userH1Text);
let userH4 = creaNodo("h4", "", user);
let userH4Text = document.createTextNode("Designer");
userH4.appendChild(userH4Text);

let pulsante = creaNodo("button", "button", profile);
let pulsanteText = document.createTextNode("FOLLOW");
pulsante.appendChild(pulsanteText);

let sectionA = creaNodo("section", "about", pageMain);
let sectionF = creaNodo("section", "friends", pageMain);
let sectionAH2 = creaNodo("h2", "", sectionA);
let sectionAH2Text = document.createTextNode("ABOUT");
sectionAH2.appendChild(sectionAH2Text);
let paragraphA = creaNodo("p", "", sectionA);
let paragraphAText = document.createTextNode("Lorem ipsum dolor sit amet...");
paragraphA.appendChild(paragraphAText);
let bBreak = document.createElement("br");
paragraphA.appendChild(bBreak);

// provo funzione creaElemento
function creaElementoD(tipo, contenuto, classe, posizione, attributi) {
    let nuovoElemento = document.createElement(tipo);
    if (attributi.src && attributi.alt) {
        nuovoElemento.src = attributi.src;
        nuovoElemento.alt = attributi.alt;
    } else {
        let contenutoElemento = document.createTextNode(contenuto);
        nuovoElemento.appendChild(contenutoElemento);
    }
    if (classe != "") nuovoElemento.className = classe;
    posizione.appendChild(nuovoElemento);
}

let linkRead = creaElementoD("a", "read more", "", paragraphA, "");

let sectionFA2 = creaElementoD("h2", "FRIENDS", "", sectionF, "");
let divOverflow = creaNodo("div", "overflow", sectionF);
let divOverflowFlex = creaNodo("div", "flex", divOverflow);

for (let i = 0; i < 8; i++) {
    let circleEl = creaElementoD("div", "", "circle", divOverflowFlex, "");
}

let sectionP = creaNodo("section", "photos", pageMain);
let sectionPH2 = creaElementoD("h2", "PHOTOS", "", sectionP, "");
let divPhotos = creaNodo("div", "grid", sectionP);

for (let i = 0; i < 12; i++) {
    let squareEl = creaElementoD("div", "", "square", divPhotos, "");
}
