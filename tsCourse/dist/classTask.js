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
// const house = new House('Svobodi')
// const houseCopy = {street: "Tobolska", tenants: [], showAddress: house.showAddress}
// console.log(house)
// console.log(house.showAddress())
// console.log(houseCopy.showAddress())
// house.addTenant('Marat')
// house.addTenant('Anna')
// house.showTenant()
// console.log(house.tenants.push('Nik'))
// =======================
// class House1 {
//     constructor(private readonly type: string, private street: string) {
//     }
// }
// class StoneHouse extends House1 {
//     constructor (street: string) {
//         super('stone', street)
//     }
// }
// console.log(StoneHouse.street)
// const stoneHouse = new StoneHouse('Stone-world');
// console.log(stoneHouse.street)
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