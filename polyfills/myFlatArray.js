const arr = [1, 2, 3, [4, 5, [6, 7, [8, 9]]]];

// Fist Way
const flatArrayBuildIn = arr.flat(Infinity);

// Sec Way
const arrayFlatWithStraing = arr.toString().split(",").map(Number);

// third Way

function myFlatFn(arr, level = Infinity) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && level > 0) {
      result.push(...myFlatFn(arr[i], level - 1));
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(myFlatFn(arr, 2));

console.log(arrayFlatWithStraing);

console.log(flatArrayBuildIn);
