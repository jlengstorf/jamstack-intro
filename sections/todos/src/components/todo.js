import React from "react";
import styles from "./todo.module.css";
import axios from "axios";

const Todo = ({ todo, reloadTodos }) => {
  const toggleCompleted = () => {
    axios
      .post("/api/toggle-completed", {
        id: todo._id,
        text: todo.text,
        completed: !todo.completed,
      })
      .then(reloadTodos);
  };

  const handleDelete = () => {
    axios.post("/api/delete-todo", { id: todo._id }).then(reloadTodos);
  };

  return (
    <>
      <label htmlFor={`todo-toggle-${todo._id}`} className={styles.label}>
        Mark Completed
      </label>
      <input
        id={`todo-toggle-${todo._id}`}
        type="checkbox"
        checked={todo.checked}
        onChange={toggleCompleted}
        className={styles.toggle}
      />
      <p className={`${styles.text} ${todo.completed && styles.completed}`}>
        {todo.text}
      </p>
      <label htmlFor={`todo-toggle-${todo._id}`} className={styles.label}>
        delete
      </label>
      <button className={styles.delete} onClick={handleDelete}>
        <span role="img" aria-label="delete" title="delete this todo">
          ❌
        </span>
      </button>
    </>
  );
};

export default Todo;
