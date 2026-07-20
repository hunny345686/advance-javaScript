class EventEmiter {
  events = {};

  on(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName].push(callback);
    } else {
      this.events[eventName] = [callback];
    }
  }
  emit(event, ...args) {
    const callbacks = this.events[event];

    callbacks &&
      callbacks.forEach((callback) => {
        callback(...args);
      });
  }
  once = (eventName, callback) => {
    const execute = (...args) => {
      callback(...args);
      this.remove(event, execute);
    };
    this.on(eventName, execute);
  };
  remove(eventName, callback) {
    this.events[eventName] = this.events[eventName].filter(
      (cb) => cb != callback,
    );
  }
}

const em = new EventEmiter();

function oerderDeliver(orderID) {
  console.log("oerderDeliver", orderID);
}
function oerderPlace(data) {
  console.log("oerderPlace", data);
}

function oerderPlaceByOnotherUser(data) {
  console.log("oerderPlaceByOnotherUser", data);
}

em.on("oerderDeliver", oerderDeliver);
em.on("oerderPlace", oerderPlace);
em.on("oerderPlace", oerderPlaceByOnotherUser);
em.emit("oerderPlace", "ABXS123");
em.emit("oerderDeliver", { OderData: "Leptop" });

let obj = {
  name: "Prem",
};

let obj2 = {
  name: "Prem",
};

obj3 = obj;

// obj3.name = "Shyam";

// obj = {};
// obj2 = {}; Assigning new object will give error
// console.log(obj, obj2, obj3);

console.log(obj2 === obj);

console.log(obj.toString());
