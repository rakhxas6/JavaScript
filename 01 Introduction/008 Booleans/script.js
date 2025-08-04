// ✅ Boolean Values in JavaScript
console.log(true, false);                // true false
console.log(typeof true);                // boolean

// ✅ Non-boolean values in strings
console.log("true", "false");            // These are just strings

// ✅ Methods that return booleans
let email = "sudhankandel@gmail.com";
let names = ["sajan", "sujan", "anna"];

console.log(email.includes("@"));        // true
console.log(email.includes("!"));        // false
console.log(names.includes("anna"));     // true

// ✅ Boolean logic in comparisons
let age = 25;

console.log(age == 25);                  // true (loose)
console.log(age === "25");               // false (strict)
console.log(age != 25);                  // false
console.log(age > 20);                   // true
console.log(age < 20);                   // false
console.log(age >= 25);                  // true
console.log(age <= 25);                  // true

// ✅ Comparing strings (case-sensitive, Unicode-based)
let person = "sudhan";

console.log(person == "sudhan");         // true
console.log(person == "Sudhan");         // false (case matters)
console.log(person > "crystal");         // true
console.log(person > "Sudhan");          // true
console.log(person > "Crystal");         // true

// ✅ Loose vs Strict Comparison

// Loose comparison (==): Allows type coercion
console.log(25 == "25");                 // true
console.log(0 == false);                 // true
console.log(null == undefined);          // true

// Strict comparison (===): Compares value & type
console.log(25 === "25");                // false
console.log(0 === false);                // false
console.log(null === undefined);         // false

// Best Practice: Use strict comparison to avoid bugs

