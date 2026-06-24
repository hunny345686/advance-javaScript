function ownPromiss(promisses) {
    return new Promise((resolve, reject) => {

        const resovledPromis = []

        let completed = 0

        if (!promisses.length) {
            resolve([])
            return
        }
        promisses.forEach((prom, i) => {
            Promise.resolve(prom).then((value) => {
                resovledPromis[i] = value;
                completed++;

                if (completed === promisses.length) {
                    resolve(resovledPromis)
                }
            }).catch(reject)
        });


    })
}

ownPromiss([
    Promise.resolve("A"),
    Promise.resolve("B"),
    Promise.resolve("C"),
]).then(console.log);