
import { useState } from "react";


function TodoList(){

    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');



    function handleSubmit(event){
        event.preventDefault();
        console.log("hello");

        if (input.trim() === "") return;
        console.log(input)

        setTasks(prevTasks => [...prevTasks, input]);
        setInput('');
        
    }


function handleDelete(e){
    let currentTask = e.target.index;
    task.splice(currentTask)
}

    console.log(tasks)
    return(
        <div className="task-container">
            <h2>To-Do List</h2>
            <form className="input-form"  onSubmit={handleSubmit}>
                <input className="input-text" type="text" placeholder="enter task here" value={input} onChange={e => setInput(e.target.value)}></input>
                <button type="submit" className="input-button">+</button>
            </form>

            {tasks.map((task, index) => 
                <div className="task-card" key={index}>
                    <p>{task}</p>
                    <div className="task-button-container">
                        <button onClick={handleDelete} >Delete</button>
                        <button>Edit</button>
                    </div>
                </div>)}
        </div>
    );
}

export default TodoList;