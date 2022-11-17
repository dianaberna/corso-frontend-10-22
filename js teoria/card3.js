function creaElemento(tag, classe, posizione, src, alt, contenuto){

    let nuovoElemento = document.createElement(tag);
    nuovoElemento.className= classe;
    nuovoElemento.src = src;
    nuovoElemento.alt = alt;

    if(contenuto){
        let TestoElemento = document.createTextNode(contenuto)
        nuovoElemento.appendChild(TestoElemento);
    }

    posizione.appendChild(nuovoElemento);

    return nuovoElemento;
}

let cardArray= [{
    img:{src:"caffe.jpg", alt:"caffe"},
    titolo:"Vanilla Latte",
    paragrafo:"21K",
    etichette:["hot","cold"],
    bottone:"Aggiungi",
}

];



for(let j=0; j < cardArray.length; j++){

    let card = creaElemento("div","card", document.body);

    let cardBody = creaElemento("div","card-body", card);

    let img = creaElemento("img","",cardBody, cardArray[j].img.src,cardArray[j].img.alt);

    let divTitoli = creaElemento("div","",cardBody);

    let titolo = creaElemento("h1","",divTitoli,"","",cardArray[j].titolo);

    let paragrafo = creaElemento("p","",divTitoli,"","",cardArray[j].paragrafo);

    let cardFooter = creaElemento("div","card-footer",card);

    let etichette = creaElemento("div","etichette",cardFooter);


    for(let i=0; i < cardArray[j].etichette.length; i++){
    let span = creaElemento("span","",etichette,"","",cardArray[j].etichette[i]);
}

let button = creaElemento("button","",cardFooter,"","", cardArray[j].bottone);
}


