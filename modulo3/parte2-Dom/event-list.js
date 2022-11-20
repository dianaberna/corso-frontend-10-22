console.log("sono nello script 1")
//alert("sono fuori dell'event listener")

window.addEventListener("load", function(){
  console.log("siamo nell0evnt listener del load nel file script1");
  //alert("sono dentro all'event listener");
  document.getElementById("selezionami").style.backgroundColor="red";

  let mioBottone = this.document.getElementById("nuovoBottone");
  mioBottone.addEventListener("click", hoCliccatoIlBottoneNuovo)
})

function hoCliccatoIlBottone(){
  console.log("Il bottone è stato cliccato")
}
function hoCliccatoIlBottoneNuovo(){
  console.log("Il bottone nuovo è stato cliccato")
}