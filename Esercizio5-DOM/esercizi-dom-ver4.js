//function creaElementi (tag, posizione, testo, attributi)
//ATTRIBUTI sarà uguale a {src:"", alt:"", classe:""} incastriamo così tutti gli attributi nella variabile creata ATTRIBUTI

function creaElementi(tag, posizione, testo, attributi) {
    let nuovoElemento = document.createElement(tag);

    if (attributi){
    if (attributi.classe != undefined && attributi.class) {
        nuovoElemento.className = classe;
    }

    if (attributi.src && attributi.alt) {
        nuovoElemento.src = src;
        nuovoElemento.alt = alt;
    }
    }   //fine IF se esiste ATTRIBUTI

    if (testo) {
        let testoElemento = document.createTextNode(testo);
        nuovoElemento.appendChild(testoElemento);
    }

    posizione.appendChild(nuovoElemento);

    return nuovoElemento;
}



let cardArray = [
    {
        immagine: { src: "./assets/caffe.jpg", alt: "caffe", classe:""},
        titolo: "Vanilla Latte VER4",
        paragrafo: "21K",
        etichette: ["Hot", "Cold", "Card1"],
        pulsante: "compra",
    },
    {
        immagine: { src: "./assets/caffe.jpg", alt: "caffe", classe:""},
        titolo: "Cappuccino VER4",
        paragrafo: "45K",
        etichette: ["Hot", "Tiepido", "Card2"],
        pulsante: "aggiungi",
    },
    {
        immagine: { src: "./assets/caffe.jpg", alt: "caffe", classe:"" },
        titolo: "Mocaccino VER4",
        paragrafo: "60K",
        etichette: ["Freddo", "Card3"],
        pulsante: "ordina",
    }

];

//tag, posizione, testo, attributi
//src:"",alt:"",classe:""

for (j = 0; j < cardArray.length; j++) {
    let divCard = creaElementi("div", document.body, "", {classe:"card"});

    let divCardBody = creaElementi("div", divCard, "", {classe:"card"});

    creaElementi( //let nuovaImmagine = creaElementi non importa perchè non ci interessa sia variabile ma subito nodo --- infatti JS colora di grigino le variabili
        "img",
        divCardBody,
        {src:cardArray[j].immagine.src,
         alt:cardArray[j].immagine.alt}
    );
    
    let divTitoli = creaElementi("div", divCardBody); //non c'è testo nè attributi

    creaElementi("h1", divTitoli, cardArray[j].titolo); //non ci sono attributi e poi let titolo = creaElementi

    creaElementi("p", divTitoli, cardArray[j].paragrafo); //let paragrafo

    let cardFooter = creaElementi("div", divCardBody, "", {classe:"card-footer"});
    
    let divEtichette = creaElementi("div", cardFooter,"", {classe:"etichette"});

    for (let i = 0; i < cardArray[j].etichette.length; i++) {
        creaElementi("span", divEtichette, cardArray[j].etichette[i]);
    }

    creaElementi("button", cardFooter, cardArray[j].pulsante);
}
