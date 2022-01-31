import React from "react";
import {TodoCounter} from './TodoCounter'
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";
import { CreateTodoButton } from "./CreateTodoButton";
//import './App.css';
const todos = [
  {
    text:'Cortar cebolla',
    completed: true
  },{
    text:'Tomar el curso de intro a React',
    completed: false
  },{
    text:'Llorar con la llorona',
    completed: true
  },
]
function App() {

  const countCompletedTasks = ()=>{
    let counter = 0;
    todos.map(task =>{
      if(task.completed){
        counter ++;
      }
    })
    return counter
  }

  return (
    <>
      <TodoCounter completed={countCompletedTasks()} limit={todos.length}/>
      <TodoSearch/>
      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>
      <CreateTodoButton/>

    </>
  );
}

export default App;
