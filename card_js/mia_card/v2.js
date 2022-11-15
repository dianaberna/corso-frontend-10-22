card= document.createElement("div")
card.className="card"
document.body.appendChild(card)

function CreaElemento (tipo,testo, classe, posizione,risorsa, alt){
    let nuovoElemento= document.createElement(tipo)
    if (risorsa!="" && alt!=""){
        nuovoElemento.src=risorsa
        nuovoElemento.alt=alt
    }
    if (classe!=""){
        nuovoElemento.className=classe
    }
    if (testo!=""){
        let TestoNuovoElemento=document.createTextNode(testo)
        nuovoElemento.appendChild(TestoNuovoElemento)
    }
    
    if (posizione!=""){
        return posizione.appendChild(nuovoElemento)
    }else {
        return nuovoElemento
    }
}

card_body= CreaElemento("div","","card-body",card, "","")

cardImg= CreaElemento("img","","",card_body,"caffe.jpg","caffèè")

//cardImg= document.createElement("img")
//cardImg.src="caffe.jpg"
//cardImg.alt="immagine di Caffè"

/* card_body.appendChild(cardImg)

card.appendChild(card_body) */

divTitle=CreaElemento("div","","",card_body,"","")
/* divTitle=document.createElement("div") */
titleH1=CreaElemento("h1", "Vanilla Latte", "",divTitle,"","")
titlePar= CreaElemento("p","21k","",divTitle,"","")

/* titleH1=document.createElement("h1")
textH1=document.createTextNode("Vanilla Latte")
titleH1.appendChild(textH1) */

/* titlePar=document.createElement("p")
textPar=document.createTextNode("21k")
titlePar.appendChild(textPar)

divTitle.appendChild(titleH1)
divTitle.appendChild(titlePar) */

/* card_body.appendChild(divTitle) */
cardFooter=CreaElemento("div","","card-footer",card,"","")
/* cardFooter=document.createElement("div")
cardFooter.className="card-footer" */
divEtichette=CreaElemento("div", "","etichette",cardFooter,"","")
/* divEtichette=document.createElement("div")
divEtichette.className="etichette" */

span1=CreaElemento("span","hot","",divEtichette,"","")
/* span1=document.createElement("span")
textSpan1=document.createTextNode("Hot")
span1.appendChild(textSpan1)
divEtichette.appendChild(span1) */
span2=CreaElemento("span","Cold","",divEtichette,"","")
/* span2=document.createElement("span")
textSpan2=document.createTextNode("Cold")
span2.appendChild(textSpan2)
divEtichette.appendChild(span2)
cardFooter.appendChild(divEtichette) */

bottone=CreaElemento("button","Aggiungi","",cardFooter,"","")
/* bottone=document.createElement("button")
bottoneText=document.createTextNode("Aggiungi")
bottone.appendChild(bottoneText)
cardFooter.appendChild(bottone) */

/* card.appendChild(cardFooter) */