const accountSid = "AC6e4a0c264045033cb9dd3df126bedbcc";
const authToken = "42085f49dc665abd66771ea32795793d"; 
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+18559174707',
     to: '+15087138695'
   })
  .then(message => console.log(message.sid));