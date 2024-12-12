//grab the entire URL for the page including the ttached Get values
/*const currentUrl = window.location.href

//Devide the url into two halves
const everything = currentUrl.split('?')


//Grab just the second half
let formData = everything[1].split('&')
console.log(formData)

function show(cup) {
    
    formData.forEach((element) => {
        
        if (element.startWith(cup)) {
            result = element.split('=')[1].replace("%40", "@40")


        }//end if
    })
    return (result)
}//end show

const showInfo = document.querySelector('results')
showInfo.innerHTML = `
<p>Appointment for ${show("first")} ${show("last")}</p
<p>Proxy ${show("ordinace")} on ${show("fecha")} in the $ {show("location)}</p
<p>Your Phone:${show("phone")}</P
<p>Your Email:${show("email")}</P
`*/

// Grab the entire URL for the page, including the attached GET values
const currentUrl = window.location.href;

// Check if the URL contains query parameters
const everything = currentUrl.split('?');
if (everything.length > 1) {
    // Grab the query string part
    let formData = everything[1].split('&');
    console.log(formData);

    // Function to retrieve a specific parameter's value
    function show(key) {
        let result = ''; // Default value if key isn't found
        formData.forEach((element) => {
            if (element.startsWith(key)) {
                result = decodeURIComponent(element.split('=')[1]); // Decode URL-encoded value
            }
        });
        return result;
    }

    // Populate the data into the results section
    const showInfo = document.querySelector('#results');
    showInfo.innerHTML = `
        <p><strong>Name:</strong> ${show('name')}</p>
        <p><strong>Email:</strong> ${show('email')}</p>
        <p><strong>Tour:</strong> ${show('tour')}</p>
        <p><strong>Date:</strong> ${show('date')}</p>
    `;
} else {
    console.error('No query string found in the URL.');
}
