const models = require(".");
const twilioSMS = require("../sms");

const getAllTextsFromCampaign = async (id) => {
  try {
    const allTextsFromCampaign = await models.CampaignsModel.findAll({
      where: { id },
      include: [{ model: models.CustomersModel }],
    });

    return allTextsFromCampaign;
  } catch (error) {
    throw new Error("ERROR!");
  }
};

const sendTextMessages = async (newCampaign) => {
  try {
    let { message, customerList } = newCampaign;
    const dateSent = new Date();
    const campaignData = { message, dateSent };

    const addedCampaign = await models.CampaignsModel.create(campaignData);

    customerList.forEach(async (customer) => {
      const foundCustomer = await models.CustomersModel.findOne({
        where: { id: parseInt(customer.id) },
      });
      const { phoneNumber } = foundCustomer;

      twilioSMS(message, phoneNumber);
      const campaignId = addedCampaign.id;
      const customerId = foundCustomer.id;
      const newCustomerCampaignData = { customerId, campaignId };
      await models.CustomerCampaignsModel.create(newCustomerCampaignData);
    });

    return addedCampaign;
  } catch (error) {
    throw new Error("ERROR!");
  }
};

const sendSingleTextMessage = async (textMessageData) => {
  try {
    const { customerId, campaignId } = textMessageData;
    const foundCustomer = await models.CustomersModel.findOne({
      where: { id: parseInt(customerId) },
    });
    const foundCampaign = await models.CampaignsModel.findOne({
      where: { id: campaignId },
    });

    const { phoneNumber } = foundCustomer;
    const { message } = foundCampaign;

    twilioSMS(message, phoneNumber);

    const textMessage = await models.CustomerCampaignsModel.create(
      textMessageData
    );

    return textMessage;
  } catch (error) {
    throw new Error("ERROR!");
  }
};

module.exports = {
  getAllTextsFromCampaign,
  sendTextMessages,
  sendSingleTextMessage,
};
