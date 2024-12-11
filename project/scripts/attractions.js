let url = 'https://euchat.github.io/wdd231/project/data/attractions.json';

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
        try {
            container.appendChild(card);

        } catch {

        }

    })
};



