const Person = require('./person');

module.exports = class Teacher extends Person {
    constructor(name, age, Classes){
        super(name, age);
        this.clazzes = Classes ;
    }
    isTeaching(student){
        if(this.clazzes.includes(student.clazz) && student.clazz.hasStudent === 1){
            return true ;
        }
        else {
            return false ;
        }
    }
    introduce(){
        let classes = [];
        for (let A of this.clazzes ){
            classes.push(A.number);
        }
        if (classes.length === 0){
            return super.introduce() + ' I am a Teacher. I teach No Class.';
        }
        return super.introduce() + ' I am a Teacher. I teach Class ' + classes.join(',') + '.';
    }
    notifyStudentAppended(){

    }

};
