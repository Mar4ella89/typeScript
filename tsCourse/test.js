// Lessons 2
var arrString;
arrString = ['a', 'b', '3'];
var arrNumber;
arrNumber = [3, 5, 10];
var arrAny;
arrAny = [1, 2, 3, '4', null, true, undefined];
var arrObject;
arrObject = [{ name: "Marat" }, { name: 'Anna' }];
var arrObj;
arrObj = [{ name: "Marat" }, { name: 2 }, { age: '8' }, "first", 3];
var obj = {};
var obj1 = {};
obj1 = { name: "Marat", age: 34 };
// ? Указывает, что поле не обязательное
var obj2 = {};
obj2.name = "Marat";
var obj3 = { name: "Marat", age: 34 };
var obj4 = {
    name: "Marat",
    age: 34,
};
var data = {
    id: 1,
    price: 10.99,
    permission: ['read', 'write'],
    details: {
        title: 'New product',
        description: 'This is awesome product!'
    }
};
// =======Типы для переменных и аргументов=======
// ========ANY=======
var some;
some = 10;
some = 'Some string';
some = {};
var num;
num = some;
// ========UNKNOWN=========
var some1;
some1 = 10;
var num1;
num1 = some1;
var some2;
some2 = 10;
var num2;
if (typeof some2 === "number") {
    num2 = some2;
}
// TUPLE
var fixed;
// Добавить можно только в определенной последовательности [string, number]
fixed = ['Marat', 34];
var fixed1;
fixed1 = ['Marat', 34, 'a', 5];
// Есть нюанс, если мы добавим через push 
// то компилятор это пропустит, он не отслеживает реальное содержимое массива.
fixed1.push('Baykin');
// ========ENUM==========
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
})(Role || (Role = {}));
;
var person = {
    role: Role.ADMIN,
};
if (person.role === Role.ADMIN) {
    console.log('Role: ', Role.ADMIN);
}
// ============Union Type=========
var union;
union = 5;
union = 'five';
function combine(param1, param2) {
    // return (param1 + param2)
    if (typeof param1 === 'number' && typeof param2 === 'number') {
        return param1 + param2;
    }
    else {
        return param1.toString() + param2.toString();
    }
}
// =========Literal Type========
function greeting(action) {
    if (action === 'hello') {
        console.log('Hello my friend!');
    }
    else {
        console.log('Bye my friend');
    }
}
greeting('hello');
// ===========Типы для методов и функций===========
// ======Return Type=====
// Мы можем указывать тип который вернется из функции.
function returnResult(num) {
    return num;
}
returnResult(5);
// ======Void======
// Это когда функция ничего не возвращает
function print() {
    console.log('Hi, my name is Marat');
    // return 'Hi, my name is Marat'
}
// ========Never=======
// Это когда функция никогда не заканчивается и ничего не возвращает.
// Например, listen в express так как подключение к серверу постоянное, или если мы возвращаем throw,
// так как это ошибка, можно сказать, что функция никогда не заканчивается.
function generateError(message, status) {
    throw { message: message, status: status };
}
generateError('An error', 500);
// ========Function Type======
// Мы можем описать функцию как тип, это особенно актуально
// для callback или когда мы просто пробрасываем функцию.
var callback;
callback = function (num) {
    console.log(num);
};
// Калькулятор
function calc(param1, param2, callback) {
    console.log('Result:', callback(param1, param2));
}
calc(1, 2, function (num1, num2) { return num1 + num2; });
calc(10, 5, function (num1, num2) { return num1 - num2; });
