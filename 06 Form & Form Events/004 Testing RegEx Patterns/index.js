const submitForm = document.querySelector('.signup-form')
// const username = document.querySelector('input')

submitForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(submitForm.username.value);
  //we can directly use id/name to directly reference to values..
  // console.log(`${username.value}`)
  // console.log("Form Successfully Submitted!")
});