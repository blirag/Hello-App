fetch('https://fourtonfish.com/hellosalut/?mode=auto')
    .then(response => {
        return response.json()
    })
    .then(jsonData => {
        let lang = jsonData.hello;

        const url_string = window.location.href
        const url = new URL(url_string)
        const name = url.searchParams.get('name')
        const body = document.querySelector('body')
        const h1 = document.createElement('h1')

        h1.innerHTML = `${lang} ${name}`
        body.appendChild(h1)
    });