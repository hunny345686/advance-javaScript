async function retry(fn, retry = 3, delay = 500) {


    try {
        return await fn()
    } catch (error) {
        if (retry === 0) throw error

        await new Promise(res => {
            setTimeout(res, delay)
        })

        return retry(fn, retries - 1, delay * 2)
    }
}