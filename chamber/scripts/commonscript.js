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
try {
    let join = document.querySelector('#action');

    join.addEventListener('click', () => {
        // event.preventDefault(); // Prevent default behavior
        console.log('Join Us button clicked');
        window.location.href = './join.html'
    }); // Navigate to the Join page });

} catch {
}
