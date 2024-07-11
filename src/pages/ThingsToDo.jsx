import React, {useState} from 'react'
import '../css/ThingsToDo.css'

function ThingsToDo(){

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  //Need so you can see text when you type in Input 
  function handleInputChange(event){
      setNewTask(event.target.value);
  }

  function addTask(){
      if(newTask.trim() !== ""){
          setTasks(t => [...t, newTask]);
          setNewTask("");
      }

  }

  function deleteTask(index){
      const updatedTask= tasks.filter((_, i) => i !== index);
      setTasks(updatedTask);
  }

  function moveTaskUp(index){
      if(index > 0){
          const updatedTasks = [...tasks];
          [updatedTasks[index], updatedTasks[index - 1]] = 
          [updatedTasks[index - 1], updatedTasks[index]];
          setTasks(updatedTasks);
      }
  }

  function moveTaskDown(index){
      if(index < tasks.length - 1){
          const updatedTasks = [...tasks];
          [updatedTasks[index], updatedTasks[index + 1]] = 
          [updatedTasks[index + 1], updatedTasks[index]];
          setTasks(updatedTasks);
      }
  }

 return(<>
  <div className="to-do-list">
            <h1 className="title">Things To Do</h1>
            <p className="info">Make your wedding To-Do-List.</p>

            <div>
                <input 
                    type="text"
                    placeholder="Enter a task..."
                    value = {newTask}
                    onChange={handleInputChange}
                    />
                <button 
                    className="add-button"
                    onClick={addTask}>
                    add
                </button>
            </div>

            {/*To map all the task*/}
            <ol>
                {tasks.map((task, index)=> 
                    <li key={index} className="li-buttons">
                        <span className="text">{task}</span>
                        <button 
                            className="delete-button"
                            onClick={() => deleteTask(index)}>
                            delete
                        </button>
                        <button 
                            className="move-up-button"
                            onClick={() => moveTaskUp(index)}>
                            Up
                        </button>
                        <button 
                            className="move-down-button"
                            onClick={() => moveTaskDown(index)}>
                            Down
                        </button>
                    </li>
                    )}
            </ol>
        </div>
        </>
      );

}
export default ThingsToDo