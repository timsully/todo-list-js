var todoList = {
  todos: [],
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
  },
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;


    this.todos.forEach(function(todo) {
      if (todo.completed === true) {
          completedTodos++;
          }
    });


    this.todos.forEach(function (todo) {
      if(completedTodos === totalTodos) {
        todo.completed = false;
      } else {
        todo.completed = true;
      }
    });
  }
};


var handlers = {
  addTodo: function() {
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
    view.displayTodos();
  },
  changeTodo: function() {
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
    view.displayTodos();
  },
  deleteTodo: function(position) {
    todoList.deleteTodo(position);
    view.displayTodos();
  },
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
    view.displayTodos();
  },
  toggleAll: function() {
    todoList.toggleAll();
    view.displayTodos();
  }
};


var view = {
  displayTodos: function() {
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
    for (var i = 0; i < todoList.todos.length; i++) {
      var todoLi = document.createElement('li');
      var todo = todoList.todos[i];
      var todoTextWithCompletion = '';

      if (todo.completed === true) {
        todoTextWithCompletion = '(x) ' + todo.todoText;
      } else {
        todoTextWithCompletion = '( ) ' + todo.todoText;
      }

      todoLi.id = i;
      todoLi.textContent = todoTextWithCompletion;
      todoLi.appendChild(this.createDeleteButton());
      todosUl.appendChild(todoLi);
    }
  },


  createDeleteButton: function() {
    //we create button
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    // all delete buttons will have this class name:
    deleteButton.className = 'deleteButton';
    // this function returns deleteButton as a value so we can use it in other functions
    return deleteButton;
  },


  setUpEventListeners: function() {
    var todosUl = document.querySelector('ul');

    // add event Listener rather than several
    todosUl.addEventListener('click', function(event) {
      // console.log(event.target.parentNode.id); // event is a mouse click object

      // get the element that was clicked on
      var elementClicked = event.target;

      // was button element clicked?
      if (elementClicked.className === 'deleteButton') {
        // Run handlers.deleteTodo(position)
        // but position is now dynamic and uses parseInt method to turn string into #
        handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
      }
    });
  }
};


view.setUpEventListeners();
