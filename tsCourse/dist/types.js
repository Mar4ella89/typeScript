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
// Generics
let arr = [];
arr = [1, 2, 3, 'World'];
//# sourceMappingURL=types.js.map