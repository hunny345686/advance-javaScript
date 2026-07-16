Array.prototype.myMap = function (thisArgs, cb) {
  if (typeof cb !== "function") {
    throw new TypeError(cb + "is not a function");
  }

  const result = [];
  console.log(thisArgs);

  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i], i, this));
  }
  return result;
};

// const arr = [1, 2, 3];
const arr = [1, , 3];

const result = arr.myMap((item) => item * 2);

console.log(result);
// [2,4,6]

// Q2. Implement debounce()

function debounce(cb, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    console.log(args);
    timer = setTimeout(() => {
      cb.apply(this, args);
    }, delay);
  };
}

const fn = debounce(() => {
  console.log("search");
}, 500);

// fn("prem", "Hello", 1);

// Q3. Implement throttle()
