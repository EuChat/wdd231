let free = document.querySelector('#free');
let bronze = document.querySelector('#bronze');
let silver = document.querySelector('#silver');
let gold = document.querySelector('#gold');

let freecloser = document.querySelector('#free-closer');
let bronzecloser = document.querySelector('#bronze-closer');
let silvercloser = document.querySelector('#silver-closer');
let goldcloser = document.querySelector('#gold-closer');

let overlay = document.querySelector('#overlay');

// for some malicious ReadableByteStreamController, at this time it only seems to work when there are void fuunctions
free.addEventListener('click', () => { showModal('#np-modal') });
bronze.addEventListener('click', () => { showModal('#bronze-modal') });
silver.addEventListener('click', () => { showModal('#silver-modal') });
gold.addEventListener('click', () => { showModal('#gold-modal') });

freecloser.addEventListener('click', () => { closeModal('#np-modal') });
bronzecloser.addEventListener('click', () => { closeModal('#bronze-modal') });
silvercloser.addEventListener('click', () => { closeModal('#silver-modal') });
goldcloser.addEventListener('click', () => { closeModal('#gold-modal') });

overlay.addEventListener('click', () => {
    const modal = document.querySelectorAll('.modal');
    modal.forEach(element => { element.classList.remove('show'); })
    overlay.classList.remove('show');
});


function showModal(target) {
    const modal = document.querySelector(target);
    modal.classList.add('show');
    overlay.classList.add('show');
};

function closeModal(target) {
    const modal = document.querySelector(target);
    modal.classList.remove('show');
    overlay.classList.remove('show');
};

const timestampField = document.querySelector('#timestamp');
if (timestampField) {
    timestampField.value = new Date().toISOString();
};

