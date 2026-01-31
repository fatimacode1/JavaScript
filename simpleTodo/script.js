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
  meta.innerText = `#${id}`;

  left.appendChild(todoText);
  left.appendChild(meta);

  const actions = document.createElement("div");
  actions.className = "todo-actions";

  const editBtn = document.createElement("button");
  editBtn.className = "btn btn-ghost";
  editBtn.innerText = "Edit";

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger";
  deleteBtn.innerText = "Delete";

  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);

  item.appendChild(left);
  item.appendChild(actions);

  // --- Delete ---
  deleteBtn.addEventListener("click", () => {
    item.remove();
  });

  // --- Edit / Save toggle ---
  let isEditing = false;
  let editInput = null;

  editBtn.addEventListener("click", () => {
    if (!isEditing) {
      // switch to edit mode
      isEditing = true;
      editBtn.innerText = "Save";

      editInput = document.createElement("input");
      editInput.type = "text";
      editInput.value = todoText.innerText;
      editInput.style.width = "100%";

      // Replace text with input
      left.replaceChild(editInput, todoText);
      editInput.focus();

      // Save on Enter
      editInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") editBtn.click();
      });
    } else {
      // switch to save mode
      const newValue = editInput.value.trim();
      if (!newValue) {
        editInput.focus();
        return;
      }

      isEditing = false;
      editBtn.innerText = "Edit";

      todoText.innerText = newValue;
      left.replaceChild(todoText, editInput);
      editInput = null;
    }
  });

  return item;
}

function addTodo() {
  const text = inputEl.value.trim();
  if (!text) return;

  const item = createTodoItem(text);
  todoList.prepend(item); // newest on top

  inputEl.value = "";
  inputEl.focus();
}

addBtn.addEventListener("click", addTodo);

inputEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTodo();
});
