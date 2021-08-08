import LocalStorage from './storage.js';

const storage = new LocalStorage();

const todos = storage.todos;

const container = document.querySelector('.todo-list');
const template = document.querySelector('#todo');

const createTodoForm = document.querySelector('.create-todo');
const createTodoField = document.querySelector('.create-todo--input');
const createTodoButton = document.querySelector('.create-todo--submit');

todos.forEach((data) => {
  onCreateTodo({data});
});

createTodoField.addEventListener('input', () => {
  createTodoButton.disabled = !createTodoField.value;
});

createTodoForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const value = createTodoField.value;

  if (value) {
    const data = {
      value,
      checked: false
    };

    storage.create(data);

    onCreateTodo({data});

    createTodoForm.reset();
  }
});

function onCreateTodo({data}) {
  const clone = template.content.cloneNode(true);

  const todo = clone.querySelector('.todo');
  const checkbox = clone.querySelector('.todo--checkbox');
  const title = clone.querySelector('.todo--text');
  const del = clone.querySelector('.todo--delete');

  title.innerHTML = data.value;
  checkbox.checked = data.checked;

  toggleTodoStatusClass({checked: data.checked, todo});

  checkbox.addEventListener('input', () => {
    data.checked = checkbox.checked;

    toggleTodoStatusClass({checked: data.checked, todo});

    storage.update(data);
  });

  title.addEventListener('input', () => {
    data.value = title.innerHTML;

    storage.update(data);
  });

  del.addEventListener('click', (e) => {
    storage.delete(data);

    todo.remove();
  });

  container.appendChild(clone);
}

function toggleTodoStatusClass({checked, todo}) {
  todo.classList[checked ? 'add' : 'remove']('todo--done');
}