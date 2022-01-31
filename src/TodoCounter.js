import React from "react";
import './TodoCounter.css'

function TodoCounter(props){
    return(
        <>
            <h1>Your task</h1>
            <h3>Completed {props.completed} to {props.limit}</h3>
        </>
        
    )
}

export {TodoCounter};