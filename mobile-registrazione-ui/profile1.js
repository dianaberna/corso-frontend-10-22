const divTop = document.getElementsByClassName ("top")[0];
let imgMaster = document.createElement("img")
imgMaster.src="/mobile-registrazione-ui/assets/mastercard1.png"
divTop.appendChild(imgMaster)

let welcome_text = document.createElement("div")
welcome_text.className="welcome-text"
divTop.appendChild(welcome_text)
let h3_1 = document.createElement("h3")
let h3_1text = document.createTextNode("Hi there, welcome!")
h3_1.appendChild(h3_1text)
let par1 = document.createElement("p")
let par1_text = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis vestibulum augue massa sed aenean.")
par1.appendChild(par1_text)
welcome_text.appendChild(h3_1)
welcome_text.appendChild(par1)

let divForm = document.createElement("div")
divForm.className="form"
document.body.appendChild(divForm)
let divUsername = document.createElement("div")
divUsername.className="username"
divForm.appendChild(divUsername)
let svgUsername = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V15C0 15.55 0.45 16 1 16H15C15.55 16 16 15.55 16 15V14C16 11.34 10.67 10 8 10Z" fill="#A8A8A8"/></svg>';
divUsername.innerHTML=svgUsername;
let inputText = document.createElement("input")
inputText.setAttribute("type", "text")
divUsername.appendChild(inputText)

let divEmail = document.createElement("div")
divEmail.className="email"
divForm.appendChild(divEmail)
let svgEmail = '<svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM17.6 4.25L10.53 8.67C10.21 8.87 9.79 8.87 9.47 8.67L2.4 4.25C2.15 4.09 2 3.82 2 3.53C2 2.86 2.73 2.46 3.3 2.81L10 7L16.7 2.81C17.27 2.46 18 2.86 18 3.53C18 3.82 17.85 4.09 17.6 4.25Z" fill="#A8A8A8"/></svg>';
divEmail.innerHTML=svgEmail;
let inputText2 = document.createElement("input")
inputText2.setAttribute("type", "text")
divEmail.appendChild(inputText2)

let divPassword = document.createElement("div")
divPassword.className="password"
divForm.appendChild(divPassword)
let svgPassword = '<svg width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.6502 5.00012C10.7002 2.31012 7.90018 0.500121 4.77018 1.12012C2.48018 1.58012 0.620184 3.41012 0.140184 5.70012C-0.679816 9.57012 2.26018 13.0001 6.00018 13.0001C8.61018 13.0001 10.8302 11.3301 11.6502 9.00012H16.0002V11.0001C16.0002 12.1001 16.9002 13.0001 18.0002 13.0001C19.1002 13.0001 20.0002 12.1001 20.0002 11.0001V9.00012C21.1002 9.00012 22.0002 8.10012 22.0002 7.00012C22.0002 5.90012 21.1002 5.00012 20.0002 5.00012H11.6502ZM6.00018 9.00012C4.90018 9.00012 4.00018 8.10012 4.00018 7.00012C4.00018 5.90012 4.90018 5.00012 6.00018 5.00012C7.10018 5.00012 8.00018 5.90012 8.00018 7.00012C8.00018 8.10012 7.10018 9.00012 6.00018 9.00012Z" fill="#A8A8A8"/></svg>';
divPassword.innerHTML=svgPassword;
let inputText3 = document.createElement("input")
inputText3.setAttribute("type", "password")
/* inputText3.placeholder = divPassword */
divPassword.appendChild(inputText3)

let divFinish = document.createElement("div")
divFinish.className="finish"
document.body.appendChild(divFinish)

let div1 = document.createElement("div")
divFinish.appendChild(div1)
let new_account = document.createElement("button")
new_account.className="create-new-account"
div1.appendChild(new_account)

let div2 = document.createElement("div")
divFinish.appendChild(div2)
let forgot_password = document.createElement("button")
forgot_password.className="forgot-password"
div2.appendChild(forgot_password)