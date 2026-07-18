function* increament() {
  yield 1;

  yield 2;

  yield 3;
}

const Incre = increament();

console.log(Incre.next());
console.log(Incre.next());
console.log(Incre.next());
console.log(Incre.next());
