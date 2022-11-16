//creazione card
console.log("esercizio card")


let card= document.createElement("div")
card.className="card"
let card_body= document.createElement("div")
card_body.className="card-body"
document.body.appendChild(card)
card.appendChild(card_body)




let imgCaffe=document.createElement ("img")
imgCaffe.src="/modulojavascript/parte2 js/esercizio CARD/caffe.jpg"
alt="immagine caffe"
card_body.appendChild(imgCaffe)

let divTesto=document.createElement("div")
card_body.appendChild(divTesto)
let h1=document.createElement("h1")
divTesto.appendChild(h1)
let h1text=document.createTextNode("Vanilla Latte")
h1.appendChild(h1text)
let price=document.createElement("p")
divTesto.appendChild(price)
let pricetext=document.createTextNode("21K")
price.appendChild(pricetext)

let card_footer=document.createElement("div")
card_footer.className="card-footer"
card.appendChild(card_footer)

let etichette=document.createElement("div")
etichette.className="etichette" 

let arrayetichette=["hot","cold","free"]
for (i=0;i<arrayetichette.length;i++){
  
let hotcold=document.createElement("span");
let etichetteText=document.createTextNode(arrayetichette[i]);

hotcold.appendChild(etichetteText);
etichette.appendChild(hotcold)

}

card_footer.appendChild(etichette)
/*
let hot=document.createElement("span")
let hottext=document.createTextNode("Hot")
let cold=document.createElement("span")
let coldtext=document.createTextNode("Cold")
etichette.appendChild(hot)
hot.appendChild(hottext)
etichette.appendChild(cold)
cold.appendChild(coldtext)*/

let button=document.createElement("button")
let buttontext=document.createTextNode("Aggiungi")
card_footer.appendChild(button)
button.appendChild(buttontext)

