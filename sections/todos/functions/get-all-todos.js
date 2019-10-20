const sendQuery = require('./utils/send-query');

const LOAD_ALL_TODOS = `
  {
    allTodos {
      data {
        _id
        text
        completed
      }
    }
  }
`;

exports.handler = async () => {
  const { data, errors } = await sendQuery(LOAD_ALL_TODOS);

  if (errors) {
    return {
      statusCode: 500,
      body: JSON.stringify(errors)
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ todos: data.allTodos.data })
  };
};
