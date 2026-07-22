const array = [1, 2, 3];

const newAarayBuliIn = array.reduce((prevVal, item, i, aaray) => {
  return prevVal + item;
}, 4);
console.log("newAarayBuliIn Fucntion", newAarayBuliIn);

Array.prototype.myReduce = function (cb, acum) {
  if (typeof cb !== "function") {
    throw new TypeError("Callback is not a functio");
  }
  const initialVal = acum ? acum : this[0];
  const index = acum ? 0 : 1;
  let result = initialVal;

  for (let i = index; i < this.length; i++) {
    result = cb(initialVal, this[i], i, this);
  }

  return result;
};

const newAarayMyreduce = array.reduce((prevVal, item, i, aaray) => {
  return prevVal + item;
}, 4);
console.log("newAarayMyreduce ", newAarayMyreduce);
