// ! Break and Continue

// const scores = [50, 25, 0, 30, 100, 20, 10];

// for (let i = 0; i < scores.length; i++) {
//   if (scores[i] === 0) {
//     continue; // zero vetiyesi pheri suru bata kam garxa yeslai ignore
//   }

//   console.log("Your score: ", scores[i]);

//   if (scores[i] === 100) {
//     console.log("Congraulations!, You got the top score.");
//     break; //ignores other value if condition is met
//   }
// }

// ! Switch Statements

// const grade = "A";

//it uses strict equality for check (===)

// switch (grade) {
//   case "A":
//     console.log(`You Got an ${grade}`);
//     break;
//   case "A-":
//     console.log(`You Got an ${grade}`);
//     break;
//   case "B":
//     console.log("You Got an B!");
//     break;
//   case "B-":
//     console.log("You Got an B-!");
//     break;
//   case "C":
//     console.log("You Got an C!");
//     break;
//   case "C-":
//     console.log("You Got an C-!");
//     break;
//   case "D":
//     console.log("You Got an D!");
//     break;
//   case "E":
//     console.log("You Got an E!");
//     break;
//   case "F":
//     console.log("You Got an F!");
//     break;

//   default:
//     console.log("Not a Valid Grade!");
// }

//using if statements
// if (grade === "A") {
// } else if (grade === "A-") {
// } else if (grade === "B") {
// } else if (grade === "B-") {
// } else if (grade === "C") {
// } else if (grade === "C") {
// } else if (grade === "C-") {
// } else if (grade === "D") {
// } else if (grade === "D-") {
// } else if (grade === "E") {
// } else if (grade === "F") {
// } else {
//   console.log("Study Hard. Try Next Time!");
// }

//! variables and block scope

// let age = 30;
// //let age = 50 //cannot do this as it is in same scope(block)

// if (true) {
//   let name = "Sajan";
//   let age = 40;
//   console.log("Inside 1st code block ", age, name);  //local scope [40]

//   if (true) {
//     let age = 50;
//     console.log("Inside 2nd code block: ", age); // [50]
//   }
// }

// console.log("Outside code block: ", age, name); // global scope

const age = 30;
//let age = 50 //cannot do this as it is in same scope(block)

if (true) {
  const name = "Sajan";
  const age = 40;
  console.log("Inside 1st code block ", age, name); //local scope [40 Sajan]

  if (true) {
    const age = 50;
    var test = "Hello";
    console.log("Inside 2nd code block: ", age); // [50]
  }
}

console.log("Outside code block: ", age, name, test); // global scope [30 test]
