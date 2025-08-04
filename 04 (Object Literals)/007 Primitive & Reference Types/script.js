//?  Primitive Types (Stored by value)
//! Stored in  memory(stack).
// String
// Number
// Boolean
// null
// undefined
// Symbol
// BigInt

// ? Reference Types (Stored by reference)
//! Stored in heap memory.
// all types of objects
//object literals
// Array
// Function
// Date
// all other objects

//? Stack & Heap

// primitive values
// let scoreOne = 50;
// let scoreTwo = scoreOne;
// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`); // [50 50]
// scoreOne = 60;
// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`); //[60,50]

//reference values
userOne = { name: "ryu", age: 30 };
userTwo = userOne;
console.log(userOne, userTwo);



userOne.age = 25 ;
userTwo.name = "sajan" ;
userTwo = userOne;
console.log(userOne, userTwo);
