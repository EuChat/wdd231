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

        card.appendChild(name)
        card.appendChild(img)
        card.appendChild(description)
        card.appendChild(address)
        card.appendChild(link)

        container.appendChild(card)

    })
};

// Select the hero container
const heroContainer = document.getElementById('hero');

// Define the image URL
const heroImageURL = '"C:\Users\Gary\Desktop\wdd231\chamber\images\anastasiia-kamil-RHA-GKdSAew-unsplash.WebP"' // Replace with your image path

// Set the background image dynamically
heroContainer.style.backgroundImage = `url(${heroImageURL})`;

