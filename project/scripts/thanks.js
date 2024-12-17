let info = document.location.href;
let formData = info.split('?')[1].split('&')
let workspace = document.querySelector("#booking-details")

function show(cup) {
    let result = ''
    formData.forEach((element) => {
        if (element.startsWith(cup)) {
            result = element.split('=')[1].replace('%40', '@').replace('+', ' ').replace('%', '+')
        }
        // else {
        //     result = 'none found'
        // }
    })
    return (result)
}


workspace.innerHTML = `
<p> Name            :${show("name")}</p
<p> Email           : <a href=https://${show("email")} target=blank> ${show("email")} </a></p>
<p> Date            :${show("date")}</p>
<p> Group size      :${show("group")}</p>
<p> Tour            :${show("tour")}</p>
`

