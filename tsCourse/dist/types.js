"use strict";
// Advanced Types
const pers = {
    name: 'Marat',
    age: 34,
    phone: 3371335,
    kids: ['Rinat', 'Diana']
};
const pers1 = {
    name: 'Anna',
    age: 34,
    phone: 3371335,
    kids: ['Rinat', 'Diana']
};
function combine(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
// смешанный тип из объектов
//# sourceMappingURL=types.js.map