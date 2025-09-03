class User {
  constructor(username, email) {
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

class Admin extends User {
  constructor(username, email, title) {
    super(username, email); // call parent constructor
    this.title = title; // new property for Admin only
  }
  deleteUser(user) {
    users = users.filter((u) => u.username !== user.username);
    return users; // return updated array
  }
}

// Create users
const userOne = new User("mario", "mario@helloWorld.co");
const userTwo = new User("shaun", "shaun@helloWorld.co");
const userThree = new Admin(
  "sujan",
  "kandelSuju8@gmail.com",
  "black-belt-ninja"
);

// Put them into array AFTER defining them
let users = [userOne, userTwo, userThree];

console.log("Admin Props:", userThree);

