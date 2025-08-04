const handleClick = document.querySelector("button");
const items = document.querySelectorAll("li");
const ulElem = document.querySelector("ul");

// ? event bubbling
handleClick.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "Hey Will I appear?";
  //ulElem.append(li); //last ma jodinxa
  ulElem.prepend(li); //suru ma jodinxa
});

// ulElem.remove()

// items.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     e.target.remove();
//       console.log("Event in li");
//       e.stopPropagation() //! it stops event bubbling
//     //e.target.style.textDecoration = 'line-through'
//   });
// });

ulElem.addEventListener("click", (e) => {
  //   console.log("Event in Ul");
  if (e.target.tagName === "LI") {
    e.target.remove();
  }
});
