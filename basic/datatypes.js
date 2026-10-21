// number 
let age = 24;
console.log(typeof age); // number;
//string
let fullName = "Tony Stark";
console.log(typeof fullName); // string;
//boolean
let hasCar = true;
console.log(typeof hasCar); // boolean
// when value is not assigned to a variable, it is undefined
let x;
console.log(typeof x); //undefined
//null(absence of value)
let y = null;
console.log(typeof y); //object
//bigInt is used to store large innteger values
let j = BigInt(232324523232);
console.log(typeof j); // bigint

// all the above are primitive data types.
// non-primitive data types are objects, arrays, functions, etc.
const student ={
    fullName: "Harry Potter",
    age: 15, 
    isMuggle: false
};
console.log(student);
console.log(typeof student); // object