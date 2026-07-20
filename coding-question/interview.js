function Person() {}
console.log(Person.prototype);

let p = new Person();
console.log(p.__proto__);
