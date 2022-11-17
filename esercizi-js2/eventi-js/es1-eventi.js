/* ES. 1 Realizzare una pagina web con js che generi un colore di sfondo random, 
lo applica al body e lo stampa in un div con id color.
PS. Per generare un numero casuale da 0 a max si può utilizzare la funzione Math.random()*max */

function changeColor(){
  let n = [];
  for(let i=0; i<3; i++){
    n[i] = Math.floor(Math.random()*255);
  }
  let newColor = "rgb("+n[0]+", "+n[1]+", "+n[2]+")";
  document.body.style.backgroundColor = newColor;
  document.getElementById("color").innerHTML = newColor;
}

window.addEventListener("load", changeColor);