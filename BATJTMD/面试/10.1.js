Parent.prototype.say = function () {
  console.log("hello");
};
function Parent() {
  this.name = "parent";
  this.age = 50;
}

Child.prototype = new Parent();
function Child(name) {
  this.name = name;
}

const c = new Child('child'); // c.__proto__ === Child.prototype
console.log(c.name);
console.log(c.age);
c.say()