// Function creaElementi(tag, posizione, testo, attributi)
// attributi sarà uguale a {src: "", alt: "", classe: ""}

// Modifiche per la card 5
// parametri conterrà {tag: "", posizione: "", testo: "", attributi: ""}
// attributi conterrà {src: "", alt: "", classe: ""}

function creaElementi(parametri) {
    let nuovoElemento = document.createElement(parametri.tag);

    if (parametri.attributi) {
        if (parametri.attributi.classe) {
            nuovoElemento.className = parametri.attributi.classe;
        }

        if (parametri.attributi.src && parametri.attributi.alt) {
            nuovoElemento.src = parametri.attributi.src;
            nuovoElemento.alt = parametri.attributi.alt;
        }
    } // fine if attributi

    if (parametri.testo) {
        let testoElemento = document.createTextNode(parametri.testo);
        nuovoElemento.appendChild(testoElemento);
    }

    parametri.posizione.appendChild(nuovoElemento);

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
    //let divCard = creaElementi("div", document.body, "", { classe: "card" });
    let divCard = creaElementi({
        tag: "div",
        posizione: document.body,
        attributi: { classe: "card" },
    });

    //let divCardBody = creaElementi("div", divCard, "", { classe: "card-body" });
    let divCardBody = creaElementi({
        tag: "div",
        posizione: divCard,
        attributi: { classe: "card-body" },
    });

    /* creaElementi("img", divCardBody, "", {
        src: cardArray[j].immagine.src,
        alt: cardArray[j].immagine.alt,
    });
    */

    creaElementi({
        tag: "img",
        posizione: divCardBody,
        attributi: {
            src: cardArray[j].immagine.src,
            alt: cardArray[j].immagine.alt,
        },
    });

    //let divTitoli = creaElementi("div", "", divCardBody);
    //let divTitoli = creaElementi("div", divCardBody);

    let divTitoli = creaElementi({ tag: "div", posizione: divCardBody });

    // creaElementi("h1", divTitoli, cardArray[j].titolo);
    creaElementi({
        tag: "h1",
        posizione: divTitoli,
        testo: cardArray[j].titolo,
    });

    // creaElementi("p", divTitoli, cardArray[j].paragrafo);
    creaElementi({
        tag: "p",
        posizione: divTitoli,
        testo: cardArray[j].paragrafo,
    });

    /*
    let cardFooter = creaElementi("div", divCardBody, "", {
        classe: "card-footer",
    });
    */

    let cardFooter = creaElementi({
        tag: "div",
        posizione: divCardBody,
        attributi: { classe: "card-footer" },
    });

    /*
    let divEtichette = creaElementi("div", cardFooter, "", {
        classe: "etichette",
    });
    */

    let divEtichette = creaElementi({
        tag: "div",
        posizione: cardFooter,
        attributi: { classe: "etichette" },
    });

    // tag, posizione, testo, attributi
    // src: "", alt: "", classe: ""

    for (let i = 0; i < cardArray[j].etichette.length; i++) {
        //creaElementi("span", divEtichette, cardArray[j].etichette[i]);
        creaElementi({ tag: "span", posizione: divEtichette, testo: cardArray[j].etichette[i] })
    }

    // creaElementi("button", cardFooter, cardArray[j].pulsante);
    creaElementi({tag: "button", posizione: cardFooter, testo: cardArray[j].pulsante  })

}
