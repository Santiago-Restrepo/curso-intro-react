import React from "react";
import './TodoSearch.css';
function TodoSearch({searchValue, setSearchValue}){
    const searchInputValue = (event)=>{
        setSearchValue(event.target.value);
    }
    return(
        <input onChange={(event)=>{searchInputValue(event)}} placeholder="Cebollín"/>
    )
}

export {TodoSearch};