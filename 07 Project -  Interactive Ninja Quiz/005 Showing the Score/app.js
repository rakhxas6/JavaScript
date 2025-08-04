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
  resultDiv.querySelector("span").textContent = `${score}%`;
  resultDiv.classList.remove('d-none')

});
