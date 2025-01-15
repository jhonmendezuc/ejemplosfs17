let inputTask = document.getElementById("todo-input");
let addBtn = document.getElementById("add-btn");
let todoList = document.getElementById("todo-list");

let taskArray = [
  {
    id: 1,
    title: "Go to the gym",
    completed: false,
  },
  {
    id: 2,
    title: "Go to the market",
    completed: true,
  },
];

let currentTaskFilter = "all";

let TaskFilter = taskArray.filter((task) => {
  return true;
});

function showTask() {
  TaskFilter.forEach((task) => {
    const li = document.createElement("li");
    li.innerHTML = `         
          <div class="todo-item"> 
            <input type="checkbox" />
            <span>${task.title}</span>
          </div> 
          <button><i class="bi bi-bookmark-x-fill"></i></button>
        `;
    todoList.appendChild(li);
  });
}

addBtn.addEventListener("click", () => {
  let task = {
    title: inputTask.value,
    completed: false,
  };
  taskArray.push(task);
  inputTask.value = "";
  showTask();
});

showTask();
