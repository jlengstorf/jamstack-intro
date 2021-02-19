import React from "react";
import styles from "./todo.module.css";

const Todo = ({ todo }) => {
  return (
    <p className={`${styles.text} ${todo.completed && styles.completed}`}>
      {todo.text}
    </p>
  );
};

export default Todo;
