const array = [1, 2, 3, 4, 5];

const obj = { name: "Prem" };

// V1
function filterFuction(data, callback, thisArgs) {
  let resultAarry = [];
  if (typeof callback !== "function") {
    throw new TypeError("Callback is not funtion");
  }
  data.forEach((element, index) => {
    const needToAdd = callback.call(thisArgs, element, index, data);
    needToAdd && resultAarry.push(element);
  });

  return resultAarry;
}

function myFilter(value, index, array) {
  console.log(this);

  return value % 2 === 0;
}

// const newArray = filterFuction(array, myFilter, obj);
// console.log(newArray);

// Add to prototype Chain

Array.prototype.myFilterP = function (callback, thisArgs) {
  let resultAarry = [];
  if (typeof callback !== "function") {
    throw new TypeError("Callback is not funtion");
  }
  this.forEach((element, index) => {
    if (this.hasOwnProperty(index)) {
      const needToAdd = callback.call(thisArgs, element, index, this);
      needToAdd && resultAarry.push(element);
    }
  });

  return resultAarry;
};

const newArray = array.myFilterP((item) => {
  return item % 2 === 0;
}, obj);
console.log(newArray);
