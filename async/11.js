async function addString(previous, current) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(previous + " " + current)
        }, Math.floor(Math.random() * 100) +1)})
}

async function addAll() {
    let result = await addString("", "A")
    result = await addString(result, "B")
    result = await addString(result, "C")
    console.log(result)
}

addAll();