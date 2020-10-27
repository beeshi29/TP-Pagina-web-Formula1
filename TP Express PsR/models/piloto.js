module.exports = (sequelize, Sequelize) => {

    const piloto = sequelize.define("personaje", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: Sequelize.STRING,
        },
        color: {
            type: Sequelize.STRING,
        },
        equipo: {
            type: Sequelize.STRING,
        },
        foto: {
            type: Sequelize.STRING
        },
        nacionalidad: {
            type: Sequelize.STRING,
        },
        bandera: {
            type : Sequelize.STRING
        }
    });
    return piloto;
};