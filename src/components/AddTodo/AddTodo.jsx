import {  useState } from "react";
import "./AddTodo.css"

function AddTodo({addTodo}){

    const [inputText,setInputText]= useState('');
    
    return(
        <div className="addInput">
            <input type="text" value={inputText} placeholder="Add To do...."  onChange={e=>setInputText(e.target.value)} />
            <button className="addButton" onClick={()=>{
                addTodo({todoText:inputText})
                setInputText('')
            }}>Add</button>
        </div>
    )
}
export default AddTodo;