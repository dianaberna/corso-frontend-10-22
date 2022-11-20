window.addEventListener("load", colorChanger);

function colorChanger() {
  const randomBetween = (min, max) =>  min + Math.floor(Math.random() * (max - min + 1));
  const r = randomBetween(0, 255);
  const g = randomBetween(0, 255);
  const b = randomBetween(0, 255);
  let randomColor = `rgb(${r},${g},${b})`;
  document.body.style.backgroundColor = randomColor;
  const container = document.querySelector("body > div");
  const divParagraph = document.querySelector("body > div > p");
  if (divParagraph) { 
      divParagraph.innerText = randomColor;
  } else { 
      const colorText = document.createTextNode(randomColor);
      const colorP = document.createElement("p");
      colorP.appendChild(colorText);
      container.appendChild(colorP);
  }

// -----------------------------------esercizio 2--------------------------------------

const sectionCss = document.getElementById("sectionCss");

const inputCss = document.createElement("input");
inputCss.setAttribute("type", "text");
inputCss.setAttribute("id", "inputCss");
inputCss.setAttribute("value", "height: 20rem; width: 30rem; margin-top: 10px; background-color: aliceblue; border-radius: .625rem;");
sectionCss.appendChild(inputCss);

const confirmCssButton = document.createElement("input");
confirmCssButton.setAttribute("type", "button");
confirmCssButton.setAttribute("value", "Update");
sectionCss.appendChild(confirmCssButton);

const changingDiv = document.createElement("div");
changingDiv.setAttribute("id", "changeMe");
sectionCss.insertAdjacentElement("beforeend",changingDiv);

const defaultStyle = "height: 20rem; width: 30rem; margin-top: 10px; background-color: aliceblue; border-radius: .625rem;";
changingDiv.style = defaultStyle;

confirmCssButton.addEventListener("click", function(){
    let newStyle = inputCss.value;
    changingDiv.style = newStyle;
})

// -----------------------------------esercizio 3--------------------------------------

const sectionList = document.getElementById("sectionList");

const inputList = document.createElement("input");
inputList.setAttribute("type", "text");
inputList.setAttribute("id", "inputList");
inputList.setAttribute("placeholder", "Insert element");
sectionList.appendChild(inputList);

const confirmListButton = document.createElement("input");
confirmListButton.setAttribute("type", "button");
confirmListButton.setAttribute("value", "Add");
sectionList.appendChild(confirmListButton);

const list = document.createElement("ul");
sectionList.appendChild(list);

confirmListButton.addEventListener("click", function(){
    let newListElement = document.createElement("li");
    let deleteButton = document.createElement("input");
    deleteButton.setAttribute("type", "button");
    deleteButton.setAttribute("value", "X");
    newListElement.innerText = inputList.value;
    list.prepend(newListElement);
    newListElement.appendChild(deleteButton);
    inputList.value = "";

    deleteButton.addEventListener("click", function(){
        newListElement.remove();
    })
})
}