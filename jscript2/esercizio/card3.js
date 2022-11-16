function elementi (tipo, classe, attributi, padre, contenuto) {
    let nuovo_elemento = document.createElement (tipo)
    if (classe) {
        nuovo_elemento.className=classe
    }
    if (attributi) 
    {

        if (attributi.src) {
            nuovo_elemento.src=attributi.src
        }
        if (attributi.alt) {
            nuovo_elemento.alt=attributi.alt
        }
        if (attributi.placeholder) {
        nuovo_elemento.placeholder=attributi.placeholder }
        
    }
    if (padre) {
        padre.appendChild(nuovo_elemento)
    }
    if (contenuto) {
        let contenutoTesto = document.createTextNode(contenuto)
        nuovo_elemento.appendChild(contenutoTesto)
    }
    return nuovo_elemento
    
}

let cardArray = 
[{
    attributi:{src:"/jscript2/esercizio/assets/cappuccino.png",alt:"cappuccino"},
    titolo: "Vanilla latte",
    paragrafo: "21 K",
    etichette: ["Hot","Cold", "Tiepido"]
},
{
    attributi:{src:"/jscript2/esercizio/assets/cappuccino.png",alt:"cappuccino"},
    titolo: "Caffè",
    paragrafo: "20 K",
    etichette: ["Hot", "Tiepido"]
},
{
    attributi:{src:"/jscript2/esercizio/assets/cappuccino.png",alt:"cappuccino"},
    titolo: "Latte",
    paragrafo: "20 K",
    etichette: ["Hot", "Tiepido","Buono"]
}]
for(let j=0; j<cardArray.length; j++) {
    let cardDiv = elementi("div","card","",document.body,"")
    let card_body = elementi ("div", "card-body","",cardDiv, "")
    elementi("img", "", cardArray[j].attributi, card_body,"")
    let divTesti = elementi ("div", "", "",card_body,"")
    elementi("h1", "", "", divTesti, cardArray[j].titolo)
    elementi("p", "", "", divTesti, cardArray[j].paragrafo)

    let card_footer = elementi ("div", "card-footer","",cardDiv,"")
    let etichette = elementi ("div", "etichette","",card_footer,"")
    
    
    for(let i=0; i<cardArray[j].etichette.length; i++) {
    elementi("span", "", "", etichette, cardArray[j].etichette[i])
    }
    elementi("button", "", "", card_footer, "Aggiungi" )
    elementi("input","",{placeholder:"Scrivi qui", class:"card1"}, card_footer,"") // Aggiunta
}



