const Person = require("./person");

class Uuee extends Person{
    constructor(owner, state, uid) {
        super(state, uid)
        this.owner = owner
    }
    sayHello (caller) {
        if (caller !== this.owner) {
            return 'No!'
        } else {
            return `Hello ${this.owner.getName()}.`;
        }
    }
}
module.exports = Uuee;