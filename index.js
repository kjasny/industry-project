const express = require('express')
const app = express()

const {getAllCustomersController, getOneCustomerController, addNewCustomersController} = require('./controllers/controllers')

app.get('/privy/customers', getAllCustomersController)

app.get('/privy/customers/:id', getOneCustomerController)

app.post('/privy/customers', addNewCustomersController)





app.listen(8080, () => {
    console.log('listening on http://localhost:8080')
})