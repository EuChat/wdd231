
document.getElementById('bookingForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Capture form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const tour = document.getElementById('tour').value;
    const date = document.getElementById('date').value;

    const bookingDetails = { name, email, tour, date };

    // Store booking in localStorage
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    bookings.push(bookingDetails);
    localStorage.setItem('bookings', JSON.stringify(bookings));

    // Update Thank You page with details
    document.getElementById('confirmationDetails').innerHTML = `
                <strong>Name:</strong> ${name}<br>
                <strong>Email:</strong> ${email}<br>
                <strong>Tour:</strong> ${tour}<br>
                <strong>Date:</strong> ${date}
            `;

    // Switch to Thank You view
    document.getElementById('formContainer').classList.add('hidden');
    document.getElementById('thankYouContainer').classList.remove('hidden');
});

function viewBookings() {
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const bookingsList = document.getElementById('bookings');
    bookingsList.innerHTML = ''; // Clear previous list

    if (bookings.length === 0) {
        bookingsList.innerHTML = '<p>No bookings found.</p>';
    } else {
        bookings.forEach((booking, index) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                        <strong>Booking ${index + 1}:</strong><br>
                        Name: ${booking.name}, Email: ${booking.email}, Tour: ${booking.tour}, Date: ${booking.date}
                    `;
            bookingsList.appendChild(listItem);
        });
    }

    // Switch to Bookings view
    document.getElementById('thankYouContainer').classList.add('hidden');
    document.getElementById('bookingList').classList.remove('hidden');
}
