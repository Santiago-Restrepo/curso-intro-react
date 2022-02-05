import React from "react";
import './TodoItem.css'

function TodoItem({completed, text, setTodos, todos}){

    const toggleCompleteTodo = (setTodos, todos)=>{
        const todoIndex = todos.findIndex(todo => todo.text === text);
        let newTodos = [...todos];
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        localStorage.setItem('TODOS', JSON.stringify(newTodos));
        setTodos(newTodos);
    }
    const removeTodo = (setTodos, todos)=>{
        const todoIndex = todos.findIndex(todo => todo.text === text);
        let newTodos = [...todos];
        newTodos.splice(todoIndex,1);
        localStorage.setItem('TODOS', JSON.stringify(newTodos));
        setTodos(newTodos);
    }

    return(
        <li className={completed ? 'checked': ''}>
            <span className="check" onClick={()=>toggleCompleteTodo(setTodos, todos)}></span>
            <p>{text}</p>
            <span className="closeButton" onClick={()=>{removeTodo(setTodos, todos)}}>X</span>
        </li>
    )
}

export {TodoItem};