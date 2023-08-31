// Advanced Types

// Intersection Types

type Type = {
    name: string
    age: number
}

type Type1 = {
    name: string
    phone: number
    kids: string[]
}

type GeneralType = Type & Type1

const pers: Type & Type1 = {
    name: 'Marat',
    age: 34,
    phone: 3371335,  
    kids: ['Rinat','Diana']
}

const pers1: GeneralType = {
    name: 'Anna',
    age: 34,
    phone: 3371335,  
    kids: ['Rinat','Diana']
}

interface Int {
    name: string
    age: number
}

interface Int1 {
    name: string
    sayHi: string
}

type GeneralInterface = Int & Int1

// Если мы хотим именно сохранить в интерфейс то сокращение не работает, нужно так.

interface IGeneralInterface extends Int, Int1 { }

