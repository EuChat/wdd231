// Function to parse query parameters
function getQueryParams() {
    const params = {};
    const queryString = window.location.search.substring(1);
    const pairs = queryString.split("&");

    pairs.forEach(pair => {
        const [key, value] = pair.split("=");
        params[decodeURIComponent(key)] = decodeURIComponent(value || "");
    });

    return params;
}

// Populate booking details on the thank-you page
const bookingDetails = getQueryParams();
const detailsContainer = document.getElementById("booking-details");

if (Object.keys(bookingDetails).length > 0) {
    detailsContainer.innerHTML = `
        <p><strong>Name:</strong> ${bookingDetails.name}</p>
        <p><strong>Email:</strong> ${bookingDetails.email}</p>
        <p><strong>Tour Type:</strong> ${bookingDetails.tour}</p>
        <p><strong>Date:</strong> ${bookingDetails.date}</p>
        <p><strong>Group Size:</strong> ${bookingDetails.group}</p>
    `;
} else {
    detailsContainer.innerHTML = `<p>No booking details found.</p>`;
}