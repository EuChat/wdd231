let Spoturl = 'https://euchat.github.io/wdd231/chamber/data/members.json';

let card1 = document.querySelector('#spot1');
let card2 = document.querySelector('#spot2');
let card3 = document.querySelector('#spot3');



async function fetchData() {
    let data = await fetch(Spoturl);
    data = await data.json()

    CreateCards(data, card1);
    CreateCards(data, card2);
    CreateCards(data, card3);


}

let min = 0
let max = 6
function getRndInteger() {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function CreateCards(data, card) {
    let Name = document.createElement('h3')
    let Address = document.createElement('a')
    let Phone = document.createElement('a')
    let Image = document.createElement('img')
    let MembershipLevel = document.createElement('p')
    let Description = document.createElement('p')

    let index = getRndInteger();

    let workingBusiness = data[index];

    Name.textContent = workingBusiness.name
    Address.textContent = workingBusiness.address
    Phone.textContent = workingBusiness.phone

    Phone.setAttribute('href', workingBusiness.website)
    Address.setAttribute('href', workingBusiness.website)

    Image.setAttribute('src', workingBusiness.image)
    Image.setAttribute('alt', workingBusiness.image)
    Image.setAttribute('loading', 'lazy')
    Image.setAttribute('width', '300')
    Image.setAttribute('height', '300')

    MembershipLevel.textContent = `Membership level ${workingBusiness.membershipLevel}`
    Description.textContent = workingBusiness.description


    card.appendChild(Image)
    card.appendChild(Name)
    card.appendChild(Address)
    card.appendChild(Phone)
    card.appendChild(Description)
    card.appendChild(MembershipLevel)

}

fetchData()
