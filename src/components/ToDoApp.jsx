import { useState } from "react"
import ListComponent from "./ListComponent"
import FormComponent from "./FormComponent";
import styles from '../styling/todoApp.module.css'; 
export default function ToDoApp(){
    const [tasks, setTasks] = useState([]); 
    const [editing, setEditing] = useState(false); 
    const [editTaskId, seteditTaskId] = useState(); 
    const [text, setText] = useState("");  

    const addTask=(task)=>{

        setTasks([...tasks, task]);

    }
    const toggleFavorite = (id) => {
  setTasks(
    tasks.map((t) =>
      t.id === id ? { ...t, is_complete: !t.is_complete } : t
    )
  );
};

    const deleteTask =(id)=>{
        setTasks(
                 tasks.filter(prev=> 
                    prev.id !== id
                 )
        )
    }

    const handleEdit=(id, text)=>{
        setEditing(true); 
            setText(text); 
        seteditTaskId(id); 
    }

    const editTask=(newText, id)=>{
        setTasks(
    tasks.map((t) =>
      t.id === id ? { ...t, text: newText } : t
    )
  );
  setEditing(false); 
  seteditTaskId(); 
    }
    return (
        <div className={styles.todo_container}>
    <FormComponent  addTask={addTask} editing={editing} editTaskId={editTaskId} editTask={editTask} setText={setText} text={text}/>
    <ListComponent deleteTask={deleteTask} toggleFavorite={toggleFavorite} tasks={tasks} handleEdit={handleEdit} />
        </div>
    )
}