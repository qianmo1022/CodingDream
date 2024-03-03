async function foo() {
    try {
        await xxx()
        // return xxx
    } catch (error) {
        console.log(error);
    }
}

console.log(foo());