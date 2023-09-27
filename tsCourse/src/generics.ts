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

// --

function getPromise ():Promise<[string, number]> {
  return new Promise((resolve) => {
    resolve(['Text', 50]);
  });
}

getPromise()
.then((data) => {
  console.log(data);
});

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

// 9 Generic Classes

class DataStorage<T> {
    private data: T[] = []
    
    addData(value: T) {
        return this.data.push(value)
    }

    getData() {
        return [...this.data]
    }
}

const newDataString = new DataStorage <string>()

console.log(newDataString.addData('Marat'))
newDataString.addData('Marat1')
newDataString.addData('Marat2')
// newData.addData(1) /* Будет ошибка, можно только тип string */

console.log(newDataString.getData())

const newDataNumber = new DataStorage <number>()

console.log(newDataNumber.addData(1))
newDataNumber.addData(2)
newDataNumber.addData(3)
// newData.addData('Marat') /* Будет ошибка, можно только тип string */

console.log(newDataNumber.getData())

// 10 2 типа в классе

class KeyValuePair <Tkey, Tvalue>{
    constructor(private key: Tkey, private value: Tvalue) { }
    
    getKey() {
        return this.key
     }
    
    getValue() {
        return this.value
    }
}

const pair1 = new KeyValuePair('name', 'Alice');
console.log((pair1.getKey())) // name
console.log((pair1.getValue())) // Alice

const pair2 = new KeyValuePair(1, true);
console.log(pair2.getKey()); // 1
console.log(pair2.getValue()); // true

// *Utility Types
// Partial<T>

type UserF = {
  id: number;
  name: string;
  email: string;
  registered: boolean;
};

function createUser(data: Partial<UserF>): UserF {
  // Деякі значення за замовчуванням:
  const defaultUser: UserF = {
    id: Date.now(),
    name: '',
    email: '',
    registered: false,
  };

  // З'єднуємо дані користувача та значення за замовчуванням
  return { ...defaultUser, ...data };
}

const newUserF = createUser({ name: 'Alice', email: 'alice@example.com' });

console.log(newUserF);

// *Readonly<T>

type UserR = {
    id: number,
    name: string,
    email: string,
    age: number,
}

let userMain = {
    id: 1,
    name: 'Marat',
    email: '123@gmail.com',
    age: 34,
}
    
userMain.name = 'Marat Baikin'
console.log(userMain)

let userMainReadOnly: Readonly <UserR> = {
    id: 2,
    name: 'Marat',
    email: '123@gmail.com',
    age: 34,
}

// userMainReadOnly.name = 'Marat Baikin'  // Будет ошибка, т.к. значения можно только считывать

// readonly в кортежах

const arrC: Readonly<string[]> = ['One', 'Two', 'Three']

// arrC.push('Four')  // Будет ошибка, т.к. значения можно только считывать

// *Pick<T, K>
// Pick — це утилітний тип у TypeScript, що дозволяє вам обрати набір властивостей з існуючого типу 
// і створити новий тип на основі цих властивостей.

type UserT = {
    name: string,
    email: string,
    age: number,
}

type UserK = Pick<UserT, 'name' | 'email'>

let userK: UserK = {
    name: 'Marat',
    email: '123@gmail.com',
    // age: 34, / Будет ошибка, т.к. значениями могут быть только name и email
}

// Pick<T, K> в работе с API

type BaseEmployee = {
  id: number;
  firstName: string;
  lastName: string;
  position: string;
  department: string;
  startDate: Date;
  // ... many another fields
};

type BaseProject = {
  id: number;
  name: string;
  budget: number;
  deadline: Date;
  // ... many another fields
};

type Assignment = {
    employee: Pick <BaseEmployee, 'id' | 'firstName' | 'lastName' | 'position'>
    projects: Pick<BaseProject, 'id' | 'name'>[]
    shouldNotifyEmployee?: boolean
}

const assignment: Assignment = {
    employee: {
        id: 1,
        firstName: 'Marat',
        lastName: 'Baikin',
        position: 'React Developer',
    },
    projects: [{id: 1, name: 'web shop'},{id: 2, name: 'web shop new'}]
}


// *Record<K, T>
// Record<K, T> — це утилітний тип, що дозволяє створювати типи із заздалегідь відомими властивостями.
// Це дуже корисно, коли вам потрібно створити об'єкт із певними ключами та значеннями,
// типи яких ви заздалегідь знаєте.

type Weekdays = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri';
type Weekend = 'Sat' | 'Sun';

type Day = Weekdays | Weekend

type DayTranslations = Record<Day, string>;

const translations: DayTranslations = {
     Mon: 'Понеділок',
     Tue: 'Вівторок',
     Wed: 'Середа',
     Thu: 'Четверг',
    Fri: "П'ятниця",
    Sat: 'Субота',
    Sun: 'Неділя',
}

// enum

enum UserRoles {
  admin = 'admin',
  manager = 'manager',
  employee = 'employee',
}

type UserRolesStatuses = Record<UserRoles, boolean>;

const userRoleStatuses: UserRolesStatuses = {
  [UserRoles.admin]: true,
  [UserRoles.manager]: false,
  [UserRoles.employee]: true,
};

// --

type InitialFormType = {
  name: string;
  email: string;
  password: string;
};

type Form = InitialFormType & {
  errors: Partial<Record<keyof InitialFormType, [string]>>;
};

const forma: Form = {
    name: 'Marat',
    email: '123@gmail.com',
    password: '123456789',
    errors: {
        name: ['This name is already in use'],
        email: ['Enter your email'],
        password: ['Enter your password'],
    }
}

// *Omit<T, K>
// Это Pick, но напротив. Позволяет создать новый тип на основе типа T путём исключения
// набора свойств, указанных в K.

type PersonO = {
  name: string;
  age: number;
  location: string;
};

type OmitPerson = Omit<PersonO, 'age' | 'location'>

const newPersonomit: OmitPerson = {
    name: 'Marat',
}

// *ReturnType<T>

function greetingR() {
    return 'Hello my friend'
}

type Greeting = ReturnType<typeof greetingR>

function multiplyR(a: number, b: number) {
  return a * b;
}

type Multiply = ReturnType <typeof multiplyR>

// *Parameters<T>
// Извлекает типы параметров типа функции T. Она возвращает кортеж,
// содержащий типы всех параметров функции T в том порядке, в котором они объявлены

type UserInfo =  (name: string, age: number, vip: boolean)  => void

type newUserInfo = Parameters <UserInfo>
// Результат: [string, number, boolean]

// *NonNullable<T>

type SomeType = string | null | undefined | number

type NonNullableType = NonNullable<SomeType>
// Результат: string | number


