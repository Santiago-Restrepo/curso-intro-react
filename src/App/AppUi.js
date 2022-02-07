import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import {TodoCounter} from '../TodoCounter'
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

export const AppUi = ()=>{

    const {todos, setTodos, searchedTodos, modalOpened} = useContext(TodoContext);
    return(
        <>
            <TodoCounter/>
            <TodoSearch />
            <TodoList>
                {
                    searchedTodos.length !== 0 ?
                    searchedTodos.map(todo => {
                    return <TodoItem key={todo.text} text={todo.text} completed={todo.completed} setTodos={setTodos} todos={todos}/>
                    })
                    : todos.length !== 0 ? 
                    <h3 className="errorMessage">⚠️ Not founded ⚠️</h3>
                    :
                    <h3 className="errorMessage">There are no Todo's</h3>
                }
            </TodoList>
            <CreateTodoButton/>
            {
                modalOpened &&
                <>
                    <Modal>
                        <TodoForm/>
                    </Modal>
                </>
            }
        </>
    )
}