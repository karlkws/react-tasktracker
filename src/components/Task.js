import React from 'react'
import { FaTimes } from 'react-icons/fa'


const Task = ( {task, onDelete, onToggle} ) => {
    
    return (
        // Setting div className to reflect css green border style for reminder === true
        // Setting className to either 'task' or 'task reminder' class based on if task.reminder === true, using ternary operator and template literal ` `
        // {`task` (ternary operator)}
        // if task.reminder === true:
        // className={`task reminder`}
        // if task.reminder === false:
        // className={`task`}
        // in index.css, classes defined are '.task' and '.task.reminder'
        <div className={`task ${task.reminder ? 'reminder' : ''}`} 
        onDoubleClick={ () => onToggle(task.id) }>
            <h3>
                {task.text} 
                <FaTimes 
                style={{color:'red', cursor:'pointer'}} 
                onClick={() => onDelete(task.id)} 
                />
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
