// Advanced Types

// Intersection Types

type Type = {
    name: string
    age: number
}

type Type1 = {
    name: string
    phone: number
    kids: string[]
}

type GeneralType = Type & Type1

const pers: Type & Type1 = {
    name: 'Marat',
    age: 34,
    phone: 3371335,  
    kids: ['Rinat','Diana']
}

const pers1: GeneralType = {
    name: 'Anna',
    age: 34,
    phone: 3371335,  
    kids: ['Rinat','Diana']
}

interface Int {
    name: string
    age: number
}

interface Int1 {
    name: string
    sayHi: string
}

type GeneralInterface = Int & Int1

// Если мы хотим именно сохранить в интерфейс то сокращение не работает, нужно так.

interface IGeneralInterface extends Int, Int1 { }


// Type Guards

type ComplexType = string | number

function combine(a: ComplexType, b: ComplexType) {
    if (typeof a === 'string' || typeof b === 'string') {
       return a.toString() + b.toString()
    }
    return a + b
}

// смешанный тип из объектов

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type UnknownObject = Admin | Employee

function showFields(obj: UnknownObject) {
    console.log(obj.name)
    if ('privileges' in obj) {    /* in - проверяет, есть ли поле в объекте */
       console.log(obj.privileges)
    }
    if ('startDate' in obj) {
        console.log (obj.startDate)
    }
}

// смешанный тип из классов

class Car {
  drive() {
    console.log('Driving...');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck...');
  }

  loadCargo(amount: number) {
    console.log('Loading cargo ...' + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car
const v2 = new Truck

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {   /* instanceof позволяет нам проверить, к какому классу принадлежит объект */
        vehicle.loadCargo(1000)
    }
}

// Type Casting

const input = document.getElementById('email') 

    if (input){
(input as HTMLInputElement).value = '123@gmail.com'}  /* as HTMLInputElement указыаеи какой тип эл-та */


// Index Properties
// [x: string]: string указываем какого типа само поле и какой тип будет храниться

type User = {
    name: string
    [x: string]: string
}  

const newUser: User = {
    name: 'Marat',
    surname: 'Baikin',
    position: 'manager',
}

// Optional Chaining

interface Persona {
    name: string
    addInfo?: {              
         someInfo: string
    }
}

const newPerson: Persona = {
    name: 'Marat'

}

console.log(newPerson?.addInfo?.someInfo) /* ? - Проверяет есть ли конкретное поле в объекте */


// Nullish Coalescing

const userInput = '';

const store = userInput ?? 'DEFAULT';  /* ?? вернет DEFAULT только в том случае, если там реально null или undefined */

console.log(store);

// Перегрузка операторов (function overloads)
// 1
type Combinable = string | number

function add(a: string, b: string): string
function add(a: number, b: number): number
function add(a: string, b: number): string
function add(a: number, b: string): string

function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString()
    }
    return a + b
}

// 2

type AdminType = {
    userName: string
    type: 'admin'
}

type UserType = {
    userName: string
    type: 'user'
}

function checkUser(userName: string, type: 'admin'): AdminType
function checkUser(userName: string, type: 'user'): UserType

function checkUser(userName: string, type: 'admin' | 'user') {
    if (type === 'admin') {
        return {
            userName,
            type: 'admin'
        }
    }
    return {
        userName,
        type: 'user'
    }
}

const admin = checkUser( 'Marat',  'admin' )
const user = checkUser ('Anna',  'user')


// Generics