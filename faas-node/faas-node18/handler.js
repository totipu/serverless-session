'use strict'

module.exports = async (event, context) => {

  // Return the message from the query string parameter message
  const result = {
    'message': "Your message was: " + event.query['message']
  }

  return context
    .status(200)
    .succeed(result)
}
