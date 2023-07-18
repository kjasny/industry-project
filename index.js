const express = require("express");
const app = express();

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

app.listen(1337, () => {
  console.log("listening on http://localhost:1337");
});
