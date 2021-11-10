//import { render } from 'react-dom';
// import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";
import Home from "./components/Home";

const port = 5001

/* Function based component */
// Arrow function
const App = () => {
  // User
  const name = "Karl";

  // showAddTask state
  const [showAddTask, setShowAddTask] = useState(false);

  // Tasks state
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  // Fetch all Tasks
  const fetchTasks = async () => {
    const res = await fetch(`http://localhost:${port}/tasks`);
    const data = await res.json();
    return data;
  };

  // Fetch one Task for updating Reminder to server
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:${port}/tasks/${id}`);
    const data = await res.json();
    return data;
  };

  // Delete Task function
  const deleteTask = async (id) => {
    // console.log('Delete', id)

    await fetch(`http://localhost:${port}/tasks/${id}`, {
      method: "DELETE",
    });

    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder function
  const toggleReminder = async (id) => {
    
    const taskToToggle = await fetchTask(id);
    const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder } // update task 'reminder' property to reverse boolean using ... operator

    const res = await fetch(`http://localhost:${port}/tasks/${id}`, {
      method: "PUT", 
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    });
    const data = await res.json();
    
    // for id, update task 'reminder' property to the new updatedTask reminder (updatedTask = data), else same task
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  // Add Task function
  const addTask = async (task) => {
    const res = await fetch(`http://localhost:${port}/tasks`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();
    setTasks([...tasks, data]);

    // // Old
    // // Generate a random id number
    // const id = Math.floor(Math.random() * 100) + 1;
    // // Create new task object with that id and the submitted new task
    // const newTask = { id, ...task };
    // // Set array with original list of tasks and append newTask
    // setTasks([...tasks, newTask]);
  };

  return (
    <Router>
      <div className="container">
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />

        <h2>User: {name}</h2>
        
        

        <Routes>
          <Route
            path="/"
            element={
              <Home
                showAddTask={showAddTask}
                addTask={addTask}
                tasks={tasks}
                Tasks={Tasks}
                toggleReminder={toggleReminder}
                deleteTask={deleteTask}
                AddTask={AddTask}
              />
            }
          />

          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

// Function keyword
// function App() {
//   const name = 'Karl'

//   return (
//     <div className="App">
//       <Header />

//       <h2>My name is {name}</h2>
//     </div>
//   );
// }

// /* Class based component */
// class App extends React.Component {
//   render() {
//     return (
//     <h1>Hello World from a class component</h1>
//     )
//   }
// }

export default App;
