// 1. Promise Polyfills

Promise.myProAll = function (promise) {
    return new Promise((res, rej) => {
        const result = []
        let completed = 0

        promise.forEach(p, i => {
            Promise.resolve(p).then((value) => {
                results[index] = value;
                completed++

                if (completed === promise.length) {
                    res(result)
                }
            }).catch(rej)
        });
    })

}