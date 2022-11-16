let flyPage = {
  profile: [
    {
      hello: "Good morning",
      name: "John Doe",
      imgProfile: {
        src: "img/profile-image.png",
        alt: "profile image",
      },
      imgSearchBar: {
        src: "img/search.svg",
        alt: "search bar",
      },
      inputText: "Search..",
    },
  ],
  locationSelcted: {
    place: "Chai wan, Hong Kong",
    text1: "Hotels near you",
    locPinImg: {
      src: "img/selector.svg",
      alt: "location pin image",
    },
    text2: "View All",
  },

  hotels: [
    {
      imgPlace: {
        src: "img/place_1.png",
        alt: "place",
      },
      nameHotel: "The Four Seasons",
      namePlace: "Hong Kong",
      price: "$279/night",
    },
    {
      imgPlace: {
        src: "img/place_1.png",
        alt: "place",
      },
      nameHotel: "The Four Seasons",
      namePlace: "Hong Kong",
      price: "$279/night",
    },
  ],
  upcFlightsText: {
    text1: "Upcoming flights",
    text2: "View All",
  },
  ticket: [
    {
      images: {
        src: "img/line.svg",
        alt: "line",
      },
      placesDep: ["LHR", "London"],
      imagePlane: {
        src: "img/plane.svg",
        alt: "plane",
      },
      flyDuration: "9H 30M",
      placesArr: ["HKG", "Hong Kong"],
      date: ["1 June", "date"],
      deparTime: ["9:30 AM", "Departure Time"],
      gate: ["23", "Gate"],
    },
    {
      images: {
        src: "img/line.svg",
        alt: "line",
      },
      placesDep: ["ITA", "Italy"],
      imagePlane: {
        src: "img/plane.svg",
        alt: "plane",
      },
      flyDuration: "11H 30M",
      placesArr: ["LHR", "London"],
      date: ["5 March", "date"],
      deparTime: ["12:30 AM", "Departure Time"],
      gate: ["10", "Gate"],
    },
  ],
  bottomMenu: {
    button1: {
      src: "img/plus_btn.svg",
      alt: "plus button",
    },
    button2: {
      src: "img/cast_btn.svg",
      alt: "plus button",
    },
    button3: {
      src: "img/menu_btn.svg",
      alt: "menu button",
    },
    button4: {
      src: "img/calendar_btn.svg",
      alt: "calendar button",
    },
  },
};

//FUNZIONE CREA ELEMENTO
function addElement(type, className, id, content, position, attributes) {
  let newElement = document.createElement(type);
  if (attributes.src && attributes.alt) {
    newElement.src = attributes.src;
    newElement.alt = attributes.alt;
  } else {
    let elementContent = document.createTextNode(content);
    newElement.appendChild(elementContent);
  }
  if (className != "") newElement.className = className;
  else if (id != "") newElement.id = id;
  position.appendChild(newElement);
  return newElement;
}

//PROFILE SECTION
let header = addElement("header", "", "", "", document.body, "");
for (i = 0; i < flyPage.profile.length; i++) {
  let profile = addElement("div", "", "profile", "", header, "");

  let profileDiv1 = addElement("div", "", "", "", profile, "");

  let profileDiv1Div = addElement("div", "", "", "", profileDiv1, "");
  addElement("p", "", "", flyPage.profile[i].hello, profileDiv1Div, "");
  addElement("h1", "", "", flyPage.profile[i].name, profileDiv1Div, "");
  addElement("img", "", "", "", profileDiv1, flyPage.profile[i].imgProfile);

  let profileSearchDiv = addElement(
    "div",
    "",
    "profile__search-bar",
    "",
    profile,
    ""
  );
  addElement(
    "img",
    "",
    "",
    "",
    profileSearchDiv,
    flyPage.profile[i].imgSearchBar
  );
}

//TEXT ABOVE THE TIKET SECTION
let main = addElement("main", "", "", "", document.body, "");
let section = addElement("section", "", "flight", "", main, "");

let fligthDiv = addElement("div", "", "", "", section, "");
addElement("h2", "", "", flyPage.upcFlightsText.text1, fligthDiv, "");
addElement("p", "", "", flyPage.upcFlightsText.text2, fligthDiv, "");

