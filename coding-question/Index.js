function Person(name) {
  this.name = name;

  return {
    city: "City Name",
  };
}

const p = new Person("Prem");

console.log(p);

//Implement new?

function myNew(Constructor, ...args) {
  const obj = {};
  Object.setPrototypeOf(obj, Constructor.prototype);

  Constructor.apply(obj, args);

  return obj;
}

function Pesone1(neme) {
  this.neme = neme;
}

Pesone1.prototype.sayHello = function () {
  console.log("Hi " + this.neme);
};

const p1 = myNew(Pesone1, "prem");

// console.log(p1.sayHello());

// Dbounce function
function debouce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

// Genrator function

function* genratorFn() {
  yield 1;

  yield 2;

  yield 3;
}

const invoke = genratorFn();

// console.log(invoke.next());
// console.log(invoke.next());
// console.log(invoke.next());
// console.log(invoke.next());

//  Flattening array

function customFlat(array, depth) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      result.push(...customFlat(array[i]));
    } else {
      result.push(array[i]);
    }
  }

  return result;
}

const arr = [
  [1, 2],
  [3, 4],
  [5, 6, [7, 8, [9, 10]]],
];

console.log("customFlat(arr)", customFlat(arr, 1));

const flatArray = arr.flat(1);
console.log("flatArray", flatArray);
