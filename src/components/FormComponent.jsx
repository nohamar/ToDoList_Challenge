import { useState } from "react"
import styles from '../styling/form.module.css'; 
export default function FormComponent({addTask, editing, editTaskId, editTask,  setText, text}){

   

    const handleSubmit=(e)=>{
      e.preventDefault();
        if(text.trim() === ""){
            alert("Task is empty. Please write a task"); 
            return; 
        }

        if(editing){
         editTask(text, editTaskId); 
         setText('');
         return; 
        }
        const task = {

            id: Date.now(),
            text : text, 
            is_complete: false
        }

        addTask(task); 
        setText('');
    }

  
    return(
        <div className={styles.Inputcontainer}>
            <h1 className={styles.header}>TodoInput</h1>
            <form action="" onSubmit={handleSubmit} className={styles.form}>
            <input type="text" placeholder="Add a new Task" onChange={(e)=> setText(e.target.value)} value={text} className={styles.input}/>
           <button type="submit" className={styles.submit}>{editing? 'Edit Task' : 'Add New Task'}</button>
            </form>
          
        </div> 
    )
  

}