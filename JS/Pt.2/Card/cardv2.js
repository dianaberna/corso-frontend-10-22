function creaNuovoElemento (tipo, contenuto, posizione, classe, src, alt){
    let nuovoElemento = document.createElement (tipo);
    let nuovoElementoContenuto = document.createTextNode (contenuto);
    nuovoElemento.appendChild (nuovoElementoContenuto);
    
    if (posizione){
        posizione.appendChild (nuovoElemento);
    }

    if (classe){
        nuovoElemento.className = classe;
    }

    if (src && alt){
        nuovoElemento.src = src;
        nuovoElemento.alt = alt;
    }

    return nuovoElemento;
}

//creazione <div class="card"></div>
let divCardElement = creaNuovoElemento ("div", "", document.body, "card", "", "");

//creazione <div class="cardBody"></div>
let divCardBody = creaNuovoElemento ("div", "", divCardElement, "cardBody", "", "");

//aggiunta elementi di .cardBody
let imgCard = creaNuovoElemento ("img", "", divCardBody, "", "assets/cappuccino.png", "cappuccino");

// div cardTitle
let cardTitle = creaNuovoElemento ("div", "", divCardBody, "cardTitle", "", "");

//aggiungere a cardTitle con h1 e p
let testoH1 = creaNuovoElemento ("h1", "Vanilla Latte", cardTitle, "", "", "");
let testoP = creaNuovoElemento ("p", "21K", cardTitle, "", "", "");

//creazione divCardFooter
let divCardFooter = creaNuovoElemento ("div", "", divCardElement, "divFooter", "", "");

//creazione span di Footer
let divCardSpan = creaNuovoElemento ("div", "", divCardFooter, "divCardSpan", "", "");

//aggiunta contenuti a divCardSpan
arraySpan = ["Hot", "Cold"];
for (i=0; i < arraySpan.length; i++){
    let spanCard = creaNuovoElemento ("span", arraySpan [i], divCardSpan, "cardSpan", "", "");
}

//creazione bottone di footer
let buttonCard = creaNuovoElemento ("button", "Aggiungi", divCardFooter, "", "", "");