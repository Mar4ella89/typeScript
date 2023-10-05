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

// 3
// Сокращении инициализации
// Полная запись:
class HouseS {
    private type: string;
    private street: string;

    constructor(type: string, street: string) {
        this.type = type;
        this.street = street;
    }

    public showAddress(this: HouseS) {
        console.log('Address: ' + this.street);
        return this.street
    }

    public showType(this: HouseS) {
        console.log('Type: ' + this.type);
        return this.type
    }
}

// Сокращенная запись:
class HouseShort {
    constructor(private type: string, private street: string) { /* Внесли инициализацию в конструктор */
        this.type = type
        this.street = street
    }

    public showAddress(this: HouseShort) {
        console.log('Address: ' + this.street);
        return this.street
    }

    public showType(this: HouseShort) {
        console.log('Type: ' + this.type);
        return this.type
    }
}

// 4 Readonly (похож на const)

class HouseRO {
    constructor(private readonly type: string,
        private readonly tenants: string[],
        public readonly address: {street: string, number: number}) { }

    // changeType(type: string) {  // Будет ошибка, т.к. св-во type имеет readonly
    //     this.type = type
    // }
    showType() {
        this.type
    }

    changeStreet(tenant: string) {
        this.tenants.push(tenant) // Не будет ошибки, т.к. св-во tenants имеет readonly, но не запрещает изменять массив
    }
}

const myHouseRO = new HouseRO('new', [], { street: 'Miru', number: 11 })

// myHouseRO.address = {street: 'Mira', number: 14 } /*Будет ошибка, т.к. нельзя менять св-ва */
// Но можно сделать так:
console.log('number before change: ',myHouseRO.address.number)
myHouseRO.address.number = 15
console.log('number after change: ',myHouseRO.address.number)