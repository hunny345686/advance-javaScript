// My Try

function maximamRevenue(vmStock, member) {
  let revenue = 0;
  vmStock.sort((a, b) => a - b);
  for (let i = member; i > 0; i--) {
    if (vmStock[vmStock.length - 1] !== 0) {
      vmStock[vmStock.length - 1] = vmStock[vmStock.length - 1] - 1;
      revenue = revenue + vmStock[vmStock.length - 1];
    } else {
      vmStock.pop();
    }
  }

  return revenue;
}

maximamRevenue([2, 2], 4);
maximamRevenue([3], 3);
maximamRevenue([1, 1, 1], 3);
maximamRevenue([100], 2);

// const d = [1, 2, 3];
// d.pop();

// d[d.length - 1] = d[d.length - 1 - 1];

// console.log(Math.max(1, 1, 1));

//  Another try
function maximumRevenue(vmStock, members) {
  let revenue = 0;

  while (members > 0) {
    let maxIndex = 0;

    for (let i = 1; i < vmStock.length; i++) {
      if (vmStock[0] < vmStock[i]) {
        maxIndex = i;
      }
    }

    revenue += vmStock[maxIndex];
    vmStock[maxIndex]--;

    if (vmStock[maxIndex] === 0) {
      vmStock.splice(maxIndex, 1);
    }

    members--;
  }
  return revenue;
}

console.log(maximumRevenue([2, 5], 4)); // 14
console.log(maximumRevenue([3], 3)); // 6
console.log(maximumRevenue([5], 5)); // 15
console.log(maximumRevenue([2, 2], 4)); // 6
console.log(maximumRevenue([1, 3], 3)); // 6
console.log(maximumRevenue([4, 4], 4)); // 14
console.log(maximumRevenue([1, 1, 1], 3)); // 3
console.log(maximumRevenue([100], 2)); // 199
