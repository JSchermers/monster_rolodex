fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => response.json())
.then(users => {
    const user1 = users[0];
    return fetch('https://jsonplaceholder.typicode.com/posts?userId=' + user1.id)
})
.then(response => response.json())
.then(posts => console.log(posts));


