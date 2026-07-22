function Person(name) {
  this.name = name;

  return {
    city: "City Name",
  };
}

const p = new Person("Prem");

console.log(p);

//Implement new?

function myNew(Constructor, ...args) {
  const obj = {};
  Object.setPrototypeOf(obj, Constructor.prototype);

  Constructor.apply(obj, args);

  return obj;
}

function Pesone1(neme) {
  this.neme = neme;
}

Pesone1.prototype.sayHello = function () {
  console.log("Hi " + this.neme);
};

const p1 = myNew(Pesone1, "prem");

console.log(p1.sayHello());
