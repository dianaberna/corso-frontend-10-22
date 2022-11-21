console.log("cardv4.js");

// crea elemento con del contenuto testuale al suo interno
// { tipo, contenuto, classe, posizione, attributi }
function creaElemento(parametri) {
    let nuovoElemento = document.createElement(parametri.tipo);
    if (parametri.attributi) {
        if (attributi.src && attributi.alt) {
            nuovoElemento.src = attributi.src;
            nuovoElemento.alt = attributi.alt;
        }
    }
    if (parametri.contenuto) {
        let contenutoElemento = document.createTextNode(contenuto);
        nuovoElemento.appendChild(contenutoElemento);
    }
    if (parametri.classe != "") nuovoElemento.className = classe;
    if (parametri.posizione) {
        parametri.posizione.appendChild(nuovoElemento);
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
    let card = creaElemento({ tipo: "div", classe: "card" });

    let cardBody = creaElemento({ tipo: "div", classe: "card-body" });

    creaElemento({
        tipo: "img",
        posizione: cardBody,
        attributi: arrayCard[i].cover,
    });

    let nuovodivbody = document.createElement("div");

    creaElemento({
        tipo: "h1",
        contenuto: arrayCard[i].title,
        posizione: nuovodivbody,
    });
    creaElemento({
        tipo: "p",
        contenuto: arrayCard[i].price,
        posizione: nuovodivbody,
    });
    cardBody.appendChild(nuovodivbody);

    let divCardFooter = creaElemento({ tipo: "div", classe: "card-footer" });
    let divEtichette = creaElemento({ tipo: "div", classe: "etichette" });

    for (let j = 0; j < arrayCard[i].etichette.length; j++) {
        creaElemento({
            tipo: "span",
            contenuto: arrayCard[i].etichette[j],
            posizione: divEtichette,
        });
    }

    divCardFooter.appendChild(divEtichette);

    creaElemento({
        tipo: "button",
        contenuto: arrayCard[i].buttonTitle,
        posizione: divCardFooter,
    });

    card.appendChild(cardBody);
    card.appendChild(divCardFooter);

    document.body.appendChild(card);
}
