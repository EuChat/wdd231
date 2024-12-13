let modalOpenerEvent1 = document.querySelector('#event1');
let modalOpenerEvent2 = document.querySelector('#event2');
let modalOpenerEvent3 = document.querySelector('#event3');

modalOpenerEvent1.addEventListener('click', () => { showModal('#modal-event1') });
modalOpenerEvent2.addEventListener('click', () => { showModal('#modal-event2') });
modalOpenerEvent3.addEventListener('click', () => { showModal('#modal-event3') });

let modalClosers = document.querySelectorAll('.closer')

function ListenClosers() {
    modalClosers.forEach(button => {
        button.addEventListener('click', () => {
            const modal = document.querySelectorAll('.modal');
            modal.forEach(element => { element.classList.remove('show'); })
            overlay.classList.remove('show');
        })
    }) 
}

ListenClosers();

////////////////////////////////////////////////////////////////////////

let overlay = document.querySelector('#overlay');

overlay.addEventListener('click', () => {
    const modal = document.querySelectorAll('.modal');
    modal.forEach(element => { element.classList.remove('show'); })
    overlay.classList.remove('show');
});

function showModal(target) {
    const modal = document.querySelector(target);
    modal.classList.add('show');
    overlay.classList.add('show');
};

document.addEventListener("DOMContentLoaded", () => {
    showModal('#user-message');

    // Visitor message logic
    const userMessage = document.getElementById("user-message");
    const lastVisit = localStorage.getItem("lastVisit");
    const now = Date.now();
    const oneDay = 24 * 60 * 60 * 1000;

    if (lastVisit) {
        const daysAgo = Math.floor((now - lastVisit) / oneDay);
        // console.log(daysAgo);

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
    // console.log(localStorage.getItem("lastVisit"));
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

    PopulateFutureEvents(data, "#event1", "#modal-content1", "#data-filler-event1");
    PopulateFutureEvents(data, "#event2", "#modal-content2", "#data-filler-event2");
    PopulateFutureEvents(data, "#event3", "#modal-content3", "#data-filler-event3");

}




function PopulateFutureEvents(list, container, corespondingModal, headerModal) {

    let display = document.querySelector(container);
    let body = document.querySelector(corespondingModal);
    let head = document.querySelector(headerModal);

    let index = getRandInteger();
    let Title = document.createElement('h3');
    let Date = document.createElement('p');
    let Time = document.createElement('p');
    let Venue = document.createElement('p');
    let Description = document.createElement('p');

    let workingEvent = list[index];

    Title.textContent = workingEvent.title;
    Date.textContent = workingEvent.date;
    Time.textContent = `Time: ${workingEvent.time}`;
    Venue.textContent = `Venue: ${workingEvent.venue}`;
    Description.textContent = `${workingEvent.description}`;

    display.textContent = `${Title.textContent}    ${Date.textContent}`;
    head.insertBefore(Title, head.childNodes[0]);

    body.appendChild(Date);
    body.appendChild(Time);
    body.appendChild(Venue);
    body.appendChild(Description);


};



GetEventsComming();

// Create the calendar dynamically
function createCalendar() {
    const calendarContainer = document.getElementById("calendar");

    // Header (Month and Navigation)
    const header = document.createElement("div");
    header.className = "month";

    const prevButton = document.createElement("button");
    prevButton.textContent = "❮";
    const nextButton = document.createElement("button");
    nextButton.textContent = "❯";

    const monthYear = document.createElement("h2");
    monthYear.id = "month-year";

    header.appendChild(prevButton);
    header.appendChild(monthYear);
    header.appendChild(nextButton);

    // Weekday names
    const weekdays = document.createElement("div");
    weekdays.className = "weekdays";
    const weekdayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    weekdayNames.forEach(day => {
        const div = document.createElement("div");
        div.textContent = day;
        weekdays.appendChild(div);
    });

    // Days container
    const days = document.createElement("div");
    days.className = "days";

    // Append everything to the calendar container
    calendarContainer.appendChild(header);
    calendarContainer.appendChild(weekdays);
    calendarContainer.appendChild(days);

    // Update the calendar display
    let currentDate = new Date();
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    function renderCalendar(date) {
        const year = date.getFullYear();
        const month = date.getMonth();

        // Update month and year display
        monthYear.textContent = `${months[month]} ${year}`;

        // Clear previous days
        days.innerHTML = "";

        // Get the first and last day of the month
        const firstDay = new Date(year, month, 1).getDay();
        const lastDate = new Date(year, month + 1, 0).getDate();

        // Add empty slots for days before the first day of the month
        for (let i = 0; i < firstDay; i++) {
            const emptyDiv = document.createElement("div");
            days.appendChild(emptyDiv);
        }

        // Add days of the month
        for (let i = 1; i <= lastDate; i++) {
            const dayDiv = document.createElement("div");
            dayDiv.textContent = i;

            // Highlight today's date
            if (
                i === new Date().getDate() &&
                month === new Date().getMonth() &&
                year === new Date().getFullYear()
            ) {
                dayDiv.className = "today";
            }

            days.appendChild(dayDiv);
        }
    }

    // Handle navigation
    prevButton.addEventListener("click", () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar(currentDate);
    });

    nextButton.addEventListener("click", () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar(currentDate);
    });

    // Render the initial calendar
    renderCalendar(currentDate);
}

// Call the function to build the calendar
createCalendar();