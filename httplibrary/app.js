const http = new easyHTTP;

// GET posts

// http.get('https://jsonplaceholder.typicode.com/posts', function (err, posts) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(posts);
//     }
// })

// Creating data

const data = {
    title: "Custom Post",
    data: "This is a custom post",
    date: new Date()
}

// Create Post

// http.post('https://jsonplaceholder.typicode.com/posts', data, function (err, posts) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(posts);
//     }
// })

// Update Post
// http.put('https://jsonplaceholder.typicode.com/posts/10', data, function (err, posts) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(posts);
//     }
// })

// Delte Post

http.delete('https://jsonplaceholder.typicode.com/posts/1', function (err, posts) {
    if (err) {
        console.log(err);
    } else {
        console.log(posts);
    }
})