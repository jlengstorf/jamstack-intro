import React, { useReducer } from 'react';

export default () => {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case 'name':
          return { ...state, name: action.name };
        case 'email':
          return { ...state, email: action.email };
        case 'subject':
          return { ...state, subject: action.subject };
        case 'body':
          return { ...state, body: action.body };
        default:
          return state;
      }
    },
    {
      name: '',
      email: '',
      subject: '',
      body: ''
    }
  );

  const handleSubmit = event => {
    event.preventDefault();

    console.log(state);
  };

  const updateFieldValue = fieldName => event =>
    dispatch({ type: fieldName, [fieldName]: event.target.value });

  return (
    <>
      <h1>Send an Email</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            value={state.name}
            onChange={updateFieldValue('name')}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            value={state.email}
            onChange={updateFieldValue('email')}
          />
        </label>
        <label>
          Subject
          <input
            type="text"
            value={state.subject}
            onChange={updateFieldValue('subject')}
          />
        </label>
        <label>
          Body
          <textarea value={state.body} onChange={updateFieldValue('body')} />
        </label>
        <button>Send</button>
      </form>
    </>
  );
};
