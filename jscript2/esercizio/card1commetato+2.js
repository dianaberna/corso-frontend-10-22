let card = document.getElementsByClassName("card")[0]

function elementi (tipo, classe, attributi, padre, contenuto) {
    let nuovo_elemento = document.createElement (tipo)
    if (classe) {
        nuovo_elemento.className=classe
    }
    if (attributi) 
    {
        console.log(attributi)

        if (attributi.src) {
            nuovo_elemento.src=attributi.src
        }
        if (attributi.alt) {
            nuovo_elemento.alt=attributi.alt
        }
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
    let card_body = elementi ("div", "card-body")
    elementi("img", "", {src:"/jscript2/esercizio/assets/cappuccino.png",alt:"cappuccino"}, card_body,"")
    let divTesti = elementi ("div", "")
    elementi("h1", "", "", divTesti, "Vanilla latte")
    elementi("p", "", "", divTesti, "21 K")
    card_body.appendChild(divTesti)
    card.appendChild(card_body)
    let card_footer = elementi ("div", "card-footer")
    let etichette = elementi ("div", "etichette")
    elementi("span", "", "", etichette, "Hot")
    elementi("span", "", "", etichette, "Cold")
    card_footer.appendChild(etichette)
    card.appendChild(card_footer)
    elementi("button", "", "", card_footer, "Aggiungi" )
    


/* let card = document.getElementsByClassName("card")[0]
let card_body = document.createElement ("div")
card_body.className="card-body"

let imgCaffe = document.createElement ("img")
imgCaffe.src = "/jscript2/esercizio/assets/cappuccino.png"
card_body.appendChild(imgCaffe)


let divTesti = document.createElement("div")
let h1titolo = document.createElement("h1")
let h1text = document.createTextNode("Vanilla Latte")
h1titolo.appendChild(h1text)
divTesti.appendChild(h1titolo)

let pTitolo = document.createElement("p")
let pText = document.createTextNode("21 K")
pTitolo.appendChild(pText)
divTesti.appendChild(pTitolo)


card_body.appendChild(divTesti)
card.appendChild(card_body)

 */
