// async function myFunc() {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('Hello'), 2200)
//     });
//     const error = false;
//     if (!error) {
//         const res = await promise;
//         return res;
//     } else {
//         await Promise.reject(new Error('Oops! SOmething went wrong'));
//     }

// }

// myFunc()
//     .then(res => console.log(res))
//     .catch(err => console.log(err))


// Using Fetch

async function getUser() {
    // await response of the fetch call
    const res = await fetch('https://jsonplaceholder.typicode.com/users')

    // Only proceeds once its resolved
    const data = await res.json();

    // Only proceeeds once the second promise is resolved
    return data;
}

getUser().then(users => console.log(users))