"use strict";
class House {
    constructor(n) {
        this.tenants = [];
        this.street = n;
    }
    showAddress() {
        console.log(`Adress: ${this.street}`);
        return this.street;
    }
    addTenant(tenant) {
        this.tenants.push(tenant);
    }
    showTenant() {
        console.log(this.tenants);
    }
}
const house = new House('Svobodi');
// const houseCopy = {street: "Tobolska", tenants: [], showAddress: house.showAddress}
console.log(house);
console.log(house.showAddress());
// console.log(houseCopy.showAddress())
house.addTenant('Marat');
house.addTenant('Anna');
house.showTenant();
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