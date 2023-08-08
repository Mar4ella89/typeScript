// Lessons 2

let arrString: string[]
arrString = ['a', 'b', '3']

let arrNumber: number[]
arrNumber = [3, 5, 10]

let arrAny: any[]
arrAny = [1, 2, 3, '4', null, true, undefined]

let arrObject: { name: string }[]
arrObject = [{name: "Marat"}, {name: 'Anna'}]

let arrObj: { name: string }[];
arrObj = [{ name: "Marat" }, { name: 2 }, {age: '8'}, "first", 3]

const obj: {} = {};
let obj1: object = {};
obj1 = {name: "Marat", age: 34}
// ? Указывает, что поле не обязательное
const obj2: { name?: string } = {};
obj2.name = "Marat"
const obj3: {name: string, age: number} = {name: "Marat", age: 34};
const obj4 = {
    name: "Marat",
    age: 34,
}

const data: {
    id: number;
    price: number;
    permission: string[];
    details: {
        title: string;
        description?: string;
  }
} = {
  id: 1,
  price: 10.99,
  permission: ['read', 'write'],
  details: {
    title: 'New product',
    description: 'This is awesome product!'
  }
}

// =======Типы для переменных и аргументов=======

// ========ANY=======

let some:any;

some = 10;
some = 'Some string';
some = {};

let num: number;

num = some;

// ========UNKNOWN=========

let some1:unknown;
some1 = 10;

let num1: number;

num1 = some1;

let some2: unknown
some2 = 10

let num2: number

if (typeof some2 === "number") {
    num2 = some2
}

// TUPLE

let fixed: [string, number]
// Добавить можно только в определенной последовательности [string, number]
fixed = ['Marat', 34]

let fixed1: [string, number]

fixed1 = ['Marat', 34, 'a', 5]

// Есть нюанс, если мы добавим через push 
// то компилятор это пропустит, он не отслеживает реальное содержимое массива.
fixed1.push('Baykin')

// ========ENUM==========

enum Role {ADMIN, USER};

const person = {
  role: Role.ADMIN,
}

if (person.role === Role.ADMIN) {
  console.log('Role: ', Role.ADMIN);
}

// ============Union Type=========

let union: string | number
union = 5;
union = 'five'

function combine(param1: string | number, param2: string | number) {
  // return (param1 + param2)
  
    if (typeof param1 === 'number' && typeof param2 ==='number') {
      return param1 + param2
  }
    else {
     return param1.toString() + param2.toString()
  }
  
}

// =========Literal Type========

function greeting(action: 'hello' | 'bye') {
  if (action === 'hello') {
    console.log('Hello my friend!')
  }
  else {
    console.log('Bye my friend')
  }
}

greeting('hello')


// ===========Типы для методов и функций===========

// ======Return Type=====

function returnResult(num: number): number {
  return num
}

returnResult(5)