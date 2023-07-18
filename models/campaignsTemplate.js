const campaignsTemplate = (connection, Sequelize) => {
    return connection.define('campaigns', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
        message: { type: Sequelize.TEXT},
        dateSent: { type: Sequelize.DATEONLY},
    }, { paranoid: true })
}

module.exports = { campaignsTemplate }