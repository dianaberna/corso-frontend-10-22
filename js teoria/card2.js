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

let card = creaElemento("div","card", document.body);

let cardBody = creaElemento("div","card-body", card);

let img = creaElemento("img","",cardBody,"caffe.jpg","caffe");

let divTitoli = creaElemento("div","",cardBody);

let titolo = creaElemento("h1","",divTitoli,"","","Vanilla Latte");

let paragrafo = creaElemento("p","",divTitoli,"","","21K");

let cardFooter = creaElemento("div","card-footer",card);

let etichette = creaElemento("div","etichette",cardFooter);

let arrayEtichette = ["hot", "cold"];

for(let i=0; i < arrayEtichette.length; i++){
    let span = creaElemento("span","",etichette,"","",arrayEtichette[i]);
}

let button = creaElemento("button","",cardFooter,"","","Aggiungi");