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

class Admin extends User{
    deleteUser(user) {
        users = users.filter((u) => {
        // it returns value which username does not match
         return u.username !== user.username
     })
 }
}

const userOne = new User("mario", "mario@helloWorld.co");
const userTwo = new User("shaun", "shaun@helloWorld.co");
const userThree = new Admin('sujan',"kandelSuju8@gmail.com")

// console.log(userOne, userTwo,userThree);

let users = [userOne, userTwo, userThree]
console.log(users)


userThree.deleteUser(userOne)
console.log(users)

// userTwo.login().incScore().logout().incScore().logout();
