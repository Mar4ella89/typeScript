"use strict";
const button = document.querySelector("button");
const input1 = document.getElementById('num1');
const input2 = document.getElementById('num2');
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener('click', function () {
    console.log(add(+input1.value, +input2.value));
});
// =========Lessons two============
// 1. Задайте правильные ts типы, для классических js;
let age;
age = 34;
let userName;
userName = 'Marat';
let toggle;
toggle = true;
let empty;
empty = null;
let notInitialize;
notInitialize = undefined;
let callback;
callback = (a) => 100 + a;
callback(10);
// let age = 50;
// let userName = 'Max';
// let toggle = true;
// let empty = null;
// let notInitialize = undefined;
// let callback = (a) => { return 100 + a };
// 2. Задавайте тип для переменной в которую можно сохранить любое значение.
let anything;
anything = -20;
anything = true;
anything = 'name';
anything = {};
// let anything = -20;
// anything = 'Text';
// anything = {};
// 3. Исправьте код с переменной unknown, чтобы в него можно было сохранить переменную с текстом.
let some;
some = 'Text';
let str;
if (typeof (some) === 'string') {
    str = some;
}
// let some:unknown;
// some = 'Text';
// let str: string;
// str = some;
// 4. Сделайте неизменяемый массив со строго описанными типами. Массив для примера.
let person;
// let person = ['Max', 21];
// 5. Опишите enum условие следующее, он должен отображать статус загрузки. Загружается (LOADING) и загружена (READY).
var Status;
(function (Status) {
    Status[Status["LOADING"] = 0] = "LOADING";
    Status[Status["READY"] = 1] = "READY";
})(Status || (Status = {}));
;
const activeStatus = {
    status: Status.LOADING,
};
if (activeStatus.status === Status.LOADING) {
    console.log('Status: ', Status.LOADING);
}
if (activeStatus.status === Status.READY) {
    console.log('Status: ', Status.READY);
}
// 6. Сделайте переменную, которая может принимать или строку или число.
let someValue;
// 7. Сделайте переменную, которая может принимать только одно значение из двух 'enable' или 'disable'
let onlyOne;
// 8. Укажите типы для следующих функций
function showMessage(message) {
    console.log(message);
}
function calculate(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error('Error');
}
const page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: new Date('2021-01-01'),
        updateAt: new Date('2021-05-01'),
    }
};
const page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
};
