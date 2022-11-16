
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

  let arraycards= [
    {
    attributi:{src:"/modulojavascript/parte2 js/esercizio CARD/caffe.jpg",alt:"cappuccino"},
    h1:"Vanilla Latte",
    price: "21 k",
    etichette:["hot","cold","free"],
    button: "Aggiungi"
  },
  {
    attributi:{src:"/modulojavascript/parte2 js/esercizio CARD/caffe.png",alt:"caffè"},
    h1:"Caffè",
    price: "15 k",
    etichette:["hot","cold"],
    button: "Aggiungi"
  }
]
for(let j=0;j<arraycards.length;j++){

  let card= creaNodo("div","card","",document.body)
  let card_body= creaNodo("div","card-body","",card)
  let imgCaffe= creaNodo("img","",arraycards[j].attributi,card_body)
  let divTesto= creaNodo("div","","",card_body)
  let h1=creaNodo("h1","","",divTesto,"")
  let h1text=creaNodo("h1","","",h1,arraycards[j].h1)
  let price=creaNodo("p","","",divTesto,"")
  let pricetext=creaNodo("text","","",price,arraycards[j].price)
  let card_footer=creaNodo("div","card-footer","",card)
  let etichette=creaNodo("div","etichette","",card_footer)

  for (i=0;i<arraycards[j].etichette.length;i++){
    let hotcold=creaNodo("span","","",etichette)
    creaNodo("text","","",hotcold,arraycards[j].etichette[i])
  }
  let button=creaNodo("button","","",card_footer,"")
  let buttontext=creaNodo("text","","",button,arraycards[j].button)}