// // Function remembers variables from outer scope even after outer function has finished execution.

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

function createCounter() {
  let count = 0;

  function increment() {
    count++;

    if (count < 3) {
      console.log(count);
      increment();
    }

    return count;
  }

  return increment;
}

const fn = createCounter();

console.log(fn());
console.log(fn());
