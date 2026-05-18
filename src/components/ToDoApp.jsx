import { useState } from "react";
import ListComponent from "./ListComponent";
import FormComponent from "./FormComponent";
import styles from "../styling/todoApp.module.css";

export default function ToDoApp() {
  const [allTasks, setAllTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [editing, setEditing] = useState(false);
  const [editTaskId, setEditTaskId] = useState();
  const [text, setText] = useState("");

  const addTask = (task) => {
    setAllTasks([...allTasks, task]);
  };

  const toggleFavorite = (id) => {
    setAllTasks(
      allTasks.map((t) =>
        t.id === id ? { ...t, is_complete: !t.is_complete } : t
      )
    );
  };

  const deleteTask = (id) => {
    setAllTasks(allTasks.filter((task) => task.id !== id));
  };

  const handleEdit = (id, text) => {
    setEditing(true);
    setText(text);
    setEditTaskId(id);
  };

  const editTask = (newText, id) => {
    setAllTasks(
      allTasks.map((t) => (t.id === id ? { ...t, text: newText } : t))
    );

    setEditing(false);
    setEditTaskId();
  };

  const deleteDoneTasks = () => {
    setAllTasks(allTasks.filter((task) => task.is_complete === false));
  };

  const deleteAllTasks = () => {
    setAllTasks([]);
  };

  const filteredTasks =
    filter === "done"
      ? allTasks.filter((task) => task.is_complete)
      : filter === "todo"
      ? allTasks.filter((task) => !task.is_complete)
      : allTasks;

  return (
    <div className={styles.todo_container}>
      <FormComponent addTask={addTask} editing={editing} editTaskId={editTaskId} editTask={editTask} setText={setText} text={text}/>

      <div className={styles.filterButtons}>
        <button className={`${styles.filterBtn} ${filter === "all" ? styles.active : ""}`} onClick={() => setFilter("all")} > 
            All
        </button>

        <button className={`${styles.filterBtn} ${filter === "done" ? styles.active : ""}`} onClick={() => setFilter("done")}>
          Done
        </button>

        <button className={`${styles.filterBtn} ${filter === "todo" ? styles.active : ""}`} onClick={() => setFilter("todo")} > ToDo
        </button>
      </div>

      <ListComponent
        deleteTask={deleteTask} toggleFavorite={toggleFavorite} tasks={filteredTasks} handleEdit={handleEdit} />

      <div className={styles.deleteButtons}>
        <button className={styles.deleteAllBtn} onClick={deleteAllTasks}>
          Delete All Tasks
        </button>

        <button className={styles.deleteDoneBtn} onClick={deleteDoneTasks}>
          Delete Done Tasks
        </button>
      </div>
    </div>
  );
}