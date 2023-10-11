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
class Plane2 {
    sitInPlane(pilot) {
        this.pilot = pilot;
    }
}
class Boeing2 extends Plane2 {
    startEngine() {
        if (!this.pilot) {
            throw new Error('No pilot in cabin');
        }
        // Розігріваємо реактивні турбіни.
        console.log('Запуск турбин');
        this.pilot.flyMessage();
        return true;
    }
}
const boeing2 = new Boeing2();
const pilot2 = new Pilot2('Anthony', 32);
// Капітан вітає пасажирів на трапі.
pilot2.greet('Вас вітає капітан корабля');
// Займає місце пілота.
boeing2.sitInPlane(pilot2);
// Запускаємо двигуни.
boeing2.startEngine();
class Terrorist2 {
    bluff(phrase) {
        console.log(phrase);
    }
    flyMessage() {
        console.log("Наші вимоги - 9 мільйонів.");
    }
}
const boeingT = new Boeing2();
const pilotT = new Terrorist2();
// Капітан вітає пасажирів на трапі.
pilotT.bluff('Ви захопили цей літак!');
// Займає місце пілота.
boeingT.sitInPlane(pilotT);
// Запускаємо двигуни.
boeingT.startEngine();
const someUser = {
    name: 'Marat'
};
console.log(someUser.name);
//# sourceMappingURL=interfaceTS.js.map