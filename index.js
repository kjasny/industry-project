const express = require("express");
const app = express();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const csv = require("csvtojson");
const models = require('./models/index')
const cors = require('cors')
const path = require('path')

const {
  getOneCustomerWithTextsController,
  addNewCustomerController,
  deleteCustomerFromDatabaseController,
  getAllCustomersController
} = require("./controllers/customerControllers");
const {
  getAllTextsFromCampaignController,
  createNewCampaignWithTextMessagesController,
  sendSingleTextWithExistingCampaign,
} = require("./controllers/campaignControllers");


app.use(cors())
app.use(express.static("client/build"));

app.get("/privy/customers", getAllCustomersController);

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
  let cleanCustomers = customers.map((customer) => {
    //let fixedPhoneNumber = customer.phoneNumber.replaceAll('-', '')
    let correctedPhoneNumber = `+1${customer.phoneNumber.replaceAll('-'|' ', '')}`
    let cleanCustomer = {...customer, phoneNumber: correctedPhoneNumber}
    return cleanCustomer
  })
  let processedCustomers = await models.CustomersModel.bulkCreate(cleanCustomers)

  res.send(processedCustomers)
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.listen(8080, () => {
  console.log("listening on http://localhost:8080");
});
