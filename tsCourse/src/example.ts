// Intersection Type
// 1
type Dog = {
  legs: number
  bark: () => void;
};

type Fish = {
  fins: number
  swim: () => void;
};

type UnionType = Dog & Fish

const dogFish: UnionType = {
    legs: 4,
    fins: 2,
    bark: () => 'Waw',
    swim: () => 'UpUpUp',
}

dogFish.bark

// 2
type Employee1 = {
  name: string;
  id: number;
};

type Manager = {
  employees: Employee1[];
};

type CEO = Employee1 & Manager;

const ceo: CEO = {
  name: 'Alice',
  id: 1,
  employees: [{name: 'Bob', id: 2,},]
};


ceo.employees

/*Literal Type*/
// Literal Type
// 1

type OneOrTwo = 1 | 2 

let value: OneOrTwo

value = 1
value = 2

console.log(value)


type YesOrNo = 'yes' | 'no'

let answer: YesOrNo
answer = 'yes'
answer = 'no'
console.log(answer)

// 2

type ButtonSize = 'small' | 'medium' | 'large';

function getButtonStyle(size: ButtonSize) {
    switch (size) {
        case 'small':
            return {fontSize: '10px', padding: '5px' }
        case 'medium':
            return { fontSize: '14px', padding: '10px' }
        case 'large':
            return {fontSize: '18px', padding: '15px' }
        default:
            return { fontSize: '14px', padding: '10px' }
    }
}

let myButtonStyle = getButtonStyle('medium'); 
console.log(myButtonStyle)


let cort: [number, string]

cort = [5, 'name']

cort.push(25)

console.log(cort)


enum DaysOfWeek {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

const isWeekend = (day: DaysOfWeek): boolean => {
  if (day === DaysOfWeek.Sunday || day === DaysOfWeek.Saturday) {
    return true
  }
  return false
}

const dayOfWeek = DaysOfWeek.Sunday
const dayOfWeek1 = DaysOfWeek.Monday

console.log(isWeekend(dayOfWeek))
console.log(isWeekend(dayOfWeek1))

type User3 = {
  id: number;
  name: string;
};

const usersName = (users: User3[]): string[] =>{
return users.map( user => user.name)
}

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
}]

const users = usersName(allUsers)
console.log(users)

type CallbackType = (num1: number, num2: number) => number

const calculat = (val1: number, val2: number, callback:CallbackType): void => {
    console.log('Result:', callback(val1, val2)) 
}

calculat(5, 2, (num1, num2) => num1 + num2)
calculat(5,2,(num1,num2)=>num1*num2)


// Type и Interface

type Animal = {
    legs: number,
    name: string,
}

interface Ianimal {
    legs: number,
    name: string,
}


type ComplexType1 = string | number;

function combine1(a: ComplexType1, b: ComplexType1) {
    if (typeof(a)==='string' || typeof(b)==='string')
    { return a.toString() + b.toString() }
    return a + b
}

type Admin2 = {
  name: string;
  privileges: string[];
};

type Employee2 = {
  name: string;
  startDate: Date;
};

type AdminOrEmployee = Admin2 | Employee2;

function printDetails(obj: AdminOrEmployee) {
    console.log(obj.name)

    if ('privileges' in obj) {
        console.log(obj.privileges)
    }
    if ('startDate' in obj) {
        console.log(obj.startDate)
    }
    
}

type Dog1 = {
  bark: () => void;
};

type Cat1 = {
  meow: () => void;
};

function isDog(animal: Dog1 | Cat1): animal is Dog1 {
  return 'bark' in animal;
}

function letAnimalTalk(animal: Dog1 | Cat1) {
  if (isDog(animal)) {
    animal.bark();
  } else {
    animal.meow();
  }
}

// ----

type Admin3 = {
  name: string;
  privileges: string[];
};

type Employee3 = {
  name: string;
  startDate: Date;
};

type Staff = Admin3 | Employee3;

function isEmployee(staff: Staff): staff is Employee3 {
  return (staff as Employee3).startDate !== undefined;
}

const staffMember: Staff = { name: 'Bob', startDate: new Date() };

if (isEmployee(staffMember)) {
  console.log(
    `Welcome on board, ${staffMember.name}! Your start date is ${staffMember.startDate}`
  );
}
