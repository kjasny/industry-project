const Sequelize = require('sequelize')
const { customersTemplate } = require('./customersTemplate')
const configs = require('../configs/sequelize')
const { campaignsTemplate } = require('./campaignsTemplate')
const { customerCampaignsTemplate } = require('./customerCampaignsTemplate')

const environment = process.env.NODE_ENV || 'development'
const config = configs[environment]
const {
  database, username, password, host, dialect
} = config

const connection = new Sequelize(database, username, password,  {host, dialect})

const CustomersModel = customersTemplate(connection, Sequelize)
const CampaignsModel = campaignsTemplate(connection, Sequelize)
const CustomerCampaignsModel = customerCampaignsTemplate(connection, Sequelize, CustomersModel, CampaignsModel)

CampaignsModel.belongsToMany(CustomersModel, { through: CustomerCampaignsModel })
CustomersModel.belongsToMany(CampaignsModel, { through: CustomerCampaignsModel })

module.exports = { CustomersModel, CampaignsModel, CustomerCampaignsModel }