//creazione card
console.log("esercizio card")


let card= document.getElementsByClassName("card")[0]
let card_body= document.createElement("div")
card_body.className="card-body"
card.appendChild(card_body)




let imgCaffe=document.createElement ("img")
imgCaffe.src="/modulojavascript/parte2 js/caffe.jpg"
card_body.appendChild(imgCaffe)

let divTesto=document.createElement("div")
let h1=document.createElement("h1")
let h1text=document.createTextNode("Vanilla Latte")
let price=document.createElement("p")
let pricetext=document.createTextNode("21K")
card_body.appendChild(divTesto)
divTesto.appendChild(h1)
h1.appendChild(h1text)
divTesto.appendChild(price)
price.appendChild(pricetext)

let card_footer=document.createElement("div")
card_footer.className="card-footer"
card.appendChild(card_footer)

let etichette=document.createElement("div")
etichette.className="etichette"
card_footer.appendChild(etichette)

let hot=document.createElement("span")
let hottext=document.createTextNode("Hot")
let cold=document.createElement("span")
let coldtext=document.createTextNode("Cold")
etichette.appendChild(hot)
hot.appendChild(hottext)
etichette.appendChild(cold)
cold.appendChild(coldtext)

let button=document.createElement("button")
let buttontext=document.createTextNode("Aggiungi")
card_footer.appendChild(button)
button.appendChild(buttontext)