"use strict";
class House {
    constructor(n) {
        this.street = n;
    }
    showAddress() {
        console.log(`Adress: ${this.street}`);
        return this.street;
    }
}
const house = new House('Svobodi');
const houseCopy = { street: "Tobolska", showAddress: house.showAddress };
console.log(house);
console.log(house.showAddress());
console.log(houseCopy.showAddress());
// public - это как все свойства и методы в js можно вызывать где угодно
// private - нельзя вызвать извне экземпляра не наследуется
// protected - нельзя вызвать извне экземпляра но наследуется
class A {
    constructor() {
        this.someProperty = 'str';
    }
}
class B extends A {
    showProperty() {
        console.log(this.someProperty);
    }
}
const a = new A();
const b = new B();
// a.someProperty
// B.someProperty
b.showProperty();
//# sourceMappingURL=classTask.js.map