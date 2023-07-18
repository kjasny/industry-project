const customerCampaignsTemplate = (connection, Sequelize, customers, campaigns) => {
    return connection.define('customerCampaigns', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
        customerId: { type: Sequelize.INTEGER, references: { model: customers, key: 'id' }},
        campaignId: { type: Sequelize.INTEGER, references: { model: campaigns, key: 'id' }},
        }, { paranoid: true })
}

module.exports = { customerCampaignsTemplate }