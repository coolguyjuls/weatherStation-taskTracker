
import { useState } from "react";


function TodoList(){

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');



    function handleSubmit(event){
        event.preventDefault();

        if (newTask.trim() === "") return;

        setTasks(prevTasks => [...prevTasks, newTask]);
        setNewTask('');
        
    }


    function handleDelete(index){
        const updatedTasks = tasks.filter((_,i) => i !== index);
        setTasks(updatedTasks)
        
    }

    console.log(tasks)
    return(
        <div className="task-container">
            <h2>To-Do List</h2>
            <form className="input-form"  onSubmit={handleSubmit}>
                <input className="input-text" type="text" placeholder="enter task here" value={newTask} onChange={e => setNewTask(e.target.value)}></input>
                <button type="submit" className="input-button">+</button>
            </form>

            {tasks.map((task, index) => 
                <div className="task-card" key={index}>
                    <p>{task}</p>
                    <div className="task-button-container">
                        <button onClick={()=> handleDelete(index)} >Delete</button>
                        <button>Edit</button>
                        <p>this index is {index}</p>
                    </div>
                </div>)}
        </div>
    );
}

export default TodoList;