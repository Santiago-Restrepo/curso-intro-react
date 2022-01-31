import React from "react";
import './TodoItem.css'

function TodoItem(props){
    return(
        <li className={props.completed ? 'checked': ''}>
            <span className="check"></span>
            <p>{props.text}</p>
            <span className="closeButton">X</span>
        </li>
    )
}

export {TodoItem};