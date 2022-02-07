import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import './CreateTodoButton.css'

function CreateTodoButton(setTodos, todos){

    const {setModalOpened, modalOpened} = useContext(TodoContext);
    // const addTodo = (setTodos, todos)=>{
    //     
    // }
    return(
        <>
            {
                !modalOpened ?
                <button className="addButton" onClick={()=>setModalOpened(true)}>+</button>
                :
                <button onClick={()=>setModalOpened(false)} className="addButton close">x</button>

            
            } 
        </>
    )
}

export {CreateTodoButton};