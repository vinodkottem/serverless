'use strict';

module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      data: {a:'apple',b:'bat',c:'cat'},
    }),
  };
  callback(null, response);
};
