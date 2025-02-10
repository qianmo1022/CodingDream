const object = new Object();

object.name = 'John';

const newObject = Object.assign(object);

newObject.age = 30;

console.log(newObject.name, newObject.age); // John 30