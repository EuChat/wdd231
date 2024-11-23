let eventsUrl = 'https://euchat.github.io/wdd231/chamber/data/events.json';
let event1 = document.querySelector('#event1');
let event2 = document.querySelector('#event2');

async function fetchEvents() {
    let data = await fetch(eventsUrl);
    let response = await data.json();
    // console.log(response[0]);

    DisplayData(response, event1);
    DisplayData(response, event2);
    // DisplayData(response, event3);
};

fetchEvents();

let minimun = 0;
let maximum = 4;
function getRandInteger() {
    return Math.floor(Math.random() * (maximum - minimun + 1)) + minimun;
    // max and min included
};


function DisplayData(list, container) {

    let index = getRandInteger();
    let Title = document.createElement('h3');
    let Date = document.createElement('p');
    let Time = document.createElement('p');
    let Venue = document.createElement('p');
    let Description = document.createElement('p');

    let workingEvent = list[index];

    Title.textContent = workingEvent.title;
    Date.textContent = workingEvent.date;
    Time.textContent = workingEvent.time;
    Venue.textContent = workingEvent.venue;
    Description.textContent = workingEvent.description;

    container.appendChild(Title);
    container.appendChild(Date);
    container.appendChild(Time);
    container.appendChild(Venue);
    container.appendChild(Description);
};
