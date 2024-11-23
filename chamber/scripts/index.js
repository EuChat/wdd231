
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
const humidity = document.querySelector('#humidity');
const wind = document.querySelector('#wind');
const captionDesc = document.querySelector('figcaption');
let urlWeather = 'https://api.openweathermap.org/data/2.5/weather?lat=-18.97533294022674&lon=32.670230638794585&appid=e6539ce83c5f7f7067f9f0f774a26fbb&units=metric';


function CalculateWindChill(temp, windspd) {
    return Math.round( 13.12 + (0.6215 * temp) - (11.37 * windspd *0.16) + (0.3965 *temp * windspd* 0.16)); 
}  

async function apiFetch() {
    const response = await fetch(urlWeather);
    const data = await response.json();
    // console.log(data); // testing only
    displayResults(data); // uncomment when ready
}

function Capitalise(word) {
    return word.charAt(0).toUpperCase()
    + word.slice(1)
}

function CapitaliseString(stringOfWords) {
    let list = stringOfWords.split(" ")
    let result = ""
    
    list.forEach(word => {
        result += `${Capitalise(word)} `
    });

    return result
}

function displayResults(data) {
    currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    wind.textContent = `${CalculateWindChill(data.main.temp, data.wind.speed)}`
    humidity.textContent = `${data.main.humidity}%`

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('width', '200');
    weatherIcon.setAttribute('loading', 'lazy');
    weatherIcon.setAttribute('alt', 'Weather icon');
    
    captionDesc.textContent = `${CapitaliseString(desc)}`;
}

apiFetch();



let urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=-18.97533294022674&lon=32.670230638794585&appid=e6539ce83c5f7f7067f9f0f774a26fbb&units=metric';

async function fetchWeatherForecast() {
    let data = (await fetch(urlForecast));
    data = await data.json();

    displayWeather(data);
}
function displayWeather(data) {
    let container = document.querySelector('#forecast-container');
    let day1 = document.createElement('p');
    let day2 = document.createElement('p');
    let day3 = document.createElement('p');
    let index =today.getDay()

    let list  = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ]
    


    day1.textContent = `${list[index]} ${Math.round(data.list[0].main.temp)}°C`;
    data.list.forEach(day => {
        let result = index

        if (day.dt_txt.includes(String(today.getDate()+1), 7)) {
            if (day.dt_txt.includes('12:00', 10)) {
                if (result+1>=7){
                    result = (result+1)%7
                }
                else{
                    result += 1
                }
                day2.textContent = `${list[result]} ${Math.round(day.main.temp)}°C`;
            }
            
        }
        if (day.dt_txt.includes(String(today.getDate()+2), 7)) {
            if (day.dt_txt.includes('12:00', 10)) {
                if (result+2>= 7){
                    result = (result+2)%7
                }
                else{
                    result += 1;
                }
                day3.textContent = `${list[result]} ${Math.round(day.main.temp)}°C`;
            }
        }

    })
    container.appendChild(day1)
    container.appendChild(day2)
    container.appendChild(day3)
    
    
}

fetchWeatherForecast()


// // Fetch Spotlight Companies
// async function fetchSpotlights() {
//     const spotlightContainer = document.getElementById('spotlight-container');
//     const spotlightData = await fetch('https://euchat.github.io/wdd231/chamber/data/members.json').then(res => res.json());
//     spotlightData = res.businesses
//     spotlightData.forEach(company => {
//         const section = document.createElement('section');
//         section.innerHTML = `
//             <img src="${company.logo}" alt="${company.name}">    SDFGHJKL;'
    
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
