function creaElemento({tag, classe, posizione, attributi, contenuto}){

    let nuovoElemento = document.createElement(tag);
    nuovoElemento.className= classe;

    if(attributi){
        nuovoElemento.src = attributi.src;
        nuovoElemento.alt = attributi.alt;
    }
    if(contenuto){
        let TestoElemento = document.createTextNode(contenuto)
        nuovoElemento.appendChild(TestoElemento);
    }

    posizione.appendChild(nuovoElemento);

    return nuovoElemento;
}

let cardArray= [{
    img:{
    src:"caffe.jpg", alt:"caffe"},
    titolo:"Vanilla Latte",
    paragrafo:"21K",
    etichette:["hot","cold"],
    bottone:"Aggiungi"
},{
    img:{
    src:"caffe.jpg", alt:"caffe"},
    titolo:"Vanilla Latte",
    paragrafo:"21K",
    etichette:["hot","cold"],
    bottone:"Aggiungi"
}

];



for(let j=0; j < cardArray.length; j++){

    let card = creaElemento({tag:"div",classe: "card", posizione: document.body});

    let cardBody = creaElemento({tag:"div",classe:"card-body",posizione: card});

    let img = creaElemento({tag:"img",posizione: cardBody, attributi: cardArray[j].img});

    let divTitoli = creaElemento({tag:"div",posizione: cardBody});

    let titolo = creaElemento({tag:"h1",posizione: divTitoli, contenuto: cardArray[j].titolo});

    let paragrafo = creaElemento({tag:"p",posizione: divTitoli,contenuto:cardArray[j].paragrafo});

    let cardFooter = creaElemento({tag:"div",classe:"card-footer",posizione:card});

    let etichette = creaElemento({tag:"div",classe:"etichette",posizione: cardFooter});


    for(let i=0; i < cardArray[j].etichette.length; i++){
    let span = creaElemento({tag:"span", posizione: etichette,contenuto: cardArray[j].etichette[i]});
}
let button = creaElemento({tag:"button",posizione: cardFooter, contenuto: cardArray[j].bottone});
}


