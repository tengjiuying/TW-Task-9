const Person = require('./person');

module.exports = class Student {
    constructor(name, age, Clazz){
        super(name, age);
        this.clazz = Clazz;
    }
    introduce(){
        if (this.clazz.Leader === this.name){
            return super.introduce() + " I am a Student. I am Leader of Class " + this.clazz.number + ".";
        }
        return super.introduce() + " I am a Student. I am at Class " + this.clazz.number + ".";
    }
}