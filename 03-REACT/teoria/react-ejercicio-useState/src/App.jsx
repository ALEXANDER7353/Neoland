import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  return (
    <>
      <h1>Lista de Tareas</h1>
      <input 
        type="text" 
        value={newTask} 
        onChange={(e) => setNewTask(e.target.value)} 
        placeholder="Añadir nueva tarea" 
      />
      <button onClick={handleAddTask}>Añadir</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </>
  )
}

export default App