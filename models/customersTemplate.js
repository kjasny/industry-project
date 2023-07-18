const customersTemplate = (connection, Sequelize) => {
    return connection.define('customers', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
        firstName: { type: Sequelize.STRING},
        lastName: { type: Sequelize.STRING},
        email: { type: Sequelize.STRING},
        phoneNumber: { type: Sequelize.STRING},
        lastOrder: { type: Sequelize.DATEONLY},
        orderPrice: {type: Sequelize.STRING}
    }, { paranoid: true })
}

module.exports = { customersTemplate }