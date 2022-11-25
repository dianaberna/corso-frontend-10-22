/* ES 1
Realizzare una pagina web con js che generi un colore di sfondo random, lo applica al body e lo stampa in un div con id color. (ogni volta che viene ricaricata la pagina il colore cambia)
PS. Per generare un numero casuale da 0 a max si può  Math.random()*max si può utilizzare la funzione 
*/


window.addEventListener("load", function () {
    let colorbody = document.getElementsByTagName("body");
   document.body.style.height="700px";
   document.body.style.display="flex";
   document.body.style.justifyContent="center";
   document.body.style.alignItems="center";
   
   let divv=document.createElement("div");
    document.body.appendChild(divv);
    divv.style.width="400px"; 
    divv.style.height= "200px";
    divv.style.display="flex";
    divv.style.justifyContent= "center";
    divv.style.alignItems= "center";
    divv.style.fontSize= "30px";
    divv.style.backgroundColor="white";

   for (let i = 0; i < colorbody.length; i++) {
        
        let x=Math.floor(Math.random()*255);
        let y=Math.floor(Math.random()*255);
        let z=Math.floor(Math.random()*255);
        let rgbbody=[x, y, z];
        console.log(rgbbody);
        colorbody[0].style.backgroundColor = "rgb("+x+","+y+","+z+")";
        let divrgb="rgb("+x+","+y+","+z+")";
        
        divv.innerHTML=divrgb
    }
    
    
    
  })
        
