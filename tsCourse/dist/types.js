"use strict";
// Advanced Types
var _a;
const pers = {
    name: 'Marat',
    age: 34,
    phone: 3371335,
    kids: ['Rinat', 'Diana']
};
const pers1 = {
    name: 'Anna',
    age: 34,
    phone: 3371335,
    kids: ['Rinat', 'Diana']
};
function combine(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function showFields(obj) {
    console.log(obj.name);
    if ('privileges' in obj) { /* in - проверяет, есть ли поле в объекте */
        console.log(obj.privileges);
    }
    if ('startDate' in obj) {
        console.log(obj.startDate);
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
    loadCargo(amount) {
        console.log('Loading cargo ...' + amount);
    }
}
const v1 = new Car;
const v2 = new Truck;
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) { /* instanceof позволяет нам проверить, к какому классу принадлежит объект */
        vehicle.loadCargo(1000);
    }
}
// Type Casting
const input = document.getElementById('email');
if (input) {
    input.value = '123@gmail.com';
} /* as HTMLInputElement указыаеи какой тип эл-та */
const newUser = {
    name: 'Marat',
    surname: 'Baikin',
    position: 'manager',
};
const newPerson = {
    name: 'Marat'
};
console.log((_a = newPerson === null || newPerson === void 0 ? void 0 : newPerson.addInfo) === null || _a === void 0 ? void 0 : _a.someInfo); /* ? - Проверяет есть ли конкретное поле в объекте */
// Nullish Coalescing
const userInput = '';
const store = userInput !== null && userInput !== void 0 ? userInput : 'DEFAULT'; /* ?? вернет DEFAULT только в том случае, если там реально null или undefined */
console.log(store);
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function checkUser(userName, type) {
    if (type === 'admin') {
        return {
            userName,
            type: 'admin'
        };
    }
    return {
        userName,
        type: 'user'
    };
}
const admin = checkUser('Marat', 'admin');
const user = checkUser('Anna', 'user');
// GENERICS
let arr = [];
arr = [1, 2, 3, 'World'];
// 1.promise example
const promise = new Promise((resolve) => {
    setInterval(() => resolve("Done"), 1000);
});
promise.then((data) => console.log(data));
// 2.Generic function/method
// function merge(obj1: object, obj2: object) {
//     return Object.assign(obj1,obj2)
// }
// const merged = merge({ name: 'Marat' }, { age: 34 })
// console.log(merged)
// // Если запросить merged.name, будет ошибка, поэтому используем Generic для функцииб т.к. она тоже является объектом
// function mergeNew<T, U>(obj1: T, obj2: U) {
//     return Object.assign(obj1, obj2)
// }
// const mergedNew = mergeNew({ name: 'Marat' }, { age: 34 })
// console.log(mergedNew.name)
// 3.Extends
// В пред.функции есть проблема, мы можем передавать не только объекты в merge,
// и это не хорошо, необходимо, что бы была ошибка, когда мы передадим не объект.
// Для этого мы можем расширять тим используя команду extends.
function mergeUpd(objA, objB) {
    return Object.assign(objA, objB);
}
const margedUpd = mergeUpd({ name: 'Marat' }, { age: 34 });
console.log(margedUpd.name);
function getLength1(str) {
    return str.length;
}
getLength1('text');
//# sourceMappingURL=types.js.map