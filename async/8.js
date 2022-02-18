function printString(string) {
    console.log('Started:' + string)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log((string)))
        }, Math.floor(Math.random() * 100) + 1);
    });
}

function printAll() {
    printString("A")
        .then(() => printString("B"))
        .then(() => printString("C"))
}
printAll();