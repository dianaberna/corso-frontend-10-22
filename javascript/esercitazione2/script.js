// header ---------------------------------

const header = document.createElement("header");
document.body.appendChild(header);

const headerDiv = document.createElement("div");
header.appendChild(headerDiv);

const headerTitle = document.createElement("h3");
const headerTitleText = document.createTextNode("Contacts");
headerTitle.appendChild(headerTitleText);
headerDiv.appendChild(headerTitle);

let headerDiv_svg = "<svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM14 11H11V14C11 14.55 10.55 15 10 15C9.45 15 9 14.55 9 14V11H6C5.45 11 5 10.55 5 10C5 9.45 5.45 9 6 9H9V6C9 5.45 9.45 5 10 5C10.55 5 11 5.45 11 6V9H14C14.55 9 15 9.45 15 10C15 10.55 14.55 11 14 11Z' fill='#161616' />"
headerDiv.insertAdjacentHTML("beforeend", headerDiv_svg);

const headerInputDiv = document.createElement("div");
header.appendChild(headerInputDiv);

let headerInputDiv_svg = "<svg class='lente' width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M12.4999 10.9996H11.7099L11.4299 10.7296C12.6299 9.32965 13.2499 7.41965 12.9099 5.38965C12.4399 2.60965 10.1199 0.389649 7.31989 0.049649C3.08989 -0.470351 -0.470107 3.08965 0.0498932 7.31965C0.389893 10.1196 2.60989 12.4396 5.38989 12.9096C7.41989 13.2496 9.32989 12.6296 10.7299 11.4296L10.9999 11.7096V12.4996L15.2499 16.7496C15.6599 17.1596 16.3299 17.1596 16.7399 16.7496C17.1499 16.3396 17.1499 15.6696 16.7399 15.2596L12.4999 10.9996ZM6.49989 10.9996C4.00989 10.9996 1.99989 8.98965 1.99989 6.49965C1.99989 4.00965 4.00989 1.99965 6.49989 1.99965C8.98989 1.99965 10.9999 4.00965 10.9999 6.49965C10.9999 8.98965 8.98989 10.9996 6.49989 10.9996Z' fill='#161616' /></svg>"
headerInputDiv.innerHTML = headerInputDiv_svg;

const headerInput = document.createElement("input");
headerInput.setAttribute("type", "text");
headerInput.setAttribute("placeholder", "Contacts");
headerInputDiv.appendChild(headerInput);

// main -----------------------------------

const main = document.createElement("main");
document.body.appendChild(main);

// sezione scrollbar ----------------------

const scrollbarSection = document.createElement("section");
main.appendChild(scrollbarSection);

const scrollbarSectionTitle = document.createElement("h5");
const scrollbarSectionTitle_Text = document.createTextNode("Last Contacted");
scrollbarSectionTitle.appendChild(scrollbarSectionTitle_Text);
scrollbarSection.appendChild(scrollbarSectionTitle);

const scrollbar = document.createElement("div");
scrollbar.setAttribute("class", "scrollbar");
scrollbarSection.appendChild(scrollbar);

const scrollbarWrapper = document.createElement("div");
scrollbarWrapper.setAttribute("class", "wrapper");
scrollbar.appendChild(scrollbarWrapper);

const scrollbarSquareDiv = document.createElement("div");
scrollbarSquareDiv.setAttribute("class", "square");
scrollbarWrapper.appendChild(scrollbarSquareDiv);

const scrollbarDot = document.createElement("div");
scrollbarDot.setAttribute("class", "dot");
scrollbarSquareDiv.appendChild(scrollbarDot);

// sezione chat ---------------------------

const d = new Date("July 21, 1983 01:15:00");
let hour = d.getHours();


class Sender {
    constructor (name, profilePhoto){
        this.name = name;
        this.profilePhoto = profilePhoto;
    }
}

class ChatItem {
    constructor (sender, date, text){
        this.sender = sender;
        this.time = time;
        this.text = text;
    }
}

function addChatItem(chatItem) {
    const chatBox = document.createElement("div");
    chatBox.setAttribute("class", "chat-box");
    
    const chatSquareDiv = document.createElement("div");
    chatSquareDiv.setAttribute("class", "square");
    chatBox.appendChild(chatSquareDiv);
    
    const textBox = document.createElement("div");
    textBox.setAttribute("class", "text-box");
    chatBox.appendChild(textBox);
    
    const senderDiv = document.createElement("div");
    textBox.appendChild(senderDiv);
    
    const senderName =  document.createElement("h4");
    const senderNameText = document.createTextNode(chatItem.sender.name);
    senderName.appendChild(senderNameText);
    senderDiv.appendChild(senderName);
    
    const senderTime = document.createElement("span");
    const senderTimeText = document.createTextNode(chatItem.time);
    senderTime.appendChild(senderTimeText);
    senderDiv.appendChild(senderTime);
    
    const message = document.createElement("p");
    const messageText = document.createTextNode(chatItem.text);
    message.appendChild(messageText);
    textBox.appendChild(message);

    return chatBox;
}

const chatSection = document.createElement("section");
chatSection.setAttribute("id", "chat");
main.appendChild(chatSection);

// chiamo la funzione di creazione elemento della chat ----

// Sender (name, profilePhoto)
// ChatItem (sender, time, text)
// addChatItem(chatItem)

let messages = [];
messages.push(new ChatItem(new Sender("Justin Wan", ""), "14:23","Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio id magni exercitationem voluptatum. Dolorem nesciunt distinctio adipisci numquam magni itaque quibusdam? Aspernatur omnis quia"));
messages.push(new ChatItem(new Sender("Ethan Kwan"), "16:52", "Ciao come va? Bla bla blablabla bla")); 
messages.push(new ChatItem(new Sender("Justin Wan", ""), "17:23","Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio id magni exercitationem voluptatum. Dolorem nesciunt distinctio adipisci numquam magni itaque quibusdam? Aspernatur omnis quia"));
messages.push(new ChatItem(new Sender("Ethan Kwan"), "21:52", "Ciao come va? Bla bla blablabla bla"));

function populateChat(messagesArray, section) {
    for (let i = 0; i < messagesArray.length; i++) {
        const message = messagesArray[i];
        section.prepend(addChatItem(message));
    }
}

populateChat(messages, chatSection);