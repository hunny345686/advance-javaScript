const inputString = "a.b.c.d.e";

// function unpack(str) {
//   let obj = {};

//   const split = str.split(".");
//   console.log(split);
//   for (let i = 0; i < split.length; i++) {
//     const n = { [split[i]]: obj };
//     obj = n;
//   }

//   return obj;
// }

function unpack(str) {
  return str.split(".").reduceRight((acum, next) => {
    return { [next]: acum };
  });

  return obj;
}

console.log(unpack(inputString));
