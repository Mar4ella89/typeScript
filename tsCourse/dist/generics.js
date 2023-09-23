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
//# sourceMappingURL=generics.js.map