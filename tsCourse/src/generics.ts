let arrayG: Array<string | number> = []
arrayG = ['Marat', 34, '11']

// promise

const promiseG: Promise<string> = new Promise((resolve) => {
    setInterval(() => {
        resolve('Done!')
    }, 1000)
})

promiseG.then(data => {
    console.log(data)
})

// Generic function/method

function identity<T>(arg: T): T{
    console.log(arg)
    return arg
}

// Стрелочная ф-я
// const identity = <T>(arg: T): T => {
//     console.log(arg)
//     return arg
// } 

const res1 = identity('Marat')
const res2 = identity(34)

console.log(`${res1} is ${res2} year old`)

// 2 Array

function firstElement<T>(arr: T[]): T {
    console.log('First element of array:', arr[0])
    return arr[0]
}

const someArr = ['start',1,2,3,'4','5']

firstElement(someArr)

// 3 Object

function mergeObj<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = mergeObj({ name: 'Alisa' }, { age: '28' });

console.log(mergedObj.name, mergedObj.age)
