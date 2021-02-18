const sendQuery = require("./utils/send-query");

const GET_ALL_TODOS = `
  query {
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
  const { data, errors } = await sendQuery(GET_ALL_TODOS);

  if (errors) {
    return {
      statusCode: 500,
      body: JSON.stringify(errors),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ todos: data.allTodos.data }),
  };
};
