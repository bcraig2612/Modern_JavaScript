const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");
//Add todos
const generateTemplate = todo => {
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
  `;
  list.innerHTML += html;
};
//Prevents page refresh, prevents submitting nothing, and prevents whitespace around text
addForm.addEventListener("submit", event => {
  event.preventDefault();
  const todo = addForm.add.value.trim();
  //   console.log(todo);
  if (todo.length) {
    generateTemplate(todo);
    addForm.reset();
  }
});

// Delete Todos
list.addEventListener("click", event => {
  if (event.target.classList.contains("delete")) {
    event.target.parentElement.remove();
  }
});

//Search Todos
const filterTodos = term => {
  //   console.log(term);
  //   console.log(Array.from(list.children));
  Array.from(list.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.add("filtered"));

  Array.from(list.children)
    .filter(todo => todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.remove("filtered"));
};

search.addEventListener("keyup", () => {
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});
