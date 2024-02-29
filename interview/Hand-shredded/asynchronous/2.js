let count = 0

function foo () {
    console.log(count);
}

function bar (callback) {
    setTimeout(() => {
        count = 1
        foo()
    }, 1000)
}

bar(foo)
