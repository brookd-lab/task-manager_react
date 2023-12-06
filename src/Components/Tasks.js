import {useState} from 'react'

const Tasks = () => {
    const [tasks, setTasks] = useState([
        {name: 'task 1', completed: true},
        {name: 'task 2', completed: false},
        {name: 'task 3', completed: true}
    ])

    const [inputValue, setInputValue] = useState("")

    const taskList = tasks.map((task,index) =>
    <p key={index}>
        <span style={{marginLeft:"50px",float:"left",width:"275px",backgroundColor:"lightgreen",paddingLeft:"10px"}} className={task.completed ? "task-completed" : "task-normal"} 
        onDoubleClick={() => completeTask(index)}>{task.name}</span>
        <button onClick={() => removeTask(index)} className="btn btn-danger btn-sm ms-2">Remove</button>
    </p>)

    const addTask = () => {
        var newTask = {
            name: inputValue,
            completed: false
        }
        setTasks([...tasks, newTask]);
        setInputValue("")
    }

    const removeTask = (index) => {
        var copyTasks = [...tasks];
        copyTasks.splice(index, 1)
        setTasks(copyTasks)
    }

    const completeTask = (index) => {
        var copyTasks = [...tasks];
        copyTasks[index].completed = !copyTasks[index].completed;
        setTasks(copyTasks)
    }

    return (
        <div className="card mt-3 pt-3" style={{width:"425px",margin:"0 auto"}}>
            <h2 className="card-title text-center">Tasks</h2>
            <div className="card-body ms-5">
                <input style={{width:"275px"}} className="me-2" placeholder="Enter task" value= {inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
                <button onClick={addTask} className="btn btn-primary btn-sm">Add</button>
            </div>
            {taskList}
        </div>
    )
}

export default Tasks