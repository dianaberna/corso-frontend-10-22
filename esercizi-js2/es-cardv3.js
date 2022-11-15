//FUNZIONE PER CREARE UN ELEMENTO (TESTO, IMMAGINE)
function creaElemento(tag, classe, contenuto, attributi, genitore){
  let nuovoElemento = document.createElement(tag);
  //Controlla se c'è una classe da attribuire all'elemento
  if (classe != ""){
    nuovoElemento.className = classe;
  }
  //A seconda del tipo di elemento (testo, immagine) assegna contenuto o attributi
  if(contenuto){
    let testo = document.createTextNode(contenuto);
    nuovoElemento.appendChild(testo);
  }else if(attributi.src && attributi.alt){
    nuovoElemento.src = attributi.src;
    nuovoElemento.alt = attributi.alt;
  }
  //Collega l'elemento figlio a un genitore, assegnandogli così una posizione 
  if(genitore){
    genitore.appendChild(nuovoElemento);
  }else{
    return nuovoElemento;
  }
}


//ARRAY DI CARD
let arrayCard = [
  {
    cover: {src: "caffe.jpg", alt: "Immagine Vanilla Latte"},
    title: "Vanilla Latte",
    price: "21K",
    labels: ["Hot", "Cold"],
    buttonText: "Aggiungi"
  },
  {
    cover: {src: "espresso.jpg", alt: "Immagine Cappuccino"},
    title: "Espresso",
    price: "12K",
    labels: ["Hot", "Cold"],
    buttonText: "Aggiungi"
  },
  {
    cover: {src: "latte.jpg", alt: "Immagine Hazelnut Latte"},
    title: "Hazelnut Latte",
    price: "23K",
    labels: ["Hot", "Cold"],
    buttonText: "Aggiungi"
  }
];


//CICLO CHE SCORRE L'ARRAY DI CARD
for(let i=0; i<arrayCard.length; i++){

  let card = creaElemento("div", "card", "", "", ""); //contenitore della card (DIV, classe "card")
  
      let cardBody = creaElemento("div", "card-body", "", "", ""); //contenitore card body (DIV, classe "card-body")
          
          creaElemento("img", "", "", arrayCard[i].cover, cardBody); //immagine card

          let titolo = creaElemento("div", "", "", "", ""); //contenitore titolo: nome card + prezzo (DIV)

              creaElemento("h1", "", arrayCard[i].title, "", titolo); //titolo card

              creaElemento("p", "", arrayCard[i].price, "", titolo); //prezzo card

          cardBody.appendChild(titolo);

      let cardFooter = creaElemento("div", "card-footer", "", "", ""); //contenitore card footer (DIV, classe "card-footer")
            
          let etichette = creaElemento("div", "etichette", "", "", ""); //contenitore etichette: "hot", "cold" (DIV)

              //Ciclo per creare le etichette
              for(let j=0; j<arrayCard[i].labels.length; j++){
                creaElemento("span", "", arrayCard[i].labels[j], "", etichette);
              }

          cardFooter.appendChild(etichette);

          creaElemento("button", "", arrayCard[i].buttonText, "", cardFooter); //pulsante

        
      card.appendChild(cardBody);
      card.appendChild(cardFooter);
  document.body.appendChild(card);

}
