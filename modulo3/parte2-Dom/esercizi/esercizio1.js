// Realizzare una pagina web con js che generi un colore di sfondo random, lo applica al body e lo stampa in un div con id color
let r
let g
let b
let a
const body = document.querySelector("body");
{
  body.style.display="flex";
  body.style.justifyContent="center";
  body.style.alignItems="center";
  body.style.height="100vh"
  body.style.margin=0;
}
const newBut = document.createElement("button")
body.appendChild(newBut);
{
  newBut.style.backgroundColor="white";
  newBut.style.padding="2rem";
  newBut.style.fontSize="4rem";
  newBut.style.borderRadius="1rem";
  newBut.style.cursor="pointer";
}
let newButText = document.createTextNode("cliccami per cambiar colore");
body.appendChild(newBut);
newBut.appendChild(newButText);
newBut.onclick = function () {
  r=Math.floor(Math.random()*255+1);
  g=Math.floor(Math.random()*255+1);
  b=Math.floor(Math.random()*255+1);
  a=(Math.random()).toFixed(2);
  body.style.backgroundColor="rgba("+r+","+g+","+b+","+a+")"
  newButText.remove()
  newButText = document.createTextNode("Adesso il colore di sfondo è rgba("+r+","+g+","+b+","+a+"). Ri-cliccami per cambiarlo");
  newBut.appendChild(newButText);
}

