
const TaskInput = ({ task, onChange, onEnter }) => {

    return (
        <input value={task} onChange={onChange} onKeyDown={(event) => {
            if(event.key === "Enter")
                onEnter()
        }}/>
    )
}

export default TaskInput