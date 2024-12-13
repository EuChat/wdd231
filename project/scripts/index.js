
function myMap() {
    const mapProp = {
        center: new google.maps.LatLng(-19.806141862257316, 32.80513766330442),
        zoom: 8,
    };
    const map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

document.addEventListener("DOMContentLoaded", () => {
    myMap();
});


// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const humidity = document.querySelector('#humidity');
const wind = document.querySelector('#wind');
const captionDesc = document.querySelector('figcaption');
let urlWeather = 'https://api.openweathermap.org/data/2.5/weather?lat=-18.97533294022674&lon=32.670230638794585&appid=e6539ce83c5f7f7067f9f0f774a26fbb&units=metric';


function CalculateWindChill(temp, windspd) {
    return Math.round(13.12 + (0.6215 * temp) - (11.37 * windspd * 0.16) + (0.3965 * temp * windspd * 0.16));
}

async function apiFetch() {
    const response = await fetch(urlWeather);
    const data = await response.json();
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



let directs = [
    "./images/chimanimani.WebP",
    "./images/eastern-highlands-and.WebP",
    "./images/EasternHighlands.WebP",
    "./images/gemma-nutty-o-mbira-trail-chimanimani.WebP",
    "./images/hondevalley.WebP",
    "./images/hotsprings.WebP",
    "./images/leopardRock.WebP",
    "./images/licensed-image.WebP",
    "./images/linkedin.WebP",
    "./images/logo.webp",
    "./images/mutaraziFalls.WebP",
    "./images/mutareMuseum.WebP",
    "./images/nyanga.WebP",
    "./images/nyangaPark.WebP",
    "./images/nyange1.WebP",
    "./images/nyange4.WebP",
    "./images/park4.WebP",
    "./images/park7.WebP",
    "./images/teaEstates.WebP",
    "./images/vumba-bot-lake-770x550.WebP",
    "./images/vumbaBotanical.WebP",
]


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

function getRandInteger(maximum, minimun) {
    return Math.floor(Math.random() * (maximum - minimun + 1)) + minimun;
    // max and min included
};
let imageContainer = document.querySelector("#pic-container");

function PickRandomPicture() {
    let index = getRandInteger(0, directs.length)
    let image = document.createElement('img')
    let thisContainer = document.createElement('figure')
    let words = document.createElement('figcaption')

    image.setAttribute('src', directs[index])
    image.setAttribute('alt', directs[index].split('/')[2].replace(".WebP", ""))
    image.setAttribute('height', '200')
    image.setAttribute('width', '300')
    image.setAttribute('loading', 'lazy')
    words.textContent = CapitaliseString(directs[index].split('/')[2].replace(".WebP", ""))

    thisContainer.appendChild(image)
    thisContainer.appendChild(words)
    imageContainer.appendChild(thisContainer)

}

PickRandomPicture()
PickRandomPicture()
PickRandomPicture()