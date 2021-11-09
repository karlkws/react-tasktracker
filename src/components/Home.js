import React from 'react'
// import Tasks from "./Tasks";
// import AddTask from "./AddTask";


const Home = ({ showAddTask, AddTask, addTask, Tasks, tasks, deleteTask, toggleReminder }) => {
    return (
        <div>
            {/* Ternary operator without else => condition && exprIfTrue */}
            {/* if showAddTask === true, show <AddTask />. showAddTask default state is set to false above */}
            {showAddTask && <AddTask onAdd={addTask} />}

            {/* Ternary operator => condition ? exprIfTrue : exprIfFalse */}
            {/* if there is at least 1 task in list (task.length > 0), show <Task />, else display 'No Tasks' */}
            {tasks.length > 0 ? (
            <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
            ) : (
            "No Tasks"
            )}
        </div>
    )
}

export default Home
