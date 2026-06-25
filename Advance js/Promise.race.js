function myPromiseRace(promises) {

    return new Promise((resolve, reject) => {
        promises.forEach(element => {

            Promise.resolve(element)
                .then(resolve)
                .catch(reject)
        });
    })
}

const p1 = new Promise((resolve) =>
    setTimeout(() => resolve("A"), 3000)
);

const p2 = new Promise((resolve) =>
    setTimeout(() => resolve("B"), 1000)
);

const p3 = new Promise((resolve, reject) =>
    setTimeout(() => reject("Reject"), 500)
);

myPromiseRace([p1, p2, p3])
    .then(console.log)
    .catch(console.log)



// Example 2 Real world 

const apiCall = fetch("/users");

const timeout = new Promise((_, reject) =>
    setTimeout(() => reject("Timeout"), 5000)
);

Promise.race([
    apiCall,
    timeout
]);