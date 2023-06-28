const Sequelize = require('sequelize')
const { customersTemplate } = require('./customersTemplate')

const connection = new Sequelize(/*database name, user name, password, */ {host: '173.230.134.130', dialect: 'mysql'})

const CustomersModel = customersTemplate(connection, Sequelize)

module.exports = {CustomersModel}