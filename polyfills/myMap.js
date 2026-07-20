const array = [1, 2, 3, 4, 5];

const thisArge = { hey: 1 };

// With Normal function +++ V1
function transformArray(elem, i, array) {
  return elem * elem;
}

function mymap(arr, cbFu, thisArge) {
  const resultArray = [];
  arr.forEach((elem, i) => {
    const a = cbFu.call(thisArge, elem, i, arr);
    resultArray.push(a);
  });

  return resultArray;
}

// const responce = mymap(array, transformArray, thisArge);

// console.log(responce);

//  V2 Add it in Prototye of an Array

Array.prototype.pMyMap = function (cb, thisArge) {
  if (typeof cb !== "function") {
    throw new TypeError("Callback is not function");
  }
  let self = this;
  const resultArray = [];
  this.forEach((elem, i) => {
    if (self.hasOwnProperty(i)) {
      resultArray.push(cb.call(thisArge, elem, i, self));
    }
  });
  return resultArray;
};

const responce = array.pMyMap(transformArray, thisArge);
console.log(responce);

// V3 with while Loop

Array.prototype.whileMyMap = function (cb) {
  if (typeof cb !== "function") {
    throw new TypeError("Callback is not function");
  }
  let self = this;
  const resultArray = new Array(self.length);
  console.log(resultArray);
  let count = 0;

  while (count < self.length) {
    if (self.hasOwnProperty(count)) {
      resultArray[count] = cb(self[count], count, self);
    }

    count++;
  }

  return resultArray;
};

const responce = array.whileMyMap(transformArray);
console.log(responce);
