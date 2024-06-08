// const { time } = require("console");

class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  speak() {
    console.log(this.name + "is here");
  }
}
class student extends person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }
}
