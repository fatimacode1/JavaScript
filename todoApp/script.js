const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const body = document.querySelector("body");
const todoList = document.querySelector("#todoList");

let counter = 1;

function addTodo() {
  let inputVal = inputEl.value;

  const newTodoEl = document.createElement("h4");
  const newDelete = document.createElement("button");
  const newEdit = document.createElement("button");

  newTodoEl.innerText = inputVal;
  newDelete.innerText = "delete";
  newEdit.innerText = "edit";

  newDelete.setAttribute("onclick", `deleteTodo(${counter})`);
  newEdit.setAttribute("onclick", `editTodo(${counter})`);
  newTodoEl.setAttribute("id", counter);

  todoList.appendChild(newTodoEl);
  newTodoEl.appendChild(newEdit);
  newTodoEl.appendChild(newDelete);

  inputEl.value = "";
  counter++;
}

function deleteTodo(counter) {
  console.log("delete called");
  const targetH4 = document.getElementById(counter);

  todoList.removeChild(targetH4);
}

function editTodo(counter) {
  console.log("edit called");
  const targetH4 = document.getElementById(counter);

  const newText = prompt("Edit your todo:");

  if (newText !== null) {
    targetH4.childNodes[0].nodeValue = newText;
  }
}