//TOP OF THE TICKET
let flightCardContainer = addElement(
  "div",
  "flight__card-container",
  "",
  "",
  section,
  ""
);

for (let i = 0; i < flyPage.ticket.length; i++) {
  let flightCard = addElement(
    "div",
    "flight__card",
    "",
    "",
    flightCardContainer,
    ""
  );

  addElement("img", "", "", "", flightCard, flyPage.ticket[i].images);

  let divDepCont = addElement("div", "", "", "", flightCard, "");

  let div1 = addElement("div", "", "", "", divDepCont, "");

  for (let j = 0; j < flyPage.ticket[i].placesDep.length; j++) {
    addElement("p", "", "", flyPage.ticket[i].placesDep[j], div1, "");
  }
  let div2 = addElement("div", "", "", "", divDepCont, "");

  addElement("img", "", "", "", div2, flyPage.ticket[i].imagePlane);
  addElement("p", "", "", flyPage.ticket[i].flyDuration, div2, "");

  let div3 = addElement("div", "", "", "", divDepCont, "");

  for (let j = 0; j < flyPage.ticket[i].placesDep.length; j++) {
    addElement("p", "", "", flyPage.ticket[i].placesArr[j], div3, "");
  }

  //LOW PART OF THE TICKET
  let divDateCont = addElement("div", "", "", "", flightCard, "");

  let divDate1 = addElement("div", "", "", "", divDateCont, "");

  for (let j = 0; j < flyPage.ticket[i].date.length; j++) {
    addElement("p", "", "", flyPage.ticket[i].date[j], divDate1, "");
  }
  let divDate2 = addElement("div", "", "", "", divDateCont, "");

  for (let j = 0; j < flyPage.ticket[i].deparTime.length; j++) {
    addElement("p", "", "", flyPage.ticket[i].deparTime[j], divDate2, "");
  }

  let divDate3 = addElement("div", "", "", "", divDateCont, "");

  for (let j = 0; j < flyPage.ticket[i].gate.length; j++) {
    addElement("p", "", "", flyPage.ticket[i].gate[j], divDate3, "");
  }
}

//TEXT ABOVE THE HOTEL SUGGESTION SECTION
let suggSection = addElement(
  "section",
  "",
  "suggestion",
  "",
  document.body,
  ""
);
let suggDiv = addElement("div", "", "", "", suggSection, "");
let suggPlace = addElement("div", "", "suggestion__place", "", suggDiv, "");
let suggParagraph = addElement(
  "p",
  "",
  "",
  flyPage.locationSelcted.place,
  suggPlace,
  ""
);
let img = document.createElement("img");
img.src = flyPage.locationSelcted.locPinImg.src;
img.alt = flyPage.locationSelcted.locPinImg.alt;
suggParagraph.insertAdjacentElement("afterbegin", img);
addElement("p", "", "", flyPage.locationSelcted.text1, suggPlace, "");

addElement("p", "", "", flyPage.locationSelcted.text2, suggDiv, "");

//HOTEL SUGGESTION SECTION
let suggContainer = addElement(
  "div",
  "",
  "suggestion__container",
  "",
  suggSection,
  ""
);
for (i = 0; i < flyPage.hotels.length; i++) {
  let suggCard = addElement(
    "div",
    "suggestion__card",
    "",
    "",
    suggContainer,
    ""
  );
  addElement("img", "", "", "", suggCard, flyPage.hotels[i].imgPlace);

  let suggCardDiv = addElement("div", "", "", "", suggCard, "");
  addElement("h2", "", "", flyPage.hotels[i].nameHotel, suggCardDiv, "");
  addElement("p", "", "", flyPage.hotels[i].namePlace, suggCardDiv, "");
  addElement("h2", "", "", flyPage.hotels[i].price, suggCard, "");
}

//Bottom Menu

let navBar = addElement("nav", "", "bottom-menu", "", document.body, "");
for (let i in flyPage.bottomMenu) {
  {
    let button = addElement("button", "", "", "", navBar, "");
    addElement("img", "", "", "", button, flyPage.bottomMenu[i]);
  }
}
