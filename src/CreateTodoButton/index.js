import React from "react";
import './CreateTodoButton.css'

function CreateTodoButton(setTodos, todos){
    const addTodo = (setTodos, todos)=>{
        // const todoIndex = todos.findIndex(todo => todo.text === text);
        // let newTodos = [...todos];
        // newTodos.splice(todoIndex,1);
        // localStorage.setItem('TODOS', JSON.stringify(newTodos));
        // setTodos(newTodos);
    }
    return(
        <button onClick={()=>addTodo(setTodos,todos)}>+</button>
    )
}

export {CreateTodoButton};