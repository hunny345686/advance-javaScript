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


// Debounce 

function debounce(fn, delay) {
    let timer

    return function (...args) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, delay)
    }
}


function search(value) {
    console.log("Searching:", value);
}

const debouncedSearch = debounce(search, 500);

debouncedSearch("P");
debouncedSearch("Pr");
debouncedSearch("Pre");
debouncedSearch("Prem");


// event Emiter

class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(event, listener) {
        if (!this.events[event]) {
            this.events[event] = [];
        }

        this.events[event].push(listener);
    }

    emit(event, ...args) {
        if (!this.events[event]) return;

        this.events[event].forEach(listener => {
            listener(...args);
        });
    }

    off(event, listenerToRemove) {
        if (!this.events[event]) return;

        this.events[event] =
            this.events[event].filter(
                listener => listener !== listenerToRemove
            );
    }
}

const emitter = new EventEmitter();

function greet(name) {
    console.log(`Hello ${name}`);
}

emitter.on("welcome", greet);

emitter.emit("welcome", "Prem");


// Simple Deep Clone

function deepClone(obj) {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    const clone = Array.isArray(obj)
        ? []
        : {};

    for (let key in obj) {
        clone[key] = deepClone(obj[key]);
    }

    return clone;
}