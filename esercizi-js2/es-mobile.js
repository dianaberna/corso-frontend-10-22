//FUNZIONE PER CREARE UN ELEMENTO (TESTO, IMMAGINE)
function creaElemento(tag, classe, id, contenuto, attributi, genitore){
  let nuovoElemento = document.createElement(tag);
  //Controlla se c'è una classe da attribuire all'elemento
  if (classe != ""){
    nuovoElemento.className = classe;
  }
  if(id != ""){
    nuovoElemento.id = id;
  }
  //A seconda del tipo di elemento (testo, immagine) assegna contenuto o attributi
  if(contenuto){
    let testo = document.createTextNode(contenuto);
    nuovoElemento.appendChild(testo);
  }else if(attributi){
    nuovoElemento.src = attributi[0];
    nuovoElemento.alt = attributi[1];
  }
  //Collega l'elemento figlio a un genitore, assegnandogli così una posizione 
  if(genitore){
    genitore.appendChild(nuovoElemento);
  }else{
    return nuovoElemento;
  }
}


//FUNZIONE AGGIUNGI MEMBRO
function aggiungiMembro(genitore, check){
  let nuovoMembro = creaElemento("div", "", "", "", "", "");
  let cerchio = creaElemento("div", "circle", "", "", "", "", "");
  if(check){
    creaElemento("img", "", "", "", ["/esercizio-mobile/img-mobile/check-circle.png", "Check"], nuovoMembro);
  }else{
    creaElemento("img", "", "", "", ["/esercizio-mobile/img-mobile/pending-circle.png", "Pending"], nuovoMembro);
  }
  nuovoMembro.appendChild(cerchio);
  genitore.appendChild(nuovoMembro);
}


//FUNZIONE AGGIUNGI DEVICE (manca svg!!!)
function aggiungiDevice(genitore, status, colore, numDevice){
  let nuovoDevice = creaElemento("div", "device", "", "", "", "");
  //Controlla lo stato del device: attivo o inattivo
  if(!status){
    nuovoDevice.id = "hidden";
  }
  //Controlla lo stato della luce: verde, gialla
  let light = creaElemento("div", "", "", "", "", "");
  if(colore == "green"){
    light.className = "circle-green";
  }else if(colore == "yellow"){
    light.className = "circle-yellow";
  }
  creaElemento("p", "", "", arrayDevice[numDevice-1].text, "", nuovoDevice);
  nuovoDevice.appendChild(light);
  genitore.appendChild(nuovoDevice);
}

//ARRAY DEVICE (svg???)
let arrayDevice = [
  {
    text: "Lights",
  },
  {
    text: "Sofa",
  },
  {
    text: "Fridge",
  },
  {
    text: "Fan",
  },
  {
    text: "Fridge",
  }
]


/* ----------------------------------------------------------------------------- */


//CONTENITORE MOBILE (DIV, classe "mobile")
let mobile = creaElemento("div", "mobile", "", "", "", "");
document.body.appendChild(mobile);


