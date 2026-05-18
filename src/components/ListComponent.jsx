import styles from '../styling/list.module.css'; 

export default function ListComponent({tasks, toggleFavorite, deleteTask, handleEdit}) {
  return (
    <div className={styles.listContainer}>
      {tasks.map((t) => (
        <div key={t.id} className={styles.taskCard}>
          <p className={`${styles.taskText} ${t.is_complete ? styles.completedText : ""}`}>
            {t.text}
          </p>

          <div className={styles.taskActions}>
            <input
              type="checkbox"
              checked={t.is_complete}
              onChange={() => toggleFavorite(t.id)}
            />

            <p className={styles.status}>
              {t.is_complete ? "completed" : "not completed"}
            </p>

            <button className={styles.deleteBtn} onClick={() => deleteTask(t.id)}>
              Delete
            </button>

            <button className={styles.editBtn} onClick={() => handleEdit(t.id, t.text)}>
              Edit
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}