import React from 'react';
import axios from 'axios';
import styles from './todo.module.css';

const Todo = ({ todo, reloadTodos }) => {
  const toggleCompleted = () => {
    axios
      .post('/api/toggle-completed', {
        id: todo._id,
        text: todo.text,
        completed: !todo.completed
      })
      .then(reloadTodos);
  };

  const handleDelete = () => {
    axios.post('/api/delete-todo', { id: todo._id }).then(reloadTodos);
  };

  return (
    <>
      <label htmlFor={`todo-toggle-${todo._id}`} className={styles.label}>
        Mark Complete
      </label>
      <input
        id={`todo-toggle-${todo._id}`}
        type="checkbox"
        checked={todo.completed}
        onChange={toggleCompleted}
        className={styles.toggle}
      />

      <p className={`${styles.text} ${todo.completed && styles.completed}`}>
        {todo.text}
      </p>

      <label htmlFor={`todo-delete-${todo._id}`} className={styles.label}>
        delete
      </label>
      <button onClick={handleDelete} className={styles.delete}>
        <span role="img" aria-label="delete" title="delete this todo">
          ❌
        </span>
      </button>
    </>
  );
};

export default Todo;
