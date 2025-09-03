class User {
  constructor(username, email) {
    // set up properties
    this.username = username;
    this.email = email;
    this.score = 0;
  }
  login() {
      console.log(`${this.username} logged in`);
    return this;
      
  }
  logout() {
      console.log(`${this.username} logged out`);
    return this;
      
  }
  incScore() {
    this.score += 1;
    console.log(`${this.username} has a score of ${this.score}`);
    return this;
  }
}

const userOne = new User("mario", "mario@helloWorld.co");
const userTwo = new User("shaun", "shaun@helloWorld.co");

console.log(userOne, userTwo);

//? method chaining
// userOne.logout().login(); //wont work as the logout has no return
// userOne.login();
// userTwo.incScore();
// userTwo.logout();

//! method chaining works once we explicitly returning  object instances at the end of each methods, we can chain methods as

userTwo.login().incScore().logout().incScore().logout();
