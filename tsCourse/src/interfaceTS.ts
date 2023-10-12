// 1.
interface InewPerson {
    firstName: string;
    lastName: string;
    age?: number;
}

function greet(person: InewPerson) {
    console.log(`My name is ${person.lastName} ${person.firstName}`)
}

const newPersonI: InewPerson = {
    firstName: 'Marat',
    lastName: 'Baikin'
}

greet(newPersonI)

// 2. Интерфейсы объектов

interface IPerson1 {
    name: string;
    age: number;

    greet(phrase: string): void
}

let user1: IPerson1

user1 = {
    name: 'Marat',
    age: 34,

    greet(phrase) {
        console.log(`${phrase} ${this.name}`)
    }
}

user1.greet('Hi, i am')

// 3. Интерфейсы классов

interface IPerson2 {
    name: string;
    age: number;

    greet(phrase: string):void
}

interface IPilot2 {
    flyMessage(): void
}

class Pilot2 implements IPerson2, IPilot2 {
    constructor(public name: string, public age: number) {
        if (this.age <= 25) {
            throw 'You are really young!'
        }
    }
    greet(phrase: string): void {
            console.log(`${phrase} ${this.name}`)
    }
    
    flyMessage() {
        console.log('Plane is starting fly')
    }

    // Интерфейсы не ограничивают нас в расширении классов. Мы можем добавлять в класс новые методы и свойства.
    setAutopilot(): void {
    console.log('Autopilot enabled.');
  }
}

abstract class Plane2 {
    protected pilot?: IPilot2

    public sitInPlane(pilot: IPilot2): void{
        this.pilot = pilot;
    }

    public abstract startEngine(): boolean;
}

class Boeing2 extends Plane2 {
  public startEngine(): boolean {
    if (!this.pilot) {
      throw new Error('No pilot in cabin');
    }
    // Розігріваємо реактивні турбіни.
    console.log('Запуск турбин');

    this.pilot.flyMessage();
    return true;
  }
}

const boeing2 = new Boeing2();
const pilot2 = new Pilot2('Anthony', 32);

// Капітан вітає пасажирів на трапі.
pilot2.greet('Вас вітає капітан корабля');

// Займає місце пілота.
boeing2.sitInPlane(pilot2);

// Запускаємо двигуни.
boeing2.startEngine();

class Terrorist2 implements IPilot {
  bluff(phrase: string): void {
    console.log(phrase);
  }

  flyMessage(): void {
    console.log("Наші вимоги - 9 мільйонів.");
  }
}

const boeingT = new Boeing2();
const pilotT = new Terrorist2();

// Капітан вітає пасажирів на трапі.
pilotT.bluff('Ви захопили цей літак!');

// Займає місце пілота.
boeingT.sitInPlane(pilotT);

// Запускаємо двигуни.
boeingT.startEngine();

// 4. Readonly

interface IReadonly {
    readonly name: string
}

const someUser: IReadonly = {
    name: 'Marat'
}

console.log(someUser.name)
// someUser.name = 'Mik'  Свойство досупно только для чтения

// 5. Extending Interfaces

interface Iuser {
    name: string
    age: number

    greet(phrase: string):void
}

interface INewUser extends Iuser {
    newMessage(): void
}

const man: INewUser = {
    name: 'Marat',
    age: 34,

    greet(phrase) {
        console.log(`${phrase} ${this.name}`)
    },

    newMessage() {
        console.log(`I am ${this.age} years old`)
    }
}

// 6. Интерфейсы как тип функций

interface Ifunc {
    (num1: number, num2: number): number
}

let addFunc: Ifunc

addFunc = (num1: number, num2: number) => {
return num1 + num2
}