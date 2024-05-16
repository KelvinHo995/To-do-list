import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskInput from './TaskInput'
import TasksDisplay from './TasksDisplay'

function App() {
  const [tasks, setTasks] = useState([])
  const [task, setTask] = useState("")
  const handleInputChange = (event) => {
    const newTask = event.target.value 
    setTask(newTask)
    // console.log(newTask)
  }

  const handleEnterPressed = () => {
    const updatedTasks = tasks.concat(task)
    // console.log(updatedTasks)
    setTasks(updatedTasks)
  }

  return (
    <>
      <TaskInput onChange={handleInputChange} onEnter={handleEnterPressed}></TaskInput>
      <TasksDisplay tasks={tasks}></TasksDisplay>
    </>

  )
}

export default App
