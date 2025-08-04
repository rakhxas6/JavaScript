const addBtnElem = document.querySelector(".add");
const list = document.querySelector(".todos");

const generateTemplate = (todo) => {
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${todo}</span>
                <i class="far fa-trash-alt delete"></i>
            </li>
    `;

  list.innerHTML += html;
};

addBtnElem.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addBtnElem.add.value.trim();
  if (todo.length) {
    generateTemplate(todo);
    addBtnElem.reset();
  }
});

// space hatauxa trim() le
