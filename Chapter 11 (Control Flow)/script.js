// ---------- FOR Loop ----------
const names = ["shaun", "mario", "suman"];

for (let i = 0; i < names.length; i++) {
  let html = `<div>${names[i]} - for loop</div>`;
  console.log(html);
}

// ---------- forEach Loop ----------
names.forEach(function (name, index) {
  let html = `<div>${name} - forEach loop at index ${index}</div>`;
  console.log(html);
});

// ---------- for...of Loop ----------
for (const name of names) {
  let html = `<div>${name} - for...of loop</div>`;
  console.log(html);
}

// ---------- for...in Loop (for objects) ----------
const person = { fname: "John", lname: "Doe", age: 25 };

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// ---------- while Loop ----------
let x = 0;
let whileText = "";

while (x < 5) {
  whileText += `Number is ${x} `;
  x++;
}
console.log("While loop output:", whileText);

// ---------- do...while Loop ----------
let y = 0;
let doWhileText = "";

do {
  doWhileText += `Number is ${y} `;
  y++;
} while (y < 5);

console.log("Do While loop output:", doWhileText);
