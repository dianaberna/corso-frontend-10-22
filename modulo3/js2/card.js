function createCard(tag, attibuti, classe) {
    let nuovoTag = document.createElement(tag);
    classe = nuovoTag.classe;
    let attributi = nuovoTag.src;
    return nuovoTag;
}

const divCardElement = document.createElement("div");
divCardElement.className = "card";

const divCardbody = document.createElement("div");
divCardbody.className = "card-body";

const imgElement = document.createElement("img");
imgElement.src = "espresso.png";

document.body.appendChild(divCardElement);
divCardElement.appendChild(divCardbody);

divCardbody.appendChild(imgElement);

const divCardTitle = document.createElement("div");
divCardbody.appendChild(divCardTitle);

const titleElement = document.createElement("h1");
const titleText = document.createTextNode("Vanilla Latte");
titleElement.appendChild(titleText);
divCardTitle.appendChild(titleElement);

const paragrafoElement = document.createElement("p");
const paragrafoText = document.createTextNode("21k");

paragrafoElement.appendChild(paragrafoText);
divCardTitle.appendChild(paragrafoElement);

const cardFooter = document.createElement("div");
cardFooter.className = "card-footer";
divCardElement.appendChild(cardFooter);

const etichetteElement = document.createElement("div");
etichetteElement.className = "etichette";

// const etichette = document.createElement("span");
// const etichetteText = document.createTextNode("Hot");

// etichette.appendChild(etichetteText);
// etichetteElement.appendChild(etichette);
let arrayetichette = ["Hot", "Cold", "Hot"];
for (i = 0; i < arrayetichette.length; i++) {
    const etichette = document.createElement("span");
    const etichetteText = document.createTextNode(arrayetichette[i]);

    etichette.appendChild(etichetteText);
    etichetteElement.appendChild(etichette);
}

cardFooter.appendChild(etichetteElement);

// const divButton = document.createElement("div");
const buttonAggiungi = document.createElement("button");

cardFooter.appendChild(buttonAggiungi);

const buttonText = document.createTextNode("Aggiungi");
buttonAggiungi.appendChild(buttonText);

let svgClose =
    "<svg width='43' height='43'viewBox='0 0 43 43' fill='none' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <rect width='43' height='43' rx='21.5' fill='#FF912B' /><rect x='12.5' y='13' width='18' height='17' fill='url(#pattern0)' /><defs><pattern id='pattern0' patternContentUnits='objectBoundingBox' width='1' height='1'><use xlink:href='#image0_3_28761' transform='translate(0 -0.0294118) scale(0.0166667 0.0176471)'/></pattern> <image id='image0_3_28761' width='60' height='60' xlink:href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALZSURBVHgB7ZuBddowEIbPTMAGVSdoNqjZIJ0g7QRNJ4BMEDpByAbpBKETlE6AMgFkgusddvpoym9LwjxOjr/3ZL+cbcX/0+l0kgyRwMxTKRv+H7XdSXHUF0TMLYcxpT4AWhZRUu5ECv5FmTOS8j3i/gsRfUEZo4LnUnzEMyVlzKgoiq2cP0U884H6gLjqdWA/3lBfEDGPgaIdZcro1d9fpGwDnispU/4RLP3ZUyW6jY/UJ8Rl5y0uvaZMKQ4ZRdBYTppkOMoP7ZJLKQ/isfevLxboqTrBeJQypnzxUiZ1V90xQnfKTSs53VDeOClrabyrF0PR9oQOVZR5dkWVm2tLr0IEOzllG6T2WIrgSatgpc6ucu7LL0yC7mrIwD6TMfSdGE9570aB9fwGdnNTRXHbhZy+gctlqOAVsFudOT0Au6MQdEwGLmJ25gTel2MqQP3CkTH0ncC7rkNdWvHAbtGtHbD7GMEocL0ne8AhNEYwClwl2cMBu+9CsEWXRi381IVgDRDWsjAH7NtgwfXqpgeXrSUg74A9KkorP4E9l8X551jBufRjB+yeYpC+eokGdDIEH5tl7VU0ZoyJwNXwjrs0OMqlWwKXIxs4YPd6iO3DivUEBHnaboMhRfATsFsJXA7Yn/WQIngJ7FaGJgfsXg9durQjG3Tr0vWi9qENN42OFloZZVleDyktrKBWtiAYtbDXQ6pgNDe+ojNSr76U4HLINjCs+LIhAZnyGZZ95H+WmvFxSyYYtBB/oHJ1G60kl8X5hcSe3b53kkvXGVfM507n5u+mYGofVvRzpxXZ52Z/u/QouFoOXbNdZtQ1XIlesC10Df360PsmBS0kXE4zqnLqc4zHGle0i+mqzLyOMwMDAwMDbxMZlr5y888J9NotJXDKupPg6kOSUGZW6k6Gw7+zVqI+k+i67mMmD/ucMqvptO6uBP+IuPee4jhl3elo/+HmmdMmtY91Wfcfe0B48y7j/zUAAAAASUVORK5CYII=' /> </defs> </svg>";

// (;
// negli svg devo togliere i doppia appioci all'interno

buttonAggiungi.innerHTML = svgClose;
// utilizzo inner.html per fare un aggiunta forzata dello svg, e per non dover can cancellare
//la scritta