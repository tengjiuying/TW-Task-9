const Person = require('./person');

module.exports = class Student {
    constructor(name, age, klass){
        super(name, age);//super与“this”类似，但是也有不同:表示调用父类的构造函数。是一个特殊语法，不是变量，没有什么类型
        this.klass = klass;
    }
    introduce(){
        return `${this.basicintroduce()} I am a ${Student.name}. I am at Class &{this.kclass}.`;//$多用来表示一个查找对象的函数
    }
};