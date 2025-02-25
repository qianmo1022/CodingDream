Parent.prototype.say = function () {
  console.log("hello");
};
function Parent(age) {
  this.name = "parent";
  this.age = age;
}

function Child(name, age) {
  Parent.call(this, age);
  this.name = name;
}

const c = new Child("child", 50); // c.__proto__ === Child.prototype
// console.log(c.name);
// console.log(c.age);
// c.say();
console.log(c);
