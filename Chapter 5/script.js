const codeContent = `let radius = 10;
const pi = 3.14;

// Math Operators: +, -, *, /, %, **

let result = pi * radius ** 2; // Area of circle
console.log(result);

// Order of operation - B I D M A S
let calc = 5 * (10 - 3) ** 2;
console.log(calc);

// Increment and Decrement
let likes = 10;
likes += 5;
likes *= 2;
console.log(likes);

// NaN - Not a Number
console.log(5 * 'hello'); // NaN

// Concatenation vs Subtraction
let message = 'The blog has ' + likes + ' likes';
console.log(message);

// Mixing string + number - subtraction
console.log('5' + 5 - 5 + '5'); // "505"


// Increment and Decrement Examples
let x = 5;

console.log("x++ =", x++);  // prints 5, then x becomes 6
console.log("++x =", ++x);  // x becomes 7, then prints 7

let y = 10;

console.log("y-- =", y--);  // prints 10, then y becomes 9
console.log("--y =", --y);  // y becomes 8, then prints 8
`;

