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
//    Сделайте переменную, которая может принимать или строку или число.
//    Сделайте переменную, которая может принимать только одно значение из двух 'enable' или 'disable'



// 6. Укажите типы для следующих функций