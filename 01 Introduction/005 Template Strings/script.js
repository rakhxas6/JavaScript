const title = "Best Books of All Time";
const author = "Ved Vyasa";

const likes = 24000000;

//concatenation way
console.log(
  "The " +
    title +
    " was written by " +
    author +
    "has garnered over " +
    likes +
    " likes from Hindus around the world."
);

//template string way
console.log(
  `the ${title} was written by ${author} has garnered over ${likes} likes from people around the world.`
);

//creating html templates
let html = `
<h2>${title}</h2>
<p>${author}</p>
<span>This epic has ${likes} likes</span>
`

console.log(html)