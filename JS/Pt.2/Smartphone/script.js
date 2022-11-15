function createNewElement (type, content, classElement, idElement, position, src, alt){
    let newElement = document.createElement (type);
    let contentNewElement = document.createTextNode (content);
    newElement.appendChild (contentNewElement);
    
    if (position){
        position.appendChild (newElement);
    }

    if (classElement){
        newElement.className = classElement;
    }

    if (idElement){
        newElement.id = idElement;
    }

    if (src && alt){
        newElement.src = src;
        newElement.alt = alt;
    }

    return newElement;
}

//creazione dell'header
let headerContact = createNewElement("header", "", "", "", document.body, "");

//creazione div in Header
let divHeader = createNewElement ("div", "", "", "", headerContact, "", "");
//aggiunta contenuti al div in header
let h1 = createNewElement ("h1", "Contact", "", "", divHeader, "", "");
let buttonHeader = createNewElement ("button", "+", "", "",divHeader, "", "");

//creazione form in Header
let formHeader = createNewElement("form", "", "", "", headerContact, "", "");
//aggiunta contenuti in form dell'header
let imgFormHeader = createNewElement ("img", "", "", "", formHeader, "assets/search.png", "search");
let inputHeader = createNewElement ("input", "Contacts", "", "", formHeader, "", "");

//creazione sezione con quadratini di contatti
let sectionContacts = createNewElement ("section", "", "", "contacted", headerContact, "", "");
let h2Contacted = createNewElement ("h2", "Last contacted", "", "", sectionContacts, "", "");

//creazione di quadratini in last contacted
let contactedContainer = createNewElement ("div", "", "contacted__container", "", sectionContacts, "", "");

let arrayLastContacted = [
    {
        
    },

    {
        
    },

    {
        
    },

    {
        
    },

    {
        
    },
]

for (i = 0; i < arrayLastContacted.length; i++){
    let squareContact = createNewElement ("div", "", "square", "", contactedContainer, "", "");
    let circleContact = createNewElement ("div", "", "", "", squareContact, "", "");
}

//creazione del main
let main = createNewElement ("main", "", "", "", document.body, "", "");
//costruzione sezione del main
let sectionMain = createNewElement ("section", "", "", "message-preview", main, "", "");

let arrayContact = [
    {
        title: "Justin Wan",
        time: "14:23",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },

    {
        title: "Eathan Kwan",
        time: "11:25",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },

    {
        title: "Tannzz Wan",
        time: "11:00",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },

    {
        title: "Cecily Wan",
        time: "9:37",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },

    {
        title: "Oscar Wan",
        time: "8:53",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },

]

for (i=0; i<arrayContact.length; i++){
    let divContact = createNewElement ("div", "", "", "", sectionMain, "", "");
    let squareContact = createNewElement ("div", "", "square", "", divContact, "", "");
    let h3Contact = createNewElement ("h3", arrayContact[i].title, "", "", divContact, "", "");
    let timeContact = createNewElement ("p", arrayContact[i].time, "message-preview__text--gray", "", divContact, "", "");
    let textContact = createNewElement ("p", arrayContact[i].text, "message-preview__text", "", divContact, "", "");
}