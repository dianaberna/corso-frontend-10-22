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


//CONTENITORE CARD (DIV, classe "card")
let card = document.createElement("div");
card.className = "card";
document.body.appendChild(card);

    //CONTENITORE CARD BODY (DIV, classe "card-body")
    let cardBody = document.createElement("div");
    cardBody.className = "card-body";

        //IMMAGINE
        let img = document.createElement("img");
        img.src = "caffe.jpg";
        img.alt = "Immagine Vanilla Latte";
        cardBody.appendChild(img);

        //CONTENITORE TITOLO (DIV)
        let titolo = document.createElement("div");

            //TITOLO: VANILLA LATTE
            let titoloTag = document.createElement("h1");
            let titoloTesto = document.createTextNode("Vanilla Latte");
            titoloTag.appendChild(titoloTesto);
            titolo.appendChild(titoloTag);

            //PARAGRAFO: 21K
            let paragrafoTag = document.createElement("p");
            let paragrafoTesto = document.createTextNode("21K");
            paragrafoTag.appendChild(paragrafoTesto);
            titolo.appendChild(paragrafoTag);

        cardBody.appendChild(titolo);

    card.appendChild(cardBody);

    //CONTENITORE CARD FOOTER (DIV, classe "card-footer")
    let cardFooter = document.createElement("div");
    cardFooter.className = "card-footer";

        //CONTENITORE ETICHETTE (DIV, classe "etichette")
        let etichette = document.createElement("div");
        etichette.className = "etichette";

            //ETICHETTE: "HOT", "COLD"
            let span1Tag = document.createElement("span");
            let span1Testo = document.createTextNode("Hot");
            span1Tag.appendChild(span1Testo);
            etichette.appendChild(span1Tag);

            let span2Tag = document.createElement("span");
            let span2Testo = document.createTextNode("Cold");
            span2Tag.appendChild(span2Testo);
            etichette.appendChild(span2Tag);

        cardFooter.appendChild(etichette);

        //PULSANTE
        let pulsanteTag = document.createElement("button");
        let pulsanteTesto = document.createTextNode("Aggiungi");
        pulsanteTag.appendChild(pulsanteTesto);
        cardFooter.appendChild(pulsanteTag);

    card.appendChild(cardFooter);