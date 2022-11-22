function CreaMessage1(elemento, testo, classe, id, padre, attributi) {
    // let tagNuovo = document.createElement(elemento);
    // let textNuovo = document.createTextNode(testo);

    let tagNuovo = document.createElement(elemento);

    if (attributi) {
        tagNuovo.type = attributi[0];
        tagNuovo.placeholder = attributi[1];
        console.log(attributi);
    } else {
        let textNuovo = document.createTextNode(testo);
        tagNuovo.appendChild(textNuovo);
    }

    if (classe || id) {
        tagNuovo.className = classe;
        tagNuovo.id = id;
    } else {
        document.createElement(elemento);
    }
    // if (testo) {

    // }
    if (padre) {
        padre.appendChild(tagNuovo);
    }

    return tagNuovo;
}

const headerContainer = CreaMessage1("header", "", "", "", document.body, "");

const firstSvg =
    "<svg width='11' height='20' viewBox='0 0 11 20' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M10.6201 0.98957C10.1301 0.49957 9.34006 0.49957 8.85006 0.98957L0.540059 9.29957C0.150059 9.68957 0.150059 10.3196 0.540059 10.7096L8.85006 19.0196C9.34006 19.5096 10.1301 19.5096 10.6201 19.0196C11.1101 18.5296 11.1101 17.7396 10.6201 17.2496L3.38006 9.99957L10.6301 2.74957C11.1101 2.26957 11.1101 1.46957 10.6201 0.98957Z' fill='#161616'/></svg>";
headerContainer.innerHTML = firstSvg;

const divInput = CreaMessage1("div", "", "", "", headerContainer, "");

const inputType = CreaMessage1("input", "", "", "", divInput, [
    "text",
    "Search conversations",
]);

const svgInput =
    "<svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M12.4999 10.9996H11.7099L11.4299 10.7296C12.6299 9.32965 13.2499 7.41965 12.9099 5.38965C12.4399 2.60965 10.1199 0.389649 7.31989 0.049649C3.08989 -0.470351 -0.470107 3.08965 0.0498932 7.31965C0.389893 10.1196 2.60989 12.4396 5.38989 12.9096C7.41989 13.2496 9.32989 12.6296 10.7299 11.4296L10.9999 11.7096V12.4996L15.2499 16.7496C15.6599 17.1596 16.3299 17.1596 16.7399 16.7496C17.1499 16.3396 17.1499 15.6696 16.7399 15.2596L12.4999 10.9996ZM6.49989 10.9996C4.00989 10.9996 1.99989 8.98965 1.99989 6.49965C1.99989 4.00965 4.00989 1.99965 6.49989 1.99965C8.98989 1.99965 10.9999 4.00965 10.9999 6.49965C10.9999 8.98965 8.98989 10.9996 6.49989 10.9996Z' fill='#161616'/></svg>";
divInput.insertAdjacentHTML("beforeend", svgInput);

const mainContainer = CreaMessage1("main", "", "", "", document.body, "");

const TitleDiv = CreaMessage1("div", "", "", "title", mainContainer, "");

const titleh1 = CreaMessage1("h1", "Justin Wan", "", "", TitleDiv, "");

const divEmptyAfterH1 = CreaMessage1("div", "", "", "", TitleDiv, "");

const divOfSvg = CreaMessage1("div", "", "", "", divEmptyAfterH1, "");

svgOfphone =
    "<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><g clip-path='url(#clip0_2_10246)'><path d='M19.23 15.2598L16.69 14.9698C16.08 14.8998 15.48 15.1098 15.05 15.5398L13.21 17.3798C10.38 15.9398 8.06004 13.6298 6.62004 10.7898L8.47004 8.93976C8.90004 8.50976 9.11004 7.90977 9.04004 7.29977L8.75004 4.77977C8.63004 3.76977 7.78004 3.00977 6.76004 3.00977H5.03004C3.90004 3.00977 2.96004 3.94977 3.03004 5.07977C3.56004 13.6198 10.39 20.4398 18.92 20.9698C20.05 21.0398 20.99 20.0998 20.99 18.9698V17.2398C21 16.2298 20.24 15.3798 19.23 15.2598V15.2598Z' fill='#161616'/></g><defs><clipPath id='clip0_2_10246'><rect width='24' height='24' fill='white'/></clipPath></defs></svg>";
