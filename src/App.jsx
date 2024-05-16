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
    if(tasks.includes(task)){
      alert('Task already added!')
      return
    }

    const updatedTasks = tasks.concat(task)
    setTasks(updatedTasks)
    // console.log(updatedTasks)

    setTask("")
  }

  const handleBoxChecked = (event) => {
    const updatedTasks = tasks.filter(task => task !== event.target.name)
    setTasks(updatedTasks)
  }

  return (
    <>
      <TaskInput task={task} onChange={handleInputChange} onEnter={handleEnterPressed}></TaskInput>
      <TasksDisplay tasks={tasks} onBoxChecked = {handleBoxChecked}></TasksDisplay>
    </>

  )
}

export default App
