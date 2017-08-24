// Write your code here
module.exports = class Class {
    constructor(number){
        this.number = number;
    }
    assignLeader(student){//
        this.Leader = student;
        student.introduce = ()=>{
            return `${student.basicIntroduce()} I am a Student. I am Leader of Class ${student.clazz.id}.`;
        }
    }
};