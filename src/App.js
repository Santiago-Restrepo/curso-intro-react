import React, { useState } from "react";
import {TodoCounter} from './TodoCounter'
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";
import { CreateTodoButton } from "./CreateTodoButton";
import './App.css';
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
  const [searchValue, setSearchValue] = useState('');

  let searchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));

  const countCompletedTasks = ()=>{
    let counter = 0;
    todos.map(task =>{
      if(task.completed){
        counter ++;
      }
      return task
    })
    return counter
  }

  return (
    <>
      <TodoCounter completed={countCompletedTasks()} limit={todos.length}/>
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
      <TodoList>
        {
          searchedTodos.length !== 0 ? 
          searchedTodos.map(todo => {
          return <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
          })
          :
          <h3 className="errorMessage">⚠️ Not founded ⚠️</h3>
        }
      </TodoList>
      <CreateTodoButton/>

    </>
  );
}

export default App;
