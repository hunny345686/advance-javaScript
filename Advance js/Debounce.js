

function debounce(fn, delay) {

    let timer

    return function (...args) {
        clearTimeout(timer)

        timer = setTimeout(() => {

            fn.apply(this, ...args)
        }, delay)
    }

}


function throtal(fn, delay) {

    let waiting = false

    return function (...args) {

        if (!waiting) {
            fn.apply(this, args)
            waiting = true

            setTimeout(() => {
                waiting = false
            }, delay)
        }
    }

}