function creaNuovoElemento (tipo, contenuto, posizione, classe, attributi){
    let nuovoElemento = document.createElement (tipo);
    let nuovoElementoContenuto = document.createTextNode (contenuto);
    nuovoElemento.appendChild (nuovoElementoContenuto);
    
    if (posizione){
        posizione.appendChild (nuovoElemento);
    }

    if (classe){
        nuovoElemento.className = classe;
    }

    if (attributi.src && attributi.alt){
        nuovoElemento.src = attributi.src;
        nuovoElemento.alt = attributi.alt;
    }

    return nuovoElemento;
}

let arrayCard = [
    {
        cover: {
            src: "assets/cappuccino.png",
            alt: "cappuccino",
        },
        title: "Vanilla Latte",
        price: "21K",
        etichette: ["Hot", "Cold"],
        buttonTitle: "Aggiungi",
    },
    {
        cover: {
            src: "assets/cappuccino.png",
            alt: "cappuccino",
        },
        title: "Cappuccino",
        price: "10K",
        etichette: ["Hot", "Cold", "Altro"],
        buttonTitle: "Acquista",
    },
    {
        cover: {
            src: "assets/cappuccino.png",
            alt: "caffè",
        },
        title: "Caffè",
        price: "1K",
        etichette: ["Hot"],
        buttonTitle: "Aggiungi",
    },
]

for (i = 0; i < arrayCard.length; i++){
    //creazione della carta
    let divCardElement = creaNuovoElemento ("div", "", document.body, "card", "");

    //creazione del div body, con img, h1, p
    let divCardBody = creaNuovoElemento ("div", "", divCardElement, "cardBody", "");
    let imgCard = creaNuovoElemento ("img", "", divCardBody, "", arrayCard[i].cover);
    //card Title con h1 e p
    let cardTitle = creaNuovoElemento ("div", "", divCardBody, "cardTitle", "", "");
    let testoH1 = creaNuovoElemento ("h1", arrayCard [i].title, cardTitle, "", "", "");
    let testoP = creaNuovoElemento ("p", arrayCard[i].price, cardTitle, "", "", "");

    //creazione divCardFooter
    let divCardFooter = creaNuovoElemento ("div", "", divCardElement, "divFooter", "", "");
    
    //creazione span di Footer
    let divCardSpan = creaNuovoElemento ("div", "", divCardFooter, "divCardSpan", "", "");
    //aggiunta contenuti a divCardSpan
    for (j=0; j < arrayCard[i].etichette.length; j++){
        let spanCard = creaNuovoElemento ("span", arrayCard[i].etichette[j], divCardSpan, "cardSpan", "", "");
    }

    //creazione bottone di footer
    let buttonCard = creaNuovoElemento ("button", arrayCard[i].buttonTitle, divCardFooter, "", "", "");
}

