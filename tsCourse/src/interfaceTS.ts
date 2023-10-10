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