const fs = require('fs');

// fs.writeFileSync('./target.md','举头望明月')

const img = fs.readFileSync('./avatar.jpg');
fs.writeFileSync('./pic/avatar2.jpg',img);

// console.log(img);
