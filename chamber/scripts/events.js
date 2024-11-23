let eventsUrl = './chamber/data/events.json'


async function fetchEvents() {
    let data = await fetch(eventsUrl);
    data = data.json();
    console.log(data);
}

fetchEvents();