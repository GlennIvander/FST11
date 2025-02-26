// Step 1: Select DOM elements (document.querySelector)
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const filterTodo = document.querySelector(".filter-todo");
const todoList = document.querySelector(".todo-list");

// Step 2: Create listener (variable.addEventListener)
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteOrCompleteTodo);
filterTodo.addEventListener("change", filterTodos);

// Step 3: function to add new task
function addTodo(e) {
  // Prevents the form submission
  e.preventDefault();

  // Create the todoDiv container
  const todoDiv = document.createElement("div");
  todoDiv.classList.add('todo');

  // Create a new todoList item
  const newTodo = document.createElement("li");
  newTodo.classList.add("todo-item");
  newTodo.innerText = todoInput.value;
  todoDiv.appendChild(newTodo);

  // Create the complete button
  const completeButton = document.createElement("button");
  completeButton.classList.add("complete-btn");
  completeButton.innerHTML = `<i class="fas fa-check"></i>`;
  todoDiv.appendChild(completeButton);

  // Create the delete button
  const trashButton = document.createElement("button");
  trashButton.classList.add("trash-btn");
  trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
  todoDiv.appendChild(trashButton);

  // Append the todo div to the todo list
  todoList.appendChild(todoDiv)
  todoInput.value = "";
}

// Step 4: function to delete or complete task
function deleteOrCompleteTodo(e) {
  const targetBtn = e.target

  if (targetBtn.classList.contains("trash-btn")) {
    const todoDiv = targetBtn.parentElement;
    todoDiv.classList.add("fall");
    todoDiv.addEventListener("transitionend", function () {
      todoDiv.remove();
    })
  };

  if (targetBtn.classList.contains("complete-btn")) {
    const todoDiv = targetBtn.parentElement;
    todoDiv.classList.toggle("completed");
  };
};

// Step 5: function to filter based on completion status
function filterTodos(e) {}
