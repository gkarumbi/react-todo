import React  from "react";
import './TodoItem.css';

function TodoItem(props){
    return(
        <div className="TodoItem"> 
            <input type="checkbox" checked={props.completed}></input>
            <h3>{props.text}</h3>
            

        </div>
    )
}

export default TodoItem