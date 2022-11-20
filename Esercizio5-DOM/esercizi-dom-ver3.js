//ARRAY di OGGETTI : ci aiuta a replicare più volte uno stesso oggetto come struttura che magari cambia i dati interni


function elementi(tipo, classe, attributi, padre, contenuto){
    let nuovoElemento = document.createElement (tipo)
    if (classe){
    nuovoElemento.className=classe;
    }
    if (attributi){
        // nuovoElemento.src=source
        if (attributi.src){
            nuovoElemento.src=attributi.src;
        }
        if (attributi.alt) {
            nuovoElemento.alt=attributi.alt;
        }
    }
    if (padre){
        padre.appendChild(nuovoElemento);
    }
    if (contenuto){
    let contenutoTesto=document.createTextNode(contenuto);
    nuovoElemento.appendChild(contenutoTesto);
    }

    // padre.appendChild(nuovoElemento);
    return nuovoElemento;
}

//CREAZIONE OGGETTO CARD
let cardArray = [ //apro quadra per creare array
//primo oggetto tra graffe
{
    immagine: {src:"./assets/caffe.jpeg", alt:"foto caffe"},
    titolo: "Vanilla Latte VER3a",
    paragrafo: "21K",
    etichette: ["Hot", "Cold"],
    pulsante: "Acquista",

},
//secondo oggetto tra graffe
{
    immagine: {src:"./assets/caffe.jpeg", alt:"foto cappuccino"},
    titolo: "Vanilla Latte VER3b",
    paragrafo: "21K",
    etichette: ["Hot", "Cold", "ExtraHot"],
    pulsante: "Acquista",

}
]

for(j=0; j<cardArray.length; j++){

    //tipo, classe, attributi, padre, contenuto

    let cardDiv = elementi("div", "card", "", document.body,"");

    let cardBody = elementi("div", "card-body","", cardDiv,"");


    //tipo, classe, attributi, padre, contenuto
    let nuovaImmagine = elementi("img", "", cardArray[j].immagine, cardBody,"");

    let divTesti = elementi ("div", "", "", cardBody, "");

    let titolo = elementi("h1", "", "", divTesti, cardArray[j].titolo);

    let paragrafo = elementi("p", "", "", divTesti, cardArray[j].paragrafo);
    // cardBody.appendChild(divTesti)
    // card.appendChild(cardBody) NON CI SERVE PERCHè 

    let cardFooter = elementi ("div", "card-footer", "", cardBody, "");

    let divEtichette= elementi ("div", "etichette","", cardFooter,"");

    for (let i=0; i<cardArray[j].etichette.length; i++){
    //prendimi l'oggetto che è in posizione in card array e lo leghi all'altro array
        elementi("span", "", "", divEtichette, cardArray[j].etichette[i]);
    }
    // card_footer.appendChild(etichette)
    // card.appendChild(card_footer)
    elementi("button", "", "", cardFooter, cardArray[j].pulsante);

}

/* classe dentro un tag : è un ATTRIBUTO
<p class="blue" id="pippo"></p>
class e id : sono attributi del nostro TAG
<input type="text" placeholder="Aggiungi">
nuovo_elemento.placeholder=attributi.placeholder
*/