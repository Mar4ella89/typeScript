interface InewPerson {
    firstName: string;
    lastName: string;
    age?: number;
}

function greet(person: InewPerson) {
    console.log(`My name is ${person.lastName} ${person.firstName}`)
}

const newPersonI: InewPerson = {
    firstName: 'Marat',
    lastName: 'Baikin'
}

greet(newPersonI)