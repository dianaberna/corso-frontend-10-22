const headerContainer = document.createElement("header");
document.body.appendChild(headerContainer);

const divInput = document.createElement("div");

headerContainer.appendChild(divInput);
const inputType = document.createElement("input");
inputType.type = "text";
inputType.placeholder = "Search conversations";

divInput.appendChild(inputType);

const mainContainer = document.createElement("main");
document.body.appendChild(mainContainer);
const TitleDiv = document.createElement("div");
TitleDiv.id = "title";

mainContainer.appendChild(TitleDiv);
const titleH1 = document.createElement("h1");
const titleText = document.createTextNode("Justin Wan");

titleH1.appendChild(titleText);

TitleDiv.appendChild(titleH1);
const divEmptyAfterH1 = document.createElement("div");

TitleDiv.appendChild(divEmptyAfterH1);

const divOfSvg = document.createElement("div");

divEmptyAfterH1.appendChild(divOfSvg);

const divCamera = document.createElement("div");

divEmptyAfterH1.appendChild(divCamera);

const sectionContainer = document.createElement("section");
document.body.appendChild(sectionContainer);

const divMessage1 = document.createElement("div");
divMessage1.className = "section_message1";
sectionContainer.appendChild(divMessage1);
const divSquare = document.createElement("div");
divSquare.className = "square";
divMessage1.appendChild(divSquare);

const divMessage = document.createElement("div");
divMessage.className = "message";

divMessage1.appendChild(divMessage);

const divEmptyAfterP = document.createElement("div");
console.log(divEmptyAfterP);

divMessage.appendChild(divEmptyAfterP);

const paraMessage = document.createElement("p");

const textMessage = document.createTextNode(
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestie."
);
paraMessage.appendChild(textMessage);
divEmptyAfterP.appendChild(paraMessage);

const divSpan = document.createElement("div");
divMessage1.appendChild(divSpan);
const spanElement = document.createElement("span");
const spanText = document.createTextNode("16:45");
spanElement.appendChild(spanText);

divSpan.appendChild(spanElement);
const divSectionMessage2 = document.createElement("div");
divSectionMessage2.className = "section_message2";

sectionContainer.appendChild(divSectionMessage2);

const divMessage2 = document.createElement("div");
divMessage2.className = "message";

divSectionMessage2.appendChild(divMessage2);

const paraMessage2 = document.createElement("p");
const textMessage2 = document.createTextNode(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam similique ratione adipisci modi deserunt numquam."
);

paraMessage2.appendChild(textMessage2);

divMessage2.appendChild(paraMessage2);
const divSectionMessage3 = document.createElement("div");
divSectionMessage3.className = "section_message3";

sectionContainer.appendChild(divSectionMessage3);

const divMessage3 = document.createElement("div");
divMessage3.className = "message3";

divSectionMessage3.appendChild(divMessage3);

const paraMessage3 = document.createElement("p");
const TextMessage3 = document.createTextNode(
    "Lorem ipsum dolor sit amet consectetur adipisicing."
);

paraMessage3.appendChild(TextMessage3);

divMessage3.appendChild(paraMessage3);

// manca ultima parte... fatto con funzione nella parte mobile2-2.js