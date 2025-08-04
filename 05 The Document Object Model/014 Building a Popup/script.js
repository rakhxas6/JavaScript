const closeHandler = document.querySelector(".popup-close");
const pWrap = document.querySelector(".popup-wrapper");
const clickHandler = document.querySelector("button");

clickHandler.addEventListener("click", (e) => {
    pWrap.style.display = "block";
});

closeHandler.addEventListener("click", (e) => {
  pWrap.style.display = "none";
});
pWrap.addEventListener("click", (e) => {
  pWrap.style.display = "none";
});

