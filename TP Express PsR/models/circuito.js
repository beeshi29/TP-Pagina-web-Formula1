module.exports = (sequelize, Sequelize) => {

    const circuito = sequelize.define("circuito", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
        },
        country: {
            type: Sequelize.STRING,
        },
        flag: {
            type: Sequelize.STRING,
        },
        image: {
            type: Sequelize.STRING
        },
        size: {
            type: Sequelize.STRING,
        },
        lap: {
            type: Sequelize.INTEGER,
        },
        lap_record: {
            type: Sequelize.STRING,
        },
        date: {
            type: Sequelize.STRING,
        },
    });
    return circuito;
};