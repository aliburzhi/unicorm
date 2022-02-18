/*
implement following three classes:
  abstract class Person
  - constructor accepts two parameters: state (active or inactive) and uid
  - both parameters should have default values - active and 0-0
  - methods:
    - getState() - return state
    - setState(newValue) - sets the state to a new value
      - check that passed value is "active" or "inactive" otherwise, it throws an exception
    - getUid() - return uid
    - static getCountOfPersons() - return total count of created persons

*/

class Person {
    constructor(state = 'active', uid = "0-0") {
        this.state = state;
        this.uid = uid;
        Person.count += 1;
    }
    getState() {
        return this.state;
    }
    setState(newValue) {
        if(newValue === 'active' || newValue === 'inactive') {
            this.state = newValue;
        } else {
            throw new Error()
        }
    }
    getUid() {
        return this.uid
    }
    static getCountOfPersons() {
        return Person.count
    }
}
Person.count = 0;
module.exports = Person