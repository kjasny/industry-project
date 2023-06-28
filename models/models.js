const models = require('../models')

const getAllCustomers = async () => {
    try{const allCustomers = await models.CustomersModel.findAll()

    return allCustomers
    } catch(error){
        throw new Error("ERROR!")
    }
}

const getOneCustomer = async (id) => {
    try{const singleCustomer = models.CustomersModel.findOne({where: {id}})

    return singleCustomer
} catch(error){
    throw new Error("ERROR!")
}
}

const addNewCustomers = async (newCustomers) => {
    const addedCustomers = await models.CustomersModel.create(newCustomers)

    return addedCustomers
}


module.exports = {getAllCustomers, getOneCustomer, addNewCustomers}