Array.prototype.myFilter = function (cb) {
  if (typeof cb !== "function") throw new TypeError(cb + " is not a function");
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

const arr = [1, 2, 3, 4, 5];

const result = arr.myFilter((item, i, arr) => {
  return item % 2 === 0;
});

console.log(result);
// [2, 4]
