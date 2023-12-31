const models = require(".");

const getAllCustomers = async () => {
  try{const allCustomers = await models.CustomersModel.findAll()

  return allCustomers
  } catch(error){
    console.log(error)
    throw new Error('ERROR!')
  }
}

const getOneCustomerWithTexts = async (id) => {
  try {
    const singleCustomer = models.CustomersModel.findOne({
      where: { id },
      include: [{ model: models.CampaignsModel }],
    });

    return singleCustomer;
  } catch (error) {
    throw new Error("ERROR!");
  }
};

const addNewCustomer = async (newCustomer) => {
  try {
    const addedCustomer = await models.CustomersModel.create(newCustomer);

    return addedCustomer;
  } catch (error) {
    throw new Error("ERROR!");
  }
};

const deleteCustomerFromDatabase = async (id) => {
  try {
    await models.CustomersModel.destroy({
      where: { id },
    });
  } catch (error) {
    throw new Error("ERROR!");
  }
};

module.exports = {
  getOneCustomerWithTexts,
  addNewCustomer,
  deleteCustomerFromDatabase,
  getAllCustomers
};
