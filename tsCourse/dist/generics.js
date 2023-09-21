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
// 2
function firstElement(arr) {
    console.log('First element of array:', arr[0]);
    return arr[0];
}
const someArr = ['start', 1, 2, 3, '4', '5'];
firstElement(someArr);
//# sourceMappingURL=generics.js.map