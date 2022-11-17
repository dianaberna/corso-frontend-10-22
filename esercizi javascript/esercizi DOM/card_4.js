// Function creaElementi(tag, posizione, testo, attributi)
// attributi sarà uguale a {src: "", alt: "", classe: ""}

function creaElementi(tag, posizione, testo, attributi) {
    let nuovoElemento = document.createElement(tag);

    if (attributi) {
        if (attributi.classe) {
            nuovoElemento.className = attributi.classe;
        }

        if (attributi.src && attributi.alt) {
            nuovoElemento.src = attributi.src;
            nuovoElemento.alt = attributi.alt;
        }
    } // fine if attributi

    if (testo) {
        let testoElemento = document.createTextNode(testo);
        nuovoElemento.appendChild(testoElemento);
    }

    posizione.appendChild(nuovoElemento);

    return nuovoElemento;
}

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
    },
];

// tag, posizione, testo, attributi
// src: "", alt: "", classe: ""

for (j = 0; j < cardArray.length; j++) {
    let divCard = creaElementi("div", document.body, "", { classe: "card" });

    let divCardBody = creaElementi("div", divCard, "", { classe: "card-body" });

    creaElementi("img", divCardBody, "", {
        src: cardArray[j].immagine.src,
        alt: cardArray[j].immagine.alt,
    });

    //let divTitoli = creaElementi("div", "", divCardBody);
    let divTitoli = creaElementi("div", divCardBody);

    creaElementi("h1", divTitoli, cardArray[j].titolo);

    creaElementi("p", divTitoli, cardArray[j].paragrafo);

    let cardFooter = creaElementi("div", divCardBody, "", {
        classe: "card-footer",
    });
    let divEtichette = creaElementi("div", cardFooter, "", {
        classe: "etichette",
    });

    for (let i = 0; i < cardArray[j].etichette.length; i++) {
        creaElementi("span", divEtichette, cardArray[j].etichette[i]);
    }

    creaElementi("button", cardFooter, cardArray[j].pulsante);
}
