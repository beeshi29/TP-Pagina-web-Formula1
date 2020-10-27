const Sequelize = require("sequelize");
const dbConfig = require("../config/config.js");

const sequelize = new Sequelize(
    dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect
    });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.sequelize = sequelize;

db.piloto = require("./pilotos")(sequelize, Sequelize);
db.circuitos = require("./circuito")(sequelize, Sequelize);
db.equipo = require("./equipo")(sequelize, Sequelize);



db.piloto.hasMany(db.equipo,{
    foreignKey : 'id_personaje',
});
db.equipo.belongsTo(db.personajes,{
    foreignKey : 'id',
});



module.exports = db;
