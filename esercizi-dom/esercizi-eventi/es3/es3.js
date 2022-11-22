//ES3
const listContainer = document.getElementsByTagName("ul");
function addElement() {
  let inputText = document.getElementById("testo").value;
  let listItem = document.createElement("li");
  let btn = document.createElement("button");
  btn.innerHTML = "X";
  let text = document.createTextNode(inputText);
  listItem.appendChild(text);
  listItem.appendChild(btn);
  listContainer[0].appendChild(listItem);
  btn.addEventListener("click", function (e) {
    console.log("stai cliccando");
    e.target.parentNode.remove();
  });
}
//ES3 versione 2

function removeAll() {
  listContainer[0].innerHTML = "";
}
