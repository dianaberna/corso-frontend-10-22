console.log("cardv2 - versione con due funzioni")

function creaElemento(tipo, classe, contenuto, attributi, genitore){
    // come attributi ci aspettiamo un array di due elementi 
    // attributi[0] -> sarà la source dell'immagine
    // attributi[1] -> sarà l'alt dell'immagine
    let nuovoElemento = document.createElement(tipo);
    nuovoElemento.className = classe
    if(attributi){
        nuovoElemento.src =  attributi[0]
        nuovoElemento.alt = attributi[1]
    }else{
        let testo = document.createTextNode(contenuto)
        nuovoElemento.appendChild(testo)
    }
    genitore.appendChild(nuovoElemento)
}

function creaNodo(tipo, classe){
    let nuovoElemento = document.createElement(tipo);
    nuovoElemento.className = classe;
    return nuovoElemento;
}

let card = creaNodo("div", "card");
document.body.appendChild(card);

let divCardBody = creaNodo("div", "card-body")

creaElemento("img", "", "", ["caffe.jpg", "caffe"], divCardBody)

let divTitoli = creaNodo("div", "")

creaElemento("h1", "", "Vanilla Latte", "", divTitoli)
creaElemento("p", "", "21K", "", divTitoli)

divCardBody.appendChild(divTitoli)

card.appendChild(divCardBody)

let cardFooter = creaNodo("div", "card-footer")
let divEtichette = creaNodo("div", "etichette")

creaElemento("span", "", "Hot", "", divEtichette)
creaElemento("span", "", "Cold", "", divEtichette)

cardFooter.appendChild(divEtichette)

creaElemento("button", "", "Aggiungi", "", cardFooter)

card.appendChild(cardFooter) 