// Inbuild fcuntion

// const arr = [1, 2, 3, 4, 9];

// const sum = arr.reduce((acc, curr) => acc + curr, 0);

// console.log(sum); // 10

Array.prototype.myReduce = function (callback, initialValue) {
  if (typeof callback !== "function")
    throw new TypeError("callback must be a function");

  const arr = Object(this);
  const length = arr.length;

  console.log(arguments);
  // if (arguments.length === 2) {
  //   let acc = initialValue;
  //   for (let i = 0; i < length; i++) {
  //     acc = callback(acc, arr[i]);
  //   }
  //   return acc;
  // }

  //   return 10;
};

const arr = [1, 2, 3, 4];

const sum = arr.myReduce((acc, curr) => acc + curr, 0);

console.log(sum); // 10
