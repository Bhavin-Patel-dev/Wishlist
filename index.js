const todoInput = document.querySelector(".input");
const todoBtn = document.querySelector(".button");
const showTodos = document.querySelector(".todos-container");

let todo;
let todoList = [];

const uuid = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (param) => {
    let number = (Math.random() * 16) | 0;
    let randomNumber = param == "x" ? number : (number & 0x3) | 0x8;
    return randomNumber.toString(16);
  });
};

todoBtn.addEventListener("click", (e) => {
  e.preventDefault();
  todo = todoInput.value;
  if (todo.length > 0) {
    todoList.push({ id: uuid(), todo, isCompleted: false });
  }
  renderTodos(todoList);
  todoInput.value = "";
});

showTodos.addEventListener("click", (e) => {
  let key = e.target.dataset.key;
  let delKey = e.target.dataset.todokey;

  todoList = todoList.map((todo) =>
    todo.id === key ? { ...todo, isCompleted: !todo.isCompleted } : todo,
  );

  todoList = todoList.filter((todo) => todo.id !== delKey);
  renderTodos(todoList);
  console.log(todoList);
});

const renderTodos = (todoList) => {
  showTodos.innerHTML = todoList
    .map(
      ({ todo, id, isCompleted }) =>
        `<div class="todo relative">
      <input class="t-checkbox t-pointer" id="item-${id}" data-key=${id} type="checkbox" ${isCompleted ? "checked" : ""} >
      <lable for="item-${id}" data-key=${id} class="todo todo-text t-pointer ${isCompleted ? "checked-todo" : ""}">
      ${todo}
      </lable>
      <button class="absolute right-0 button cursor">
      <span data-todokey=${id} class="del-btn material-symbols-outlined">delete</span>
      </button>
      </div>`,
    )
    .join("");
};

renderTodos(todoList);
