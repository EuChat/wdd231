let Spoturl = 'https://euchat.github.io/wdd231/chamber/data/members.json';

let card1 = document.querySelector('#spot1');
let card2 = document.querySelector('#spot2');
let card3 = document.querySelector('#spot3');

let min = 0
let max = 6
function CreateCards(data, card, usedIndices) {
    let index;
    do {
        index = getRndInteger();
    } while (usedIndices.has(index));
    usedIndices.add(index);

    let workingBusiness = data[index];

    let Name = document.createElement('h3');
    let Address = document.createElement('a');
    let Phone = document.createElement('a');
    let Image = document.createElement('img');
    let MembershipLevel = document.createElement('p');
    let Description = document.createElement('p');

    Name.textContent = workingBusiness.name;
    Address.textContent = workingBusiness.address;
    Phone.textContent = workingBusiness.phone;

    Phone.setAttribute('href', workingBusiness.website);
    Address.setAttribute('href', workingBusiness.website);

    Image.setAttribute('src', workingBusiness.image);
    Image.setAttribute('alt', workingBusiness.name);
    Image.setAttribute('loading', 'lazy');
    Image.setAttribute('width', '300');
    Image.setAttribute('height', '300');

    MembershipLevel.textContent = `Membership level ${workingBusiness.membershipLevel}`;
    Description.textContent = workingBusiness.description;

    card.appendChild(Image);
    card.appendChild(Name);
    card.appendChild(Address);
    card.appendChild(Phone);
    card.appendChild(Description);
    card.appendChild(MembershipLevel);
}

async function fetchData() {
    try {
        let response = await fetch(Spoturl);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        let data = await response.json();
        data = data.filter(business => business.membershipLevel >= 2);
        max = data.length;
        if (max < 3) throw new Error("Not enough businesses to display!");

        let usedIndices = new Set();
        CreateCards(data, card1, usedIndices);
        CreateCards(data, card2, usedIndices);
        CreateCards(data, card3, usedIndices);
    } catch (error) {
        console.error("Error fetching or processing data:", error);
    }
}



function getRndInteger() {
    return Math.floor(Math.random() * max);
    // max is excluded
}

// function CreateCards(data, card) {
//     let Name = document.createElement('h3')
//     let Address = document.createElement('a')
//     let Phone = document.createElement('a')
//     let Image = document.createElement('img')
//     let MembershipLevel = document.createElement('p')
//     let Description = document.createElement('p')

//     let index = getRndInteger();

//     let workingBusiness = data[index];

//     Name.textContent = workingBusiness.name
//     Address.textContent = workingBusiness.address
//     Phone.textContent = workingBusiness.phone

//     Phone.setAttribute('href', workingBusiness.website)
//     Address.setAttribute('href', workingBusiness.website)

//     Image.setAttribute('src', workingBusiness.image)
//     Image.setAttribute('alt', workingBusiness.image)
//     Image.setAttribute('loading', 'lazy')
//     Image.setAttribute('width', '300')
//     Image.setAttribute('height', '300')

//     MembershipLevel.textContent = `Membership level ${workingBusiness.membershipLevel}`
//     Description.textContent = workingBusiness.description


//     card.appendChild(Image)
//     card.appendChild(Name)
//     card.appendChild(Address)
//     card.appendChild(Phone)
//     card.appendChild(Description)
//     card.appendChild(MembershipLevel)

// }

fetchData()
