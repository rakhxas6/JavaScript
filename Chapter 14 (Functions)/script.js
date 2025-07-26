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

// // here Hoisting executes and takes function greet to the top so that the greet() would run smoothly

// //Hoisting does not work with Function Expressions
// //function expressions
// const speak = function () {
//   console.log("good day");
// };

//! Uncaught ReferenceError: Cannot access 'speak' before initialization

//! arguments and parameters

// const speak = function (name = "luigi", time = "night") {
//   // we are passing parametet to funtion
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

const calcArea = (radius) => {
  return 3.14 * radius ** 2;
};

// ! for one parameter we can use it without parenthesis()


const area = calcArea(5);
console.log(`Area of Circle having Radius(5cm) is ${area} cm2.`);