const express = require("express");
const app = express();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const csv = require("csvtojson");
const models = require('./models/index')

const {
  getOneCustomerWithTextsController,
  addNewCustomerController,
  deleteCustomerFromDatabaseController,
} = require("./controllers/customerControllers");
const {
  getAllTextsFromCampaignController,
  createNewCampaignWithTextMessagesController,
  sendSingleTextWithExistingCampaign,
} = require("./controllers/campaignControllers");

app.get("/privy/campaigns/:id", getAllTextsFromCampaignController);

app.get("/privy/customers/:id", getOneCustomerWithTextsController);

app.post(
  "/privy/newcampaign",
  express.json(),
  createNewCampaignWithTextMessagesController
);

app.post("/privy/customer", express.json(), addNewCustomerController);

app.post("/privy/campaign", express.json(), sendSingleTextWithExistingCampaign);

app.delete("/privy/customer/delete/:id", deleteCustomerFromDatabaseController);

app.post("/privy/upload", upload.single("file"), async (req, res) => {
  // Async / await usage
  const jsonArray = await csv().fromFile(req.file.path);

  const customers = jsonArray.map((customer) => {
    let newCustomer = {
      firstName: customer["First Name"],
      lastName: customer["Last Name"],
      email: customer["Email"],
      phoneNumber: customer["Phone Number"],
      lastOrder: customer["Last Order"],
      orderPrice: customer["Order Price"],
    };
    return newCustomer;
  });
  //TODO : CLEANSE DATA BEFORE ENTERS DATABASE
  let processedCustomers = await models.CustomersModel.bulkCreate(customers)

  res.send(processedCustomers)
});

app.listen(1337, () => {
  console.log("listening on http://localhost:1337");
});
