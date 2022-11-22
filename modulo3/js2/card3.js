function createTagElement(tag, testo, attributi, classe, padre) {
    let nuovoTag = document.createElement(tag);

    if (testo) {
        nuovoTesto = document.createTextNode(testo);
        nuovoTag.appendChild(nuovoTesto);
    }

    if (classe) {
        nuovoTag.className = classe;
    }
    if (attributi) {
        nuovoTag.src = attributi.src;
        nuovoTag.alt = attributi.alt;
    }
    if (padre) {
        padre.appendChild(nuovoTag);
    }
    return nuovoTag;
}

function createCard(title, prezzo, img) {
    // creo div di card
    const divCard = document.createElement("div");
    divCard.className = "card";
    const divCardBody = document.createElement("div");
    divCardBody.className = "card-body";
    const divCardFooter = document.createElement("div");
    divCardFooter.className = "card-footer";
    const divCardBodyHeading = document.createElement("div");
    const divCardFooterEtichette = document.createElement("div");
    divCardFooterEtichette.className = "etichette";

    // devo creare un elemento per il titolo della card
    const titolo = createTagElement("h1", title, "", "", null);

    // creo un elemento per il prezzo della card
    const prezzoCard = createTagElement("p", prezzo, "", "", null);
    // creo elemento per l'immagine della card
    const imgCard = createTagElement("img", "", img, "", null);

    const cardSpan1 = createTagElement(
        "span",
        "Hot",
        "",
        "",
        divCardFooterEtichette
    );
    createTagElement("span", "Cold", "", "", divCardFooterEtichette);

    // con gli elementi pronti conpongo la mia card

    divCardBodyHeading.appendChild(titolo);
    divCardBodyHeading.appendChild(prezzoCard);
    divCardBody.appendChild(imgCard);
    divCardBody.appendChild(divCardBodyHeading);

    divCard.appendChild(divCardBody);
    divCard.appendChild(divCardFooter);
    divCardFooter.appendChild(divCardFooterEtichette);

    // adesso aggiungo la card al body della pagina
    document.body.appendChild(divCard);
}

let card = {
    img: {
        src: "espresso.png",
        alt: "caffe",
    },
    title: "Vanilla Latte",
    price: "21k",
};
let card1 = {
    img: {
        src: "espresso.png",
        alt: "caffe",
    },
    title: "Vanilla Latte 1",
    price: "11k",
    etichette: ['Hot', 'Cold'],
    button: 'aggiungi'
};
createCard(card.title, card.price, card.img);
// createCard(card1.title, card1.price, card1.img);

let cards = []; // contenitore di card
// creo 5 card con il for
for (let i = 0; i < 5; i++) {
    const card = {
        img: {
            src: "espresso.png",
            alt: "caffe",
        },
        title: "Vanilla Latte " + i,
        price: 12 * i + "k",
        etichette: ['Hot', 'Cold'],
        button: 'aggiungi'
    };
};
cards.push(card);
}
// per ogni card contenuta nel array di cards aggiungo al dom la card utilizzando la 
// funzione create card!!!!!
cards.forEach((card) => {
    createCard(card.title, card.price, card.img);
});