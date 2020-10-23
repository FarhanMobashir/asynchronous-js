const http = new EasyHTTP;

// get

http.get('https://jsonplaceholder.typicode.com/users')
    .then(data => console.log(data))
    .catch(err => console.log(err))


// creating data

const data = {
    user: 'John Doe',
    email: 'jdoe@gmail.com',

}

// POST
http.post('https://jsonplaceholder.typicode.com/users', data)
    .then(data => console.log(data))
    .catch(err => console.log(err))

// POST
http.put('https://jsonplaceholder.typicode.com/users/7', data)
    .then(data => console.log(data))
    .catch(err => console.log(err))


// DELETE
http.delete('https://jsonplaceholder.typicode.com/users/2', data)
    .then(data => console.log('Resource Deleted...'))
    .catch(err => console.log(err))
