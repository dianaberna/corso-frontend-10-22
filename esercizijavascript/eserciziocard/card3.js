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
   card : {
        src= "caffe.jpg"
   }
]