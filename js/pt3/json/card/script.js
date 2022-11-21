import mioJson from './pippo.json' assert { type: 'json' };
import creaElemento from "./creaElemento.js";

window.addEventListener("load", function(){
    /* console.log(mioJson.arrayCard) */

    for (let i = 0; i < mioJson.arrayCard.length; i++) {
        let card = creaElemento({ tipo: "div", classe: "card" });
    
        let cardBody = creaElemento({ tipo: "div", classe: "card-body" });
    
        creaElemento({
            tipo: "img",
            posizione: cardBody,
            attributi: mioJson.arrayCard[i].cover,
        });
    
        let nuovodivbody = document.createElement("div");
    
        creaElemento({
            tipo: "h1",
            contenuto: mioJson.arrayCard[i].title,
            posizione: nuovodivbody,
        });
        creaElemento({
            tipo: "p",
            contenuto: mioJson.arrayCard[i].price,
            posizione: nuovodivbody,
        });
        cardBody.appendChild(nuovodivbody);
    
        let divCardFooter = creaElemento({ tipo: "div", classe: "card-footer" });
        let divEtichette = creaElemento({ tipo: "div", classe: "etichette" });
    
        for (let j = 0; j < mioJson.arrayCard[i].etichette.length; j++) {
            creaElemento({
                tipo: "span",
                contenuto: mioJson.arrayCard[i].etichette[j],
                posizione: divEtichette,
            });
        }
    
        divCardFooter.appendChild(divEtichette);
    
        creaElemento({
            tipo: "button",
            contenuto: mioJson.arrayCard[i].buttonTitle,
            posizione: divCardFooter,
        });
    
        card.appendChild(cardBody);
        card.appendChild(divCardFooter);
    
        document.body.appendChild(card);
    } 
})


