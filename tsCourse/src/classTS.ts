// 1

class HouseN {
    street: string

    constructor(n: string) {
        this.street = n
    }

    public showAddress(this: HouseN) {
        console.log('Address: ' + this.street);
        return this.street
    }

}

const myHouse = new HouseN('Tobolska')

myHouse.showAddress()

// const houseCopyError = { showAddress: myHouse.showAddress } // Ошибка - нужно добавить св-во street
// houseCopyError.showAddress()

const houseCopy = { street: 'Zalivna', showAddress: myHouse.showAddress }

houseCopy.showAddress()

// 2

class HouseNew {
    private street: string

    private tenants: string [] = []

    constructor(n: string) {
        this.street = n
    }

    public showAddress(this: HouseNew) {
        console.log('Address: ' + this.street);
        return this.street
    }

    public addTenant(tenent: string) {
        return this.tenants.push(tenent)
    }

    public showTenants() {
        console.log(this.tenants)
    }
}

const myHouseNew = new HouseNew('Mira')

myHouseNew.showAddress()
myHouseNew.addTenant('Marat')
// myHouseNew.tenants.push('Merry')  / будет ошибка, т.к. tenants доступно только в середине класса HouseNew
myHouseNew.showTenants()