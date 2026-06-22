// 

function outer() {

    let count = 0


    return function inner() {
        count++
        console.log(count)
    }
}

const fncall1 = outer()

const fncall2 = outer()
fncall1();
fncall1();
fncall1()

fncall2()



// Trotling 

function throtel(fn, delay) {
    let last = 0

    return (...arges) => {
        const now = Date.now();
        if (now - last >= delay) {
            last = now
            fn(...arges)
        }
    }
}

// Promiss ALL polyfill 

function promiseAll(promises) {
    return new Promise((resolve, reject) => {

        const results = [];
        let completed = 0;

        if (promises.length === 0) {
            resolve([]);
            return;
        }

        promises.forEach((promise, index) => {

            Promise.resolve(promise)
                .then(res => {

                    results[index] = res;
                    completed++;

                    if (completed === promises.length) {
                        resolve(results);
                    }

                })
                .catch(reject);
        });
    });
}


promiseAll([
    Promise.resolve(1),
    new Promise(r => setTimeout(() => r(2), 1000)),
    Promise.resolve(3)
])
    .then(console.log);
