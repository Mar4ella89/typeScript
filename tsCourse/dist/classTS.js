"use strict";
// 1
class HouseN {
    constructor(n) {
        this.street = n;
    }
    showAddress() {
        console.log('Address: ' + this.street);
        return this.street;
    }
}
const myHouse = new HouseN('Tobolska');
myHouse.showAddress();
// const houseCopyError = { showAddress: myHouse.showAddress } // Ошибка - нужно добавить св-во street
// houseCopyError.showAddress()
const houseCopy = { street: 'Zalivna', showAddress: myHouse.showAddress };
houseCopy.showAddress();
// 2
class HouseNew {
    constructor(n) {
        this.tenants = [];
        this.street = n;
    }
    showAddress() {
        console.log('Address: ' + this.street);
        return this.street;
    }
    addTenant(tenent) {
        return this.tenants.push(tenent);
    }
    showTenants() {
        console.log(this.tenants);
    }
}
const myHouseNew = new HouseNew('Mira');
myHouseNew.showAddress();
myHouseNew.addTenant('Marat');
// myHouseNew.tenants.push('Merry')  / будет ошибка, т.к. tenants доступно только в середине класса HouseNew
myHouseNew.showTenants();
// 3
// Сокращении инициализации
// Полная запись:
class HouseS {
    constructor(type, street) {
        this.type = type;
        this.street = street;
    }
    showAddress() {
        console.log('Address: ' + this.street);
        return this.street;
    }
    showType() {
        console.log('Type: ' + this.type);
        return this.type;
    }
}
// Сокращенная запись:
class HouseShort {
    constructor(type, street) {
        this.type = type;
        this.street = street;
        this.type = type;
        this.street = street;
    }
    showAddress() {
        console.log('Address: ' + this.street);
        return this.street;
    }
    showType() {
        console.log('Type: ' + this.type);
        return this.type;
    }
}
// 4 Readonly (похож на const)
class HouseRO {
    constructor(type, tenants, address) {
        this.type = type;
        this.tenants = tenants;
        this.address = address;
    }
    // changeType(type: string) {  // Будет ошибка, т.к. св-во type имеет readonly
    //     this.type = type
    // }
    showType() {
        this.type;
    }
    changeStreet(tenant) {
        this.tenants.push(tenant); // Не будет ошибки, т.к. св-во tenants имеет readonly, но не запрещает изменять массив
    }
}
const myHouseRO = new HouseRO('new', [], { street: 'Miru', number: 11 });
// myHouseRO.address = {street: 'Mira', number: 14 } /*Будет ошибка, т.к. нельзя менять св-ва */
// Но можно сделать так:
console.log('number before change: ', myHouseRO.address.number);
myHouseRO.address.number = 15;
console.log('number after change: ', myHouseRO.address.number);
// 5 Наследование
class HouseMain {
    constructor(type, street) {
        this.type = type;
        this.street = street;
        this.tenants = [];
        this.type = type;
        this.street = street;
    }
    showAdress() {
        console.log('Address: ', this.street);
    }
    showType() {
        console.log('House type: ', this.type);
    }
    addTenant(tenant) {
        this.tenants.push(tenant);
    }
    showTenants() {
        console.log('Tenants: ', this.tenants);
    }
}
class StoneHouseNew extends HouseMain {
    constructor(generalTenant, street) {
        super('stone', street);
        this.mainTenant = generalTenant;
        this.addTenant(generalTenant);
    }
    showMainTenant() {
        console.log('Main tenant: ', this.mainTenant);
        super.showTenants();
    }
}
const stoneNewHouse = new StoneHouseNew('Marat', 'Zalivna');
stoneNewHouse.showMainTenant();
stoneNewHouse.addTenant('Anna');
stoneNewHouse.addTenant('Rinat');
stoneNewHouse.addTenant('Diana');
stoneNewHouse.showTenants();
stoneNewHouse.showAdress();
stoneNewHouse.showType();
class NewPersonInfo {
    constructor() {
        this.personInformayion = {};
    }
    set addFirstName(value) {
        console.log('Name is added');
        this.personInformayion.firstName = value;
    }
    set addLastName(value) {
        console.log('Last name is added');
        this.personInformayion.lastName = value;
    }
    get info() {
        const { personInformayion } = this;
        return (`${personInformayion.firstName} ${personInformayion.lastName}`);
    }
}
const personNewInfo = new NewPersonInfo();
personNewInfo.addFirstName = 'Marat';
personNewInfo.addLastName = 'Baikin';
personNewInfo.info;
// 7. Статические методы и свойства
class UseStatic {
    constructor() {
        UseStatic.count += 1;
    }
    showCount() {
        console.log(UseStatic.count);
    }
}
UseStatic.count = 0;
const objA = new UseStatic();
const objB = new UseStatic();
const objC = new UseStatic();
objC.showCount();
objB.showCount();
objA.showCount();
console.log(UseStatic.count);
// 8. Abstract classes
class PlaneX {
    constructor() {
        this.pilotInCabin = false;
    }
    sitInPlane() {
        this.pilotInCabin = true;
    }
}
class MaizeX extends Plane {
    startEngine() {
        // Запускаємо винти двигуна.
        return true;
    }
}
class BoeingX extends Plane {
    startEngine() {
        // Розігріваємо реактивні турбіни.
        return true;
    }
}
// class BrokenPlane extends Plane {} // Error: Клас 'BrokenPlane' не реалізовує унаслідований абстрактний метод 'startEngine' з класу 'Plane'.
//# sourceMappingURL=classTS.js.map