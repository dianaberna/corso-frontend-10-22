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

let arraycard = [
  {
     
        src: "caffe.jpg",
        title: "Vanilla Latte",
        price: "20k",
        buttons: ["Hot", "Cold"],
    
  },
  {
     
        src: "caffe.jpg",
        title: "Mocaccino",
        price: "21k",
        buttons: ["Hot", "Cold"],
    
  },
  {
     
        src: "caffe.jpg",
        title: "Caffè",
        price: "18k",
        buttons: ["Hot"],
    
  },
]

let i = 0;

while (i<arraycard.length) {
    let card = elementi("div", "card", "","", document.body, "");

    let cardbody= elementi("div", "card-body","","", card, "");

    let cardimg= elementi("img", "", arraycard[i].src, "caffe", cardbody, "" );

    let newdiv= elementi("div","","","",cardbody,"");

    let cardtitle= elementi("h1","","","", newdiv, arraycard[i].title)

    let cardparagraph= elementi("p","","","", newdiv, arraycard[i].price)

    let cardfooter= elementi("div", "card-footer", "","", card, "");

    let buttons= elementi("div", "etichette", "","", cardfooter, "");
    
    for( let i2=0; i2<arraycard[i].buttons.length; i2 ++){

    let span= elementi("span", "","","", buttons, arraycard[i].buttons[i2])};

    let aggiungi= elementi("button","","","", cardfooter, "Aggiungi")

    i++
}
