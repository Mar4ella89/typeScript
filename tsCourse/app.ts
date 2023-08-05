const button = document.querySelector("button")
const input1 = document.getElementById('num1') ! as HTMLInputElement
const input2 = document.getElementById('num2') ! as HTMLInputElement

function add (num1 :number, num2: number) {
    return num1 + num2
}

button!.addEventListener('click', function () {
    console.log(add(+input1.value, +input2.value))
})

let arrObj: { name: string }[];
arrObj = [{ name: "Marat" }, { name: 2 }, "first", 3]

const obj: {} = {};
const obj1: object = {};
// ? Указывает, что поле не обязательное
const obj2: { name?: string } = {};
obj2.name = "Marat"
const obj3: {name: string, age: number} = {name: "Marat", age: 34};
const obj4 = {
    name: "Marat",
    age: 34,
}