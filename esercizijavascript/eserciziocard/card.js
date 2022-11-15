let card = document.createElement ("div")
card.className= "card"
document.body.appendChild (card)


let cardbody = document.createElement ("div")
cardbody.className= "card-body"
card.appendChild (cardbody)


let img = document.createElement ("img")
img.src = "caffe.jpg"
img.alt = "caffe"
cardbody.appendChild(img)

let testo = document.createElement ("div")

let titolo = document.createElement ("h1")
let testotitolo = document.createTextNode ("Vanilla Latte")
titolo.appendChild (testotitolo)
testo.appendChild (titolo)

cardbody.appendChild (testo)




let paragrafo = document.createElement ("p")
let testoparagrafo = document.createTextNode ("21K")
paragrafo.appendChild (testoparagrafo)
testo.appendChild (paragrafo)



let footer = document.createElement ("div")
footer.className = "card-footer"
cardbody.appendChild (footer)

let etichette = document.createElement("div")
etichette.className = "etichette"

let span1 = document.createElement("span")
let testospan1 = document.createTextNode("Hot")
span1.appendChild (testospan1)
etichette.appendChild (span1)

let span2 = document.createElement("span")
let testospan2 = document.createTextNode("Cold")
span2.appendChild(testospan2)
etichette.appendChild(span2)

footer.appendChild(etichette)


let spanfooter = document.createElement ("span")
footer.appendChild (spanfooter)

let button = document.createElement ("button")
footer.appendChild (button)

let pulsante = document.createElement ("button")
let testopulsante = document.createTextNode ("Aggiungi")
pulsante.appendChild (testopulsante)
footer.appendChild (pulsante)