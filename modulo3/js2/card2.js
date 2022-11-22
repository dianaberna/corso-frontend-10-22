function createCard(tag, testo, attributi, classe, padre) {
    let nuovoTag = document.createElement(tag);

    if (testo) {
        nuovoTesto = document.createTextNode(testo);
        nuovoTag.appendChild(nuovoTesto);
    }

    if (classe) {
        nuovoTag.className = classe;
    }
    if (attributi) {
        nuovoTag.src = attributi[0];
        nuovoTag.alt = attributi[1];
    }
    if (padre) {
        padre.appendChild(nuovoTag);
    }
    return nuovoTag;
}

let card = {
    img: {
        src: "espresso.png",
        alt: "caffe",
    },
    title: "Vanilla Latte",
    price: "21k",
};

const divCardElement = createCard("div", "", "", "card", document.body);
const divCardbody = createCard("div", "", "", "card-body", divCardElement);

const imgElement = createCard(
    "img",
    "", ["espresso.png", "caffe"],
    "",
    divCardbody
);

const divCardTitle = createCard("div", "", "", "", divCardbody);

const titleElement = createCard("h1", "Vanilla Latte", "", "", divCardTitle);

const paragrafoElement = createCard("p", "21K", "", "", divCardTitle);

const cardFooter = createCard("div", "", "", "card-footer", divCardElement);
const etichetteElement = createCard("div", "", "", "etichette", cardFooter);

let arrayetichette = ["Hot", "Cold"];
for (i = 0; i < arrayetichette.length; i++) {
    createCard("span", arrayetichette[i], "", "", etichetteElement);
}

const buttonAggiungi = createCard("button", "aggiungi", "", "", cardFooter);
// let svgClose =
//     "<svg width='23' height='43'viewBox='0 0 43 43' fill='none' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <rect width='43' height='43' rx='21.5' fill='#FF912B' /><rect x='12.5' y='13' width='18' height='17' fill='url(#pattern0)' /><defs><pattern id='pattern0' patternContentUnits='objectBoundingBox' width='1' height='1'><use xlink:href='#image0_3_28761' transform='translate(0 -0.0294118) scale(0.0166667 0.0176471)'/></pattern> <image id='image0_3_28761' width='60' height='60' xlink:href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALZSURBVHgB7ZuBddowEIbPTMAGVSdoNqjZIJ0g7QRNJ4BMEDpByAbpBKETlE6AMgFkgusddvpoym9LwjxOjr/3ZL+cbcX/0+l0kgyRwMxTKRv+H7XdSXHUF0TMLYcxpT4AWhZRUu5ECv5FmTOS8j3i/gsRfUEZo4LnUnzEMyVlzKgoiq2cP0U884H6gLjqdWA/3lBfEDGPgaIdZcro1d9fpGwDnispU/4RLP3ZUyW6jY/UJ8Rl5y0uvaZMKQ4ZRdBYTppkOMoP7ZJLKQ/isfevLxboqTrBeJQypnzxUiZ1V90xQnfKTSs53VDeOClrabyrF0PR9oQOVZR5dkWVm2tLr0IEOzllG6T2WIrgSatgpc6ucu7LL0yC7mrIwD6TMfSdGE9570aB9fwGdnNTRXHbhZy+gctlqOAVsFudOT0Au6MQdEwGLmJ25gTel2MqQP3CkTH0ncC7rkNdWvHAbtGtHbD7GMEocL0ne8AhNEYwClwl2cMBu+9CsEWXRi381IVgDRDWsjAH7NtgwfXqpgeXrSUg74A9KkorP4E9l8X551jBufRjB+yeYpC+eokGdDIEH5tl7VU0ZoyJwNXwjrs0OMqlWwKXIxs4YPd6iO3DivUEBHnaboMhRfATsFsJXA7Yn/WQIngJ7FaGJgfsXg9durQjG3Tr0vWi9qENN42OFloZZVleDyktrKBWtiAYtbDXQ6pgNDe+ojNSr76U4HLINjCs+LIhAZnyGZZ95H+WmvFxSyYYtBB/oHJ1G60kl8X5hcSe3b53kkvXGVfM507n5u+mYGofVvRzpxXZ52Z/u/QouFoOXbNdZtQ1XIlesC10Df360PsmBS0kXE4zqnLqc4zHGle0i+mqzLyOMwMDAwMDbxMZlr5y888J9NotJXDKupPg6kOSUGZW6k6Gw7+zVqI+k+i67mMmD/ucMqvptO6uBP+IuPee4jhl3elo/+HmmdMmtY91Wfcfe0B48y7j/zUAAAAASUVORK5CYII=' /> </defs> </svg>";
// buttonAggiungi.innerHTML = svgClose;