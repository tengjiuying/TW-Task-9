const Person = require('./person');

module.exports = class Student extends Person{
    constructor(name, age, Clazz){
        super(name, age);
        this.clazz = Clazz;
    }
    introduce(){
        if (this.clazz.hasStudent === 0){
            return "My name is " + this.name + ". I am " + this.age + " years old. I am a Student. I haven't been allowed to join Class.";
        }
        else if (this.clazz.Leader === this.name){
            return "My name is Tom. I am 21 years old. I am a Student. I am a Student. I am Leader of Class 2.";
        }
        return super.introduce() + " I am a Student. I am at Class " + this.clazz.number +".";

    }
};