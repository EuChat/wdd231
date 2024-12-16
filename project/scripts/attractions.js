
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


url = 'https://euchat.github.io/wdd231/project/data/attractions.json';
container = document.querySelector("#directory")

GetBusinesses();

async function GetBusinesses() {
    const data = await fetch(url);
    const info = await data.json();

    CreatCards(info);

};



function CreatCards(data) {
    let businesses = Array.isArray(data) ? data : [data];
    businesses.forEach(business => {
        let card = document.createElement('section');
        let correspondingDiv = document.createElement('div');
        let img = document.createElement('img');
        let name = document.createElement('h2');
        let category = document.createElement('p');

        let location = document.createElement('p');
        let description = document.createElement('p');
        let rating = document.createElement('p');

        /////////////////////////////////////////////////////////////////////


        let divHead = document.createElement('h3')
        let divButton = document.createElement('button')
        divButton.setAttribute('class', 'closer')

        let divHeadCage = document.createElement('div')
        let divlist = document.createElement('ul')
        let divbod = document.createElement('div')

        divHeadCage.setAttribute('class', 'modal-content')

        divHead.textContent = business.name
        divButton.innerHTML = `&times`
        business.features.forEach(feat => {
            listItem = document.createElement('li')
            listItem.textContent = feat
            divlist.appendChild(listItem)
        })

        divbod.innerHTML = `
        <h4>Category</h4> <p>${business.category}</p>
        <h4>Location</h4> <p>${business.location}</p>
        <h4>Latitude</h4> <p>${business.latitude}</p>
        <h4>Longitude</h4> <p>${business.longitude}</p>
        <h4 class='special'>Features</h4>
        `

        divbod.setAttribute('class', 'decor')

        card.setAttribute('class', 'opener')
        correspondingDiv.setAttribute('id', `${business.the_id}`)

        correspondingDiv.setAttribute('class', `modal`)


        divHeadCage.appendChild(divHead)
        divHeadCage.appendChild(divButton)
        correspondingDiv.appendChild(divHeadCage)
        divbod.appendChild(divlist)
        correspondingDiv.appendChild(divbod)

        ////////////////////////////////////////////////////////////////


        img.setAttribute('src', business.image);
        img.setAttribute('alt', 'business image');
        img.setAttribute('loading', 'lazy');
        img.setAttribute('width', '300');
        img.setAttribute('height', '300');

        name.textContent = business.name;
        category.textContent = business.category;



        rating.textContent = `Rating: ${business.rating}`;
        location.textContent = business.location;
        description.textContent = business.description;

        card.appendChild(name);
        card.appendChild(img);
        card.appendChild(category);
        card.appendChild(location);
        card.appendChild(rating);
        card.appendChild(description);
        // console.log(business)

        card.addEventListener('click', () => { showModal(`#${business.the_id}`) })
        divButton.addEventListener('click', () => {
            let parent = document.querySelector(`#${business.the_id}`)
            parent.classList.remove('show')
            overlay.classList.remove('show')
        })
        try {
            container.appendChild(card);
            container.appendChild(correspondingDiv);

        } catch {

        }

    })
};





