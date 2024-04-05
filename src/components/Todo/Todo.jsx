import { useState } from "react";
import "./Todo.css"
function Todo({todoData,isFinished,changeFinished,onDelete,onEdit}){

    const [finished,setFinished] = useState(isFinished)
    const [isEditting,setIsEditting] = useState(false)
    const [editText,setEditText] = useState(todoData)
    return(
    <div className="todoContent">
        <input  type="checkbox" onChange={(e)=>{
            setFinished(e.target.checked);
            changeFinished(e.target.checked)
        
        }}/>
        {(isEditting) ? <input className="textupdate" type="text" value={editText}
        onChange={e=> setEditText(e.target.value)}/>:
        <span>{todoData}</span>
        }
        <button className="editButton" onClick={()=>{

            setIsEditting(!isEditting);
            onEdit(editText)
            
            }}>
            { (!isEditting) ?'Edit':'Save'}
            </button>
        <button className="deleteButton" onClick={onDelete}>Delete</button>
    </div>
    )
}
export default Todo;