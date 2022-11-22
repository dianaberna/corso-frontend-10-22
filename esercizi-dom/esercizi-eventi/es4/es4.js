//ES4
let tastiera = [7, 8, 9, "/", 4, 5, 6, "*", 1, 2, 3, "-", 0, ".", "=", "+"];

function addElement(type, className, id, content, position, attributes) {
  let newElement = document.createElement(type);
  if (attributes.src && attributes.alt) {
    newElement.src = attributes.src;
    newElement.alt = attributes.alt;
  } else {
    let elementContent = document.createTextNode(content);
    newElement.appendChild(elementContent);
  }
  if (className != "") newElement.className = className;
  else if (id != "") newElement.id = id;
  position.appendChild(newElement);
  return newElement;
}

let calcDiv = addElement("div", "calcolatrice", "", "", document.body, "");
addElement("input", "", "inputBox", "", calcDiv, "");
let buttonDiv = addElement("div", "", "btnDiv", "", calcDiv, "");
for (i = 0; i < tastiera.length; i++) {
  addElement("button", "btn", "", tastiera[i], buttonDiv, "");
}
let risultato = [];
let numberToCalculate = document.querySelectorAll(
  " #btnDiv > .btn:not(:nth-child(15))"
);

for (let i = 0; i < numberToCalculate.length; i++) {
  numberToCalculate[i].addEventListener("click", function (e) {
    document.getElementById("inputBox").value += e.target.innerHTML;

    risultato = eval(document.getElementById("inputBox").value);

    return risultato;
  });
}
let equals = document.querySelector(".btn:nth-child(15)");

equals.addEventListener("click", function () {
  document.getElementById("inputBox").value = risultato;
});
