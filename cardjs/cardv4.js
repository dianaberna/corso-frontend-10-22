console.log("cardv4.js")
// DA FINIRE!!!!!
// crea elemento con del contenuto testuale al suo interno
function creaElemento(
    {
        tipo,
        contenuto,
        classe,
        posizione,
        attributi
    }) {
    console.log(classe)
    let nuovoElemento = document.createElement(tipo);
    if(attributi){
        if (attributi.src && attributi.alt) {
            nuovoElemento.src = attributi.src;
            nuovoElemento.alt = attributi.alt;
        }
    }
    if(contenuto) {
            let contenutoElemento = document.createTextNode(contenuto);
            nuovoElemento.appendChild(contenutoElemento);   
    }
    if (classe != "") nuovoElemento.className = classe;
    if(posizione){
        posizione.appendChild(nuovoElemento);
    }else{
        return nuovoElemento
    }
}

// creare un elemento che restituisce esclusivamente la creazione
/* function creaNodo(tipo, classe) {
    let nuovoElemento = document.createElement(tipo);
    nuovoElemento.className = classe;
    return nuovoElemento;
} */

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
    }
];

for (let i = 0; i < arrayCard.length; i++) {
    /*
    tipo,
    contenuto,
    classe,
    posizione,
    attributi
    */
    let card = creaElemento({tipo: "div", classe: "card"});
    //let card = creaNodo("div", "card");

    let cardBody = creaElemento("div", "", "card-body", "", "");
    // cardBody.src="caffe.jpg" -> un div non può avere attributo src

    creaElemento("img", "", "", cardBody, arrayCard[i].cover);

    let nuovodivbody = document.createElement("div");

    creaElemento("h1", arrayCard[i].title, "", nuovodivbody, "");
    creaElemento("p", arrayCard[i].price, "", nuovodivbody, "");
    cardBody.appendChild(nuovodivbody);

    let divCardFooter = creaElemento("div", "", "card-footer", "", "");
    let divEtichette = creaElemento("div", "", "etichette", "", "");

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

