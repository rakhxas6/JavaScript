// greet("Sajan");
// greet("Sajan");
// greet("Sajan");

// speak();
// speak();
// speak();

//! functions declaration (Hoisting Possible)
// function greet(name) {
//   console.log(`Hello ${name}`);
// }

// here Hoisting executes and takes function greet to the top so that the greet() would run smoothly

//Hoisting does not work with Function Expressions
//function expressions
// const speak = function () {
//   console.log("good day");
// };

//! Uncaught ReferenceError: Cannot access 'speak' before initialization

//! arguments and parameters

// const speak = function (name = "luigi", time = "night") {
// we are passing parametet to funtion
//   console.log(`Good ${time} ${name}!`);
// };

// speak("Mario", "Morning"); //arguments

// arg and paramenter should be passed in same order

//returning values

// const calcArea = function (radius) {
//   return 3.14 * radius ** 2;
// };

// const area = calcArea(5);
// console.log(`Area of Circle having Radius(5cm) is ${area} cm2.`);

// const calcVol = function (area, r) {
//   return ((area * 4) / 3) * r;
// };
// const volume = calcVol(area, 5);
// console.log(`Volume of Sphere having Radius(5cm) is ${volume.toFixed(2)} cm3.`);

// arrow functions

// const calcArea = (radius) => {
//   return 3.14 * radius ** 2;
// };

// ! for one parameter we can use it without parenthesis()
// const calcArea = radius => 3.14 * radius ** 2;

// const area = calcArea(5);
// console.log(`Area of Circle having Radius(5cm) is ${area} cm2.`);

//! changing function expressions to arrow fuctions

// const greet = function () {
//   return 'Hello World!'
// }

// const greet = () => "Hello,World!";
// const result = greet();
// console.log(result);

// const bill = function (products, tax) {
//   let total = 0;
//   for (let i = 0; i < products.length; i++) {
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// };

//!arrow function
// const bill = (products, tax) => {
//   let total = 0;
//   for (let i = 0; i < products.length; i++) {
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// };

// console.log(bill([10, 15, 30], 0.13));

// ! Functions vs Methods

// const name = "Shaun";

//functions

// const greet = () => `Hello ${name}!`;

// let resultOne = greet(name);
// console.log(resultOne);

//methods

// const upperCase = name.toUpperCase();
// console.log(upperCase);

//! Callbacks & forEach

//!A callback function is a function passed as an argument to another function and executed later, often after some operation is completed.

// const myFunc = (callbackFunc) => {
//   let value = 50;
//   callbackFunc(value);
// };

// myFunc(value=> console.log(value));

// let people = ["Mario", "Luigi", "Ryu", "Shaun", "Chun-li"];

// const logPerson = (person, index) => {
//   console.log(`Hello ${person}, you are at ${index} index!`);
// };

// people.forEach(logPerson);

// ! get a reference to the 'ul'

const ul = document.querySelector(".people");
let people = ["Mario", "Luigi", "Ryu", "Shaun", "Chun-li"];

let html = "";

people.forEach(
  (person) =>
    //create html template
    (html += `<li style="color:purple">${person}</li>`)
);

console.log(html);
ul.innerHTML = html;
