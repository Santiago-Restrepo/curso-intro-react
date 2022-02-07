import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css';
function TodoSearch(){
    const {setSearchValue} = useContext(TodoContext);
    const searchInputValue = (event)=>{
        setSearchValue(event.target.value);
    }
    return(
        <input onChange={(event)=>{searchInputValue(event)}} placeholder="Cebollín"/>
    )
}

export {TodoSearch};