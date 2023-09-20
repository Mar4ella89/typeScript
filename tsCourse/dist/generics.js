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
//# sourceMappingURL=generics.js.map