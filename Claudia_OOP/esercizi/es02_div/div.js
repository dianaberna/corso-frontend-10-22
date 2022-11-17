// OK
// Realizzare una pagina web con js in cui inserire un input testuale dove il testo inserito rappresenta le regole css da applicare ad un div sottostante
// PS. il div parte con un css base per renderlo visibile
// (margin: 2rem; width: 400px; height: 400px; background-color: yellow)

window.addEventListener("load", function () {

  // quadrato giallo
  let el = document.getElementById("elemento");
  console.log(el);
  console.log(el.style);

  // input
  let input_css = document.getElementById("input-css");
  console.log(input_css);
  console.log(input_css.value);

  // al click prendo il valore dell'input e lo assegno a el.style
  let bottone = document.getElementById("enter");
  bottone.addEventListener("click", function () {
    el.style = input_css.value;
    console.log("è stato cliccato il bottone");
  });
})