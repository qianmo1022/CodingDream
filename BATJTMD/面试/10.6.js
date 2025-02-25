class Parent {
  constructor(name,age) {
    this.name = name;
    this.age = age;
  }
  say() {
    console.log("hello Parent");
  }
}

class Child extends Parent {
    constructor(name,age) {
        super(name,age);
        this.sex = 'boy'
    }
    say() {
        console.log('child say');
    }
}

const c = new Child('张三', 18);
c.say();
