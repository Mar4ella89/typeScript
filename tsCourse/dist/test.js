"use strict";
// Lessons 2
let arrString;
arrString = ['a', 'b', '3'];
let arrNumber;
arrNumber = [3, 5, 10];
let arrAny;
arrAny = [1, 2, 3, '4', null, true, undefined];
let arrObject;
arrObject = [{ name: "Marat" }, { name: 'Anna' }];
let arrObj;
arrObj = [{ name: "Marat" }];
// arrObj = [{ name: "Marat" }, { name: 2 }, {age: '8'}, "first", 3]
const obj = {};
let obj1 = {};
obj1 = { name: "Marat", age: 34 };
// ? Указывает, что поле не обязательное
const obj2 = {};
obj2.name = "Marat";
const obj3 = { name: "Marat", age: 34 };
const obj4 = {
    name: "Marat",
    age: 34,
};
const data = {
    id: 1,
    price: 10.99,
    permission: ['read', 'write'],
    details: {
        title: 'New product',
        description: 'This is awesome product!'
    }
};
// =======Типы для переменных и аргументов=======
// ========ANY=======
let some;
some = 10;
some = 'Some string';
some = {};
let num;
num = some;
// ========UNKNOWN=========
let some1;
some1 = 10;
let num1;
// num1 = some1;
let some2;
some2 = 10;
let num2;
if (typeof some2 === "number") {
    num2 = some2;
}
// TUPLE
let fixed;
// Добавить можно только в определенной последовательности [string, number]
fixed = ['Marat', 34];
let fixed1;
fixed1 = ['Marat', 5];
// Есть нюанс, если мы добавим через push 
// то компилятор это пропустит, он не отслеживает реальное содержимое массива.
fixed1.push('Baykin');
// ========ENUM==========
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
})(Role || (Role = {}));
;
const person = {
    role: Role.ADMIN,
};
if (person.role === Role.ADMIN) {
    console.log('Role: ', Role.ADMIN);
}
// ============Union Type=========
let union;
union = 5;
union = 'five';
function combine(param1, param2) {
    // return (param1 + param2)
    if (typeof param1 === 'number' && typeof param2 === 'number') {
        return param1 + param2;
    }
    else {
        return param1.toString() + param2.toString();
    }
}
// =========Literal Type========
function greeting(action) {
    if (action === 'hello') {
        console.log('Hello my friend!');
    }
    else {
        console.log('Bye my friend');
    }
}
greeting('hello');
// ------
const fruits = [];
const workWithFruitArr = (arr, fruit, action) => {
    if (action === "add") {
        return arr.push(fruit);
    }
    else {
        const index = arr.indexOf(fruit);
        return arr.splice(index, 1);
    }
};
workWithFruitArr(fruits, 'banana', 'add');
workWithFruitArr(fruits, 'orange', 'add');
workWithFruitArr(fruits, 'mango', 'add');
workWithFruitArr(fruits, 'bear', 'add');
workWithFruitArr(fruits, 'bear', 'delete');
console.log(fruits);
// ===========Типы для методов и функций===========
// ======Return Type=====
// Мы можем указывать тип который вернется из функции.
function returnResult(num) {
    return num;
}
returnResult(5);
// ======Void======
// Это когда функция ничего не возвращает
function printText() {
    console.log('Hi, my name is Marat');
    // return 'Hi, my name is Marat'
}
const printTextArrow = () => {
    console.log('Hi, my surname is Baikin');
};
// ========Function Type======
// Мы можем описать функцию как тип, это особенно актуально
// для callback или когда мы просто пробрасываем функцию.
// let callback: (num: number) => void
// callback = (num) => {
//   console.log(num)
// }
// callback(34)
// Калькулятор
function calc(param1, param2, callback) {
    console.log('Result:', callback(param1, param2));
}
calc(1, 2, (num1, num2) => num1 + num2);
calc(10, 5, (num1, num2) => num1 - num2);
const data1 = {
    id: 1,
    price: 10.99,
    permission: ['read', 'write'],
    details: {
        title: 'New product',
        description: 'This is awesome product!'
    }
};
// Мы также можем экспортировать тип данных из файла.
// export type {
//   DatabaseDate,
// };
// ========Опциональные параметры и свойства==========
// Используя оператор ? мы можем указать, что это опциональный параметр или свойство.
function option(num) {
    console.log(num);
}
option(5);
option();
const persona = {
    name: "Marat"
};
persona.sex = 'man';
// ========Never=======
// Это когда функция никогда не заканчивается и ничего не возвращает.
// Например, listen в express так как подключение к серверу постоянное, или если мы возвращаем throw,
// так как это ошибка, можно сказать, что функция никогда не заканчивается.
function generateError(message, status) {
    throw { message, status };
}
generateError('An error', 500);
//# sourceMappingURL=test.js.map