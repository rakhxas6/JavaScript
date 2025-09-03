// constructor function

function User(username, email) {
  this.username = username;
  this.email = email;
}


// adding constructor to the User Object
User.prototype.login = function () {
  console.log(`${this.username} has logged in`);
  return this;
};

User.prototype.logout = function () {
  console.log(`${this.username} has logged out`);
  return this;
};

// Create users
const userOne = new User("mario", "mario@helloWorld.co");
const userTwo = new User("shaun", "shaun@helloWorld.co");

// console.log(userOne, userTwo);
userOne.login();
userTwo.logout().login(); //it works when returning object instances
