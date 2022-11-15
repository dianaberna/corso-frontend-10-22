function creaElemento(tipo,classe,text,attributi,alt){
  let Elemento=document.createElement(tipo);
  Elemento.className=classe;
  
  if(tipo=="img"){
    Elemento.src=attributi.src;
    Elemento.alt=attributi.alt;
  }
//if (text){
//    let 
//}


}

creaElemento("div","card","","","")
creaElemento("div","card-body","","","")
creaElemento("img","","","/modulojavascript/parte2 js/caffe.jpg","immagine caffe",card_body)