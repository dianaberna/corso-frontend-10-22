function creaNodo(tipo,attributi,padre,contenuto){
    let Elemento=document.createElement(tipo)
   
    if (attributi){
      Elemento.src=attributi.src;
      Elemento.alt=attributi.alt;
      Elemento.className=attributi.className;
      Elemento.id=attributi.id;
      Elemento.type=attributi.type;
      Elemento.placeholder=attributi.placeholder;
    }
    
    if (padre){
      padre.appendChild(Elemento)
    }
    if(contenuto){
      let Testo= document.createTextNode(contenuto)
      padre.appendChild(Testo)
    } return Elemento
  }

  let header=creaNodo("header","",document.body)
  let head1=creaNodo("div",{id:"head1"},header)
  let h1=creaNodo("h1","",head1)
  let h1Text=creaNodo("h1","",h1,"Contacts")
  //Pulsante +
  let button=creaNodo("button","",head1)
  let svgplus= "<svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM14 11H11V14C11 14.55 10.55 15 10 15C9.45 15 9 14.55 9 14V11H6C5.45 11 5 10.55 5 10C5 9.45 5.45 9 6 9H9V6C9 5.45 9.45 5 10 5C10.55 5 11 5.45 11 6V9H14C14.55 9 15 9.45 15 10C15 10.55 14.55 11 14 11Z' fill='#161616'/></svg>"
  button.innerHTML = svgplus
  //Search
  let search=creaNodo("div",{id:"search"},header)
  let inputType=creaNodo("input",{type:"search",placeholder:"Contacts"},search)
  let svgsearch="<svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M12.4999 10.9996H11.7099L11.4299 10.7296C12.6299 9.32965 13.2499 7.41965 12.9099 5.38965C12.4399 2.60965 10.1199 0.389649 7.31989 0.049649C3.08989 -0.470351 -0.470107 3.08965 0.0498932 7.31965C0.389893 10.1196 2.60989 12.4396 5.38989 12.9096C7.41989 13.2496 9.32989 12.6296 10.7299 11.4296L10.9999 11.7096V12.4996L15.2499 16.7496C15.6599 17.1596 16.3299 17.1596 16.7399 16.7496C17.1499 16.3396 17.1499 15.6696 16.7399 15.2596L12.4999 10.9996ZM6.49989 10.9996C4.00989 10.9996 1.99989 8.98965 1.99989 6.49965C1.99989 4.00965 4.00989 1.99965 6.49989 1.99965C8.98989 1.99965 10.9999 4.00965 10.9999 6.49965C10.9999 8.98965 8.98989 10.9996 6.49989 10.9996Z' fill='#161616'/></svg>"
  search.insertAdjacentHTML("afterbegin", "<svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M12.4999 10.9996H11.7099L11.4299 10.7296C12.6299 9.32965 13.2499 7.41965 12.9099 5.38965C12.4399 2.60965 10.1199 0.389649 7.31989 0.049649C3.08989 -0.470351 -0.470107 3.08965 0.0498932 7.31965C0.389893 10.1196 2.60989 12.4396 5.38989 12.9096C7.41989 13.2496 9.32989 12.6296 10.7299 11.4296L10.9999 11.7096V12.4996L15.2499 16.7496C15.6599 17.1596 16.3299 17.1596 16.7399 16.7496C17.1499 16.3396 17.1499 15.6696 16.7399 15.2596L12.4999 10.9996ZM6.49989 10.9996C4.00989 10.9996 1.99989 8.98965 1.99989 6.49965C1.99989 4.00965 4.00989 1.99965 6.49989 1.99965C8.98989 1.99965 10.9999 4.00965 10.9999 6.49965C10.9999 8.98965 8.98989 10.9996 6.49989 10.9996Z' fill='#161616'/></svg>")
  //Last contacted
  let lastcontacted=creaNodo("section",{id:"lastcontacted"},header)
  let h2=creaNodo("h2","",lastcontacted,)
  let h2Text=creaNodo("text","",h2,"Last Contacted")

  let container=creaNodo("div",{className:"container"},lastcontacted)
  let wrapper=creaNodo("div",{className:"wrapper"},container)

  let arraycontacts=["div","div","div","div","div","div","div","div","div","div"]

  for(let i=0;i<arraycontacts.length;i++){
    let contacts=creaNodo(arraycontacts[i],{className:"contacts"},wrapper); 
    let divcontacts=creaNodo("div","",contacts);
    }
  
    //main
    let main=creaNodo("main","",document.body)
    let messagesection=creaNodo("div",{id:"messagesection"},main)
    
    let arraymessages=["messages","messages","messages","messages","messages","messages","messages","messages"]
    for(let i=0;i<arraymessages.length;i++){
      let messages=creaNodo(arraymessages[i],{className:"messages"},messagesection)
      
      //contactpicture
      let picture=creaNodo("div",{className:"contactpicture"},messages)
      let wrapmessage=creaNodo("div","",messages)
      let contactwrap=creaNodo("div","",wrapmessage)
      
      //justin wan 
      let h3=creaNodo("h3","",contactwrap)
      let h3text=creaNodo("text","",h3,"Justin Wan")
    
      // orario
      let time=creaNodo("span","",contactwrap)
      let timetext=creaNodo("text","",time,"14:23")
      
      //testo del messaggio
      let lorem=creaNodo("text","",wrapmessage,"Lorem ipsum dolor sit amet...")
      
      }