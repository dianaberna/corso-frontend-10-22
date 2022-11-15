/* Creazione file con funzioni */
function crtnew(attributes) {
  let newElement = document.createElement(attributes.tag);
  if (attributes.content) {
    let elementContent = document.createTextNode(attributes.content);
    newElement.appendChild(elementContent);
  }
  if (attributes.src && attributes.alt) {
    newElement.src = attributes.src
    newElement.alt = attributes.alt
  }
  if (attributes.eid) {
    newElement.eid = attributes.eid
  }
  if (attributes.cls) {
    newElement.className = attributes.cls
  }
  if (attributes.type) {
    newElement.type = attributes.type
  }
  if (attributes.name) {
    newElement.name = attributes.name
  }
  if (attributes.placeholder) {
    newElement.placeholder = attributes.placeholder
  }
  if (attributes.href) {
    newElement.href = attributes.href
  }
  if (attributes.father){
    attributes.father.appendChild(newElement)
  }
  return newElement;
}

const headerSVG = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM14 11H11V14C11 14.55 10.55 15 10 15C9.45 15 9 14.55 9 14V11H6C5.45 11 5 10.55 5 10C5 9.45 5.45 9 6 9H9V6C9 5.45 9.45 5 10 5C10.55 5 11 5.45 11 6V9H14C14.55 9 15 9.45 15 10C15 10.55 14.55 11 14 11Z" fill="#161616"/>
</svg>`;
const sectionSVG = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.4999 10.9996H11.7099L11.4299 10.7296C12.6299 9.32965 13.2499 7.41965 12.9099 5.38965C12.4399 2.60965 10.1199 0.389649 7.31989 0.049649C3.08989 -0.470351 -0.470107 3.08965 0.0498932 7.31965C0.389893 10.1196 2.60989 12.4396 5.38989 12.9096C7.41989 13.2496 9.32989 12.6296 10.7299 11.4296L10.9999 11.7096V12.4996L15.2499 16.7496C15.6599 17.1596 16.3299 17.1596 16.7399 16.7496C17.1499 16.3396 17.1499 15.6696 16.7399 15.2596L12.4999 10.9996ZM6.49989 10.9996C4.00989 10.9996 1.99989 8.98965 1.99989 6.49965C1.99989 4.00965 4.00989 1.99965 6.49989 1.99965C8.98989 1.99965 10.9999 4.00965 10.9999 6.49965C10.9999 8.98965 8.98989 10.9996 6.49989 10.9996Z" fill="#161616"/>
</svg>`;
let messageArray = [
  {
    link: "./index02.html",
    picsrc: "./pictures/profile-pic.png",
    picalt: "Justin Wan",
    name: "Justin Wan",
    time: "14:23",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae quod explicabo corrupti aut exercitationem temporibus dolor? Accusamus est corrupti, neque, quas expedita, pariatur aliquid nemo veritatis inventore sint at facilis!",
  },
  {
    link: "#",
    picsrc: "./pictures/profile-pic.png",
    picalt: "Eathan Kwan",
    name: "Eathan Kwan",
    time: "14:23",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae quod explicabo corrupti aut exercitationem temporibus dolor? Accusamus est corrupti, neque, quas expedita, pariatur aliquid nemo veritatis inventore sint at facilis!",
  },
  {
    link: "#",
    picsrc: "./pictures/profile-pic.png",
    picalt: "Tannzz Wan",
    name: "Tannzz Wan",
    time: "14:23",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae quod explicabo corrupti aut exercitationem temporibus dolor? Accusamus est corrupti, neque, quas expedita, pariatur aliquid nemo veritatis inventore sint at facilis!",
  },
  {
    link: "#",
    picsrc: "./pictures/profile-pic.png",
    picalt: "Cecily Wan",
    name: "Cecily Wan",
    time: "14:23",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae quod explicabo corrupti aut exercitationem temporibus dolor? Accusamus est corrupti, neque, quas expedita, pariatur aliquid nemo veritatis inventore sint at facilis!",
  },
  {
    link: "#",
    picsrc: "./pictures/profile-pic.png",
    picalt: "Oscar Wan",
    name: "Oscar Wan",
    time: "14:23",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae quod explicabo corrupti aut exercitationem temporibus dolor? Accusamus est corrupti, neque, quas expedita, pariatur aliquid nemo veritatis inventore sint at facilis!",
  },
  {
    link: "#",
    picsrc: "./pictures/profile-pic.png",
    picalt: "Prova",
    name: "Prova",
    time: "14:23",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae quod explicabo corrupti aut exercitationem temporibus dolor? Accusamus est corrupti, neque, quas expedita, pariatur aliquid nemo veritatis inventore sint at facilis!",
  },
  {
    link: "#",
    picsrc: "./pictures/profile-pic.png",
    picalt: "Prova",
    name: "Prova",
    time: "14:23",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae quod explicabo corrupti aut exercitationem temporibus dolor? Accusamus est corrupti, neque, quas expedita, pariatur aliquid nemo veritatis inventore sint at facilis!",
  },
  {
    link: "#",
    picsrc: "./pictures/profile-pic.png",
    picalt: "Prova",
    name: "Prova",
    time: "14:23",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae quod explicabo corrupti aut exercitationem temporibus dolor? Accusamus est corrupti, neque, quas expedita, pariatur aliquid nemo veritatis inventore sint at facilis!",
  },
  {
    link: "#",
    picsrc: "./pictures/profile-pic.png",
    picalt: "Prova",
    name: "Prova",
    time: "14:23",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae quod explicabo corrupti aut exercitationem temporibus dolor? Accusamus est corrupti, neque, quas expedita, pariatur aliquid nemo veritatis inventore sint at facilis!",
  },
  {
    link: "#",
    picsrc: "./pictures/profile-pic.png",
    picalt: "Prova",
    name: "Prova",
    time: "14:23",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae quod explicabo corrupti aut exercitationem temporibus dolor? Accusamus est corrupti, neque, quas expedita, pariatur aliquid nemo veritatis inventore sint at facilis!",
  },
  {
    link: "#",
    picsrc: "./pictures/profile-pic.png",
    picalt: "Prova",
    name: "Prova",
    time: "14:23",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae quod explicabo corrupti aut exercitationem temporibus dolor? Accusamus est corrupti, neque, quas expedita, pariatur aliquid nemo veritatis inventore sint at facilis!",
  },
];
const body = document.getElementsByTagName("body")[0];
const newDiv = crtnew({tag:"div", father:body})
const newHheader = crtnew({tag:"header", father:newDiv})
const newH1 = crtnew({tag:"h1",content:"Contacts", father:newHheader})
const headerButton = crtnew({tag:"button", father:newHheader})
headerButton.innerHTML = headerSVG;
const newSection = crtnew({tag:"section", father:newDiv})
newSection.innerHTML = sectionSVG;
const newSectionInput = crtnew({tag:"input", father:newSection, type: "search", name: "contacts", placeholder: "Contacts", eid:"contacts"})
const newNav = crtnew({tag:"nav", father:newDiv})
const navFirstDiv = crtnew({tag:"div", father:newNav})
const navFirstDivH2 = crtnew({tag:"h2", content:"Last Contacted", father:navFirstDiv})
const navSecondDiv = crtnew({tag:"div", father:newNav})
for (let i = 0; i < 10; i++) {
  let navDivs = crtnew({tag:"div", cls:"last_contacts", father:navSecondDiv})
  let navDivsDiv1 = crtnew({tag:"div", father:navDivs})
  let navDivsDiv1Img = crtnew({tag:"img", src:"./pictures/profile-pic.png", alt:"Last contact profile picture", father:navDivsDiv1});
  let navDivsDiv2 = crtnew({tag:"div", father:navDivs})
}
const newMain = crtnew({tag:"main", father:body})
for (let i = 0; i < messageArray.length; i++) {
  let newMainDiv = crtnew({tag:"div", father:newMain})
  let newMainDivDiv1 = crtnew({tag:"div", father:newMainDiv})
  let newMainDivDiv1A = crtnew({tag:"a", href:messageArray[i].link, father:newMainDivDiv1});
  let newMainDivDiv1AImg = crtnew({tag:"img", src:messageArray[i].picsrc, alt:messageArray[i].picalt, father:newMainDivDiv1A});
  let newMainDivDiv2 = crtnew({tag:"div", cls:"message", father:newMainDiv})
  let newMainDivDiv2Div = crtnew({tag:"div", father:newMainDivDiv2})
  let newMainDivDiv2DivSpan1 = crtnew({tag:"span", content:messageArray[i].name, father:newMainDivDiv2Div})
  let newMainDivDiv2DivSpan2 = crtnew({tag:"span", content:messageArray[i].time, father:newMainDivDiv2Div})
  let newMainDivDiv2Span = crtnew({tag:"span", content:messageArray[i].text, father:newMainDivDiv2})
}
