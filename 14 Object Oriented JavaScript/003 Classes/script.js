class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  login() {
    console.log(`${this.username} was logged in successfully`);
  }

  logout() {
    console.log(`${this.username} was logged out successfully`);
  }
}

const userOne = new User("shaun", "shaun@netninja.co.uk");
console.log(userOne.username); // shaun
userOne.login(); // shaun was logged in successfully
userOne.logout(); // shaun was logged out successfully
