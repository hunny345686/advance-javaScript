const obj = {
  name: "prem",
  function() {
    return () => {
      console.log(this.name);
    };
  },
};

const fn = obj.function();
fn();

function throtel(fn, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}
