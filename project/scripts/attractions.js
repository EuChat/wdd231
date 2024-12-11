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
        let img = document.createElement('img');
        let name = document.createElement('h2');
        let category = document.createElement('p');
        let features = document.createElement('ul');

        let location = document.createElement('p');
        let description = document.createElement('p');
        let rating = document.createElement('p');

        img.setAttribute('src', business.image);
        img.setAttribute('alt', 'business image');
        img.setAttribute('loading', 'lazy');
        img.setAttribute('width', '300');
        img.setAttribute('height', '300');

        name.textContent = business.name;
        category.textContent = business.category;

        business.features.forEach(feat => {
            let foot = document.createElement('li')
            foot.textContent = feat
            features.appendChild(foot)
        })
        rating.textContent = `Rating: ${business.rating}`;
        location.textContent = business.location;
        description.textContent = business.description;

        card.appendChild(name);
        card.appendChild(img);
        card.appendChild(category);
        card.appendChild(location);
        card.appendChild(rating);
        card.appendChild(description);
        // card.appendChild(link);
        try {
            container.appendChild(card);

        } catch {

        }

    })
};



