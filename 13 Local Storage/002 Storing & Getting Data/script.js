// store data in local storage

localStorage.setItem("name", "Mario");
localStorage.setItem("age", 50);

// retrieve data from local storage

let name = localStorage.getItem('name')
let age = localStorage.getItem('age')

console.log(`${name} is ${age} years old!`)

// updating data

localStorage.setItem('name', "Sajan")
localStorage.age = 12


name = localStorage.getItem('name')
age = localStorage.getItem('age')

console.log(`${name} is ${age} years old!`)

// clear local storage
localStorage.clear('name')