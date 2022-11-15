let card = document.createElement("div")
card.className = "card"
document.body.appendChild(card)

let divCardBody = document.createElement("div")
divCardBody.className = "card-body"

let img = document.createElement("img")
img.src = "caffe.jpg"
img.alt = "caffe"
divCardBody.appendChild(img)

let divTitoli = document.createElement("div")

let titoloTag = document.createElement("h1")
let titoloTesto = document.createTextNode("Vanilla Latte")
titoloTag.appendChild(titoloTesto)
divTitoli.appendChild(titoloTag)

let paragrafoTag = document.createElement("p")
let paragrafoTesto = document.createTextNode("21K")
paragrafoTag.appendChild(paragrafoTesto)
divTitoli.appendChild(paragrafoTag)

divCardBody.appendChild(divTitoli)

card.appendChild(divCardBody)

let cardFooter = document.createElement("div")
cardFooter.className = "card-footer"

let divEtichette = document.createElement("div")
divEtichette.className = "etichette"

let span1 = document.createElement("span")
let testospan1 = document.createTextNode("Hot")
span1.appendChild(testospan1)
divEtichette.appendChild(span1)

let span2 = document.createElement("span")
let testospan2 = document.createTextNode("Cold")
span2.appendChild(testospan2)
divEtichette.appendChild(span2)

cardFooter.appendChild(divEtichette)

let pulsante = document.createElement("button")
let testoPulsante = document.createTextNode("Aggiungi")
pulsante.appendChild(testoPulsante)
cardFooter.appendChild(pulsante)

card.appendChild(cardFooter)