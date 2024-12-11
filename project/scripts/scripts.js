// async function fetchWeather(lat, lon) {
//     const apiKey = "your_api_key"; // Replace with your API key
//     const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
//     try {
//       const response = await fetch(url);
//       const weatherData = await response.json();
//       return {
//         temperature: weatherData.main.temp,
//         description: weatherData.weather[0].description,
//         icon: `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`
//       };
//     } catch (error) {
//       console.error("Error fetching weather data:", error);
//     }
//   }

//   async function addWeatherToAttractions() {
//     const attractionsContainer = document.getElementById("attractions-container");
//     const attractions = await fetch("attractions.json").then(response => response.json());

//     attractions.forEach(async attraction => {
//       const weather = await fetchWeather(attraction.latitude, attraction.longitude);
//       const weatherInfo = document.createElement("div");
//       weatherInfo.classList.add("weather-info");
//       weatherInfo.innerHTML = `
//         <p>Weather: ${weather.description}</p>
//         <p>Temp: ${weather.temperature}°C</p>
//         <img src="${weather.icon}" alt="${weather.description}">
//       `;

//       const card = document.querySelector(`.attraction-card[data-id='${attraction.id}']`);
//       card.appendChild(weatherInfo);
//     });
//   }


//   async function fetchAttractions() {
//     try {
//       const response = await fetch("attractions.json");
//       const data = await response.json();
//       displayAttractions(data);
//     } catch (error) {
//       console.error("Error fetching JSON data:", error);
//     }
//   }


//   function displayAttractions(attractions) {
//     const attractionsContainer = document.getElementById("attractions-container");
//     attractions.forEach(attraction => {
//       const card = document.createElement("div");
//       card.classList.add("attraction-card");
//       card.innerHTML = `
//         <img src="${attraction.image}" alt="${attraction.name}" loading="lazy">
//         <h3>${attraction.name}</h3>
//         <p>${attraction.description}</p>
//         <button onclick="openModal(${attraction.id})">Learn More</button>
//       `;
//       attractionsContainer.appendChild(card);
//     });
//   }


//   function openModal(id) {
//     fetch("attractions.json")
//       .then(response => response.json())
//       .then(attractions => {
//         const attraction = attractions.find(item => item.id === id);
//         const modal = document.getElementById("modal");
//         modal.innerHTML = `
//           <div class="modal-content">
//             <h2>${attraction.name}</h2>
//             <img src="${attraction.image}" alt="${attraction.name}">
//             <p>${attraction.description}</p>
//             <ul>
//               ${attraction.features.map(feature => `<li>${feature}</li>`).join('')}
//             </ul>
//             <button onclick="closeModal()">Close</button>
//           </div>
//         `;
//         modal.style.display = "block";
//       })
//       .catch(error => console.error("Error opening modal:", error));
//   }

//   function closeModal() {
//     const modal = document.getElementById("modal");
//     modal.style.display = "none";
//   }



//   function saveToFavorites(id) {
//     let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
//     if (!favorites.includes(id)) {
//       favorites.push(id);
//       localStorage.setItem("favorites", JSON.stringify(favorites));
//       alert("Added to favorites!");
//     } else {
//       alert("Already in favorites!");
//     }
//   }


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
    hambutton.innerHTML = `&times`;
    hamCount = 1;
  }
  else {
    hambutton.innerHTML = `&#9776`;
    hamCount = 0;
  }
});

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
