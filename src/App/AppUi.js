import React from "react";
import {TodoCounter} from '../TodoCounter'
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import { CreateTodoButton } from "../CreateTodoButton";

export const AppUi = ({
    todos,
    searchValue,
    setSearchValue,
    searchedTodos,
    setTodos,
})=>{
    return(
        <>
            <TodoCounter completed={todos.reduce((total, todo) => (todo.completed ? total+1 : total), 0 )} limit={todos.length}/>
            <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
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
        </>
    )
}