class User {
  constructor(username, email) {
    // set up properties
    this.username = username;
    this.email = email;
  }

  login() {
    console.log(`${this.username} has logged in sucessfully`);
  }
  logout() {
    console.log(`${this.username} has logged out sucessfully`);
  }
}

const userOne = new User("Mahadev", "harharmahadev@world.om");
const userTwo = new User("Shakti", "shakti@.world.om");

console.log(userOne, userTwo);
userOne.login()
userTwo.logout()

//! the 'new' keyword
//? 1 - it creates a new empty object {}
//? 2 - Ir binds the value of 'this' to the new empty object
//? 3 - it tails the constructor function to 'build' the object
