
const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';



const cards = document.querySelector('#cards');

const all = document.querySelector('#all');
const idaho = document.querySelector('#idaho');
const nonus = document.querySelector('#nonus');
const ten = document.querySelector('#ten');
const childs = document.querySelector('#childs');
const childl = document.querySelector('#childl');
const old = document.querySelector('#old');


async function getProphetData() {
    let response = await fetch(url);
    let data = await response.json();

    displayProphets(data.prophets);

    all.addEventListener('click', () => displayProphets(data.prophets));
    idaho.addEventListener('click', () => displayProphets(data.prophets.filter(prophet => prophet.birthplace === 'Idaho')));
    nonus.addEventListener('click', () => displayProphets(data.prophets.filter(prophet => prophet.birthplace !== 'USA')));
    ten.addEventListener('click', () => displayProphets(data.prophets.filter(prophet => prophet.length >= 15)));
    childs.addEventListener('click', () => displayProphets(data.prophets.filter(prophet => prophet.numofchildren <= 4)));
    childl.addEventListener('click', () => displayProphets(data.prophets.filter(prophet => prophet.numofchildren >= 10)));
    old.addEventListener('click', () => displayProphets(data.prophets.filter(prophet => prophet.age >= 95)));
}
const displayProphets = (prophets) => {
    cards.textContent = ''
    prophets.forEach(prophet => {
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');

        fullName.textContent = `${prophet.name} ${prophet.lastname}`

        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`); // fill in the blank
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        // Append the section(card) with the created elements
        card.appendChild(fullName); //fill in the blank
        card.appendChild(portrait);

        cards.appendChild(card);
    });
};

getProphetData()