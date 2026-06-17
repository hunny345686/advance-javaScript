// 

function outer() {

    let count = 0


    return function inner() {
        count++
        console.log(count)
    }
}

const fncall1 = outer()

const fncall2 = outer()
fncall1();
fncall1();
fncall1()

fncall2()



// Trotling 

function throtel(fn, delay) {
    let last = 0

    return (...arges) => {
        const now = Date.now();
        if (now - last >= delay) {
            last = now
            fn(...arges)
        }
    }
}

