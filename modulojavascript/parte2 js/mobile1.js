let header=document.createElement("header")
document.body.appendChild(header)

let head1=document.createElement("div") 
head1.id="head1"
header.appendChild(head1)

//Contacts
let h1=document.createElement("h1")
let h1Text=document.createTextNode("Contacts")
head1.appendChild(h1)
h1.appendChild(h1Text)

//Pulsante +
let button=document.createElement("button")
let svgplus= "<svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM14 11H11V14C11 14.55 10.55 15 10 15C9.45 15 9 14.55 9 14V11H6C5.45 11 5 10.55 5 10C5 9.45 5.45 9 6 9H9V6C9 5.45 9.45 5 10 5C10.55 5 11 5.45 11 6V9H14C14.55 9 15 9.45 15 10C15 10.55 14.55 11 14 11Z' fill='#161616'/></svg>"
button.innerHTML = svgplus
head1.appendChild(button)


//Search
let search=document.createElement("div")
search.id="search"
header.appendChild(search)
let inputType=document.createElement("input")
inputType.type="search"
inputType.placeholder="Contacts"
let svgsearch="<svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M12.4999 10.9996H11.7099L11.4299 10.7296C12.6299 9.32965 13.2499 7.41965 12.9099 5.38965C12.4399 2.60965 10.1199 0.389649 7.31989 0.049649C3.08989 -0.470351 -0.470107 3.08965 0.0498932 7.31965C0.389893 10.1196 2.60989 12.4396 5.38989 12.9096C7.41989 13.2496 9.32989 12.6296 10.7299 11.4296L10.9999 11.7096V12.4996L15.2499 16.7496C15.6599 17.1596 16.3299 17.1596 16.7399 16.7496C17.1499 16.3396 17.1499 15.6696 16.7399 15.2596L12.4999 10.9996ZM6.49989 10.9996C4.00989 10.9996 1.99989 8.98965 1.99989 6.49965C1.99989 4.00965 4.00989 1.99965 6.49989 1.99965C8.98989 1.99965 10.9999 4.00965 10.9999 6.49965C10.9999 8.98965 8.98989 10.9996 6.49989 10.9996Z' fill='#161616'/></svg>"
search.insertAdjacentHTML("afterbegin", "<svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M12.4999 10.9996H11.7099L11.4299 10.7296C12.6299 9.32965 13.2499 7.41965 12.9099 5.38965C12.4399 2.60965 10.1199 0.389649 7.31989 0.049649C3.08989 -0.470351 -0.470107 3.08965 0.0498932 7.31965C0.389893 10.1196 2.60989 12.4396 5.38989 12.9096C7.41989 13.2496 9.32989 12.6296 10.7299 11.4296L10.9999 11.7096V12.4996L15.2499 16.7496C15.6599 17.1596 16.3299 17.1596 16.7399 16.7496C17.1499 16.3396 17.1499 15.6696 16.7399 15.2596L12.4999 10.9996ZM6.49989 10.9996C4.00989 10.9996 1.99989 8.98965 1.99989 6.49965C1.99989 4.00965 4.00989 1.99965 6.49989 1.99965C8.98989 1.99965 10.9999 4.00965 10.9999 6.49965C10.9999 8.98965 8.98989 10.9996 6.49989 10.9996Z' fill='#161616'/></svg>")
search.appendChild(inputType)


//Last contacted

let lastcontacted=document.createElement("section")
lastcontacted.id="lastcontacted"
let h2=document.createElement("h2")
let h2Text=document.createTextNode("Last Contacted")
header.appendChild(lastcontacted)
lastcontacted.appendChild(h2)
h2.appendChild(h2Text)

let container=document.createElement("div")
container.className="container"
lastcontacted.appendChild(container)
let wrapper=document.createElement("div")
wrapper.className="wrapper"
container.appendChild(wrapper)


let arraycontacts=["div","div","div","div","div","div","div","div","div","div"]

for(let i=0;i<arraycontacts.length;i++){
    let contacts=document.createElement(arraycontacts[i]);
    contacts.className="contacts";
    let divcontacts=document.createElement("div");
    contacts.appendChild(divcontacts);
    wrapper.appendChild(contacts);
    }

//main

let main=document.createElement("main")
document.body.appendChild(main)

let messagesection=document.createElement("div")
messagesection.id="messagesection"
main.appendChild(messagesection)

let arraymessages=["messages","messages","messages","messages","messages","messages","messages","messages"]

for(let i=0;i<arraymessages.length;i++){
let messages=document.createElement(arraymessages[i])
messages.className="messages"
messagesection.appendChild(messages)

//contactpicture
let picture=document.createElement("div")
picture.className="contactpicture"
messages.appendChild(picture)

let wrapmessage=document.createElement("div")
messages.appendChild(wrapmessage)

let contactwrap=document.createElement("div")
wrapmessage.appendChild(contactwrap)
//justin wan 
let h3=document.createElement("h3")
contactwrap.appendChild(h3)
let h3text=document.createTextNode("Justin Wan")
h3.appendChild(h3text)
// orario
let time=document.createElement("span")
let timetext=document.createTextNode("14:23")
contactwrap.appendChild(time)
time.appendChild(timetext)
//testo del messaggio
let lorem=document.createTextNode("Lorem ipsum dolor sit amet...")
wrapmessage.appendChild(lorem)
}
/*<div class="messages">
                <div class="contactpicture"></div>
                 <div>
                   <div>
                      <h3>Justin Wan</h3> 
                       <span>14:23</span>
                   </div>  
                    <text>Lorem ipsum dolor sit amet...</text>
                </div>
          </div>*/