new Promise((resolve, reject) => {
    console.log("fn12");
    resolve();
    new Promise((resolve, reject) => {
        console.log("fn13");
        resolve();
        new Promise((resolve, reject) => {
            console.log("fn14");
            resolve();
        }).then(function () {
            console.log("fn15");
        });
    }).then(function () {
        console.log("fn16");
    });
}).then(function () {
    console.log("fn17");
});