const copyMe = document.querySelector(".copy-me");

copyMe.addEventListener("copy", () => {
  console.log("Oi! My content is copyright!");
});

const boxElem = document.querySelector(".box");

boxElem.addEventListener("mousemove", (e) => {
  //   console.log(e);
  boxElem.textContent = `x pos - ${e.offsetX} y pos - ${e.offsetY}`;
});

document.addEventListener("wheel", (e) => {
  console.log(e.pageX, e.pageY);
});
