card= document.createElement("div")
card.className="card"
document.body.appendChild(card)

card_body= document.createElement("div")
card_body.className="card-body"

cardImg= document.createElement("img")
cardImg.src="caffe.jpg"
cardImg.alt="immagine di Caffè"

card_body.appendChild(cardImg)

card.appendChild(card_body)

divTitle=document.createElement("div")
titleH1=document.createElement("h1")
textH1=document.createTextNode("Vanilla Latte")
titleH1.appendChild(textH1)

titlePar=document.createElement("p")
textPar=document.createTextNode("21k")
titlePar.appendChild(textPar)

divTitle.appendChild(titleH1)
divTitle.appendChild(titlePar)

card_body.appendChild(divTitle)

cardFooter=document.createElement("div")
cardFooter.className="card-footer"

divEtichette=document.createElement("div")
divEtichette.className="etichette"

span1=document.createElement("span")
textSpan1=document.createTextNode("Hot")
span1.appendChild(textSpan1)
divEtichette.appendChild(span1)

span2=document.createElement("span")
textSpan2=document.createTextNode("Cold")
span2.appendChild(textSpan2)
divEtichette.appendChild(span2)
cardFooter.appendChild(divEtichette)


bottone=document.createElement("button")
bottoneText=document.createTextNode("Aggiungi")
bottone.appendChild(bottoneText)
cardFooter.appendChild(bottone)

card.appendChild(cardFooter)