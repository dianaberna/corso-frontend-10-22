//ES2
let inputText = document.getElementById("prova");
let buttonUpdate = document.getElementById("btn");
let box = document.getElementById("updateMe");
window.addEventListener("load",function(){
  box.style = " width: 100px;height: 100px;background-color: red"
})
buttonUpdate.addEventListener("click", createDiv);
function createDiv() {
  box.style = inputText.value;
}
