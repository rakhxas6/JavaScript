// store data in local storage

localStorage.setItem("name", "Sajan");
localStorage.setItem("age", 12);

// retrieve data from local storage

let name = localStorage.getItem("name");
let age = localStorage.getItem("age");

console.log(`${name} is ${age} years old!`);


// deleting data from local storage
// localStorage.removeItem("name"); [// single item]
localStorage.clear()

 
name = localStorage.getItem('name')
age = localStorage.getItem("age");

console.log(name,age)

