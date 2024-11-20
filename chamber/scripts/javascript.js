let year = document.querySelector('#year');
let lastMod = document.querySelector('#lastModified');
let container = document.querySelector('#directory');
let today = new Date();
let url = 'https://euchat.github.io/wdd231/chamber/data/members.json';

year.textContent += today.getFullYear();

lastMod.textContent += document.lastModified;



// Store the selected elements that we are going to use. 
let hamCount = 0;

const mainnav = document.querySelector('.navigation')

const hambutton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {

    mainnav.classList.toggle('show');

    if (hamCount == 0) {
        hambutton.textContent = 'X';
        hamCount = 1;
    }
    else {
        hambutton.textContent = '≡';
        hamCount = 0;
    }
});

GetBusinesses();

async function GetBusinesses() {
    const data = await fetch(url);
    const info = await data.json();

    CreatCards(info.businesses);

};



function CreatCards(data) {
    let businesses = Array.isArray(data) ? data : [data];
    businesses.forEach(business => {
        let card = document.createElement('section');
        let img = document.createElement('img');
        let name = document.createElement('h2');
        let link = document.createElement('a');
        let description = document.createElement('p');
        let address = document.createElement('p');

        img.setAttribute('src', business.image);
        img.setAttribute('alt', 'business image');
        img.setAttribute('loading', 'lazy');
        img.setAttribute('width', '300');
        img.setAttribute('height', '300');

        name.textContent = business.name;
        address.textContent = business.address;
        link.setAttribute('href', business.website);
        link.textContent = business.phone;
        description.textContent = business.description;

        card.appendChild(name);
        card.appendChild(img);
        card.appendChild(description);
        card.appendChild(address);
        card.appendChild(link);

        container.appendChild(card);

    })
};




// // Fetch Current Events
// async function fetchEvents() {
//     const eventsContainer = document.getElementById('events-container');
//     const eventsData = await fetch('path-to-your-events.json').then(res => res.json());
//     eventsData.forEach(event => {
//         const article = document.createElement('article');
//         article.innerHTML = `
//             <h3>${event.title}</h3>
//             <p>${event.description}</p>
//             <p><strong>Date:</strong> ${event.date}</p>
//         `;
//         eventsContainer.appendChild(article);
//     });
// }




// Fetch Weather Data

// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
url = 'https://api.openweathermap.org/data/2.5/weather?lat=-18.97533294022674&lon=32.670230638794585&appid=e6539ce83c5f7f7067f9f0f774a26fbb&units=metric';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data); // testing only
            displayResults(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}


function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('width', '200');
    weatherIcon.setAttribute('loading', 'lazy');
    weatherIcon.setAttribute('alt', 'weather icon');
    captionDesc.textContent = `${desc}`;
}

apiFetch();



// // Fetch Spotlight Companies
// async function fetchSpotlights() {
//     const spotlightContainer = document.getElementById('spotlight-container');
//     const spotlightData = await fetch('https://euchat.github.io/wdd231/chamber/data/members.json').then(res => res.json());
//     spotlightData = res.businesses
//     spotlightData.forEach(company => {
//         const section = document.createElement('section');
//         section.innerHTML = `
//             <img src="${company.logo}" alt="${company.name}">
//             <h3>${company.name}</h3>
//             <p>${company.description}</p>
//         `;
//         spotlightContainer.appendChild(section);
//     });
// }

// // Initialize All Data Fetching
// document.addEventListener('DOMContentLoaded', () => {
//     fetchEvents();
//     // fetchSpotlights();
// });
