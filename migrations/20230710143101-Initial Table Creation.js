'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.createTable( 'customers', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
    firstName: { type: Sequelize.STRING},
    lastName: { type: Sequelize.STRING},
    email: { type: Sequelize.STRING},
    phoneNumber: { type: Sequelize.STRING},
    lastOrder: { type: Sequelize.DATEONLY},
    orderPrice: {type: Sequelize.STRING},
    createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
    updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP') },
    deletedAt: { type: Sequelize.DATE }
  })

  queryInterface.createTable( 'campaigns', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
    message: { type: Sequelize.TEXT},
    dateSent: { type: Sequelize.DATEONLY},
    createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
    updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP') },
    deletedAt: { type: Sequelize.DATE }
  })

  return queryInterface.createTable( 'customerCampaigns', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
    customerId: { type: Sequelize.INTEGER, references: { model: 'customers', key: 'id' }},
    campaignId: { type: Sequelize.INTEGER, references: { model: 'campaigns', key: 'id' }},
    createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
    updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP') },
    deletedAt: { type: Sequelize.DATE }
  })


  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable('customerCampaigns')
    queryInterface.dropTable('campaigns')
    return queryInterface.dropTable('customers')

}};
