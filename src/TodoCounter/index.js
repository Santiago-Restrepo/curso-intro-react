import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import './TodoCounter.css'

function TodoCounter(){
    const {todos} = useContext(TodoContext);
    return(
        <>
            <h1>Your task</h1>
            <h3>Completed {todos.reduce((total, todo) => (todo.completed ? total+1 : total), 0 )} to {todos.length}</h3>
        </>
        
    )
}

export {TodoCounter};