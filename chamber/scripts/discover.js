// Lazy loading images
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".lazy");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove("lazy");
                observer.unobserve(img);
            }
        });
    });

    images.forEach((img) => observer.observe(img));

    // Visitor message logic
    const userMessage = document.getElementById("user-message");
    const lastVisit = localStorage.getItem("lastVisit");
    const now = Date.now();
    const oneDay = 24 * 60 * 60 * 1000;

    if (lastVisit) {
        const daysAgo = Math.floor((now - lastVisit) / oneDay);
        if (daysAgo < 1) {
            userMessage.textContent = "Back so soon! Awesome!";
        } else if (daysAgo === 1) {
            userMessage.textContent = "You last visited 1 day ago.";
        } else {
            userMessage.textContent = `You last visited ${daysAgo} days ago.`;
        }
    } else {
        userMessage.textContent = "Welcome! Let us know if you have any questions.";
    }

    localStorage.setItem("lastVisit", now);
});

let upcomingContainer = document.querySelector("#events-container")

let eventsUrl = 'https://euchat.github.io/wdd231/chamber/data/events.json';

let event1 = document.querySelector('#event1');
let event2 = document.querySelector('#event2');
let event3 = document.querySelector('#event3');


let minimun = 0;
let maximum = 4;
function getRandInteger() {
    return Math.floor(Math.random() * (maximum - minimun + 1)) + minimun;
    // max and min included
};


async function GetEventsComming() {
    let data = await fetch(eventsUrl);
    data = await data.json();

    PopulateFutureEvents(data, event1);
    PopulateFutureEvents(data, event2);
    PopulateFutureEvents(data, event3);
}



function PopulateFutureEvents(list, container) {


    let index = getRandInteger();
    let Title = document.createElement('h3');
    let Date = document.createElement('p');
    // let Time = document.createElement('p');
    // let Venue = document.createElement('p');
    // let Description = document.createElement('p');

    let workingEvent = list[index];

    Title.textContent = workingEvent.title;
    Date.textContent = workingEvent.date;
    // Time.textContent = workingEvent.time;
    // Venue.textContent = workingEvent.venue;
    // Description.textContent = workingEvent.description;

    container.appendChild(Title);
    container.appendChild(Date);
    // container.appendChild(Time);
    // container.appendChild(Venue);
    // container.appendChild(Description);
};

GetEventsComming();