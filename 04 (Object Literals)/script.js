// ! Objects in real life have properties & things they can do..

// properties          things it can do
// colour               ring
//size                  take a picture
//model                 play music

// ! Objects in JS have properties & things they can do (methods)..

// user object
// properties          methods
// email               login
//username             logout
//gender

// object literals

// let user = {
//   name: "Sudhan",
//   age: 30,
//   email: "sudhankandel18@gmail.com.np",
//   location: "Dresden",
//     blogs: ["Why do i need to work hard in my ?", "Working hard"],
// };

// console.log(user)
// console.log(user.name)
// console.log(user.blogs[1])

//user.age = 35;
// user.age = 34;
// console.log(user.age)

// const key = 'location'
// console.log(user[key])

// console.log(typeof user)

// console.log(user['name'])
// user["email"] = "Sk72@gmail.com"
// console.log(user['email'])
// console.log(user['name'])

// const blogs = [
//   {
//     title: "Why do i need to work hard in my 30's?",
//     likes: 30,
//   },
//   {
//     title: "Working hard to uplift living standard!",
//     likes: 50,
//   },
// ];

// console.log(blogs);

// let user = {
//   name: "Sudhan",
//   age: 30,
//   email: "sudhankandel18@gmail.com.np",
//   location: "Dresden",
//   blogs: [
//     {
//       title: "Why do i need to work hard in my 30's?",
//       likes: 30,
//     },
//     {
//       title: "Working hard to uplift living standard!",
//       likes: 50,
//     },
//   ],
//   login() {
//     console.log("The user Logged in sucessfully!");
//   },
//   logout() {
//     console.log("The user Logged out!");
//   },
//   logBlogs() {
//     //   console.log(this.blogs)  //this is the context object

//     console.log("This user has written the following blogs:");
//     this.blogs.forEach((blog) => {
//       console.log(blog.title, blog.likes);
//     });

//     // console.log(this); //window for arrow func
//   },
// };

//this cant be used on arrow function ,it uses window as the current context

// ? methods in objects

// console.log(this)
// user.login();
// user.logout();
// user.logBlogs();
