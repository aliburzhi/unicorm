async function printString(string) {
    console.log("STARTED: " + string);
    return new Promise((resolve, reject) => {
            setTimeout(
                () => {
                    resolve(console.log(string));
                }, Math.floor(Math.random() * 100) + 1);
    });
}

async function printAll() {
     await printString("A");
    await printString("B");
     await printString("C");
}
printAll();