// let inputField = document.getElementById("inputField");
// let listWrapper = document.getElementById("listItems");
// let tasks = [
//   {
//     id: 1,
//     text: "Buy a coffee",
//     isCompleted: false,
//   },
//   {
//     id: 2,
//     text: "Buy a coffee Cup",
//     isCompleted: false,
//   },
// ];
// const handleSubmit = function (event) {
//   event.preventDefault();
// };
// tasks = [
//   ...tasks,
//   {
//     id: 123,
//     text: inputField.value,
//     isCompleted: false,
//   },
// ];
// console.log(tasks);
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Retrieve tasks from localStorage
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

let value = localStorage.getItem("tasks");
console.log(typeof value);

// Display existing tasks
tasks.forEach((task) => addTaskToList(task));

addTaskBtn.addEventListener("click", function () {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    addTaskToList(taskText);
    tasks.push(taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    taskInput.value = "";
  }
});

function addTaskToList(taskText) {
  const taskItem = document.createElement("li");

  taskItem.classList.add("taskItem");
  taskItem.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML =
    "Delete </script> <lord-icon src='https://cdn.lordicon.com/skkahier.json' trigger='hover'  style='width:30px;height:30px;padding-top: 7px; '> </lord-icon>";
  deleteBtn.classList.add("deleteBtn");
  deleteBtn.addEventListener("click", function () {
    const index = tasks.indexOf(taskText);
    if (index !== -1) {
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      taskItem.remove();
    }
  });

  taskItem.appendChild(deleteBtn);
  taskList.appendChild(taskItem);
}
