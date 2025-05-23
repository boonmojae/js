class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hi, I am ${this.name}, ${this.age} years old.`);
  }
}

const p1 = new Person("mojae", 26);
const p2 = new Person("tomato", 2);

p1.sayHello();
p2.sayHello();


console.log("--------------inferitance---------------");


class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks`);
  }
}

const dog = new Dog("Coco");
dog.speak();


console.log("--------------static---------------");

class Calculator {
  static add(a, b) {
    return a + b;
  }

  static PI = 3.14159;
}

console.log(Calculator.add(3, 4));
console.log(Calculator.PI);