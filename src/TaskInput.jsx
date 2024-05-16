
const TaskInput = ({ onChange, onEnter }) => {

    return (
        <input onChange={onChange} onKeyDown={(event) => {
            if(event.key === "Enter")
                onEnter()
        }}/>
    )
}

export default TaskInput