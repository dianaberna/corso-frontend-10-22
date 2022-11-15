/*
<div class="card">
    <div class="card-body">
        <img src="caffe.jpg" alt="caffe">
        <div>
            <h1>Vanilla Latte</h1>
            <p>21K</p>
        </div>
    </div>
    <div class="card-footer">
        <div class="etichette">
            <span>Hot</span>
            <span>Cold</span>
        </div>
        <button>Aggiungi</button>
    </div>
</div>
*/


//FUNZIONE PER CREARE UN ELEMENTO (TESTO, IMMAGINE)
function creaElemento(tag, classe, contenuto, attributi, genitore){
  let nuovoElemento = document.createElement(tag);
  nuovoElemento.className = classe;
  //attributi immagine = array ["src", "alt"] 
  if(attributi){
    nuovoElemento.src = attributi[0];
    nuovoElemento.alt = attributi[1];
  }else{
    if(contenuto){
      let testo = document.createTextNode(contenuto);
      nuovoElemento.appendChild(testo);
    }
  }
  if(genitore){
    genitore.appendChild(nuovoElemento);
  }else{
    return nuovoElemento;
  }
}


//CONTENITORE CARD (DIV, classe "card")
let card = creaElemento("div", "card", "", "", "");
document.body.appendChild(card);

    //CONTENITORE CARD BODY (DIV, classe "card-body")
    let cardBody = creaElemento("div", "card-body", "", "", "");

        //IMMAGINE
        let img = creaElemento("img", "", "", ["caffe.jpg", "Immagine Vanilla Latte"], cardBody);

        //CONTENITORE TITOLO (DIV)
        let titolo = creaElemento("div", "", "", "", "");

            //TITOLO: VANILLA LATTE
            let titoloTesto = creaElemento("h1", "", "VanillaLatte", "", titolo);

            //PARAGRAFO: 21K
            let paragrafoTesto = creaElemento("p", "", "21K", "", titolo);

        cardBody.appendChild(titolo);

    card.appendChild(cardBody);

    //CONTENITORE CARD FOOTER (DIV, classe "card-footer")
    let cardFooter = creaElemento("div", "card-footer", "", "", "");

        //CONTENITORE ETICHETTE (DIV, classe "etichette")
        let etichette = creaElemento("div", "etichette", "", "", "");

            //ETICHETTE: "HOT", "COLD"
            let span1Testo = creaElemento("span", "", "Hot", "", etichette);

            let span2Testo = creaElemento("span", "", "Cold", "", etichette);

        cardFooter.appendChild(etichette);

        //PULSANTE
        let pulsante = creaElemento("button", "", "Aggiungi", "", cardFooter);

    card.appendChild(cardFooter);