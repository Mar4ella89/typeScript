class House {
    private street: string
    private tenants:[]=[]

    constructor (n: string){
    this.street = n
    }

   public showAddress (this: House) {
        console.log(`Adress: ${this.street}`)
        return this.street
    }

    // public addTenant (tenant: string) {
    //    this.tenants.push(tenant)
    // }
    
    public showTenant() {
        console.log(this.tenants)
    }
}

const house = new House('Svobodi')
const houseCopy = {street: "Tobolska", showAddress: house.showAddress}

console.log(house)
console.log(house.showAddress())
console.log(houseCopy.showAddress())




// public - это как все свойства и методы в js можно вызывать где угодно
// private - нельзя вызвать извне экземпляра не наследуется
// protected - нельзя вызвать извне экземпляра но наследуется

class A {
    protected someProperty = 'str'
}

class B extends A {
    showProperty() {
      console.log(this.someProperty)  
    }
    
}

const a = new A()
const b = new B()

// a.someProperty
// B.someProperty

b.showProperty()