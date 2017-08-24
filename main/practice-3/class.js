// Write your code here
module.exports = class Class {
    constructor(number, teacher = null){
        this.number = number;
        this.member = [];
        this.teacher = teacher;
    }
    assignLeader(stu){
        if (this.member.includes(stu)){
            this.leader = stu;
            if (this.teacher !== null){
                this.teacher.notifyLeaderAssigned(`${stu.name} become Leader of Class ${this.number}`);
            }
            return 'Assign team leader successfully.';
        }else {
            return 'It is not one of us.';
        }
    }
    appendMember(stu){
        if (this.teacher !== null){
            this.teacher.notifyStudentAppended(`${stu.name} has joined Class ${this.number}`);
        }
        this.member.push(stu);
    }
    hasStudent(stu){
        return this.member.includes(stu);
    }
}