let card = document.getElementsByClassName("card")[0]

function nodi (tipo, classe, contenuto){
    let nuovoElemento = document.createElement (tipo)
    nuovoElemento.className=classe
    return nuovoElemento

}

let card_body = nodi ("div", "card-body", "")

function elementi(tipo, classe, source, padre){
    let nuovoElemento = document.createElement (tipo)
    nuovoElemento.className=classe
    nuovoElemento.src=source
    padre.appendChild(nuovoElemento)
    let contenutoTesto=document.createTextNode(contenuto)
    nuovoElemento.appendChild(contenutoTesto)
    
}

elementi("img", "./assets/caffe.jpg", card-body)
let divTesti = nodi ("div", "")
elementi("h1", "", "", divTesti, "Vanilla latte")
elementi("p", "", "", divTesti, "21K")
card_body.appendChild(divTesti)
card.appendChild(card_body)
let card_footer = nodi ("div", "card_footer")
let etichette= nodi ("div", "etichette")
elementi("span", "", "", etichette,"Hot")
elementi("span", "", "", etichette,"Cold")
card_footer.appendChild(etichette)
card.appendChild(card_footer)
elementi("button", "", "", card_footer, "Aggiungi")

