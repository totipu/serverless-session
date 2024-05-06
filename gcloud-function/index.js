const functions = require('@google-cloud/functions-framework');

// Register an HTTP function with the Functions Framework that will be executed
// when you make an HTTP request to the deployed function's endpoint.
functions.http('helloHttp', (req, res) => {
  
  // Get the message from the querystring parameter named "message".
  const message = req.query.message;

  // Log the message.
  console.log(message);

  // Return the message.
  res.send("Your message was: " + message);
});