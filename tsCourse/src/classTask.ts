class MyHouse {
    // private street: string
    private tenants: string[] = []
    
    constructor(private readonly type: string, private street: string) {
        
    }

    // constructor (n: string){
    // this.street = n
    // }

   public showAddress (this: MyHouse) {
        console.log(`Adress: ${this.street}`)
        return this.street
    }

    public showType(this: MyHouse) {
        console.log(`House Type: ${this.type}`)
    }

    public addTenant (tenant: string) {
        this.tenants.push(tenant)
    }
    
    
    public showTenants() {
        console.log(this.tenants)
    }
}

class StoneHouse extends MyHouse {
    private chargeOfTheHouse: string;
    constructor(street: string, generalTenant: string) {
        super('stone', street); // Вызов родительского конструктора
        // Добавляем владельца квартиры
    this.chargeOfTheHouse = generalTenant;
    this.addTenant(generalTenant);
    }

    public showTenants() {
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

interface IPerson {
  name: string;
  age: number;

  greet(phrase: string): void;
}

interface IPilot {
  flyMessage(): void;
}

class Pilot implements IPerson, IPilot {
  constructor (public name: string, public age: number) {
    if (this.age < 28) {
      throw new Error('Pilot is young');
    }
  }

  greet(phrase: string): void {
    console.log(phrase + ' ' + this.name );
  };

  flyMessage(): void {
    console.log('Самолет набрал высоту, всем приятного полета!');
  };
}

abstract class Plane {
  protected pilot?:IPilot;

  public sitInPlane (pilot: IPilot):void {
    this.pilot = pilot;
  }

  public abstract startEngine(): boolean;
}

class Boeing extends Plane {
  public startEngine (): boolean {
    if (!this.pilot) {
      throw new Error('No pilot in cabin');
    }
    // Разогреваем реактивные турбины
    console.log('Запуск турбин');

    this.pilot.flyMessage();
    return true;
  }
}

class Terrorist implements IPilot  {
  bluff(phrase: string): void {
    console.log(phrase);
  };

  flyMessage(): void {
    console.log('Наши требования 9 мильяйонов и литр пива');
  };
}

const boeing = new Boeing();
const pilot = new Pilot('Anthony', 32);

// Капитан приветствует пассажиров на трапе 
pilot.greet('Вас приветствует капитан корабля');

// Занимает место пилота
boeing.sitInPlane(pilot);

// Запускаем двигатели
boeing.startEngine();

const pilotTwo = new Terrorist();

// Капитан приветствует пассажиров на трапе 
pilotTwo.bluff('Мы захватить этот самолета!');

// Занимает место пилота
boeing.sitInPlane(pilotTwo);

// Запускаем двигатели
boeing.startEngine();

// =======================

// public - это как все свойства и методы в js можно вызывать где угодно (св-ва и методы доступны внешнему коду)
// private - нельзя вызвать извне экземпляра не наследуется (св-ва и методы не доступны внешнему коду)
// protected - нельзя вызвать извне экземпляра но наследуется (св-ва и методы доступны дочерним классам)

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