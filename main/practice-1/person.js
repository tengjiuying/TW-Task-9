// Write your code here
module.exports = class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    basicintroduce(){
        return `My name is ${this.name}. I am ${this.age} year old`;
    }
    introduce(){
        return Person.say_hello();
    }
};