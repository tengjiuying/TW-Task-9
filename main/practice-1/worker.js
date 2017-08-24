const Person = require('./person');

module.exports = class Worker extends Person{//class Square extends Polygon {...}
    introduce(){
        return super.basicintroduce() + ' I am a Worker. I have a job';
    }
};