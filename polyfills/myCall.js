const villen = {
  name: "galactus",
};

const anotherVillen = {
  name: "Dr. Doom",
};

global.name = "Thanos";

function showVillen() {
  console.log(this.name);
}

// V1 for Call
function myCallNormal(fn, thisArgs, ...args) {
  thisArgs.fn = fn;
  const result = thisArgs.fn(...args);
  delete thisArgs.fn;
  return result;
}

myCallNormal(showVillen, villen);
myCallNormal(showVillen, anotherVillen);

console.log("======================");

// V2 Call
Function.prototype.myCallProto = function (ctx, ...args) {
  const self = ctx || globalThis;
  console.log(self, globalThis);
  const fn = Symbol();
  self[fn] = this;
  const result = self[fn](...args);
  delete self[fn];

  return result;
};

showVillen.myCallProto(villen);
showVillen.myCallProto(anotherVillen);

console.log("======================");

// V2 Call
Function.prototype.myCallProtoWithApply = function (ctx, ...args) {
  return this.apply(ctx, args);
};

showVillen.myCallProtoWithApply(villen);
showVillen.myCallProtoWithApply(anotherVillen);
