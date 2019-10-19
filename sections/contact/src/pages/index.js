import React, { useReducer } from 'react';
import styles from '../styles/form.module.css';

export default () => {
  const emptyState = {
    name: '',
    email: '',
    subject: '',
    body: '',
    status: 'IDLE'
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'name':
        return { ...state, name: action.name };
      case 'email':
        return { ...state, email: action.email };
      case 'subject':
        return { ...state, subject: action.subject };
      case 'body':
        return { ...state, body: action.body };
      case 'updateStatus':
        return { ...state, status: action.status };
      case 'reset':
      default:
        return emptyState;
    }
  };

  const [state, dispatch] = useReducer(reducer, emptyState);

  const setStatus = status => dispatch({ type: 'updateStatus', status });
  const updateFieldValue = fieldName => event =>
    dispatch({ type: fieldName, [fieldName]: event.target.value });

  const handleSubmit = event => {
    event.preventDefault();
    setStatus('SENDING');

    fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(state)
    })
      .then(response => response.json())
      .then(response => {
        console.log({ response });
        setStatus('SENT');
      });
  };

  return (
    <>
      <h1 className={styles.heading}>Send an Email</h1>
      {state.status === 'SENT' ? (
        <p className={styles.success}>
          Message sent!
          <button
            type="reset"
            onClick={() => dispatch({ type: 'reset' })}
            className={`${styles.button} ${styles.centered}`}
          >
            Reset
          </button>
        </p>
      ) : (
        <form
          className={`${styles.form} ${state.status === 'SENDING' &&
            styles.sending}`}
          onSubmit={handleSubmit}
        >
          <label className={styles.label}>
            Name
            <input
              type="text"
              value={state.name}
              onChange={updateFieldValue('name')}
              className={styles.input}
            />
          </label>
          <label className={styles.label}>
            Email
            <input
              type="email"
              value={state.email}
              onChange={updateFieldValue('email')}
              className={styles.input}
            />
          </label>
          <label className={styles.label}>
            Subject
            <input
              type="text"
              value={state.subject}
              onChange={updateFieldValue('subject')}
              className={styles.input}
            />
          </label>
          <label className={styles.label}>
            Body
            <textarea
              value={state.body}
              onChange={updateFieldValue('body')}
              className={styles.input}
            />
          </label>
          <button
            className={styles.button}
            disabled={state.status === 'SENDING'}
          >
            {state.status !== 'SENDING' ? 'Send' : 'Sending...'}
          </button>
        </form>
      )}
    </>
  );
};
