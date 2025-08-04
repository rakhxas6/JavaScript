const link = document.querySelector("a");

console.log(link.getAttribute("href"));

link.setAttribute("href", "https://www.google.com");
console.log(link.getAttribute("href"));

link.innerText = "The Google Search Engine";

const pElem = document.querySelector("p");
console.log(pElem.getAttribute("class"));
pElem.setAttribute("class", "success");

pElem.setAttribute("id", "item");
pElem.setAttribute("style", "color: green");

//? further work on above task

const title = document.querySelector(".title");

title.innerText = "THE DOCUMENT OBJECT MODEL"

// title.setAttribute('style', "margin: 20px") overrides existing style

console.log(title.style);
console.log(title.style.color);

// title.style.backgroundColor = "black"
title.style.fontSize = "60px";
title.style.margin = "20px";
title.style.textAlign = "center";
title.style.color = "crimson";



//? another chapter removing and adding classes


