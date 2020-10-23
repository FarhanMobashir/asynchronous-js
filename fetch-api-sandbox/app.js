// Event Listeners

document.getElementById("button1").addEventListener('click', getText);

document.getElementById("button2").addEventListener('click', getJson);

document.getElementById("button3").addEventListener('click', getExternal);

// getText from local file

function getText() {
    fetch('text.txt')
        .then(function (response) {
            return response.text();
        })
        .then(function (text) {
            console.log(text);
            document.getElementById("output").innerHTML = text;
        })
        .catch(function (err) {
            console.log(err);
        })
}

// getJson from local file

function getJson() {
    fetch('posts.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            let output = ''
            json.forEach(function (post) {
                output += `<ol><li>${post.title}</li>
                <li>${post.data}</li></ol>`
            });
            document.getElementById("output").innerHTML = output;
        })
        .catch(function (err) {
            console.log(err);
        })
}

// getJson External API

function getExternal() {
    fetch('https://api.github.com/users')
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            let output = ''
            json.forEach(function (user) {
                output += `<ol><li>Username: ${user.login}</li>
                <li>User Id: ${user.id}</li></ol>`
            });
            document.getElementById("output").innerHTML = output;
        })
        .catch(function (err) {
            console.log(err);
        })
}