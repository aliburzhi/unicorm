const Person = require("./person");
class Human extends Person{
    constructor(name, age, state, uid) {
        super(name, age, state, uid);
        this.name = name;
        this.age = age;
        this.state = state;
        this.uid = uid;
    }
    getName () {
        return this.name;
    }
    sayHello () {
        return `Hello from: ${this.name}.`;
    }
}

module.exports = Human;