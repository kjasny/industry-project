const customersTemplate = (connection, Sequelize) => {
    return connection.define('customers', {
        /*rows we would have in table*/
    }, { paranoid: true })
}

module.exports = { customersTemplate }