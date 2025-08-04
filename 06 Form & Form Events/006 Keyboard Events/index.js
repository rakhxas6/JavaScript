const submitForm = document.querySelector(".signup-form");
const feedback = document.querySelector(".feedback");
const usernameInput = submitForm.username;
const usernamePattern = /^[a-zA-Z]{6,12}$/;

// Submit event
submitForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = usernameInput.value;

  if (usernamePattern.test(username)) {
    feedback.textContent = "✅ That username is valid!";
    feedback.style.color = "limegreen";
  } else {
    feedback.textContent = "❌ Must be 6–12 letters only!";
    feedback.style.color = "crimson";
  }
});

// Live feedback
usernameInput.addEventListener("keyup", (e) => {
  if (usernamePattern.test(e.target.value)) {
    usernameInput.classList.remove("error");
    usernameInput.classList.add("success");
  } else {
    usernameInput.classList.remove("success");
    usernameInput.classList.add("error");
  }
});
