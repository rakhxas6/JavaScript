// const title = document.querySelector(".title");
// title.style.textAlign = "center";
// title.style.color = "orangered";

// const errElem = document.querySelector("p");
// console.log(errElem.classList)
// errElem.classList.add('error')
// errElem.classList.remove('error')

// errElem.classList.add('success')
// errElem.classList.add('success')

const pElem = document.querySelectorAll("p");
// console.log(pElem)
// ? textContent selects all content regardless of style inside the p tag

pElem.forEach((item) => {
  if (item.textContent.includes("error")) {
    item.classList.add("error");
  } else if (item.innerText.includes("success")) {
    item.classList.add("success");
  } else {
    item.classList.add("normal");
  }
});


//! toggle class
const title = document.querySelector(".title");

title.classList.toggle('test') //adds
title.classList.toggle('test') //removes

