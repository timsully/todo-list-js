// Revised my code and turned it into an object
var todoList = { // Object is stored in a variable called todoList
  todos: [], // If I am correct, this object with an empty array allows me to store data into this object or variable? Both? Please do correct me if I am wrong.
  displayTodos: function() {
    console.log('My Todos', this.todos);
  },
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoText) {
    // this.todos[position] = todoText;
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  }
};
