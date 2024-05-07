'use strict'

module.exports = async (event, context) => {

  // Return the message from the query string parameter message
  const result = {
    'message': "Hello " + event.query['name'] + " " + event.query['lastname']
  }

  return context
    .status(200)
    .succeed(result)
}
