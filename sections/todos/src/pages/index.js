import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Form from '../components/form';
import Todo from '../components/todo';
import styles from './index.module.css';

export default () => {
  const [status, setStatus] = useState('loading');
  const [todos, setTodos] = useState(null);

  /*
   * This pattern comes from David Khourshid. It allows us to avoid what he
   * calls “juggling hooks” between this and the Form component and allows
   * requests to be cancelable.
   *
   * See https://twitter.com/jlengstorf/status/1185705298868129793 for the
   * original question on how to manage forms triggering refetching and
   * https://twitter.com/DavidKPiano/status/1185711350804291584 for David’s
   * explanation and code sample.
   *
   * Shout out to Ryan Florence for additional feedback on handling initial
   * states: https://twitter.com/ryanflorence/status/1185708671503720448
   */
  useEffect(() => {
    let canceled = false;

    // only load todos if we’re in the loading state
    if (status !== 'loading') return;

    axios('/api/get-all-todos').then(result => {
      if (canceled === true) return;

      if (result.status !== 200) {
        console.log('Error loading todos!');
        console.log(result);
        return;
      }

      setTodos(result.data.todos);
      setStatus('loaded');
    });

    return () => {
      // if the component unmounts, we want to cancel any active loads
      canceled = true;
    };
  }, [status]);

  return (
    <main>
      <h1 className={styles.heading}>JAMstack Todos</h1>
      <Form reloadTodos={() => setStatus('loading')} />
      {todos ? (
        <ul className={styles.todos}>
          {todos.map(todo => (
            <li key={todo._id} className={styles.todo}>
              <Todo todo={todo} reloadTodos={() => setStatus('loading')} />
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.loading}>loading todos...</p>
      )}
    </main>
  );
};
