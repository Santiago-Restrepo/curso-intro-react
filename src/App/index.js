import React, { useEffect, useState } from "react";
import {AppUi} from './AppUi'
import './App.css';

function App() {

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


  useEffect(()=>{
    console.log('useEffect')
  },[]);  
  return (
    <AppUi 
      todos={todos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      setTodos={setTodos}
    />
  );
}

export default App;
