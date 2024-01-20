import React from "react";
import '../components/TodoList';


const TodoList =(props)=>{
    return (
        <>
        
        <li className="list">
            {props.item}
        </li>
    
        </>
    )
}
export default TodoList;