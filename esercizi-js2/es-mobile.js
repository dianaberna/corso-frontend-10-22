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


//FUNZIONE AGGIUNGI DEVICE
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
  nuovoDevice.insertAdjacentHTML("afterbegin", arrayDevice[numDevice-1].img);
  nuovoDevice.appendChild(light);
  genitore.appendChild(nuovoDevice);
}

//ARRAY DEVICE
let arrayDevice = [
  {
    text: "Lights",
    img: '<svg width="48" height="48" viewBox="0 0 43 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.7284 4.64439C26.379 4.47306 25.9569 4.61743 25.7857 4.96675C25.6145 5.31607 25.7587 5.73809 26.1082 5.90942C28.7607 7.21014 30.7193 9.58541 31.4815 12.4262C31.5825 12.8023 31.9692 13.0249 32.3445 12.924C32.7204 12.8232 32.9432 12.4368 32.8425 12.061C31.9746 8.82731 29.7461 6.12404 26.7284 4.64439Z" fill="black"/><path d="M3.83229 14.9261C3.83229 14.5371 3.51697 14.2217 3.12783 14.2217H0.704466C0.315319 14.2217 0 14.5371 0 14.9261C0 15.3152 0.315319 15.6306 0.704466 15.6306H3.12783C3.51688 15.6306 3.83229 15.3152 3.83229 14.9261Z" fill="black"/><path d="M4.31923 9.84338L2.05349 8.98346C1.68998 8.84558 1.28299 9.02836 1.14492 9.39215C1.00684 9.75593 1.18982 10.1627 1.5536 10.3007L3.81935 11.1606C4.1836 11.2987 4.59003 11.1154 4.72792 10.752C4.86599 10.3883 4.68302 9.98146 4.31923 9.84338Z" fill="black"/><path d="M3.81931 18.6924L1.55356 19.5524C1.18978 19.6904 1.0069 20.0972 1.14488 20.4609C1.28277 20.8245 1.68929 21.0077 2.05345 20.8696L4.3192 20.0097C4.68298 19.8716 4.86586 19.4648 4.72788 19.1011C4.5899 18.7373 4.183 18.5546 3.81931 18.6924Z" fill="black"/><path d="M41.7642 14.2217H39.3407C38.9515 14.2217 38.6362 14.5371 38.6362 14.9261C38.6362 15.3152 38.9515 15.6306 39.3407 15.6306H41.7642C42.1533 15.6306 42.4686 15.3152 42.4686 14.9261C42.4686 14.5371 42.1532 14.2217 41.7642 14.2217Z" fill="black"/><path d="M38.6492 11.1606L40.9149 10.3007C41.2787 10.1627 41.4616 9.75585 41.3236 9.39216C41.1856 9.02828 40.7786 8.84559 40.415 8.98347L38.1493 9.84339C37.7855 9.98147 37.6026 10.3883 37.7406 10.752C37.8785 11.1155 38.285 11.2986 38.6492 11.1606Z" fill="black"/><path d="M40.915 19.5524L38.6492 18.6924C38.2856 18.5546 37.8786 18.7373 37.7406 19.1011C37.6025 19.4649 37.7855 19.8717 38.1493 20.0097L40.4151 20.8696C40.7793 21.0077 41.1857 20.8244 41.3236 20.4609C41.4616 20.0972 41.2787 19.6904 40.915 19.5524Z" fill="black"/><path d="M22.8002 1.40473C29.1622 2.11324 34.2148 7.03707 35.0872 13.3785C35.14 13.7626 35.4938 14.0333 35.881 13.9804C36.2665 13.9274 36.5359 13.5719 36.4829 13.1865C36.0207 9.82628 34.4231 6.66502 31.9844 4.28506C29.5417 1.90096 26.3353 0.380722 22.9561 0.00434968C22.5693 -0.0384818 22.221 0.239829 22.178 0.626533C22.1349 1.01324 22.4134 1.36162 22.8002 1.40473Z" fill="black"/><path d="M35.9278 15.8684C35.5419 15.8358 35.1991 16.1226 35.1659 16.5102C34.783 20.9869 32.24 25.0339 28.3632 27.3356C27.3743 27.9227 26.7599 28.9951 26.759930.1343V32.9154H23.7785V27.3153C23.7785 26.9918 23.8875 26.6726 24.0853 26.4166L25.0935 25.1113C25.4807 24.61 25.694 23.9849 25.694 23.3513V18.2577C26.083 18.2575 26.3981 17.9421 26.3981 17.5532C26.3981 17.1642 26.083 16.8489 25.694 16.8487V16.7719C25.694 16.3828 25.3787 16.0674 24.9896 16.0674C24.6004 16.0674 24.2851 16.3828 24.2851 16.7719V16.8486H18.1835V16.7719C18.1835 16.3828 17.8682 16.0674 17.479 16.0674C17.0899 16.0674 16.7746 16.3828 16.7746 16.7719V16.8486C16.3856 16.8488 16.0704 17.1641 16.0704 17.5531C16.0704 17.9421 16.3856 18.2574 16.7746 18.2576V23.3512C16.7746 23.9848 16.9879 24.6099 17.3751 25.1113L18.3833 26.4164C18.581 26.6725 18.6901 26.9917 18.6901 27.3152V32.9153H15.7088V30.1343C15.7088 28.9924 15.1038 27.9255 14.1298 27.3499C9.88575 24.8417 7.24936 20.2254 7.24926 15.3025C7.24917 8.17281 12.5885 2.19848 19.6691 1.40563C20.0557 1.36233 20.334 1.01376 20.2907 0.627146C20.2474 0.240535 19.9 -0.0379631 19.5122 0.00543196C15.7788 0.42379 12.3286 2.20167 9.79698 5.01192C7.2455 7.84425 5.84024 11.4989 5.84033 15.3028C5.84052 20.9171 8.85657 25.8702 13.4129 28.563C13.9599 28.8863 14.2997 29.4885 14.2997 30.1345V33.318C13.8522 33.6666 13.5626 34.209 13.5626 34.8189V35.8594C13.5626 36.3136 13.723 36.7307 13.9895 37.0583C13.723 37.3859 13.5626 37.803 13.5626 38.2572V39.2978C13.5626 40.0482 14.0001 40.6966 14.6325 41.0063C14.549 41.2204 14.5014 41.4523 14.5014 41.6956V42.7361C14.5014 43.7856 15.3552 44.6395 16.4048 44.6395H17.6901C17.7883 46.5093 19.3404 48.0004 21.2343 48.0004C23.1281 48.0004 24.6802 46.5092 24.7784 44.6395H26.0637C27.1133 44.6395 27.9671 43.7857 27.9671 42.7361V41.6956C27.9671 41.4523 27.9195 41.2204 27.836 41.0063C28.4683 40.6966 28.9059 40.0482 28.9059 39.2978V38.2572C28.9059 37.8031 28.7455 37.3859 28.479 37.0583C28.7455 36.7308 28.9059 36.3137 28.9059 35.8594V34.8189C28.9059 34.2089 28.6163 33.6665 28.1688 33.318V30.1344C28.1688 29.49 28.5189 28.8818 29.0825 28.5472C33.3492 26.0138 36.1482 21.559 36.5697 16.6303C36.6028 16.2426 36.3154 15.9015 35.9278 15.8684V15.8684ZM18.4902 24.2503C18.2925 23.9943 18.1835 23.6751 18.1835 23.3515V18.2578H24.2851V23.3515C24.2851 23.6751 24.1762 23.9943 23.9784 24.2502L22.9703 25.5554C22.5829 26.0569 22.3696 26.682 22.3696 27.3155V32.9156H20.0989V27.3155C20.0989 26.682 19.8856 26.0569 19.4982 25.5554L18.4902 24.2503ZM21.2342 46.5914C20.1175 46.5914 19.1978 45.7318 19.1022 44.6395H23.3663C23.2707 45.7317 22.351 46.5914 21.2342 46.5914ZM26.5582 42.7361C26.5582 43.0087 26.3364 43.2306 26.0637 43.2306C24.8887 43.2306 17.2721 43.2306 16.4048 43.2306C16.1322 43.2306 15.9103 43.0088 15.9103 42.7361V41.6956C15.9103 41.423 16.1321 41.2011 16.4048 41.2011H26.0637C26.3363 41.2011 26.5582 41.4229 26.5582 41.6956V42.7361ZM27.497 39.2978C27.497 39.5704 27.2752 39.7922 27.0025 39.7922C26.4636 39.7922 15.806 39.7922 15.466 39.7922C15.1934 39.7922 14.9715 39.5704 14.9715 39.2978V38.2572C14.9715 37.9846 15.1933 37.7628 15.466 37.7628H27.0025C27.2751 37.7628 27.497 37.9846 27.497 38.2572V39.2978ZM27.497 35.8594C27.497 36.132 27.2752 36.3539 27.0025 36.3539H15.466C15.1934 36.3539 14.9715 36.1321 14.9715 35.8594V34.8189C14.9715 34.5383 15.2069 34.3244 15.466 34.3244H27.0025C27.273 34.3244 27.497 34.5482 27.497 34.8189V35.8594Z" fill="black"/></svg>'
  },
  {
    text: "Sofa",
    img: '<svg width="48" height="48" viewBox="0 0 48 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M45.6211 7.92798H44.6675V4.38377C44.6675 2.28855 42.9629 0.583984 40.8677 0.583984H27.0967C25.8201 0.583984 24.6893 1.21745 24 2.1858C23.3107 1.21736 22.1799 0.583984 20.9033 0.583984H12.2519C11.8636 0.583984 11.5488 0.898797 11.5488 1.28711C11.5488 1.67542 11.8636 1.99023 12.2519 1.99023H20.9033C22.2232 1.99023 23.2969 3.06395 23.2969 4.38377V11.416C23.2822 11.4018 23.2666 11.3886 23.2517 11.3746C22.4183 10.5975 21.2887 10.1496 20.1485 10.1496H8.43647C8.3745 9.20552 7.73091 8.37517 6.84281 8.06036C6.59259 7.97167 6.32803 7.92798 6.06262 7.92798H4.73878V4.38377C4.73878 3.06395 5.8125 1.99023 7.13231 1.99023H9.43941C9.82772 1.99023 10.1425 1.67542 10.1425 1.28711C10.1425 0.898797 9.82772 0.583984 9.43941 0.583984H7.13231C5.03709 0.583984 3.33253 2.28855 3.33253 4.38377V7.92798H2.37891C1.06716 7.92798 0 8.99533 0 10.3069V17.6485C0 20.3802 2.22244 22.6027 4.95413 22.6027H5.30747C5.30747 22.6027 4.53759 24.6734 4.53703 24.675C4.05131 25.9813 5.05106 27.4164 6.4425 27.4164H7.57369C8.20688 27.4164 8.81297 27.1149 9.195 26.6098L12.226 22.6027H35.7742L38.8052 26.6099C39.1872 27.1149 39.7933 27.4164 40.4264 27.4164C40.4264 27.4164 41.5568 27.4164 41.5575 27.4164C42.9506 27.4164 43.9486 25.981 43.463 24.675L42.6924 22.6027H43.0459C45.7776 22.6027 48 20.3802 48 17.6485V10.3069C48 8.99533 46.9328 7.92798 45.6211 7.92798ZM24.7031 4.38395C24.7031 3.06405 25.7768 1.99033 27.0967 1.99033H40.8677C42.1875 1.99033 43.2612 3.06405 43.2612 4.38386V7.92808C43.2612 7.92808 41.9377 7.92808 41.9373 7.92808C41.0024 7.92808 40.1056 8.52808 39.743 9.38889C39.6414 9.62992 39.5806 9.88886 39.5635 10.1498C39.5635 10.1498 27.8519 10.1498 27.8515 10.1498C26.6937 10.1498 25.5397 10.6156 24.7031 11.4161V4.38395ZM8.44162 11.5559H20.1485C21.8845 11.556 23.2969 12.9684 23.2969 14.7044V15.7043H8.44162V11.5559ZM8.07347 25.7615C7.95572 25.9172 7.76878 26.0101 7.57359 26.0101C7.57359 26.0101 6.44634 26.0101 6.44241 26.0101C6.01191 26.0101 5.70506 25.5685 5.85506 25.1651L6.80775 22.6027H10.4627L8.07347 25.7615ZM41.5575 26.01H40.4264C40.2312 26.01 40.0444 25.9171 39.9266 25.7615L37.5373 22.6027H41.1923C41.1923 22.6027 42.1417 25.1561 42.1449 25.165C42.2952 25.5693 41.9862 26.01 41.5575 26.01ZM43.0459 21.1964H4.95413C2.99784 21.1965 1.40625 19.6048 1.40625 17.6485V10.3069C1.40625 9.77055 1.84256 9.33423 2.37891 9.33423H6.06262C6.59897 9.33423 7.03528 9.77055 7.03528 10.3069V16.4073C7.03528 16.7956 7.35009 17.1104 7.73841 17.1104H33.5644C33.9527 17.1104 34.2675 16.7956 34.2675 16.4073C34.2675 16.019 33.9527 15.7042 33.5644 15.7042H24.7031V14.7043C24.7031 12.9683 26.1155 11.5559 27.8515 11.5559H39.5584V15.7043H36.3769C35.9886 15.7043 35.6737 16.0191 35.6737 16.4074C35.6737 16.7957 35.9886 17.1105 36.3769 17.1105H40.2615C40.6498 17.1105 40.9646 16.7957 40.9646 16.4074V10.307C40.9646 9.77064 41.4009 9.33433 41.9373 9.33433H45.621C46.1573 9.33433 46.5937 9.77064 46.5937 10.307V17.6485H46.5938C46.5938 19.6048 45.0022 21.1964 43.0459 21.1964Z" fill="black"/></svg>'
  },
  {
    text: "Fridge",
    img: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_2_9000)"><path d="M37.6565 16.1248V2.57422C37.6557 1.90313 37.3888 1.25976 36.9142 0.785232C36.4397 0.310702 35.7963 0.0437627 35.1253 0.0429688H12.875C12.2039 0.0437627 11.5605 0.310702 11.086 0.785232C10.6115 1.25976 10.3445 1.90313 10.3438 2.57422V16.1248C10.344 16.4786 10.4186 16.8283 10.5628 17.1514C10.707 17.4744 10.9176 17.7635 11.1808 17.9998C10.9176 18.2362 10.707 18.5253 10.5628 18.8483C10.4186 19.1713 10.344 19.5211 10.3438 19.8748V42.7986C10.3445 43.4697 10.6115 44.1131 11.086 44.5876C11.5605 45.0621 12.2039 45.329 12.875 45.3298H13.2189V47.3436C13.2189 47.5176 13.288 47.6846 13.4111 47.8076C13.5342 47.9307 13.7011 47.9998 13.8751 47.9998H18.5626C18.7367 47.9998 18.9036 47.9307 19.0267 47.8076C19.1497 47.6846 19.2189 47.5176 19.2189 47.3436V45.3298H28.7814V47.3436C28.7814 47.5176 28.8505 47.6846 28.9736 47.8076C29.0967 47.9307 29.2636 47.9998 29.4376 47.9998H34.1251C34.2992 47.9998 34.4661 47.9307 34.5892 47.8076C34.7122 47.6846 34.7814 47.5176 34.7814 47.3436V45.3298H35.1253C35.7963 45.329 36.4397 45.0621 36.9142 44.5876C37.3888 44.1131 37.6557 43.4697 37.6565 42.7986V19.8748C37.6563 19.5211 37.5816 19.1713 37.4374 18.8483C37.2932 18.5253 37.0827 18.2362 36.8195 17.9998C37.0827 17.7635 37.2932 17.4744 37.4374 17.1514C37.5816 16.8283 37.6563 16.4786 37.6565 16.1248ZM17.9064 46.6873H14.5314V45.3298H17.9064V46.6873ZM33.4689 46.6873H30.0939V45.3298H33.4689V46.6873ZM36.344 19.8748V42.7986C36.3436 43.1217 36.2151 43.4315 35.9866 43.6599C35.7581 43.8884 35.4484 44.0169 35.1253 44.0173H12.875C12.5519 44.0169 12.2421 43.8884 12.0137 43.6599C11.7852 43.4315 11.6566 43.1217 11.6563 42.7986V19.8748C11.6566 19.5517 11.7852 19.242 12.0137 19.0135C12.2421 18.785 12.5519 18.6565 12.875 18.6561H35.1253C35.4484 18.6565 35.7581 18.785 35.9866 19.0135C36.2151 19.242 36.3436 19.5517 36.344 19.8748V19.8748ZM12.875 17.3436C12.5519 17.3432 12.2421 17.2147 12.0137 16.9862C11.7852 16.7577 11.6566 16.448 11.6563 16.1248V2.57422C11.6566 2.25111 11.7852 1.94134 12.0137 1.71287C12.2421 1.4844 12.5519 1.35587 12.875 1.35547H35.1253C35.4484 1.35587 35.7581 1.4844 35.9866 1.71287C36.2151 1.94134 36.3436 2.25111 36.344 2.57422V16.1248C36.3436 16.448 36.2151 16.7577 35.9866 16.9862C35.7581 17.2147 35.4484 17.3432 35.1253 17.3436H12.875Z" fill="black"/><path d="M33.2466 4.75586H30.8091C30.635 4.75586 30.4681 4.825 30.345 4.94807C30.222 5.07114 30.1528 5.23806 30.1528 5.41211V13.2871C30.1528 13.4612 30.222 13.6281 30.345 13.7511C30.4681 13.8742 30.635 13.9434 30.8091 13.9434H33.2466C33.4206 13.9434 33.5876 13.8742 33.7106 13.7511C33.8337 13.6281 33.9028 13.4612 33.9028 13.2871V5.41211C33.9028 5.23806 33.8337 5.07114 33.7106 4.94807C33.5876 4.825 33.4206 4.75586 33.2466 4.75586ZM32.5903 12.6309H31.4653V6.06836H32.5903V12.6309Z" fill="black"/><path d="M30.8091 30.2842H33.2466C33.4206 30.2842 33.5876 30.2151 33.7106 30.092C33.8337 29.9689 33.9028 29.802 33.9028 29.6279V21.7529C33.9028 21.5789 33.8337 21.412 33.7106 21.2889C33.5876 21.1658 33.4206 21.0967 33.2466 21.0967H30.8091C30.635 21.0967 30.4681 21.1658 30.345 21.2889C30.222 21.412 30.1528 21.5789 30.1528 21.7529V29.6279C30.1528 29.802 30.222 29.9689 30.345 30.092C30.4681 30.2151 30.635 30.2842 30.8091 30.2842ZM31.4653 22.4092H32.5903V28.9717H31.4653V22.4092Z" fill="black"/></g><defs><clipPath id="clip0_2_9000"><rect width="48" height="48" fill="white"/></clipPath></defs></svg>' 
  },
  {
    text: "Fan",
    img: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_2_9008)"><path d="M30.5203 43.9453H17.4798C17.0935 43.9453 16.7805 44.2584 16.7805 44.6446C16.7805 45.0308 17.0935 45.3439 17.4798 45.3439H30.5203C30.9066 45.3439 31.2196 45.0308 31.2196 44.6446C31.2196 44.2584 30.9066 43.9453 30.5203 43.9453Z" fill="black"/><path d="M26.7078 29.6021C29.4728 31.5534 33.2686 30.102 35.2183 27.339C37.1995 24.5316 37.2481 20.5028 34.4982 18.5623C32.6767 17.2769 29.6174 16.7838 27.1565 17.3345C26.9097 16.963 26.5993 16.6374 26.2407 16.3734C26.6504 15.5302 27.3741 14.7671 29.0147 13.9538C29.8008 13.564 30.7791 13.079 30.7791 11.7825C30.7791 8.29341 27.2722 6.13379 24.0231 6.13379C20.2978 6.13379 17.2672 8.66776 17.2672 11.7825C17.2672 13.3257 18.0221 15.3817 19.1905 17.0201C19.5594 17.5374 19.9512 17.9943 20.3588 18.3848C20.2861 18.6392 20.2392 18.9042 20.2215 19.1772C19.2191 19.0919 18.2677 18.6298 17.0936 17.6815L17.0774 17.6684C16.402 17.1229 15.5617 16.4439 14.3839 16.9857C11.2927 18.4072 10.6624 22.4131 12.0743 25.4837C13.1628 27.8511 15.4861 29.7066 17.9938 29.7064C18.6958 29.7064 19.3837 29.5586 20.0289 29.2618C22.1593 28.2822 24.2596 25.5947 24.9031 23.102C25.0708 23.0608 25.2339 23.0081 25.3921 22.9454C25.9864 23.8484 26.2583 24.9312 25.9508 26.9085C25.8161 27.7755 25.6484 28.8545 26.7078 29.6021ZM24 21.8131C22.6829 21.8131 21.6112 20.7415 21.6112 19.4244C21.6112 18.1072 22.6829 17.0356 24 17.0356C25.3172 17.0356 26.3888 18.1072 26.3888 19.4244C26.3888 20.7415 25.3172 21.8131 24 21.8131ZM20.3293 16.2082C19.3343 14.8129 18.6658 13.0343 18.6658 11.7825C18.6658 9.43904 21.0691 7.53245 24.0231 7.53245C27.3322 7.53245 29.3805 9.73857 29.3805 11.7825C29.3805 12.1609 29.1821 12.3098 28.3936 12.7008C26.6617 13.5594 25.605 14.5012 24.9834 15.7674C24.6696 15.6829 24.3401 15.637 23.9999 15.637C22.7984 15.637 21.7267 16.2001 21.0323 17.0754C20.7915 16.8155 20.5563 16.5264 20.3293 16.2082ZM19.4447 27.9912C17.1148 29.0629 14.4422 27.2855 13.3452 24.8994C12.2551 22.5291 12.6169 19.3376 14.9683 18.2564C15.3198 18.0948 15.5282 18.2148 16.1985 18.7563L16.2149 18.7695C17.7176 19.9832 19.0013 20.5479 20.3967 20.5889C20.8322 21.9332 21.9997 22.9509 23.4272 23.1684C22.7308 25.2823 20.8954 27.3241 19.4447 27.9912ZM27.7874 19.4244C27.7874 19.1591 27.7597 18.9003 27.7076 18.6504C29.7279 18.2791 32.2724 18.7033 33.6919 19.705C35.7971 21.1907 35.5932 24.3821 34.0756 26.5326C32.5613 28.6782 29.6138 29.9409 27.5141 28.4593C27.2049 28.2411 27.1977 27.9932 27.3329 27.1234C27.6595 25.0233 27.4402 23.5418 26.5732 22.2C27.3193 21.5079 27.7874 20.5199 27.7874 19.4244Z" fill="black"/><path d="M40.578 19.4688C40.578 15.6141 39.2256 11.8594 36.77 8.89663C36.5234 8.59916 36.0825 8.5581 35.7853 8.80447C35.488 9.05094 35.4467 9.49175 35.6932 9.78913C37.9413 12.5016 39.1795 15.9392 39.1795 19.4688C39.1795 27.8387 32.37 34.6482 24.0001 34.6482C20.4746 34.6482 17.0398 33.4125 14.3288 31.1688C14.0312 30.9227 13.5905 30.9642 13.3441 31.2617C13.0979 31.5593 13.1396 32.0001 13.437 32.2463C16.3984 34.6971 20.1497 36.0468 24.0001 36.0468C33.1411 36.0468 40.578 28.6099 40.578 19.4688Z" fill="black"/><path d="M8.82068 19.4695C8.82068 11.0996 15.6301 4.29016 24 4.29016C27.4747 4.29016 30.7441 5.43251 33.4548 7.59354C33.757 7.83438 34.1969 7.7846 34.4376 7.48273C34.6783 7.18076 34.6287 6.74079 34.3268 6.50004C31.3657 4.13932 27.7948 2.8916 24 2.8916C14.8589 2.8916 7.42212 10.3284 7.42212 19.4695C7.42212 23.2642 8.66984 26.8352 11.0306 29.7962C11.1686 29.9694 11.3722 30.0596 11.5778 30.0596C11.7306 30.0596 11.8844 30.0097 12.0132 29.9071C12.3153 29.6663 12.3649 29.2264 12.1242 28.9244C9.96303 26.2136 8.82068 22.9442 8.82068 19.4695Z" fill="black"/><path d="M32.0228 41.4337H30.3214L29.3825 38.1807C37.5081 35.8398 43.469 28.3377 43.469 19.4691C43.4691 8.73375 34.7354 0 24.0001 0C13.2648 0 4.53101 8.73375 4.53101 19.4691C4.53101 28.3378 10.492 35.8399 18.6176 38.1808L17.6787 41.4337H15.9773C13.4519 41.4337 11.1538 42.9234 10.1226 45.2288C9.54026 46.5309 10.4943 48.0001 11.9191 48.0001H36.0812C37.5077 48.0001 38.4592 46.5292 37.8776 45.2288C36.8464 42.9233 34.5483 41.4337 32.0228 41.4337V41.4337ZM5.92957 19.4691C5.92957 9.50503 14.0359 1.39866 24 1.39866C33.964 1.39866 42.0704 9.50503 42.0704 19.4691C42.0704 29.4331 33.9641 37.5395 24.0001 37.5395C14.036 37.5395 5.92957 29.4331 5.92957 19.4691V19.4691ZM19.9758 38.5188C21.2748 38.7929 22.6207 38.938 24.0001 38.938C25.3794 38.938 26.7255 38.7928 28.0245 38.5187L28.8658 41.4336H19.1344L19.9758 38.5188ZM36.0812 46.6014H11.9191C11.5065 46.6014 11.231 46.1763 11.3994 45.7998C12.2057 43.9971 14.0027 42.8323 15.9773 42.8323H32.0228C33.9975 42.8323 35.7945 43.9972 36.6007 45.7998C36.7692 46.1764 36.4936 46.6014 36.0812 46.6014V46.6014Z" fill="black"/></g><defs><clipPath id="clip0_2_9008"><rect width="48" height="48" fill="white"/></clipPath></defs></svg>'
  },
  {
    text: "Fridge",
    img: '<svg width="48" height="48" viewBox="0 0 48 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44.8531 0.0859375H3.1469C1.41173 0.0859375 0 1.49767 0 3.23284V19.3387C0 19.7756 0.354145 20.1299 0.791209 20.1299H47.2088C47.6459 20.1299 48 19.7756 48 19.3387V3.23284C48 1.49767 46.5883 0.0859375 44.8531 0.0859375V0.0859375ZM3.42857 1.66835H44.5714V2.67161C44.5714 3.19454 44.146 3.62 43.623 3.62H4.37697C3.85403 3.62 3.42857 3.19454 3.42857 2.67161V1.66835V1.66835ZM44.5714 14.5914H3.42857V14.4849C3.42857 13.9619 3.85403 13.5365 4.37697 13.5365H43.623C44.146 13.5365 44.5714 13.9619 44.5714 14.4849V14.5914ZM3.42857 15.6464H44.5714V16.7013H3.42857V15.6464ZM3.42857 17.7563H44.5714V18.5475H3.42857V17.7563ZM46.4176 18.5475H45.6264V14.4849C45.6264 13.3802 44.7277 12.4815 43.623 12.4815H4.37697C3.27223 12.4815 2.37363 13.3802 2.37363 14.4849V18.5475H1.58242V3.23284C1.58242 2.65156 1.90175 2.14424 2.37363 1.8746V2.67161C2.37363 3.77624 3.27233 4.67495 4.37697 4.67495H43.623C44.7278 4.67495 45.6264 3.77624 45.6264 2.67161V1.8746C46.0983 2.14424 46.4176 2.65156 46.4176 3.23284V18.5475Z" fill="black"/><path d="M26.4264 10.3721H21.5736C21.2822 10.3721 21.0461 10.6083 21.0461 10.8995C21.0461 11.1908 21.2822 11.427 21.5736 11.427H26.4264C26.7177 11.427 26.9538 11.1908 26.9538 10.8995C26.9538 10.6083 26.7177 10.3721 26.4264 10.3721Z" fill="black"/><path d="M42.3563 10.3721C42.2171 10.3721 42.081 10.428 41.9829 10.5261C41.8848 10.6242 41.8289 10.7603 41.8289 10.8995C41.8289 11.0388 41.8848 11.1749 41.9829 11.2719C42.081 11.3711 42.2171 11.427 42.3563 11.427C42.4945 11.427 42.6306 11.3711 42.7287 11.2719C42.8268 11.1738 42.8838 11.0377 42.8838 10.8995C42.8838 10.7613 42.8268 10.6253 42.7287 10.5261C42.6306 10.428 42.4945 10.3721 42.3563 10.3721Z" fill="black"/><path d="M39.9301 10.3721C39.7908 10.3721 39.6547 10.428 39.5566 10.5261C39.4585 10.6242 39.4026 10.7603 39.4026 10.8995C39.4026 11.0388 39.4585 11.1738 39.5566 11.2719C39.6547 11.37 39.7908 11.427 39.9301 11.427C40.0683 11.427 40.2043 11.37 40.3025 11.2719C40.4006 11.1738 40.4575 11.0377 40.4575 10.8995C40.4575 10.7603 40.4006 10.6242 40.3025 10.5261C40.2043 10.428 40.0683 10.3721 39.9301 10.3721Z" fill="black"/><path d="M19.6556 23.5874C19.7981 23.3333 19.7076 23.0118 19.4535 22.8693C19.1996 22.7267 18.8779 22.8173 18.7354 23.0713C17.7764 24.7814 17.7763 26.9061 18.7353 28.6162C19.5155 30.0079 19.5155 31.7371 18.7353 33.1289C18.5927 33.383 18.6834 33.7045 18.9374 33.847C19.0189 33.8928 19.1075 33.9145 19.1948 33.9145C19.3794 33.9145 19.5587 33.8175 19.6554 33.6449C20.6141 31.9349 20.6141 29.8103 19.6554 28.1004C18.8751 26.7084 18.8752 24.9792 19.6556 23.5874Z" fill="black"/><path d="M24.46 23.5874C24.6026 23.3333 24.512 23.0118 24.2579 22.8693C24.004 22.7267 23.6823 22.8173 23.5398 23.0713C22.5809 24.7814 22.5808 26.9061 23.5397 28.6162C24.3199 30.0079 24.3199 31.7371 23.5397 33.1289C23.3972 33.383 23.4878 33.7045 23.7418 33.847C23.8234 33.8928 23.9119 33.9145 23.9992 33.9145C24.1839 33.9145 24.3631 33.8175 24.4598 33.6449C25.4186 31.9349 25.4186 29.8103 24.4598 28.1004C23.6795 26.7084 23.6796 24.9792 24.46 23.5874Z" fill="black"/><path d="M29.2648 23.5874C29.4073 23.3333 29.3168 23.0118 29.0627 22.8693C28.8086 22.7267 28.4871 22.8173 28.3446 23.0713C27.3855 24.7814 27.3855 26.9061 28.3443 28.6162C29.1247 30.008 29.1247 31.7371 28.3443 33.1289C28.2018 33.3829 28.2923 33.7045 28.5465 33.847C28.628 33.8928 28.7165 33.9145 28.8039 33.9145C28.9885 33.9145 29.1677 33.8175 29.2645 33.6449C30.2233 31.9349 30.2233 29.8103 29.2645 28.1004C28.4842 26.7085 28.4842 24.9792 29.2648 23.5874Z" fill="black"/></svg>'
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