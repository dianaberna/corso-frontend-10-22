/* Realizzare una pagina web con js di una to-do-list.
Argomenti da applicare: Manipolazione DOM, funzioni, evento click del bottone */

window.addEventListener("load", function(){
  let toDoList = document.getElementById("list");
  let input = document.getElementById("inputList");
  let pulsante = document.getElementById("clickAdd");
  pulsante.addEventListener("click", function(){
    let list = document.createElement("li");
    list.innerHTML = input.value;
    let x = document.createElement("button");
    x.className = "clickRemove";
    x.innerHTML = "X";
    list.appendChild(x);
    toDoList.appendChild(list);
    x.addEventListener("click", function(){
      toDoList.removeChild(list);
      toDoList.removeChild(x);
    });
  });
});