function createNewElement (type, content, position, attributi){
    let newElement = document.createElement (type);
    let contentNewElement = document.createTextNode (content);
    newElement.appendChild (contentNewElement);
    
    if (position){
        position.appendChild (newElement);
    }

    if (attributi){
        if (attributi.src){
            newElement.src = attributi.src;
        }
        if (attributi.alt){
            newElement.alt = attributi.alt;
        }
        if (attributi.placeholder){
            newElement.placeholder = attributi.placeholder;
        }
        if (attributi.className){
            newElement.className = attributi.className;
        }
        if (attributi.id){
            newElement.id = attributi.id;        
        }
        if (attributi.type){
            newElement.type = attributi.type;
        }

    }

    return newElement;
}

//creazione dell'header
let headerContact = createNewElement("header", "", document.body, "");

//creazione div in Header
let divHeader = createNewElement ("div", "", headerContact, "");
//aggiunta contenuti al div in header
let h1 = createNewElement ("h1", "Contact", divHeader, "");
let buttonHeader = createNewElement ("button", "", divHeader, "");
let imgButton = createNewElement ("img", "", buttonHeader, {src:"assets/plus.png", alt:"addContact"});

//creazione form in Header
let formHeader = createNewElement("form", "", headerContact, "");
//aggiunta contenuti in form dell'header
let imgFormHeader = createNewElement ("img", "", formHeader, {src:"assets/search.png", alt:"search"});
let inputHeader = createNewElement ("input", "Contacts", formHeader, {type:"text", placeholder:"Search"});

//creazione sezione con quadratini di contatti
let sectionContacts = createNewElement ("section", "", headerContact, {id: "contacted"});
let h2Contacted = createNewElement ("h2", "Last contacted", sectionContacts, "");

//creazione di quadratini in last contacted
let contactedContainer = createNewElement ("div", "", sectionContacts, {className:"contacted__container"});

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
    let squareContact = createNewElement ("div", "", contactedContainer, {className:"square"});
    let circleContact = createNewElement ("div", "", squareContact, "");
}

//creazione del main
let main = createNewElement ("main", "", document.body,"");
//costruzione sezione del main
let sectionMain = createNewElement ("section", "", main, {id:"message-preview"});

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
    let divContact = createNewElement ("div", "", sectionMain, "");
    let squareContact = createNewElement ("div", "", divContact, {className:"square"});
    let h3Contact = createNewElement ("h3", arrayContact[i].title, divContact, "");
    let timeContact = createNewElement ("p", arrayContact[i].time, divContact, {className:"message-preview__text--gray"});
    let textContact = createNewElement ("p", arrayContact[i].text, divContact, {className:"message-preview__text"});
}