const {
  getAllTextsFromCampaign,
  sendTextMessages,
  sendSingleTextMessage,
} = require("../models/campaignModels");

const getAllTextsFromCampaignController = async (request, response) => {
  try {
    const { id } = request.params;

    const allTextsFromCampaign = await getAllTextsFromCampaign(id);

    return response.send(allTextsFromCampaign);
  } catch (error) {
    return response.sendStatus(500);
  }
};

const createNewCampaignWithTextMessagesController = async (
  request,
  response
) => {
  try {
    const newCampaign = request.body;
    console.log(newCampaign);

    const createdCampaign = await sendTextMessages(newCampaign);

    return response.status(201).send(createdCampaign);
  } catch (error) {
    throw new Error("ERROR!");
  }
};

const sendSingleTextWithExistingCampaign = async (request, response) => {
  try {
    const textMessageData = request.body;

    const singleTextMessage = await sendSingleTextMessage(textMessageData);

    return response.status(201).send(singleTextMessage);
  } catch (error) {
    throw new Error("ERROR!");
  }
};

module.exports = {
  getAllTextsFromCampaignController,
  createNewCampaignWithTextMessagesController,
  sendSingleTextWithExistingCampaign,
};
