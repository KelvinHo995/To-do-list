
const TasksDisplay = ({ tasks }) => {
    return (
        tasks.map(task => <li>{task}</li>)
    )
}

export default TasksDisplay