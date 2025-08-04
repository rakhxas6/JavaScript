const articleElem = document.querySelector("article"); //HTML collection
// first convert it into an array

// console.log(Array.from(articleElem.children)) //it does not alter the original array
// console.log(articleElem.children)

// Array.from(articleElem.children).forEach((child) => {
//   child.classList.add("article-element");
// });


const title = document.querySelector('h2')
console.log(title.parentElement)
console.log(title.parentElement.parentElement)
console.log(title.nextElementSibling)
console.log(title.previousElementSibling)

// chaining
console.log(title.nextElementSibling.parentElement.children)