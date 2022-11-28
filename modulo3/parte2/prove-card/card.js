// crea elemento con del contenuto testuale al suo interno
function creaElemento(
    tipo,
    contenuto,
    classe,
    posizione,
    attributi
) {
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

// creare un elemento che restituisce esclusivamente la creazione
function creaNodo(tipo, classe) {
    let nuovoElemento = document.createElement(tipo);
    nuovoElemento.className = classe;
    return nuovoElemento;
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
    // {
    //     cover: {
    //         src: "caffe.jpg",
    //         alt: "caffè",
    //     },
    //     title: "Cappuccino",
    //     price: "10K",
    //     etichette: ["Hot", "Cold", "Altro"],
    //     buttonTitle: "Aggiungi",
    // },
    // {
    //     cover: {
    //         src: "caffe.jpg",
    //         alt: "caffè",
    //     },
    //     title: "Caffè",
    //     price: "1K",
    //     etichette: ["Hot"],
    //     buttonTitle: "Aggiungi",
    // },
];

for (let i = 0; i < arrayCard.length; i++) {
    let card = creaNodo("div", "card");

    let cardBody = creaNodo("div", "card-body");
    // cardBody.src="caffe.jpg" -> un div non può avere attributo src

    creaElemento("img", "", "", cardBody, arrayCard[i].cover);

    let nuovodivbody = document.createElement("div");

    creaElemento("h1", arrayCard[i].title, "", nuovodivbody, "");
    creaElemento("p", arrayCard[i].price, "", nuovodivbody, "");
    cardBody.appendChild(nuovodivbody);

    /*
<div class="card-footer">
    <div class="etichette">
        <span>Hot</span>
        <span>Cold</span>
    </div>
    <button>Aggiungi</button>
</div>
*/

    let divCardFooter = creaNodo("div", "card-footer");
    let divEtichette = creaNodo("div", "etichette");

    // creare i due span
    for (let j = 0; j < arrayCard[i].etichette.length; j++) {
        creaElemento(
            "span",
            arrayCard[i].etichette[j],
            "",
            divEtichette,
            ""
        );
    }

    divCardFooter.appendChild(divEtichette);

    // creare il bottone
    creaElemento(
        "button",
        arrayCard[i].buttonTitle,
        "",
        divCardFooter,
        ""
    );

    card.appendChild(cardBody);
    card.appendChild(divCardFooter);

    document.body.appendChild(card);
}