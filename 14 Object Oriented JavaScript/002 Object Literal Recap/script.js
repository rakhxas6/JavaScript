const userOne = {
    username: "ryu",
    email: 'ryu@homeninja.co.uk',
    login() {
        console.log(`${userOne.username} logged in successfully`);
    },
    logout() {
        console.log(`${userOne.username} logged out successfully`);
    }
}

console.log(userOne.email, userOne.username)
userOne.login()


const userTwo = {
  username: "mario",
  email: "mario@homeninja.co.uk",
  login() {
    console.log(`${userTwo.username} logged in successfully`);
  },
  logout() {
    console.log(`${userTwo.username} logged out successfully`);
  },
};

console.log(userTwo.email, userTwo.username);
userTwo.login();


const userThree = new User('shaun@netninja.co.uk', 'shaun')