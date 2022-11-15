const divTop = document.getElementsByClassName("top")[0]
function nodi (tipo, classe) {
    let nuovo_elemento = document.createElement(tipo)
    nuovo_elemento.className=classe
        return nuovo_elemento
}

function elementi (tipo, classe, source, padre, contenuto, extra) {
    let nuovo_elemento = document.createElement(tipo)
    nuovo_elemento.className=classe
    if (source)
    nuovo_elemento.src=source
    padre.appendChild(nuovo_elemento)
    let contenutoTesto = document.createTextNode(contenuto)
    nuovo_elemento.appendChild(contenutoTesto)
    if (extra) 
    nuovo_elemento.innerHTML = extra
}

    elementi("button", "close", "", divTop, "", "<svg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M13.3 0.710703C12.91 0.320703 12.28 0.320703 11.89 0.710703L6.99997 5.5907L2.10997 0.700703C1.71997 0.310703 1.08997 0.310703 0.699971 0.700703C0.309971 1.0907 0.309971 1.7207 0.699971 2.1107L5.58997 7.0007L0.699971 11.8907C0.309971 12.2807 0.309971 12.9107 0.699971 13.3007C1.08997 13.6907 1.71997 13.6907 2.10997 13.3007L6.99997 8.4107L11.89 13.3007C12.28 13.6907 12.91 13.6907 13.3 13.3007C13.69 12.9107 13.69 12.2807 13.3 11.8907L8.40997 7.0007L13.3 2.1107C13.68 1.7307 13.68 1.0907 13.3 0.710703Z' fill='#161616'/> </svg>")
    elementi("button","likes", "" ,divTop, "", "<svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M10 18.9992C9.35502 18.4272 8.62602 17.8322 7.85502 17.1992H7.84502C5.13002 14.9792 2.05302 12.4672 0.694023 9.45717C0.24754 8.4989 0.0109268 7.4563 1.1406e-05 6.39917C-0.00297039 4.94866 0.578794 3.55816 1.61383 2.54194C2.64887 1.52572 4.04981 0.969566 5.50002 0.999171C6.68065 1.00104 7.83586 1.34225 8.82802 1.98217C9.26399 2.26514 9.65844 2.60743 10 2.99917C10.3435 2.60896 10.7381 2.26688 11.173 1.98217C12.1648 1.34213 13.3197 1.00089 14.5 0.999171C15.9502 0.969566 17.3512 1.52572 18.3862 2.54194C19.4213 3.55816 20.003 4.94866 20 6.39917C19.9898 7.45799 19.7532 8.50237 19.306 9.46217C17.947 12.4722 14.871 14.9832 12.156 17.1992L12.146 17.2072C11.374 17.8362 10.646 18.4312 10.001 19.0072L10 18.9992ZM5.50002 2.99917C4.56853 2.98751 3.67009 3.34401 3.00002 3.99117C2.35441 4.62534 1.99358 5.49422 1.99994 6.39917C2.01135 7.16967 2.18585 7.92902 2.51202 8.62717C3.15353 9.92588 4.01913 11.1012 5.06902 12.0992C6.06002 13.0992 7.20002 14.0672 8.18602 14.8812C8.45902 15.1062 8.73702 15.3332 9.01502 15.5602L9.19002 15.7032C9.45702 15.9212 9.73302 16.1472 10 16.3692L10.013 16.3572L10.019 16.3522H10.025L10.034 16.3452H10.039H10.044L10.062 16.3302L10.103 16.2972L10.11 16.2912L10.121 16.2832H10.127L10.136 16.2752L10.8 15.7302L10.974 15.5872C11.255 15.3582 11.533 15.1312 11.806 14.9062C12.792 14.0922 13.933 13.1252 14.924 12.1202C15.9741 11.1227 16.8397 9.94769 17.481 8.64917C17.8131 7.94497 17.9901 7.17768 18.0001 6.39917C18.0042 5.49701 17.6435 4.63146 17 3.99917C16.3312 3.34909 15.4326 2.98965 14.5 2.99917C13.3619 2.9895 12.274 3.46654 11.51 4.31017L10 6.05017L8.49002 4.31017C7.72609 3.46654 6.6381 2.9895 5.50002 2.99917Z' fill='#2E3A59'/></svg>")
   let divProfile = nodi ("div", "profile")
    elementi("div", "svgProfile", "", divProfile, "", "<svg width='80' height='80' viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M68.2844 11.7158C60.7292 4.16078 50.6844 0 40 0C29.3156 0 19.2708 4.16078 11.7156 11.7158C4.16078 19.2708 0 29.3156 0 40C0 50.6844 4.16078 60.7292 11.7156 68.2842C19.2708 75.8392 29.3156 80 40 80C50.6844 80 60.7292 75.8392 68.2844 68.2842C75.8392 60.7292 80 50.6844 80 40C80 29.3156 75.8392 19.2708 68.2844 11.7158ZM40 75.3125C29.5517 75.3125 20.1505 70.7497 13.6794 63.5139C17.6911 52.8784 27.9606 45.3125 40 45.3125C32.2334 45.3125 25.9375 39.0166 25.9375 31.25C25.9375 23.4834 32.2334 17.1875 40 17.1875C47.7666 17.1875 54.0625 23.4834 54.0625 31.25C54.0625 39.0166 47.7666 45.3125 40 45.3125C52.0394 45.3125 62.3089 52.8784 66.3206 63.5139C59.8495 70.7497 50.4483 75.3125 40 75.3125Z' fill='black'/></svg>" )
    elementi("h2", "h2","",divProfile,"Oscar","")
    document.body.appendChild(divProfile)

    let statics = nodi ("div", "statics")
    document.body.appendChild(statics)
    let text_stats = nodi ("div", "text-stats")
    statics.appendChild(text_stats)
    elementi("span", "span", "", text_stats, "Time trained", "")
    elementi("span", "span", "", text_stats, "Time trained", "Daily streak")
    let number_stats = nodi ("div", "number-stats")
    statics.appendChild(number_stats)
    elementi("h3","", "", number_stats, "45min", "")
    elementi("h3","", "", number_stats, "3 days", "")

    let center = nodi ("div","center")
    document.body.appendChild(center)
    elementi("span","skills","",center,"Skills","")
    elementi("span","badges","",center,"Badges","")

    let stati = nodi ("div", "stati")
    document.body.appendChild(stati)


    let stato = nodi ("div", "stato")
    stati.appendChild(stato)
    elementi("img","foto-obbiettivo", "/mobile-profile/assets/ginocchio-martello.png",stato,"")

    let textLVL = nodi ("div", "div")
    stato.appendChild(textLVL)
    elementi("h5","h5","",textLVL, "Breath Focus")
    elementi("p","p","",textLVL,"Level 2")
    elementi("img","line","/mobile-profile/assets/linea-stats.png",textLVL, "")



    let stato2 = nodi ("div", "stato")
    stati.appendChild(stato2)
    elementi("img","foto-obbiettivo", "/mobile-profile/assets/Shape.png",stato2,"")

    let textLVL2 = nodi ("div", "div")
    stato2.appendChild(textLVL2)
    elementi("h5","h5","",textLVL2, "Body scan")
    elementi("p","p","",textLVL2,"Level 2")
    elementi("img","line","/mobile-profile/assets/linea-stats.png",textLVL2, "")



    let stato3= nodi ("div", "stato")
    stati.appendChild(stato3)
    elementi("img","foto-obbiettivo", "/mobile-profile/assets/polmoni.png",stato3,"")

    let textLVL3 = nodi ("div", "div")
    stato3.appendChild(textLVL3)
    elementi("h5","h5","",textLVL3, "Body scan")
    elementi("p","p","",textLVL3,"Level 2")
    elementi("img","line","/mobile-profile/assets/linea-stats.png",textLVL3, "")


    let nav = nodi ("nav","nav")
    document.body.appendChild(nav)
    let menu_basso = nodi ("div","menu-basso")
    nav.appendChild(menu_basso)
    elementi("button","button","",menu_basso, "", "<svg width='20' height='22' viewBox='0 0 20 22' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M18 2H17V1C17 0.45 16.55 0 16 0C15.45 0 15 0.45 15 1V2H5V1C5 0.45 4.55 0 4 0C3.45 0 3 0.45 3 1V2H2C0.9 2 0 2.9 0 4V20C0 21.1 0.9 22 2 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM17 20H3C2.45 20 2 19.55 2 19V7H18V19C18 19.55 17.55 20 17 20Z' fill='#262626'/></svg>")
    elementi("button","button","",menu_basso, "", "<svg width='14' height='20' viewBox='0 0 14 20' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M7 0C3.14 0 0 3.14 0 7C0 11.17 4.42 16.92 6.23 19.11C6.63 19.59 7.36 19.59 7.76 19.11C9.58 16.92 14 11.17 14 7C14 3.14 10.86 0 7 0ZM11.31 6.16L6.18 11.29C5.79 11.68 5.16 11.68 4.77 11.29L2.7 9.22C2.31 8.83 2.31 8.19 2.7 7.8C3.09 7.41 3.73 7.41 4.12 7.8L5.48 9.16L9.9 4.74C10.29 4.35 10.93 4.35 11.32 4.74C11.7 5.14 11.7 5.77 11.31 6.16Z' fill='#262626'/></svg>")
    elementi("button","button","",menu_basso, "", "<svg width=’22’ height='16' viewBox='0 0 22 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M15.6699 9.13086C17.0399 10.0609 17.9999 11.3209 17.9999 13.0009V16.0009H20.9999C21.5499 16.0009 21.9999 15.5509 21.9999 15.0009V13.0009C21.9999 10.8209 18.4299 9.53086 15.6699 9.13086Z' fill='#262626'/><path d='M8 8C10.2091 8 12 6.20914 12 4C12 1.79086 10.2091 0 8 0C5.79086 0 4 1.79086 4 4C4 6.20914 5.79086 8 8 8Z' fill='#262626'/><path fill-rule='evenodd' clip-rule='evenodd' d='M13.9999 8C16.2099 8 17.9999 6.21 17.9999 4C17.9999 1.79 16.2099 0 13.9999 0C13.5299 0 13.0899 0.0999998 12.6699 0.24C13.4999 1.27 13.9999 2.58 13.9999 4C13.9999 5.42 13.4999 6.73 12.6699 7.76C13.0899 7.9 13.5299 8 13.9999 8Z' fill='#262626'/><path fill-rule='evenodd' clip-rule='evenodd' d='M8 9C5.33 9 0 10.34 0 13V15C0 15.55 0.45 16 1 16H15C15.55 16 16 15.55 16 15V13C16 10.34 10.67 9 8 9Z' fill='#262626'/>")
    elementi("button","button","",menu_basso, "", "<svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M9.99 0C4.47 0 0 4.48 0 10C0 15.52 4.47 20 9.99 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 9.99 0ZM13.22 15.39L10 13.45L6.78 15.39C6.4 15.62 5.93 15.28 6.03 14.85L6.88 11.19L4.05 8.74C3.72 8.45 3.9 7.9 4.34 7.86L8.08 7.54L9.54 4.09C9.71 3.68 10.29 3.68 10.46 4.09L11.92 7.53L15.66 7.85C16.1 7.89 16.28 8.44 15.94 8.73L13.11 11.18L13.96 14.85C14.06 15.28 13.6 15.62 13.22 15.39Z' fill='#262626'/></svg>")
