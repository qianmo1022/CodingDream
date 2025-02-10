console.log(1);

new Promise((resolve, reject) => {
  console.log(2);
  resolve();
  console.log(3);
}).then(() => {
  console.log(4);
});
console.log(5);
