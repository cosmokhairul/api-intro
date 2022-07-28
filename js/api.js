// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))
// .then(json => console.log(json.title))
// .then(json => console.log(json.userId))

function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
}

function loadUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUser(data));
}

function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => console.log(data));
}

// loadPosts();
// function displayUser(data) {
//     for (const user of data) {
//         console.log(user.name);
//     }
// }
function displayUser(data) {
    const ul = document.getElementById('users');
    for (const user of data) {
        const li = document.createElement('li');
        // li.innerText = user.name;
        li.innerText = `Name: ${user.name}, Email: ${user.email}`;
        ul.appendChild(li);
    }
}