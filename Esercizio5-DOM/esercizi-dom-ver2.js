// VERSIONE LINEARE SOLO FUNZIONI
// let card = document.getElementsByClassName("card")[0]

// function elementi (tipo, classe, contenuto){
//     let nuovoElemento = document.createElement (tipo)
//     nuovoElemento.className=classe
//     return nuovoElemento

// }

// let card_body = elementi ("div", "card-body")

// function elementi(tipo, classe, source, padre, contenuto){
//     let nuovoElemento = document.createElement (tipo)
//     nuovoElemento.className=classe
//     nuovoElemento.src=source
//     padre.appendChild(nuovoElemento)
//     let contenutoTesto=document.createTextNode(contenuto)
//     nuovoElemento.appendChild(contenutoTesto)
    
// }

// elementi("img", "","./assets/caffe.jpeg", card-body, "")
// let divTesti = elementi ("div", "")
// elementi("h1", "", "", divTesti, "Vanilla latte")
// elementi("p", "", "", divTesti, "21K")
// card_body.appendChild(divTesti)
// card.appendChild(card_body)
// let card_footer = elementi ("div", "card_footer")
// let etichette= elementi ("div", "etichette")
// elementi("span", "", "", etichette,"Hot")
// elementi("span", "", "", etichette,"Cold")
// card_footer.appendChild(etichette)
// card.appendChild(card_footer)
// elementi("button", "", "", card_footer, "Aggiungi")




// VERSIONE FUNZIONI CON IF
// let card = document.getElementsByClassName("card")[0]


// function elementi(tipo, classe, source, padre, contenuto){
//     let nuovoElemento = document.createElement (tipo)
//     if (classe){
//     nuovoElemento.className=classe
//     }
//     if (source){
//         nuovoElemento.src=source
//     }
//     if (padre){
//         padre.appendChild(nuovoElemento)
//     }
//     if (contenuto){
//     let contenutoTesto=document.createTextNode(contenuto)
//     nuovoElemento.appendChild(contenutoTesto)
//     }
    
// }

// let card_body = elementi ("div", "card-body")

// elementi("img", "","./assets/caffe.jpeg", card-body, "")
// let divTesti = elementi ("div", "")
// elementi("h1", "", "", divTesti, "Vanilla latte")
// elementi("p", "", "", divTesti, "21K")
// card_body.appendChild(divTesti)
// card.appendChild(card_body)
// let card_footer = elementi ("div", "card_footer")
// let etichette= elementi ("div", "etichette")
// elementi("span", "", "", etichette,"Hot")
// elementi("span", "", "", etichette,"Cold")
// card_footer.appendChild(etichette)
// card.appendChild(card_footer)
// elementi("button", "", "", card_footer, "Aggiungi")





//VERSIONE CON {source:"./assets/caffe.jpeg", alt:"cappuccino"}
// let card = document.getElementsByClassName("card")[0]


// function elementi(tipo, classe, attributi, padre, contenuto){
//     let nuovoElemento = document.createElement (tipo)
//     if (classe){
//     nuovoElemento.className=classe
//     }
//     if (attributi){
//         nuovoElemento.src=source
//         if (attributi.source){
//             nuovo_elemento.src=attributi.source
//         }
//         if (attributi.alt) {
//             nuovo_elemento.alt=attributi.alt
//         }
//     }
//     if (padre){
//         padre.appendChild(nuovoElemento)
//     }
//     if (contenuto){
//     let contenutoTesto=document.createTextNode(contenuto)
//     nuovoElemento.appendChild(contenutoTesto)
//     }
    
// }

// let card_body = elementi ("div", "card-body")

// elementi("img", "",{source:"./assets/caffe.jpeg", alt:"cappuccino"}, card_body, "")

// let divTesti = elementi ("div", "")
// elementi("h1", "", "", divTesti, "Vanilla latte")
// elementi("p", "", "", divTesti, "21K")
// card_body.appendChild(divTesti)
// card.appendChild(card_body)
// let card_footer = elementi ("div", "card_footer")
// let etichette= elementi ("div", "etichette")
// elementi("span", "", "", etichette,"Hot")
// elementi("span", "", "", etichette,"Cold")
// card_footer.appendChild(etichette)
// card.appendChild(card_footer)
// elementi("button", "", "", card_footer, "Aggiungi")


//VERSIONE CON 1 SOLA FUNZIONE
//FUNZIONE: quando ci rendiamo conto che eseguiamo una funzione più volte,
//allora scriviamo il codice e lo incastriamo dentro una funzione che ci richiamiamo quando necessario

function creaElementi (tag, classe, posizione, src, alt, testo){
//dentro tonde ci sono tutti gli attributi che mi servono per definire ogni variabile

    let nuovoElemento=document.createElement(tag);

    if(classe){
    nuovoElemento.className = classe;
    }
    //creo IF perchè almeno se la classe è inserita, ce la crea sotto nelle tonde delle variabili, altrimenti no e non ci da errore

    if(src && alt){
    nuovoElemento.src = src; 
    nuovoElemento.alt = alt; 
    }

    if(testo){
    let testoElemento = document.createTextNode(testo);
    nuovoElemento.appendChild(testoElemento);
    }

    posizione.appendChild(nuovoElemento);

    return nuovoElemento;
    //RETURN: è COME UNA RICEVUTA DI RITORNO, CI CONFERMA CHE STA FACENDO LA FUNZIONE
}

//creaiamo le CLASSI con la funzione

let divCard = creaElementi ("div", "card", document.body, "", "");

let divCardBody = creaElementi ("div", "card-body", divCard, "", "")



let nuovaImmagine = creaElementi ("img", "", divCardBody, "caffe.jpeg", "foto caffe")

let divTitoli = creaElementi ("div", "", divCardBody)
// let divTitoli = document.createElement("div")

let titolo = creaElementi("h1", "", divTitoli, "", "", "Vanilla Latte VER2");

divCardBody.appendChild(divTitoli);

let paragrafo = creaElementi("p", "", divTitoli, "", "", "21K");

let cardFooter = creaElementi("div", "card-footer", divCardBody);
//se tutti gli ultimi attributi non ci sono, nelle tonde posso non mettere niente, nemmeno le ""

let divEtichette = creaElementi("div", "etichette", cardFooter);

let arrayEtichette = ["Hot", "Cold", "Extra-hot"];
for(let i = 0; i<arrayEtichette.length; i++){
    creaElementi("span","", divEtichette, "", "", arrayEtichette[i]);
}

creaElementi ("button", "", cardFooter, "", "", "Acquista");

