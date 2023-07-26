
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_ACCOUNT_TOKEN; 
const client = require('twilio')(accountSid, authToken);

const twilioSMS = async (message, phoneNumber) => {
 try{ await client.messages.create({
     body: message,
     from: '+18559174707',
     to: phoneNumber
   })
  message => console.log(message.sid)
 } catch(error){
  console.log(error)
 }
};

module.exports = twilioSMS