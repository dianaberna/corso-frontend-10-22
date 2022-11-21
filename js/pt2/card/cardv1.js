console.log("cardv1")

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

/* let svgPlus = "<svg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M13 8H8V13C8 13.55 7.55 14 7 14C6.45 14 6 13.55 6 13V8H1C0.45 8 0 7.55 0 7C0 6.45 0.45 6 1 6H6V1C6 0.45 6.45 0 7 0C7.55 0 8 0.45 8 1V6H13C13.55 6 14 6.45 14 7C14 7.55 13.55 8 13 8Z' fill='#161616'/></svg>";
pulsante.innerHTML = svgPlus; */

let testoPulsante = document.createTextNode("Aggiungi")
pulsante.appendChild(testoPulsante)

cardFooter.appendChild(pulsante)

card.appendChild(cardFooter)


