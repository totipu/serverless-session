const { app } = require('@azure/functions');

app.http('HelloFunction', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        // get the message from the query string parameter named message
        message = request.query.get('message');

        return { body: `Your message is: ${message}` };
    }
});

app.http('TheOtherFunction', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        // get the first name and last name from the query string parameters
        firstName = request.query.get('firstName');
        lastName = request.query.get('lastName');

        return { body: `Hello ${firstName} ${lastName}!` };
    }
});
