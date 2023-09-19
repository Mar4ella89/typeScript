"use strict";
const dogFish = {
    legs: 4,
    fins: 2,
    bark: () => 'Waw',
    swim: () => 'UpUpUp',
};
dogFish.bark;
const ceo = {
    name: 'Alice',
    id: 1,
    employees: [{ name: 'Bob', id: 2, },]
};
ceo.employees;
let value;
value = 1;
value = 2;
console.log(value);
let answer;
answer = 'yes';
answer = 'no';
console.log(answer);
function getButtonStyle(size) {
    switch (size) {
        case 'small':
            return { fontSize: '10px', padding: '5px' };
        case 'medium':
            return { fontSize: '14px', padding: '10px' };
        case 'large':
            return { fontSize: '18px', padding: '15px' };
        default:
            return { fontSize: '14px', padding: '10px' };
    }
}
let myButtonStyle = getButtonStyle('medium');
console.log(myButtonStyle);
let cort;
cort = [5, 'name'];
cort.push(25);
console.log(cort);
var DaysOfWeek;
(function (DaysOfWeek) {
    DaysOfWeek[DaysOfWeek["Sunday"] = 0] = "Sunday";
    DaysOfWeek[DaysOfWeek["Monday"] = 1] = "Monday";
    DaysOfWeek[DaysOfWeek["Tuesday"] = 2] = "Tuesday";
    DaysOfWeek[DaysOfWeek["Wednesday"] = 3] = "Wednesday";
    DaysOfWeek[DaysOfWeek["Thursday"] = 4] = "Thursday";
    DaysOfWeek[DaysOfWeek["Friday"] = 5] = "Friday";
    DaysOfWeek[DaysOfWeek["Saturday"] = 6] = "Saturday";
})(DaysOfWeek || (DaysOfWeek = {}));
const isWeekend = (day) => {
    if (day === DaysOfWeek.Sunday || day === DaysOfWeek.Saturday) {
        return true;
    }
    return false;
};
const dayOfWeek = DaysOfWeek.Sunday;
const dayOfWeek1 = DaysOfWeek.Monday;
console.log(isWeekend(dayOfWeek));
console.log(isWeekend(dayOfWeek1));
const usersName = (users) => {
    return users.map(user => user.name);
};
const allUsers = [{
        id: 1,
        name: 'Marat',
    },
    {
        id: 2,
        name: 'Anna',
    },
    {
        id: 3,
        name: 'Rinat',
    },
    {
        id: 4,
        name: 'Diana',
    }];
const users = usersName(allUsers);
console.log(users);
const calculat = (val1, val2, callback) => {
    console.log('Result:', callback(val1, val2));
};
calculat(5, 2, (num1, num2) => num1 + num2);
calculat(5, 2, (num1, num2) => num1 * num2);
function combine1(a, b) {
    if (typeof (a) === 'string' || typeof (b) === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printDetails(obj) {
    console.log(obj.name);
    if ('privileges' in obj) {
        console.log(obj.privileges);
    }
    if ('startDate' in obj) {
        console.log(obj.startDate);
    }
}
function isDog(animal) {
    return 'bark' in animal;
}
function letAnimalTalk(animal) {
    if (isDog(animal)) {
        animal.bark();
    }
    else {
        animal.meow();
    }
}
function isEmployee(staff) {
    return staff.startDate !== undefined;
}
const staffMember = { name: 'Bob', startDate: new Date() };
if (isEmployee(staffMember)) {
    console.log(`Welcome on board, ${staffMember.name}! Your start date is ${staffMember.startDate}`);
}
let someValue4 = 'this is a string';
let strLength1 = someValue4.length;
// or
let strLength2 = someValue4.length;
// let strLength3: number = someValue4.length;
// ----
// const inputt = <HTMLInputElement>document.getElementById('inputEmail'); /* first variant */
const inputt = document.getElementById('inputEmail'); /* second variant */
const Userok = {
    name: 'Marat',
    age: '46',
    work: 'manager'
};
let usersN = {};
let userN = {
    id: '1',
    name: 'Marat',
    email: '123@gmail.com'
};
usersN[userN.id] = userN;
console.log(usersN);
console.log(userN);
function concatenate(strs, separator) {
    if (separator !== undefined) {
        return strs.join(separator);
    }
    return strs.join(' ');
}
const s = ['Hello', 'my', 'name', 'is', 'Marat'];
console.log(concatenate(s));
console.log(concatenate(s, ','));
//# sourceMappingURL=example.js.map