const button = document.querySelector("button")
const input1 = document.getElementById('num1') ! as HTMLInputElement
const input2 = document.getElementById('num2') ! as HTMLInputElement

function add (num1 :number, num2: number) {
    return num1 + num2
}

button!.addEventListener('click', function () {
    console.log(add(+input1.value, +input2.value))
})

// =========Lessons two============

// 1. Задайте правильные ts типы, для классических js;

let age: number
age = 34
let userName: string
userName = 'Marat'
let toggle: boolean
toggle = true
let empty: null
empty = null
let notInitialize: undefined;
notInitialize = undefined
let callbackFunc: (a: number) => number
callbackFunc = (a) => 100 + a
callbackFunc(10)

// let age = 50;
// let userName = 'Max';
// let toggle = true;
// let empty = null;
// let notInitialize = undefined;
// let callback = (a) => { return 100 + a };

// 2. Задавайте тип для переменной в которую можно сохранить любое значение.

let anything: any 
anything = -20
anything = true
anything = 'name'
anything = {}

// let anything = -20;
// anything = 'Text';
// anything = {};

// 3. Исправьте код с переменной unknown, чтобы в него можно было сохранить переменную с текстом.

let someVal:unknown;
someVal = 'Text';

let str: string;

if (typeof (someVal) === 'string') {
    str = someVal;
}

// let some:unknown;
// some = 'Text';
// let str: string;
// str = some;

// 4. Сделайте неизменяемый массив со строго описанными типами. Массив для примера.

let personInfo: [string, number]
// let person = ['Max', 21];

// 5. Опишите enum условие следующее, он должен отображать статус загрузки. Загружается (LOADING) и загружена (READY).

enum Status {LOADING, READY};

const activeStatus = {
  status: Status.LOADING,
}

if (activeStatus.status === Status.LOADING) {
  console.log('Status: ', Status.LOADING);
}
if (activeStatus.status === Status.READY) {
    console.log('Status: ', Status.READY)
}
// 6. Сделайте переменную, которая может принимать или строку или число.

let someValue: string | number

// 7. Сделайте переменную, которая может принимать только одно значение из двух 'enable' или 'disable'

let onlyOne: "enable" | "disable"

// 8. Укажите типы для следующих функций

function showMessage(message: string): void {
  console.log(message);
}

function calculate(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error('Error');
}

// function showMessage(message) {
//   console.log(message);
// }

// function calc(num1, num2) {
//   return num1 + num2;
// }

// function customError() {
//   throw new Error('Error');
// }

// 9. Создайте свой тип данных на основе имеющихся данных.

type PageInfo = {
  title: string
  likes: number
  accounts: string []
  status: 'open' | 'close',
  details ?: {
      createAt: Date,
    updateAt: Date,
  }
}

const page1: PageInfo = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  }
}

const page2: PageInfo = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}

// =========Lessons three============

// Давайте построим дом.
// Создайте абстрактный класс House в нем должны быть следующая логика:

// свойство door, она может быть либо закрыта, либо открыта.
// свойство key - объект класса Key.
// конструктор принимает аргумент класса Key и сохраняет его в свойство key.
// метод comeIn, который добавляет объект класса Person в свойство tenants и это срабатывает только если door открыта.
// абстрактный метод openDoor принимает аргумент класса Key

// Создайте класс MyHouse который реализует класс House:
// создаем метод openDoor, так как он принимает ключ, сверяем сохраненный ключ в свойстве key
// равен ли он ключу из аргумента, если да, открываем дверь.

// Создайте объект Key:
// есть только свойство signature
// во время создания объекта генерирует случайное число и сохраняет его в signature
// метод getSignature возвращает случайное число из signature

// Создайте объект Person:
// конструктор принимает ключ класса Key и сохраняет его в свойство key
// метод getKey возвращает key
// Сделайте так, чтобы жилец попал домой.

class Key {
  private signature: number

  constructor() {
    this.signature = Math.floor((Math.random() * 10 + 1))
  }

  getSignature(): number {
    return this.signature
  }
}

class Person {
  
  constructor (private key :Key) { }
  
  getKey():Key {
    return this.key
  }
}

abstract class House {
  protected door = false
  private tenants: Person[] = []
  constructor(protected key: Key) { }

  comeIn(person: Person): void {
    if (!this.door) {
      throw new Error('Door is close')
    }
    this.tenants.push(person)
    console.log('Person inside');
  }
  abstract openDoor (key:Key): boolean;
  }

class MyHouse extends House {
  openDoor(key:Key) {
    if (key.getSignature() !== this.key.getSignature()) {
      throw new Error('Key to another door');
    }
    return this.door = true
}
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);