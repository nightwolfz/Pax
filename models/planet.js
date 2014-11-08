module.exports = function(sequelize, DataTypes) {
    var schema = sequelize.define("Planet", {

        orbit:  DataTypes.INTEGER,
        system: DataTypes.INTEGER,
        planet:   DataTypes.ENUM("Terran", "Ice", "Desert")

    }, {
        classMethods: {
            associate: function(models) {
                schema.belongsTo(models.User);
            }
        }
    });

    return schema;
};