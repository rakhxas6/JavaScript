const submitForm = document.querySelector(".signup-form");
const feedback = document.querySelector(".feedback");

submitForm.addEventListener("submit", (e) => {
  e.preventDefault();

  //validation

  const username = submitForm.username.value;
  const usernamePattern = /^[a-zA-Z]{6,12}$/;

  if (usernamePattern.test(username)) {
    //feedback good info
    feedback.textContent = "That username is valid!";
  } else {
    //feedback help info
    feedback.textContent =
      "username must contain letters only & be between 6 & 12 characters long!";
  }
});
