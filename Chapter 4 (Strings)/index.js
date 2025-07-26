// Strings
console.log("Hello, world!");

// Email example
let email = "sudhankandel18@gmail.com";
console.log(email);

// String concatenation
let firstName = "Sudhan";
let lastName = "Kandel";
let fullName = firstName + " " + lastName;
console.log(fullName);

// Getting characters
console.log(fullName[0]);

// String length
console.log(fullName.length);

// Methods (non-mutating)
console.log(fullName.toUpperCase()); // SUDHAN KANDEL
let lower = fullName.toLowerCase();
console.log(lower);

// indexOf, lastIndexOf
console.log(email.indexOf("@")); // 13
console.log(email.lastIndexOf("a")); // 15

// slice, substring
console.log(email.slice(3, 10)); // hankand
console.log(email.substring(4, 10)); // ankand

// replace
console.log(email.replace("n", "x")); // sudhaxkandel18@gmail.com

// trim
let messy = "   code    ";
console.log(messy.trim()); // "code"

// includes, startsWith, endsWith
console.log(email.includes("@")); // true
console.log(email.startsWith("s")); // true
console.log(email.endsWith(".com")); // true

// charAt and charCodeAt
console.log(fullName.charAt(2)); // d
console.log("A".charCodeAt(0)); // 65

// split
let tags = "js,html,css";
console.log(tags.split(",")); // ["js", "html", "css"]

// function is the snippet of code which performs some kind of specific task
// Method is the just a function associated with a particular object or datatype (do not alter the original value[touppercase,tolowercase])

