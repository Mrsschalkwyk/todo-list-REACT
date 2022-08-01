
import React from 'react';
import './App.css';
import TodoItem from './components/todoItem';
import TodoForm from './components/todoForm';

function App() {
  // Our list of todo items and a function to update them
  const [todos, setTodos] = React.useState([
  //   "Eat Dinner",
  //   "Finish SheCodes",
  //   "Have a shower"
  {text: "eat", 
  isCompleted: false,
},
  {
    text: "Meet Friends for lunch",
    isCompleted:false,
  },
  {
    text: "build cool app",
    isCompleted:false,
  }
  ]);

  // const addTodo= (text) => {
  //   const newtodo = [ ...todos, {text}];
  //   setTodos (newtodos);
  // };


  // This will call our setTodo function, 
  // to update our list of todos
  function addTodo(todo) {
    // We use spread syntax here to add our 
    // new todo to our list of old todos
    setTodos([...todos, todo])
  }

  // Our regular HTML with ReactComponents
  // We know which element is React because
  // it starts with a capital
  return (
    <div className="app">
    <div className="todo-list"
    <div>
      <h1>My Todo {todos}</h1>
      {/* 
        loop over each todo and render a react component
        called <TodoItem /> with the todo as a prop
       */}
      {todos.map((todo, index) => {
        return <TodoItem key={index} myTodo={todo} index={index}
        completedTodo={completeTodo}
        />
      })}

      {/* 
        Render a form with a function addTodo as a property. When
        we submit our form, the addTodo function should be called
        above to update our list of todos
      */}
      <TodoForm addTodo={addTodo} />
    </div>
    </div>
  );
}

export default App;













// import logo from './logo.svg';
// import './App.css';
// import React from "react";
// import TodoItem from './components/todoItem'

// function App() {
//   return (
//     <div>
//     <h1> my to do list</h1>
//     <todoItem/>
//     </div>
//   );      

//   function addTodo() {
//     let myTodos = todos;
//     myTodos.push()

    
//   }
  
// }
// export default App;
