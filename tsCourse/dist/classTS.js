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
//# sourceMappingURL=classTS.js.map