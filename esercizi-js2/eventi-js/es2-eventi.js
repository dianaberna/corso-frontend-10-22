/* Realizzare una pagina web con js in cui inserire un input testuale 
dove il testo inserito rappresenta le regole css da applicare ad un div sottostante.
Argomenti da applicare: Manipolazione DOM, funzioni, evento click del bottone */


window.addEventListener("load", function(){

  //Imposto il CSS iniziale del div
  let input = document.getElementById("inputCSS");
  let divChange = document.getElementById("box");
  divChange.style.cssText = "width: 400px; height: 400px; background-color: white; border-radius: 1.25rem; border: solid black;";
  input.value = divChange.style.cssText;

  //Gestisco l'evento della ridefinizione del CSS al click
  let pulsante = document.getElementById("clickForChange");
  pulsante.addEventListener("click", function(){
    divChange.style.cssText = input.value;
  });
});