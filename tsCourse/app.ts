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
let callback: (a: number) => number
callback = (a) => 100 + a
callback(10)

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

let some:unknown;
some = 'Text';

let str: string;

if (typeof (some) === 'string') {
    str = some;
}

// let some:unknown;
// some = 'Text';
// let str: string;
// str = some;

// 4. Сделайте неизменяемый массив со строго описанными типами. Массив для примера.

let person: [string, number]
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