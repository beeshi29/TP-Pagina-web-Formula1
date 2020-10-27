module.exports = (sequelize, Sequelize) => {

    const equipo = sequelize.define("equipo", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
        },
        color: {
            type: Sequelize.STRING,
        },
        icon: {
            type: Sequelize.STRING,
        },
        piloto1: {
            type: Sequelize.STRING,
        },
        piloto2: {
            type: Sequelize.STRING,
        },
        dorsal1: {
            type: Sequelize.INTEGER,
        },
        dorsal2: {
            type: Sequelize.INTEGER,
        },
        chasis: {
            type: Sequelize.STRING,
        },
    });
    return equipo;
};