divOfSvg.innerHTML = svgOfphone;

const divCamera = CreaMessage1("div", "", "", "", divEmptyAfterH1, "");

svgCamera =
    "<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M17 10.5V7C17 6.45 16.55 6 16 6H4C3.45 6 3 6.45 3 7V17C3 17.55 3.45 18 4 18H16C16.55 18 17 17.55 17 17V13.5L19.29 15.79C19.92 16.42 21 15.97 21 15.08V8.91C21 8.02 19.92 7.57 19.29 8.2L17 10.5Z' fill='#161616'/></svg>";

divCamera.innerHTML = svgCamera;

const sectionContainer = CreaMessage1("section", "", "", "", mainContainer, "");

const divMessage1 = CreaMessage1(
    "div",
    "",
    "section_message1",
    "",
    sectionContainer,
    ""
);

const divSquare = CreaMessage1("div", "", "square", "", divMessage1, "");

const divMessage = CreaMessage1("div", "", "message", "", divMessage1, "");

const divEmptyAfterP = CreaMessage1("div", "", "", "", divMessage, "");

const textMessage = CreaMessage1(
    "p",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestie.",
    "",
    "",
    divEmptyAfterP,
    ""
);

const divSpan = CreaMessage1("div", "", "", "", divMessage1, "");

CreaMessage1("span", "16:45", "", "", divSpan, "");

const divSectionMessage2 = CreaMessage1(
    "div",
    "",
    "section_message2",
    "",
    sectionContainer,
    ""
);

const divMessage2 = CreaMessage1(
    "div",
    "",
    "message",
    "",
    divSectionMessage2,
    ""
);

const paraMessage2 = CreaMessage1(
    "p",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam similique ratione adipisci modi deserunt numquam.",
    "",
    "",
    divMessage2,
    ""
);

const divSectionMessage3 = CreaMessage1(
    "div",
    "",
    "section_message3",
    "",
    sectionContainer,
    ""
);

const divMessage3 = CreaMessage1(
    "div",
    "",
    "message3",
    "",
    divSectionMessage3,
    ""
);

const paraMessage3 = CreaMessage1(
    "p",
    "Lorem ipsum dolor sit amet consectetur adipisicing.",
    "",
    "",
    divMessage3,
    ""
);

const divSectionMessage4 = CreaMessage1(
    "div",
    "",
    "section_message1",
    "",
    sectionContainer,
    ""
);

const divSquare2 = CreaMessage1(
    "div",
    "",
    "square",
    "",
    divSectionMessage4,
    ""
);

const divMessage4 = CreaMessage1(
    "div",
    "",
    "message",
    "",
    divSectionMessage4,
    ""
);

const divEmpty = CreaMessage1("div", "", "", "", divMessage4, "");
const ParaMessage4 = CreaMessage1(
    "p",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestie.",
    "",
    "",
    divEmpty,
    ""
);
const divSpan2 = CreaMessage1("div", "", "", "", divSectionMessage4, "");
const spanElement = CreaMessage1("span", "", "", divSpan2, "");

const divSearch = CreaMessage1("div", "", "search", "", document.body, "");

const inputSearch = CreaMessage1("input", "", "", "", divSearch, [
    "search",
    "Aa",
]);

const buttonSearch = CreaMessage1("button", "", "", "", divSearch, "");
let buttonsvg =
    '<svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.4 17.3995L18.85 9.91953C19.66 9.56953 19.66 8.42953 18.85 8.07953L1.4 0.599529C0.74 0.309529 0.00999999 0.799529 0.00999999 1.50953L0 6.11953C0 6.61953 0.37 7.04953 0.87 7.10953L15 8.99953L0.87 10.8795C0.37 10.9495 0 11.3795 0 11.8795L0.00999999 16.4895C0.00999999 17.1995 0.74 17.6895 1.4 17.3995Z" fill="#161616"/></svg>';
buttonSearch.innerHTML = buttonsvg;