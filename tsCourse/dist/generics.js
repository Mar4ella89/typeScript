"use strict";
let arrayG = [];
arrayG = ['Marat', 34, '11'];
// promise
const promiseG = new Promise((resolve) => {
    setInterval(() => {
        resolve('Done!');
    }, 1000);
});
promiseG.then(data => {
    console.log(data);
});
// Generic function/method
function identity(arg) {
    console.log(arg);
    return arg;
}
// Стрелочная ф-я
// const identity = <T>(arg: T): T => {
//     console.log(arg)
//     return arg
// } 
const res1 = identity('Marat');
const res2 = identity(34);
console.log(`${res1} is ${res2} year old`);
// 2 Array
function firstElement(arr) {
    console.log('First element of array:', arr[0]);
    return arr[0];
}
const someArr = ['start', 1, 2, 3, '4', '5'];
firstElement(someArr);
// 3 Object
function mergeObj(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = mergeObj({ name: 'Alisa' }, { age: '28' });
console.log(mergedObj.name, mergedObj.age);
function getLength(str) {
    return str.length;
}
getLength('text');
getLength([1, 2, 3]);
getLength({ length: 5 });
console.log(getLength({ length: 5 }));
// 5
function arrayLogger(arr) {
    arr.forEach((item) => console.log(item));
}
arrayLogger(['a', 'b', 'c', 'd', 'e']);
// arrayLogger([1,2,3,4,5]) /* ERROR - Может быть только массив строк*/
// 6
// Разница между Array<string> и string[]
const jobs = ["IBM", "Microsoft"];
const jobs1 = ["IBM", "Microsoft"];
function getPersonInfo(person, value) {
    return (person[value]);
}
const personA = { name: 'Marat', age: 34, location: 'Ukraine' };
console.log(getPersonInfo(personA, 'age'), getPersonInfo(personA, 'name'), getPersonInfo(personA, 'location'));
// 8 keyof with generic
function getPersonInfoG(user, info) {
    return user[info];
}
console.log(getPersonInfoG(personA, 'name'));
// 9 Generic Classes
class DataStorage {
    constructor() {
        this.data = [];
    }
    addData(value) {
        return this.data.push(value);
    }
    getData() {
        return [...this.data];
    }
}
const newDataString = new DataStorage();
console.log(newDataString.addData('Marat'));
newDataString.addData('Marat1');
newDataString.addData('Marat2');
// newData.addData(1) /* Будет ошибка, можно только тип string */
console.log(newDataString.getData());
const newDataNumber = new DataStorage();
console.log(newDataNumber.addData(1));
newDataNumber.addData(2);
newDataNumber.addData(3);
// newData.addData('Marat') /* Будет ошибка, можно только тип string */
console.log(newDataNumber.getData());
// 10 2 типа в классе
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
    getKey() {
        return this.key;
    }
    getValue() {
        return this.value;
    }
}
const pair1 = new KeyValuePair('name', 'Alice');
console.log((pair1.getKey())); // name
console.log((pair1.getValue())); // Alice
const pair2 = new KeyValuePair(1, true);
console.log(pair2.getKey()); // 1
console.log(pair2.getValue()); // true
//# sourceMappingURL=generics.js.map