const {
  getOneCustomerWithTexts,
  addNewCustomer,
  getAllCustomers
} = require("../models/customerModels");

const getAllCustomersController = async (request, response) => {
  try{const allCustomers = await getAllCustomers()

  return response.send(allCustomers)
  } catch(error){
    console.log(error)
    throw new Error("ERROR!")
  }

}

const getOneCustomerWithTextsController = async (request, response) => {
  try {
    const { id } = request.params;

    const singleCustomerWithTexts = await getOneCustomerWithTexts(parseInt(id));

    return response.send(singleCustomerWithTexts);
  } catch (error) {
    return responses.sendStatus(404);
  }
};

const addNewCustomerController = async (request, response) => {
  try {
    const { firstName, lastName, email, phoneNumber, lastOrder, orderPrice } =
      request.body;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phoneNumber ||
      !lastOrder ||
      !orderPrice
    )
      return response
        .status(400)
        .send("All fields are required to add a new customer");

    const newCustomer = {
      firstName,
      lastName,
      email,
      phoneNumber,
      lastOrder,
      orderPrice,
    };

    const addedCustomer = await addNewCustomer(newCustomer);

    return response.status(201).send(addedCustomer);
  } catch (error) {
    throw new Error("ERROR!");
  }
};

const deleteCustomerFromDatabaseController = async (request, response) => {
  try {
    const { id } = request.params;

    await deleteCustomerFromDatabase(id);

    return response.send("This customer has been deleted");
  } catch (error) {
    throw new Error("ERROR!");
  }
};

module.exports = {
  getOneCustomerWithTextsController,
  addNewCustomerController,
  deleteCustomerFromDatabaseController,
  getAllCustomersController
};
