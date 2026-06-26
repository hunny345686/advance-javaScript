const iterator = {
    value: 1,
    next() {
        return {
            value: this.value++,
            done: false
        }
    }
}


iterator.next();

// Generator


function* counter() {
    yield 1
    yield 2
}

const gen = counter();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());