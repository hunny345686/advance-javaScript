// Explain the Event Loop in depth

// JavaScript is single-threaded.

// Only one task executes at a time.

// Browser provides:

// Call Stack
// Web APIs
// Task Queue (Macrotask Queue)
// Microtask Queue
// Render Queue


console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

Promise.resolve().then(() => {
    console.log("3");
});

console.log("4");