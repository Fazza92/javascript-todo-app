var todos = ['item 1', 'item 2', 'item 3']

function displayTodos() {
  console.log('My todos:', todos);
}

function addTodo() {
  todos.push('new todo');
  displayTodos();
}

function changeTodo() {
  todos[position] = newValue;
  displayTodos();
}

function deleteTodo(position) {
  todos.splice(position, 1);
  displayTodos();
}