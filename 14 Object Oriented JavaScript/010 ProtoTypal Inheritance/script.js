//! constructor function
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

function Admin(username, email, title) {
  //! call gets the User Constructor
  User.call(this, username, email);
  this.title = title;
}

//! adding User prototypes to Admin

// goes one step deep
Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function (user) {
  if (user.title === "Black-Belt-Ninja") {
    console.log("Deleting Admin is not possible");
    return users; // unchanged
  }

  users = users.filter((u) => u.username !== user.username);
  console.log(`${user.username} has been deleted from the Db`);

  return users;
};


// Create users
const userOne = new User("mario", "mario@helloWorld.co");
const userTwo = new User("shaun", "shaun@helloWorld.co");
const userThree = new Admin(
  "luigi",
  "luigi@codeninja.co.uk",
  "Black-Belt-Ninja"
);

// Put them into array AFTER defining them
let users = [userOne, userTwo, userThree];

console.log(userOne, userTwo, userThree);
userTwo.logout().login(); //it works when returning object instances
userThree.deleteUser(userThree);

// console.log(users)
