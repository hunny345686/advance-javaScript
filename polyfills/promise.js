function promiseFectory(data, delay, reject) {
  return function () {
    return new Promise((res, rej) => {
      setTimeout(() => {
        if (reject) {
          rej("Faild ===>" + data);
        } else {
          res("Pass ===>" + data);
        }
      }, delay);
    });
  };
}

class MyPrimise {
  #state = "Pending";
  #value;
  #thenCb = [];
  #catchCb = [];
  constructor(callback) {
    try {
      callback(this.#resolve, this.#reject);
    } catch (error) {
      this.#reject(error);
    }
  }
  #resolve(value) {
    if (this.#state !== "Pending") return;
    this.#state = "Fulfilled";
    this.#value = value;
    this.#runCallback();
  }
  #reject(value) {
    if (this.#state !== "Pending") return;
    this.#state = "Reject";
    this.#value = value;
    this.#runCallback();
  }
  #runCallback() {
    queueMicrotask(() => {
      if (this.#state === "Fulfilled") {
        this.#thenCb.forEach((cb) => cb(this.#value));
        this.#thenCb = [];
      } else if (this.#state === "Reject") {
        this.#catchCb.forEach((cb) => cb(this.#value));
        this.#catchCb = [];
      }
    });
  }
  then(thenCb, catchCB) {
    if (thenCb) {
      this.#thenCb.push(thenCb);
    }
    this.#runCallback();
  }
  catch(catchCb) {
    return this.then(undefined, catchCb);
  }
}

const p1 = promiseFectory("p1", 100);
const p2 = promiseFectory("p2", 200);
const p3 = promiseFectory("p3", 300);
const p4 = promiseFectory("p4", 1000);
const p5 = promiseFectory("p5", 2000);

// const d = fn();

const promises = [p1, p2, p3, p4, p5];

function execiteInParrlar(allPro) {
  const allPromisseArry = allPro.map((p) => p());
  return Promise.all(allPromisseArry);
}

execiteInParrlar(promises)
  .then((d) => {
    console.log(d);
  })
  .catch((e) => {
    console.log(e);
  });
