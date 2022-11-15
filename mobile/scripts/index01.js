// identificazione body
const body = document.getElementsByTagName("body")[0];
// creazione div
const newDiv = document.createElement("div");
//creazione elementi header
const headerSVG = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM14 11H11V14C11 14.55 10.55 15 10 15C9.45 15 9 14.55 9 14V11H6C5.45 11 5 10.55 5 10C5 9.45 5.45 9 6 9H9V6C9 5.45 9.45 5 10 5C10.55 5 11 5.45 11 6V9H14C14.55 9 15 9.45 15 10C15 10.55 14.55 11 14 11Z" fill="#161616"/>
</svg>`;
const newHheader = document.createElement("header");
const newH1 = document.createElement("h1");
const h1Text = document.createTextNode("Contacts");
const headerButton = document.createElement("button");
headerButton.innerHTML = headerSVG;
newH1.appendChild(h1Text);
newHheader.appendChild(newH1);
newHheader.appendChild(headerButton);
//creazione elementi section
const sectionSVG = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.4999 10.9996H11.7099L11.4299 10.7296C12.6299 9.32965 13.2499 7.41965 12.9099 5.38965C12.4399 2.60965 10.1199 0.389649 7.31989 0.049649C3.08989 -0.470351 -0.470107 3.08965 0.0498932 7.31965C0.389893 10.1196 2.60989 12.4396 5.38989 12.9096C7.41989 13.2496 9.32989 12.6296 10.7299 11.4296L10.9999 11.7096V12.4996L15.2499 16.7496C15.6599 17.1596 16.3299 17.1596 16.7399 16.7496C17.1499 16.3396 17.1499 15.6696 16.7399 15.2596L12.4999 10.9996ZM6.49989 10.9996C4.00989 10.9996 1.99989 8.98965 1.99989 6.49965C1.99989 4.00965 4.00989 1.99965 6.49989 1.99965C8.98989 1.99965 10.9999 4.00965 10.9999 6.49965C10.9999 8.98965 8.98989 10.9996 6.49989 10.9996Z" fill="#161616"/>
</svg>`;
const newSection = document.createElement("section");
newSection.innerHTML = sectionSVG;
const newSectionInput = document.createElement("input");
newSectionInput.type = "search";
newSectionInput.name = "contacts";
newSectionInput.id = "contacts";
newSectionInput.placeholder = "Contacts";
newSection.appendChild(newSectionInput);
//creazione elementi nav
const newNav = document.createElement("nav");
const navFirstDiv = document.createElement("div");
const navFirstDivH2 = document.createElement("h2");
const navFirstDivH2Text = document.createTextNode("Last Contacted");
const navSecondDiv = document.createElement("div");
for (let i = 0; i < 10; i++) {
  // creazione div degli ultimi contatti
  let navDivs = document.createElement("div");
  navDivs.className = "last_contacts";
  let navDivsDiv1 = document.createElement("div");
  let navDivsDiv1Img = document.createElement("img");
  navDivsDiv1Img.src = "./pictures/profile-pic.png";
  navDivsDiv1Img.alt = "Last contact profile picture";
  let navDivsDiv2 = document.createElement("div");
  // posizionamento degli elementi all'interno della barra di scorrimento dei contatti recenti
  navDivsDiv1.appendChild(navDivsDiv1Img);
  navDivs.appendChild(navDivsDiv1);
  navDivs.appendChild(navDivsDiv2);
  navSecondDiv.appendChild(navDivs);
}
navFirstDivH2.appendChild(navFirstDivH2Text);
navFirstDiv.appendChild(navFirstDivH2);
newNav.appendChild(navFirstDiv);
newNav.appendChild(navSecondDiv);
//posizionamento header, section e nav nel div principale
newDiv.appendChild(newHheader);
newDiv.appendChild(newSection);
newDiv.appendChild(newNav);
/************************/
// creazione main
const newMain = document.createElement("main");
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
for (let i = 0; i < messageArray.length; i++) {
  let newMainDiv = document.createElement("div");
  let newMainDivDiv1 = document.createElement("div");
  let newMainDivDiv1A = document.createElement("a");
  newMainDivDiv1A.href = messageArray[i].link;
  let newMainDivDiv1AImg = document.createElement("img");
  newMainDivDiv1AImg.src = messageArray[i].picsrc;
  newMainDivDiv1AImg.alt = messageArray[i].picalt;
  //posizionamento immagine di profilo dentro al link verso la chat
  newMainDivDiv1A.appendChild(newMainDivDiv1AImg);
  newMainDivDiv1.appendChild(newMainDivDiv1A);

  let newMainDivDiv2 = document.createElement("div");
  newMainDivDiv2.className = "message";
  let newMainDivDiv2Div = document.createElement("div");
  let newMainDivDiv2DivSpan1 = document.createElement("span");
  let newMainDivDiv2DivSpan1Text = document.createTextNode(
    messageArray[i].name
  );

  newMainDivDiv2DivSpan1.appendChild(newMainDivDiv2DivSpan1Text);
  let newMainDivDiv2DivSpan2 = document.createElement("span");
  let newMainDivDiv2DivSpan2Text = document.createTextNode(
    messageArray[i].time
  );
  newMainDivDiv2DivSpan2.appendChild(newMainDivDiv2DivSpan2Text);
  newMainDivDiv2Div.appendChild(newMainDivDiv2DivSpan1);
  newMainDivDiv2Div.appendChild(newMainDivDiv2DivSpan2);

  let newMainDivDiv2Span = document.createElement("span");
  let newMainDivDiv2SpanText = document.createTextNode(messageArray[i].text);
  newMainDivDiv2Span.appendChild(newMainDivDiv2SpanText);
  //posizionamento nome del contatto ed orario ultimo messaggio
  newMainDivDiv2.appendChild(newMainDivDiv2Div);
  newMainDivDiv2.appendChild(newMainDivDiv2Span);
  //posizionamento immagine e corpo del messaggio all'interno della lista messaggi
  newMainDiv.appendChild(newMainDivDiv1);
  newMainDiv.appendChild(newMainDivDiv2);
  //posizionamento della lista messgaggi nel main
  newMain.appendChild(newMainDiv);
}
//posizionamento div principale e del main nel body
body.appendChild(newDiv);
body.appendChild(newMain);
