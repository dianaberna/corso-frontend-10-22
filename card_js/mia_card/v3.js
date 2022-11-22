
function creaElemento(tipo, testo, classe, posizione, attributi) {
    let nuovoElemento = document.createElement(tipo);
    if (attributi.src && attributi.alt) {
        nuovoElemento.src = attributi.src;
        nuovoElemento.alt = attributi.alt;
    } else if (testo) {
        let TestoNuovoElemento = document.createTextNode(testo);
        nuovoElemento.appendChild(TestoNuovoElemento);
    }
    if (classe != "") {
        nuovoElemento.className = classe;
    }

    if (posizione) {
        posizione.appendChild(nuovoElemento);
    } else {
        return nuovoElemento;
    }
}

let arrayCard = [
    {
        cover: {
            src: "caffe.jpg",
            alt: "caffè",
        },
        title: "Vanilla Latte",
        price: "21K",
        etichette: ["Hot", "Cold"],
        buttonTitle: "Aggiungi",
    },
    {
        cover: {
            src: "caffe.jpg",
            alt: "caffè",
        },
        title: "Cappuccino",
        price: "10K",
        etichette: ["Hot", "Cold", "Altro"],
        buttonTitle: "Aggiungi",
    },
    {
        cover: {
            src: "caffe.jpg",
            alt: "caffè",
        },
        title: "Caffè",
        price: "1K",
        etichette: ["Hot"],
        buttonTitle: "Aggiungi",
    },
];

for (let i = 0; i < arrayCard.length; i++) {
    let card = creaElemento("div", "", "card", "", "");

    let cardBody = creaElemento("div", "", "card-body", "", "");

    creaElemento("img", "", "", cardBody, arrayCard[i].cover);

    let nuovodivbody = document.createElement("div");

    creaElemento("h1", arrayCard[i].title, "", nuovodivbody, "");
    creaElemento("p", arrayCard[i].price, "", nuovodivbody, "");
    cardBody.appendChild(nuovodivbody);

    let divCardFooter = creaElemento("div", "", "card-footer", "", "");
    let divEtichette = creaElemento("div", "", "etichette", "", "");

    for (let j = 0; j < arrayCard[i].etichette.length; j++) {
        creaElemento("span", arrayCard[i].etichette[j], "", divEtichette, "");
    }

    divCardFooter.appendChild(divEtichette);

    creaElemento("button", arrayCard[i].buttonTitle, "", divCardFooter, "");

    card.appendChild(cardBody);
    card.appendChild(divCardFooter);

    document.body.appendChild(card);
}
