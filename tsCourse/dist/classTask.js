"use strict";
class House {
    constructor(type, street) {
        this.type = type;
        this.street = street;
        // private street: string
        this.tenants = [];
    }
    // constructor (n: string){
    // this.street = n
    // }
    showAddress() {
        console.log(`Adress: ${this.street}`);
        return this.street;
    }
    showType() {
        console.log(`House Type: ${this.type}`);
    }
    addTenant(tenant) {
        this.tenants.push(tenant);
    }
    showTenants() {
        console.log(this.tenants);
    }
}
class StoneHouse extends House {
    constructor(street, generalTenant) {
        super('stone', street); // Вызов родительского конструктора
        // Добавляем владельца квартиры
        this.chargeOfTheHouse = generalTenant;
        this.addTenant(generalTenant);
    }
    showTenants() {
        console.log(`General:  ${this.chargeOfTheHouse}`);
        // Запускаем родительский метод showTenants();
        super.showTenants();
    }
}
const stoneHouse = new StoneHouse('Stone-world', 'Max');
stoneHouse.addTenant('Anton');
stoneHouse.addTenant('Nikita');
stoneHouse.showTenants();
stoneHouse.showType();
stoneHouse.showAddress();
class Pilot {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        if (this.age < 28) {
            throw new Error('Pilot is young');
        }
    }
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
    ;
    flyMessage() {
        console.log('Самолет набрал высоту, всем приятного полета!');
    }
    ;
}
const pilot = new Pilot('Anthony', 34);
pilot.greet('Вас приветствует капитан корабля');
pilot.flyMessage();
// =======================
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