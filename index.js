const todos = [];

function addTodo() {
  const inputTodoEl = document.getElementById("input-todo");
  const addTodoButton = document.getElementById("add-button");

  addTodoButton.addEventListener("click", () => {
    const todo = inputTodoEl.value;
    const getDate = new Date().getTime();

    todos.push({
      id: getDate,
      todo,
      done: false,
    });
    inputTodoEl.value = "";
    showTodos();
    console.log(todos);
  });
}
addTodo();

const todoListEl = document.getElementById("todoList");
function showTodos() {
  todoListEl.innerHTML = "";
  todos.forEach((todoItem) => {
    const createLi = document.createElement("li");
    createLi.classList.add(
      "border",
      "flex",
      "justify-between",
      "items-center",
      "w-full",
      "px-[1rem]",
      "min-h-[3rem]",
      "rounded-lg",
      "shadow-lg"
    );
    const componentLi = ` 
            <div class="flex items-center">
                <input type="checkbox" class="mr-2" data-id="${todoItem.id}"/>
                    <span class="${
                      todoItem.done ? "line-through text-gray-500" : ""
                    }" >
                     ${todoItem.todo}
                    </span>
            </div>
            <button
                class="delete-button bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
            >
                Remove
            </button>`;
    createLi.innerHTML = componentLi;
    todoListEl.appendChild(createLi);
    deleteTodo();
    checkedTodo();
  });
}

function checkedTodo() {
  const inputCheckbox = document.querySelectorAll('input[type="checkbox"]');

  inputCheckbox.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const checkboxId = checkbox.getAttribute("data-id");

      todos.forEach((todo) => {
        if (todo.id == checkboxId) {
          todo.done = checkbox.checked;
        }
      });
      showTodos();
    });
  });
}

function deleteTodo() {
  const deleteButton = document.querySelectorAll(".delete-button");
  deleteButton.forEach((button, index) => {
    button.addEventListener("click", () => {
      todos.splice(index, 1);
      showTodos();
    });
  });
}
