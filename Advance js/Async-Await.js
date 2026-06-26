async function getUserData() {
    const user = await fetchUser();
    return user;
}

// equivalent to:

function getUserData() {
    return fetchUser().then((user) => {
        return user
    })
}


async function run() {
    console.log("1");

    await Promise.resolve();

    console.log("2");
}

run();

console.log("3");