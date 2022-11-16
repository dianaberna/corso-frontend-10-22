

function creaNodo(tipo,classe,attributi,padre,contenuto){
  let Elemento=document.createElement(tipo)
  if (classe){
    Elemento.className=classe
  }
  if (attributi){
    Elemento.src=attributi.src;
    Elemento.alt=attributi.alt;
  }
  
  if (padre){
    padre.appendChild(Elemento)
  }
  if(contenuto){
    let Testo= document.createTextNode(contenuto)
    padre.appendChild(Testo)
  } return Elemento
}

let card= creaNodo("div","card","",document.body)
let card_body= creaNodo("div","card-body","",card)
let imgCaffe= creaNodo("img","",{src:"/modulojavascript/parte2 js/esercizio CARD/caffe.jpg",alt:"cappuccino"},card_body)
let divTesto= creaNodo("div","","",card_body)
let h1=creaNodo("h1","","",divTesto,"")
let h1text=creaNodo("h1","","",h1,"Vanilla Latte")
let price=creaNodo("p","","",divTesto,"")
let pricetext=creaNodo("text","","",price,"21k")
let card_footer=creaNodo("div","card-footer","",card)
let etichette=creaNodo("div","etichette","",card_footer)
let arrayetichette=["hot","cold","free"]
for (i=0;i<arrayetichette.length;i++){
  let hotcold=creaNodo("span","","",etichette)
  creaNodo("text","","",hotcold,arrayetichette[i])
}
let button=creaNodo("button","","",card_footer,"")
let buttontext=creaNodo("text","","",button,"Aggiungi")