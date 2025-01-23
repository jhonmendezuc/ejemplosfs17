let inputTask = document.getElementById("todo-input");
let addBtn = document.getElementById("add-btn");
let todoList = document.getElementById("todo-list");
let allBtn = document.getElementById("filter-all");
let completedBtn = document.getElementById("filter-completed");
let activeBtn = document.getElementById("filter-active");

let taskArray = [
  {
    title: "Go to the gym",
    completed: true,
  },
  {
    title: "Go to the market",
    completed: true,
  },
];

let currentTaskFilter = "all";

function showTask() {
  todoList.innerHTML = "";
  debugger;
  let TaskFilter = taskArray.filter((task) => {
    if (currentTaskFilter === "active") return !task.completed;
    if (currentTaskFilter === "completed") return task.completed;
    return true;
  });

  TaskFilter.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `         
          <div class="todo-item ${task.completed ? "task-completed" : ""} "> 
            <input data-index="${index}" type="checkbox" ${
      task.completed ? "checked" : ""
    } />
            <span>${task.title}</span>
          </div> 
          <button><i data-index="${index}" class="bi bi-bookmark-x-fill"></i></button>
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
  console.log(taskArray);
  inputTask.value = "";
  showTask();
});

todoList.addEventListener("click", (evento) => {
  let index = evento.target.dataset.index;
  if (evento.target.tagName === "INPUT") {
    console.log(evento.target.tagName);
    //console.log(evento.target.dataset);
    //console.log(taskArray[index]);
    taskArray[index].completed = !taskArray[index].completed;
    console.log(taskArray);
  }
  if (evento.target.tagName === "I") {
    taskArray.splice(index, 1);
  }

  showTask();
});

allBtn.addEventListener("click", () => {
  currentTaskFilter = "all";
  console.log(currentTaskFilter);
  showTask();
});

activeBtn.addEventListener("click", () => {
  currentTaskFilter = "active";
  console.log(currentTaskFilter);
  showTask();
});

completedBtn.addEventListener("click", () => {
  currentTaskFilter = "completed";
  console.log(currentTaskFilter);
  showTask();
});
