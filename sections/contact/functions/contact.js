exports.handler = (event, _context, callback) => {
  console.log({ event });

  callback(null, {
    statusCode: 200,
    body: '{"boop":true}'
  });
};
