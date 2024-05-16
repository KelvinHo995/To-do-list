
const TasksDisplay = ({ tasks, onBoxChecked}) => {
    return (
        <div>
            {tasks.map(task => <div><text>{task}</text> <button name={task} onClick={onBoxChecked}>Finished</button></div>)}
        </div>
    )
}

export default TasksDisplay