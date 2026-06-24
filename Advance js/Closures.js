// Function remembers variables from outer scope even after outer function has finished execution.

function counter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const increment = counter();

console.log(increment());
console.log(increment());
console.log(increment());