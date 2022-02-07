import React, { useContext, useState } from "react";
import { TodoContext } from "../TodoContext";

export const TodoForm =  ()=>{
    const {setModalOpened, todos, setTodos} = useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = useState('')
    const onCancel = ()=>{
        setModalOpened(false);
    }
    const onSubmit = (e)=>{
        e.preventDefault()
        let newTodos = [...todos];
        newTodos.push({
            text: newTodoValue,
            completed: false
        });
        localStorage.setItem('TODOS', JSON.stringify(newTodos));
        setTodos(newTodos);
        setModalOpened(false);
    }
    return (
        <form onSubmit={(event)=> onSubmit(event)}>
            <label>Create your new todo</label>
            <textarea 
                placeholder="Cortar la cebolla para el almuerzo" 
                onChange={(e)=>setNewTodoValue(e.target.value)}
                value={newTodoValue}/>
            <div>
                <button type="button"
                    onClick={onCancel}
                >
                    Cancel
                </button>
                <button type="submit">
                    Add
                </button>
            </div>
        </form>
    )
}