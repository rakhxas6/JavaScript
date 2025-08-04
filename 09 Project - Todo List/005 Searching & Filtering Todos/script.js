const addBtnElem = document.querySelector(".add");
const list = document.querySelector(".todos");
const searchElem = document.querySelector(".search input");
const listItem = document.querySelector("li");

const generateTemplate = (todo) => {
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${todo}</span>
                <i class="far fa-trash-alt delete"></i>
            </li>
    `;

  list.innerHTML += html;
};

//! space hatauxa --- trim() le
addBtnElem.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addBtnElem.add.value.trim();
  if (todo.length) {
    generateTemplate(todo);
    addBtnElem.reset();
  }
});

// delete todos with event delegation
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
    //i ko parent li
  }
});

//? Search Functionality

//? Keyup event

// console.log(Array.from(list.children));
//! it returns html collection so changing it to arrat first

const filteredTodos = (term) => {
  // add filtered class
  Array.from(list.children)
    .filter((todo) => {
      return !todo.textContent.toLowerCase().includes(term);
    })
    .forEach((todo) => {
      todo.classList.add("filtered");
    });

  // remove filtered class
  Array.from(list.children)
    .filter((todo) => {
      return todo.textContent.toLowerCase().includes(term);
    })
    .forEach((todo) => {
      todo.classList.remove("filtered");
    });
};

searchElem.addEventListener("keyup", () => {
  const term = searchElem.value.trim().toLowerCase();
  filteredTodos(term);
});
