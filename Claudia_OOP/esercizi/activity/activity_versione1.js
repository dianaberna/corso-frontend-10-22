const header = document.createElement("header");
header.className = "activity";
document.body.appendChild(header);

const divActivity = document.createElement("div");
header.appendChild(divActivity);

const activityGiorno = document.createElement("p");
const activityGiorno_text = document.createTextNode("Mon, June 24th, 2021");
activityGiorno.appendChild(activityGiorno_text);
const activityTitolo = document.createElement("h1");
const activityTitolo_text = document.createTextNode("Daily activity");
activityTitolo.appendChild(activityTitolo_text);

divActivity.appendChild(activityGiorno);
divActivity.appendChild(activityTitolo);


{/* <main>

      <section id="weekdays">
      <div class="wrapper">
        <div>
          <p>Mon</p>
          <p class="date-num">20</p>
        </div>
        <div>
          <p>Tue</p>
          <p class="date-num">21</p>
        </div> */}

const main = document.createElement("main");
document.body.appendChild(main);

const mysection = document.createElement("section");
mysection.id = "weekdays";
document.body.appendChild(mysection);

const wrapper = document.createElement("div");
wrapper.className = "wrapper";
mysection.appendChild(wrapper);

const squareDate = document.createElement("div");
wrapper.appendChild(squareDate);

let DateDayTag = document.createElement("p");
DateDayTxt = document.createTextNode("Mon");
DateDayTag.appendChild(DateDayTxt);
squareDate.appendChild(DateDayTag);

let DateNumTag = document.createElement("p");
DateNumTxt = document.createTextNode("20");
DateNumTag.className = ("date-num");
DateNumTag.appendChild(DateNumTxt);
squareDate.appendChild(DateNumTag);


