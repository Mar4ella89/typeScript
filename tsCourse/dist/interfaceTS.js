"use strict";
function greet(person) {
    console.log(`My name is ${person.lastName} ${person.firstName}`);
}
const newPersonI = {
    firstName: 'Marat',
    lastName: 'Baikin'
};
greet(newPersonI);
let user1;
user1 = {
    name: 'Marat',
    age: 34,
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
};
user1.greet('Hi, i am');
class Pilot2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        if (this.age <= 25) {
            throw 'You are really young!';
        }
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
    flyMessage() {
        console.log('Plane is starting fly');
    }
    // Интерфейсы не ограничивают нас в расширении классов. Мы можем добавлять в класс новые методы и свойства.
    setAutopilot() {
        console.log('Autopilot enabled.');
    }
}
//# sourceMappingURL=interfaceTS.js.map