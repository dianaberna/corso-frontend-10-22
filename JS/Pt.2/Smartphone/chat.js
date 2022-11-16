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

//creazione di header
let header = createNewElement ("header", "",document.body,"");

//creazione contenuti dell'header
//button
let buttonHeader = createNewElement ("button", "", header, "");
let imgButton = createNewElement ("img", "", buttonHeader, {src:"assets/back.png", alt:"back"});
//form di ricerca
let formHeader = createNewElement ("form", "", header, "");
let imgFormHeader = createNewElement ("img", "", formHeader, {src:"assets/search.png", alt:"search"});
let inputHeader = createNewElement ("input", "", formHeader, {placeholder:"Search conversation"});

//creazione della section in header
let sectionHeader = createNewElement ("section", "", header, "");
let h1Header = createNewElement ("h1", "Justin Wan", sectionHeader, "");
let divSectionHeader = createNewElement ("div", "", sectionHeader, "");

//bottone chiamata
let buttonCall = createNewElement ("button", "", divSectionHeader, "");
let imgButtonCall = createNewElement ("img", "", buttonCall, {src:"assets/call.png", alt:"call"});

//bottone videochiamata
let buttonVideocall = createNewElement ("button", "", divSectionHeader, "");
let imgButtonVideocall = createNewElement ("img", "", buttonVideocall, {src:"assets/videocall.png", alt:"videocall", id:"videocall"});


//creazione del main 
let main = createNewElement ("main", "", document.body, "");

//creazione della section del main
let sectionMain = createNewElement ("section", "", main, "");

//creazione di div
let divMain = createNewElement ("div", "", sectionMain, {className:"chat"});
let squareContact = createNewElement ("div", "", divMain, {className:"square"});


let arrayChat = [
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie.",
        time: "16:45",
    },

    {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie fermentum porttitor diam purus",
    },

    {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
        id: "message-me",
    },

    {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie fermentum porttitor diam purus",
    },

];

for (i = 0; i < arrayChat.length; i++){
    let divMessage = createNewElement ("div", "",divMain, {className:"message", id:arrayChat[i].id});
    
    if (arrayChat[i].text){
    let textMessage = createNewElement ("p", arrayChat[i].text, divMessage, "");
    }
    
    if (arrayChat[i].time){
        let timeMessage = createNewElement ("p", arrayChat[i].time, divMain, "");

    }
};


let formMain = createNewElement ("form", "", sectionMain, "");
let buttonFormMain = createNewElement ("button", "", formMain, "");
let imgButtonForm = createNewElement ("img", "", buttonFormMain, {src:"assets/send.png", alt:"send"});
let inputFooter = createNewElement ("input", "", formMain, {type:"text", placeholder: "Aa"});




