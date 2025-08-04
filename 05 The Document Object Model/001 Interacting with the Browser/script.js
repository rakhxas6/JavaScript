// const pElement = document.querySelector('p')
// console.log(pElement.innerText)

// const paraElement = document.querySelector(".error")
// console.log(paraElement.innerText)

// const ulElement = document.querySelector("div.error")
// console.log(ulElement.innerText)

// const h1Element = document.querySelector("body > div > h1")
// console.log(h1Element.innerText)

//? QuerySelectorAll

// const paras = document.querySelectorAll("p");
// paras.forEach(para => {
//     console.log(para)
// })

// console.log(paras[2]);  //we get nodelist here

// const errElem = document.querySelectorAll('.error')
// errElem.forEach(err => {
//     console.log(err)
// })

// console.log(errElem)

// //? getElementById

// const title = document.getElementById('page-title')
// console.log(title)

// //? getElementByClassName

// const errorElem = document.getElementsByClassName('error')
// console.log(errorElem) //we get HTML collection
// console.log(errorElem[0])

// errorElem.forEach(err=> {
//     console.log(err)
// }); //! cant use forEach on html collection

//? get elements by their tag name
// const pElem = document.getElementsByTagName('p')
// console.log(pElem)
// console.log(pElem[0])

//! another chaapter

const para = document.querySelector("p");
// console.log(para.innerText)

// para.innerText = "I am Batman!"
// para.innerText += " I am Batman!"

// const paras = document.querySelectorAll('p')

// paras.forEach(para => {

//     para.innerText += " testing phase"
//     console.log(para.innerText)
// })

const divElem = document.querySelector(".content");

// console.log(divElem.innerHTML)

// divElem.innerHTML + '<h2>Hey, does this work?</h2>'
// divElem.innerHTML += '<h2>Hey, does this work?</h2>'
// console.log(divElem.innerHTML)

//? + override, += append

const peoples = ["cat", "dog", "buffalo"];

peoples.forEach((person) => {
  divElem.innerHTML += `
    <p>${person}</p>`;
});

//? appending p elem to content div



// 
