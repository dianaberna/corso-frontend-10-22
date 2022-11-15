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
        if(contenuto){
            let testo = document.createTextNode(contenuto)
            nuovoElemento.appendChild(testo)
        }  
    }
    if(genitore){
        genitore.appendChild(nuovoElemento)
    }else{
        return nuovoElemento
    }
}

let card = creaElemento("div", "card", "", "", "");
// si può scrivere anche come 
// let card = creaElemento("div", "card");
// perché gli ultimi 3 argomenti della funzione sono vuoti 
document.body.appendChild(card);

let divCardBody = creaElemento("div", "card-body", "", "", "")

creaElemento("img", "", "", ["caffe.jpg", "caffe"], divCardBody)

let divTitoli = creaElemento("div", "", "", "", "")

creaElemento("h1", "", "Vanilla Latte", "", divTitoli)
creaElemento("p", "", "21K", "", divTitoli)

divCardBody.appendChild(divTitoli)

card.appendChild(divCardBody)

let cardFooter = creaElemento("div", "card-footer")
let divEtichette = creaElemento("div", "etichette", "", "", "")

creaElemento("span", "", "Hot", "", divEtichette)
creaElemento("span", "", "Cold", "", divEtichette)

cardFooter.appendChild(divEtichette)

creaElemento("button", "", "Aggiungi", "", cardFooter)

card.appendChild(cardFooter) 
