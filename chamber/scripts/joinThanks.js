let info = document.location.href;
let formData = info.split('?')[1].split('&')
let workspace = document.querySelector('#thanks')

function show(cup) {
    formData.forEach((element) => {
        if (element.startsWith(cup)) {
            result = element.split('=')[1].replace('%40', '@').replace('%', '+')
        }
    })
    return (result)
}


workspace.innerHTML = `
<p> Name            :${show("first")} ${show("last")}</p
<p> Title           :${show("title")}</p>
<p> Email           : <a href=https://${show("email")} target=blank> ${show("email")} </a></p>
<p> Phone           :${show("phone")}</p>
<p> Organization    :${show("organization")}</p>
<p> Membership Level:${show("membership")}</p>
<p> Description     :${show("description")}</p>
`