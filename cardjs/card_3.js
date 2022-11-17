function creaElementi(tag, classe, posizione, src, alt, testo) {
    let nuovoElemento = document.createElement(tag);

    if (classe) {
        nuovoElemento.className = classe;
    }

    if (src && alt) {
        nuovoElemento.src = src;
        nuovoElemento.alt = alt;
    }

    if (testo) {
        let testoElemento = document.createTextNode(testo);
        nuovoElemento.appendChild(testoElemento);
    }

    posizione.appendChild(nuovoElemento);

    return nuovoElemento;
}

/*

let card1 = {
    immagine: { src: "caffe.jpg", alt: "caffe" },
    titolo: "Vanilla Latte",
    paragrafo: "21K",
    etichette: ["Hot", "Cold", "provenzano"],
    pulsante: "compra",
};

let divCard = creaElementi("div", "card", document.body);

let divCardBody = creaElementi("div", "card-body", divCard);

let nuovaImmagine = creaElementi(
    "img",
    "",
    divCardBody,
    card1.immagine.src,
    card1.immagine.alt
);

let divTitoli = creaElementi("div", "", divCardBody);

let titolo = creaElementi("h1", "", divTitoli, "", "", card1.titolo);

let paragrafo = creaElementi("p", "", divTitoli, "", "", card1.paragrafo);

let cardFooter = creaElementi("div", "card-footer", divCardBody);
let divEtichette = creaElementi("div", "etichette", cardFooter);

for (let i = 0; i < card1.etichette.length; i++) {
    creaElementi("span", "", divEtichette, "", "", card1.etichette[i]);
}

creaElementi("button", "", cardFooter, "", "", card1.pulsante);

// Nuova card

let card2 = {
    immagine: { src: "caffe.jpg", alt: "caffe" },
    titolo: "Cappuccino",
    paragrafo: "45K",
    etichette: ["Hot", "tiepido", "provenzano"],
    pulsante: "aggiungi",
};

let divCard2 = creaElementi("div", "card", document.body);

let divCardBody2 = creaElementi("div", "card-body", divCard2);

let nuovaImmagine2 = creaElementi(
    "img",
    "",
    divCardBody2,
    card2.immagine.src,
    card2.immagine.alt
);

let divTitoli2 = creaElementi("div", "", divCardBody2);

let titolo2 = creaElementi("h1", "", divTitoli2, "", "", card2.titolo);

let paragrafo2 = creaElementi("p", "", divTitoli2, "", "", card2.paragrafo);

let cardFooter2 = creaElementi("div", "card-footer", divCardBody2);
let divEtichette2 = creaElementi("div", "etichette", cardFooter2);

for (let i = 0; i < card2.etichette.length; i++) {
    creaElementi("span", "", divEtichette2, "", "", card2.etichette[i]);
}

creaElementi("button", "", cardFooter2, "", "", card2.pulsante);

*/ 

let cardArray = [
    {
        immagine: { src: "caffe.jpg", alt: "caffe" },
        titolo: "Vanilla Latte",
        paragrafo: "21K",
        etichette: ["Hot", "Cold", "provenzano"],
        pulsante: "compra",
    },
    {
        immagine: { src: "caffe.jpg", alt: "caffe" },
        titolo: "Cappuccino",
        paragrafo: "45K",
        etichette: ["Hot", "tiepido", "provenzano"],
        pulsante: "aggiungi",
    },
    {
        immagine: { src: "caffe.jpg", alt: "caffe" },
        titolo: "Mocaccino",
        paragrafo: "60K",
        etichette: ["freddo", "terracina"],
        pulsante: "ordina",
    }

];

for (j = 0; j < cardArray.length; j++) {
    let divCard = creaElementi("div", "card", document.body);

    let divCardBody = creaElementi("div", "card-body", divCard);

    let nuovaImmagine = creaElementi(
        "img",
        "",
        divCardBody,
        cardArray[j].immagine.src,
        cardArray[j].immagine.alt
    );

    let divTitoli = creaElementi("div", "", divCardBody);

    let titolo = creaElementi("h1", "", divTitoli, "", "", cardArray[j].titolo);

    let paragrafo = creaElementi("p", "", divTitoli, "", "", cardArray[j].paragrafo);

    let cardFooter = creaElementi("div", "card-footer", divCardBody);
    let divEtichette = creaElementi("div", "etichette", cardFooter);

    for (let i = 0; i < cardArray[j].etichette.length; i++) {
        creaElementi("span", "", divEtichette, "", "", cardArray[j].etichette[i]);
    }

    creaElementi("button", "", cardFooter, "", "", cardArray[j].pulsante);
}
