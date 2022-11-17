// OK ma bruttino: dovrei considerare la lista un array.

// Realizzare una pagina web con js di una to-do-list.
// Una prima versione potrebbe essere quella di eliminare dal dom l'elemento al click della X, mentre una seconda versione potrebbe essere quella di non rimuovere subito gli elementi ma lasciarli in una seconda lista da poter svuotare al click di un altro pulsante.

/* <ul id="lista-todo">
  <li id="task_01">Task 01<button id="delete-button">X</button></li>
</ul> */

// Versione UNO

window.addEventListener("load", function () {
  // al click sul button prendo il valore dell'input
  let lista = document.getElementById("lista-todo");
  let bottone = document.getElementById("enter");
  let n = 0;
  let newTodo = document.getElementById("todo-input");

  bottone.addEventListener("click", function (e) {
    console.log(newTodo.value);
    if (newTodo != "") {
      n = n + 1;
      console.log(n)
      // creo item, classe e lo appendo all' <ul>
      let todo_item = document.createElement("li")
      todo_item.className = "item" + n;
      console.log(todo_item.className)
      todo_item.append(newTodo.value);
      lista.appendChild(todo_item);
      // creo bottone e lo appenso al <li>
      let item_button = document.createElement("button");
      item_button.id = "delete-button";
      item_button_text = document.createTextNode("X");
      item_button.appendChild(item_button_text);
      todo_item.appendChild(item_button);
      // azzero il campo input
      newTodo.value = "";
      // cancello il parent del bottone X che clicco
      item_button.addEventListener("click", function () {
        item_button.parentElement.remove();
      })
    };
  })
})



