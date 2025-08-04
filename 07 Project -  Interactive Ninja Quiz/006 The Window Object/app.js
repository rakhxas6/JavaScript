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

  //show result on page
  window.scrollTo(0, 0);
  resultDiv.classList.remove("d-none");
  // animating the score
  
  let output = 0;
  const timer = setInterval(() => {
    resultDiv.querySelector("span").textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer)
    } else {
      output++
    }
  },50)



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

// let i=0
// let timer = setInterval(() => {
//   console.log('Hello, Ninjas!')
//   i++;
//   if (i === 5) {
//     clearInterval(timer)
//   }
// },1000)
