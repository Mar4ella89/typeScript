const button = document.querySelector("button")
const input1 = document.getElementById('num1') ! as HTMLInputElement
const input2 = document.getElementById('num2') ! as HTMLInputElement

function add (num1 :number, num2: number) {
    return num1 + num2
}

button!.addEventListener('click', function () {
    console.log(add(+input1.value, +input2.value))
})

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

// ANY

let some:any;

some = 10;
some = 'Some string';
some = {};

let num: number;

num = some;

// UNKNOWN

let some1:unknown;
some1 = 10;

let num1: number;

num1 = some1;