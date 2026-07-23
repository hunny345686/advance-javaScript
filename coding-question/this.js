const user = {
  name: "Prem",
  sayHello: function () {
    console.log(this);
    console.log(this.name);
  },
};

const user1 = {
  name: "ram",
};

user1.sayHello = user.sayHello;
user1.sayHello();
user.sayHello();