//CONTENITORE PRIMA SEZIONE (SECTION, id "section_header")
let section1 = creaElemento("section", "", "section_header", "", "", "");

    //Titolo (H1): Living Room
    creaElemento("h1", "", "", "Living Room", "", section1);
    //Paragrafo (P): Lorem ipsum...
    creaElemento("p", "", "", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique quam necessitatibus eius voluptas provident magni. At aperiam quaerat assumenda. Quidem animi sunt cum.", "", section1);
    //Linea (IMG)
    creaElemento("img", "", "", "", ["/esercizio-mobile/img-mobile/line.png", "linea"], section1);  

mobile.appendChild(section1); //collega la sezione1


//CONTENITORE SECONDA SEZIONE (SECTION)
let section2 = creaElemento("section", "", "section_members", "", "", "");

    //CONTENITORE AGGIUNGI INFORMAZIONI (DIV, classe "add_info")
    let divAddInfo1 = creaElemento("div", "add_info", "", "", "", "");

        //TITOLO (H2): Family Members Access
        creaElemento("h2", "", "", "Family Members Access", "", divAddInfo1);
        //PULSANTE AGGIUNGI (IMG)
        creaElemento("img", "", "", "", ["/esercizio-mobile/img-mobile/add-circle.png", "Pulsante aggiungi"], divAddInfo1);

    section2.appendChild(divAddInfo1); //collega il contenitore INFO alla sezione

    //CONTENITORE CERCHI CON I MEMBRI (DIV, classe "all_circle")
    let divAllCircle = creaElemento("div", "all_circle", "", "", "", "");

        //CERCHI dei MEMBRI
        aggiungiMembro(divAllCircle, true);
        aggiungiMembro(divAllCircle, true);
        aggiungiMembro(divAllCircle, true);
        aggiungiMembro(divAllCircle, true);
        aggiungiMembro(divAllCircle, false);

    section2.appendChild(divAllCircle); //collega il contenitore CERCHI alla sezione

    //Paragrafo (P): Lorem ipsum...
    creaElemento("p", "", "", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique quam necessitatibus eius voluptas provident magni. At aperiam quaerat assumenda.", "", section2);
    //Linea (IMG)
    creaElemento("img", "", "", "", ["/esercizio-mobile/img-mobile/line.png", "linea"], section2);  

mobile.appendChild(section2); //collega la sezione2


//CONTENITORE TERZA SEZIONE (SECTION, id "section_device")
let section3 = creaElemento("section", "", "section_device", "", "", "");

    //CONTENITORE AGGIUNGI INFORMAZIONI (DIV, classe "add_info")
    let divAddInfo2 = creaElemento("div", "add_info", "", "", "", "");

        //TITOLO (H2): Devices in living room
        creaElemento("h2", "", "", "Devices in living room", "", divAddInfo2);
        //PULSANTE AGGIUNGI (IMG)
        creaElemento("img", "", "", "", ["/esercizio-mobile/img-mobile/add-circle.png", "Pulsante aggiungi"], divAddInfo2);

    section3.appendChild(divAddInfo2); //collega il contenitore INFO alla sezione

    //CONTENITORE dei DEVICE (DIV, classe "all_device")
    let divAllDevice = creaElemento("div", "all_device", "", "", "", "");

        //DEVICE
        aggiungiDevice(divAllDevice, true, "green", "1");
        aggiungiDevice(divAllDevice, true, "green", "2");
        aggiungiDevice(divAllDevice, true, "green", "3");
        aggiungiDevice(divAllDevice, false, "green", "4");
        aggiungiDevice(divAllDevice, true, "yellow", "5");

    section3.appendChild(divAllDevice); //collega il contenitore DEVICE alla sezione

mobile.appendChild(section3); //collega la sezione3



/*
<!-- MOBILE 1-->
  <div class="mobile">

    <!-- PRIMA SEZIONE-->
    <section id="section_header">

      <h1>Living room</h1>
      <p>Lorem ipsum...</p>
      <img src="./img-mobile/line.png" alt="linea"/>

    </section>


    <!-- SECONDA SEZIONE-->
    <section id="section_members">

      <div class="add_info">
        <h2>Family Members Access</h2>
        <img src="./img-mobile/add-circle.png" alt="pulsante aggiungi"/>
      </div>

      <div class="all_circle"> <!-- contenitore -->
        <div> <!-- cerchio 1 -->
          <div class="circle"></div> 
          <img src="./img-mobile/check-circle.png" alt="pulsante check"/>
        </div>
        <div> <!-- cerchio 2 -->
          <div class="circle"></div>
          <img src="./img-mobile/check-circle.png" alt="pulsante check"/>
        </div>
        <div> <!-- cerchio 3 -->
          <div class="circle"></div> 
          <img src="./img-mobile/check-circle.png" alt="pulsante check"/>
        </div>
        <div> <!-- cerchio 4 -->
          <div class="circle"></div>
          <img src="./img-mobile/pending-circle.png" alt="pulsante check"/>
        </div>
      </div>

      <p>Lorem ipsum...</p>
      <img src="./img-mobile/line.png" alt="linea"/>

    </section>


    <!-- TERZA SEZIONE -->
    <section id="section_device">

      <div class="add_info">
        <h2>Devices in living room</h2>
        <img src="/esercizio-mobile/img-mobile/add-circle.png" alt="pulsante aggiungi"/>
      </div>

      <div class="all_device"> <!-- contenitore -->
        <div class="device"> <!-- device 1 -->
          <div class="circle-green"></div>
            <svg width="48" height="48" viewBox="0 0 43 48" fill="none" xmlns="http://www.w3.org/2000/svg">...</svg>                
            <p>Lights</p>
        </div>
        <div class="device"> <!-- device 2 -->
          <div class="circle-green"></div>
          <svg width="48" height="48" viewBox="0 0 48 28" fill="none" xmlns="http://www.w3.org/2000/svg">...</svg>                           
          <p>Sofa</p>
        </div>
        <div class ="device"> <!-- device 3 -->
          <div class="circle-green"></div>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">...</svg>                     
          <p>Fridge</p>
        </div>
        <div class="device" id="hidden"> <!-- device 4 TRASPARENTE -->
          <div class="circle-green"></div>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">...</svg>                       
          <p>Fan</p>
        </div>
        <div class="device"> <!-- device 5 -->
          <div class="circle-yellow"></div>
          <svg width="48" height="48" viewBox="0 0 48 34" fill="none" xmlns="http://www.w3.org/2000/svg">...</svg>                        
          <p>Fridge</p>
        </div>
      </div>

    </section>

  </div>
*/