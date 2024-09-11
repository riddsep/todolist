const todos = [];

function addTodo() {
  const inputTodoEl = document.getElementById("input-todo");
  const addTodoButton = document.getElementById("add-button");

  addTodoButton.addEventListener("click", () => {
    const todo = inputTodoEl.value;

    todos.push({
      todo,
    });
    inputTodoEl.value = "";
    showTodos();
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
                <input type="checkbox" class="mr-2" checked />
                    <span>
                     ${todoItem.todo}
                    </span>
            </div>
            <button
                class="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
            >
                Remove
            </button>`;
    createLi.innerHTML = componentLi;
    console.log(createLi);

    todoListEl.appendChild(createLi);
  });
}
