const Person = require('./person');

module.exports = class Teacher {
    constructor(name, age, clazz){
        super(name, age);
        this.clazzes = clazzes;
    }
    introduce(){
        let classes = [];
        for (let item of this.clazzes){
            classes.push(item.number);
        }
        if (this.clazzes.length === 0){
            return super.introduce() + ' I am a Teacher. I teach No Class.';
        }
        return super.introduce() + ' I am a Teacher. I teach Class ' + classes.join(',') + '.';
    }

}