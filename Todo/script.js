const inputEl = document.querySelector("#todoInput");
const addBtn = document.querySelector("#addBtn");
const todoList = document.querySelector("#todoList");

let counter = 1;

function createTodoItem(text) {
    const id = String(counter++);

    const item = document.createElement("div");
    item.className = "todo-item";
    item.dataset.id = id;
    const left = document.createElement("div");
     left.className = "todo-left";
     const todoText = document.createElement("div");
     todoText.className = "todo-text";
     todoText.innerText = text;
     const meta = document.createElement("div");
     meta.className = "todo-meta";
     meta.innerText = `#${id}`

}
