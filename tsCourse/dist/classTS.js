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
//# sourceMappingURL=classTS.js.map