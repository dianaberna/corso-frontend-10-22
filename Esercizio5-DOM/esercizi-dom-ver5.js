//function creaElementi (tag, posizione, testo, attributi)
//ATTRIBUTI sarà uguale a {src:"", alt:"", classe:""} incastriamo così tutti gli attributi nella variabile creata ATTRIBUTI
//PARAMETRI: conterrà l'oggetto {tag:"", posizione:"", testo:"", attributi:""} e ATTRIBUTI conterrà a sua volta {src:"", alt:"", classe:""} 

function creaElementi(parametri) {
    let nuovoElemento = document.createElement(parametri.tag);

    if (parametri.attributi){
    if (parametri.attributi.classe) {
        nuovoElemento.className = parametri.attributi.classe;
    }

    if (parametri.attributi.src && parametri.attributi.alt) {
        nuovoElemento.src = parametri.attributi.src ;
        nuovoElemento.alt = parametri.attributi.alt;
    }
    }   //fine IF se esiste ATTRIBUTI

    if (parametri.testo) {
        let testoElemento = document.createTextNode(parametri.testo);
        nuovoElemento.appendChild(testoElemento);
    }

    parametri.posizione.appendChild(nuovoElemento);

    return nuovoElemento;
}



let cardArray = [
    {
        immagine: { src: "./assets/caffe.jpeg", alt: "caffe" },
        titolo: "Card1 Latte ver5",
        paragrafo: "21K",
        etichette: ["Hot", "Cold", "Card1"],
        pulsante: "compra",
    },
    {
        immagine: { src: "./assets/caffe.jpeg", alt: "caffe" },
        titolo: "Card2 Latte ver5",
        paragrafo: "45K",
        etichette: ["Hot", "Cold", "Card2"],
        pulsante: "aggiungi",
    },
    {
        immagine: { src: "./assets/caffe.jpeg", alt: "caffe" },
        titolo: "Card3 Latte ver5",
        paragrafo: "60K",
        etichette: ["Hot", "Cold", "Card3"],
        pulsante: "ordina",
    }

];

//tag, posizione, testo, attributi
//src:"",alt:"",classe:""

for (j = 0; j < cardArray.length; j++) {
    
    //let divCard = creaElementi("div", document.body, "", {classe:"card"});
    let divCard = creaElementi({tag:"div", posizione:document.body,attributi:{classe:"card"}});
    
    //let divCardBody = creaElementi("div", divCard, "", {classe:"card"});
    let divCardBody = creaElementi({tag:"div", posizione:divCard,attributi:{classe:"card-body"}});
    
    
    /*creaElementi( //let nuovaImmagine = creaElementi non importa perchè non ci interessa sia variabile ma subito nodo --- infatti JS colora di grigino le variabili
        "img",
        divCardBody,
        {src:cardArray[j].immagine.src,
         alt:cardArray[j].immagine.alt}
    );*/
    
    //richiamo immagine
    creaElementi({
        tag:"img",
        posizione: divCardBody,
        attributi:{
            src:cardArray[j].immagine.src,
            alt:cardArray[j].immagine.alt
        }
    });


    
    //let divTitoli = creaElementi("div", divCardBody); //non c'è testo nè attributi
    let divTitoli = creaElementi({tag:"div", posizione:divCardBody});

    //creaElementi("h1", divTitoli, cardArray[j].titolo); //non ci sono attributi e poi let titolo = creaElementi
    creaElementi({tag:"h1", posizione:divTitoli, testo:cardArray[j].titolo});


    //creaElementi("p", divTitoli, cardArray[j].paragrafo); //let paragrafo
    creaElementi({tag:"p", posizione:divTitoli, testo:cardArray[j].paragrafo});

    //let cardFooter = creaElementi("div", divCardBody, "", {classe:"card-footer"});
    let cardFooter = creaElementi({tag:"div", posizione:divCardBody, attributi:{classe:"card-footer"}});
    // in questo caso NON c'è l'attributo TESTO, ma io non lo indico e basta, non vuole le "" vuote

    
   // let divEtichette = creaElementi("div", cardFooter,"", {classe:"etichette"});
    let divEtichette = creaElementi({tag:"div", posizione:cardFooter, attributi:{classe:"etichette"}});

    /*for (let i = 0; i < cardArray[j].etichette.length; i++) {
        creaElementi("span", divEtichette, cardArray[j].etichette[i]);
    }*/
    for (let i = 0; i < cardArray[j].etichette.length; i++) {
        //creaElementi("span", divEtichette, cardArray[j].etichette[i]);
        creaElementi({tag:"span", posizione:divEtichette, testo:cardArray[j].etichette[i]});
    }

    //creaElementi("button", cardFooter, cardArray[j].pulsante);
    creaElementi({tag:"button", posizione:cardFooter, testo:cardArray[j].pulsante});
}
