// T1

const arr = [1, 2, 3, 2, 4, 3, 5];

const result = [...new Set(arr)];

console.log(result);
// [1, 2, 3, 4, 5]

// t2

const arr = [1, 2, 3, 2, 4, 3, 5];

const result = arr.filter((item, index) => {
  return arr.indexOf(item) === index;
});

console.log(result);
// [1, 2, 3, 4, 5]
