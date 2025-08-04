const correctAnswers = ["B", "B", "B", "B"];
const form = document.querySelector(".quiz-form");
const resultDiv = document.querySelector(".result");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [
    form.q2.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  //check answers

  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });

  window.scrollTo(0, 0);
  resultDiv.querySelector("span").textContent = `${score}%`;
  resultDiv.classList.remove("d-none");
});

//same
//? window object is global object
// console.log(document.querySelector('form'))
// console.log(window.document.querySelector('form'))

// alert('hello')
// window.alert('hello')

// setTimeout(() => {
//   alert('Hello, Ninjas!')
// },3000)
