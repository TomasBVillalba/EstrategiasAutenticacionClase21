const form = document.getElementById("loginForm");

form.addEventListener('submit', event => {

    event.preventDefault();

    const data = new FormData(form);
    const object = {};

    data.forEach((value, key) => {
        object[key] = value;
    })
    
    fetch('/api/session/login', {
        method: 'POST',
        body: JSON.stringify(object),
        headers: {
            'Content-type': 'application/json'
        }
    }).then(result => {
        let response = result;
        console.log(response)
        if (response.redirected) {
            location.replace('/')
        }
    })
})