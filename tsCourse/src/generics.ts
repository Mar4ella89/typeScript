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

// 4

type Length1 = {
  length: number;
};

function getLength<T extends Length1>(str: T) {
  return str.length;
}

getLength('text');
getLength([1, 2, 3]);
getLength({ length: 5 });
console.log(getLength({ length: 5 }))

// 5

function arrayLogger<T extends Array<string>>(arr: T): void {
    arr.forEach((item)=>console.log(item))
}

arrayLogger(['a', 'b', 'c', 'd', 'e'])
// arrayLogger([1,2,3,4,5]) /* ERROR - Может быть только массив строк*/

// 6

// Разница между Array<string> и string[]

const jobs: string[] = ["IBM", "Microsoft"];
const jobs1: Array<string> = ["IBM", "Microsoft"];

// jobs1[2] = 0
// jobs[2] = 0


// 7 keyof

type PersonT = {
    name: string,
    age: number,
    location: string,
}

type keysPersonT = keyof PersonT

function getPersonInfo (person: PersonT, value: keysPersonT) {
    return (person[value])
}

const personA: PersonT = { name: 'Marat', age: 34, location: 'Ukraine' }

console.log(getPersonInfo(personA, 'age'), getPersonInfo(personA, 'name'), getPersonInfo(personA, 'location'))

// 8 keyof with generic

function getPersonInfoG <T extends object, U extends keyof T>(user: T, info: U) {
    return user[info]
}

console.log(getPersonInfoG(personA, 'name'))