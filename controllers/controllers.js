const {getAllCustomers, getOneCustomer, addNewCustomers} = require('./models/models')

const getAllCustomersController = async (request, response) => {
   try{const allCustomers = await getAllCustomers()

    return response.send(allCustomers)
   } catch(error){
        return response.sendStatus(500)
   }
}

const getOneCustomerController = async (request, response) => {
    try{const {id} = request.params
    
    const singleCustomer = await getOneCustomer(parseInt(id))

    return response.send(singleCustomer)
} catch(error){
    return responses.sendStatus(404)
}
}

const addNewCustomersController = async (request, response) => {
    
    const { /*data to go into database */ } = request.body

    const newCustomers = {/*data to go into database*/}
    
    const addedCustomers = await addNewCustomers(newCustomers)

    return response.status(201).send(addedCustomers)

}

module.exports = {getAllCustomersController, getOneCustomerController, addNewCustomersController}