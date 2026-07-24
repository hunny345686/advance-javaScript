const array = ["🍇", "🍓", "🍉", "🍌", "🍒"];

Array.prototype.mySlice = function (start, end) {
  const len = this.length;
  const result = [];
  if (start === undefined) {
    start = 0;
  } else if (start < 0) {
    const newIdx = len + start;
    start = Math.max(newIdx, 0);
  } else {
    start = Math.min(start, len);
  }

  if (end === undefined) {
    end = len;
  } else if (end < 0) {
    const newIdx = len + end;
    end = Math.max(newIdx, 0);
  } else {
    end = Math.min(end, len);
  }

  console.log(start, end);

  for (let i = start; i < len; i++) {
    result.push(this[i]);
  }

  return result;
};

const smallSlice = array.slice(2);
const smallMySlice = array.mySlice(0, 7);
// console.log(smallSlice);
console.log(smallMySlice);
