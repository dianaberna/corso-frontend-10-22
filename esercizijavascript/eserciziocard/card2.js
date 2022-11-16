function elementi (tipo, classe, src, alt, posizione, contenuto){
    
    let elemento = document.createElement (tipo)
    
   
     if (classe){
        elemento.className= classe
     }
     if (posizione){
        posizione.appendChild (elemento)
     }
     if (src && alt){
        elemento.src= src
        elemento.alt = alt
     }
      if (contenuto){
        let testoelemento= document.createTextNode (contenuto)
        elemento.appendChild (testoelemento)
     }
    
     return elemento
}

let card=elementi("div","card","","",document.body)

// let card = document.createElement ("div")
// card.className= "card"
// document.body.appendChild (card)


let cardbody = elementi("div", "card-body","","",card)

// let cardbody = document.createElement ("div")
// cardbody.className= "card-body"
// card.appendChild (cardbody)

let img= elementi("img","","caffe.jpg","caffe",cardbody)

// let img = document.createElement ("img")
// img.src = "caffe.jpg"
// img.alt = "caffe"
// cardbody.appendChild(img)

// let testo = document.createElement ("div")

let testo = elementi("div", "","","",cardbody)

// let titolo = document.createElement ("h1")
// let testotitolo = document.createTextNode ("Vanilla Latte")
// titolo.appendChild (testotitolo)
// testo.appendChild (titolo)

let titolo= elementi("h1","","","",testo, "Vanilla Latte")

cardbody.appendChild (testo)


let paragrafo = elementi("p","","","",testo,"21k")

// let paragrafo = document.createElement ("p")
// let testoparagrafo = document.createTextNode ("21K")
// paragrafo.appendChild (testoparagrafo)
// testo.appendChild (paragrafo)


let footer= elementi("div","card-footer","","",cardbody,"")

// let footer = document.createElement ("div")
// footer.className = "card-footer"
// cardbody.appendChild (footer)

let etichette = document.createElement("div")
etichette.className = "etichette"

let span1 = document.createElement("span")
let testospan1 = document.createTextNode("Hot")
span1.appendChild (testospan1)
etichette.appendChild (span1)

let span2= elementi("span","","","",etichette,"Cold")

// let span2 = document.createElement("span")
// let testospan2 = document.createTextNode("Cold")
// span2.appendChild(testospan2)
// etichette.appendChild(span2)

footer.appendChild(etichette)


let spanfooter = document.createElement ("span")
footer.appendChild (spanfooter)

let button = document.createElement ("button")
footer.appendChild (button)

let pulsante = elementi("button", "","","",footer, "Aggiugni")

// let pulsante = document.createElement ("button")
// let testopulsante = document.createTextNode ("Aggiungi")
// pulsante.appendChild (testopulsante)
// footer.appendChild (pulsante)