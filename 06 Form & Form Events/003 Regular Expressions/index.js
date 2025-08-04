const submitForm = document.querySelector('.signup-form')


// regex101
//004




submitForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(submitForm.username.value);
});


//testing RegEx
const username = 'shaunp'
const regexUsername = /^[a-z]{6,}$/

// let result = regexUsername.test(username)
// if (result) {
//     console.log('Regex test Passed :)')
// } else {
//     console.log("Regex Test Failed :(")
// }





let result = username.search(regexUsername) //directly searching the pattern in username
console.log(result)