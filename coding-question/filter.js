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

const id = Symbol("id");

const user = {
  [id]: 123,
  [id]: 23234,
  [id]: 444,
  [id]: 6666,
};

user[id] = "Hello";

console.log(user[id]);
// 123
