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

// V2 Call
Function.prototype.myApplyProto = function (ctx, args = []) {
  const self = ctx || globalThis;
  const fn = Symbol();
  self[fn] = this;
  const result = self[fn](...args);
  delete self[fn];

  return result;
};

showVillen.myApplyProto(villen);
showVillen.myApplyProto(anotherVillen);
showVillen.myApplyProto(globalThis);
