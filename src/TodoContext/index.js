import React, {createContext, useState, useEffect} from "react";

export const TodoContext = createContext();


export const TodoProvider = (props) => {

    const localStorageTodos = localStorage.getItem('TODOS');
    let parsedTodos = [];

    if (!localStorageTodos) {
        localStorage.setItem('TODOS', JSON.stringify(parsedTodos))
    } else {
        parsedTodos = JSON.parse(localStorageTodos);
    }

    const [todos, setTodos] = useState(parsedTodos);
    const [searchValue, setSearchValue] = useState('');

    let searchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));
    let [modalOpened, setModalOpened] = useState(false);

    useEffect(()=>{
        console.log('useEffect')
    },[]);  
    
    return (
        <TodoContext.Provider value={{
            todos,
            searchValue,
            setSearchValue,
            searchedTodos,
            setTodos,
            modalOpened,
            setModalOpened
        }}>
        {props.children}

        </TodoContext.Provider>
    )
}