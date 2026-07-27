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

// const newFn = showVillen.bind(anotherVillen);
// setTimeout(newFn, 100);

// V1

Function.prototype.myBind = function (ctx, ...args) {
  const context = ctx || globalThis;
  const self = this;

  return function () {
    const key = Symbol();
    context[key] = self;
    const result = context[key](...args);
    delete context[key];
    return result;
  };
};

const fn = showVillen.myBind(villen);

fn();

// V2

Function.prototype.myBind2 = function (thisArgs, ...args) {
  const fn = this;
  const ctx = Object(thisArgs ?? globalThis);

  return function (...newArgs) {
    const key = Symbol();

    ctx[key] = fn;
    const result = ctx[key](...args, ...newArgs);

    delete ctx[key];

    return result;
  };
};
