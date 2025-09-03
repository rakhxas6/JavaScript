// constructor functions

// it acts as a class
function User(username, email) {
  this.username = username;
  this.email = email;

  this.login = function () {
    console.log(`${this.username} has logged in`)
  }
}

// class User {
//   constructor(username, email) {
//     // set up properties
//     this.username = username;
//     this.email = email;
//   }
// }

// Create users
const userOne = new User("mario", "mario@helloWorld.co");
const userTwo = new User("shaun", "shaun@helloWorld.co");

userOne.login()
console.log(userOne,userTwo)

// the new keyword
// 1 - it creates a new entry object {}
// 2 - it binds the value of 'this' to the new empty object
// 3 - it calls the constructor function to 'build the object
