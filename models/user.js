module.exports = function(sequelize, DataTypes) {
    var schema = sequelize.define("User", {

        email: DataTypes.STRING,
        username: DataTypes.STRING,
        password: DataTypes.STRING

    }, {
        classMethods: {
            associate: function(models) {
                schema.hasMany(models.Planet)
            }
        }
    });

    return schema;
};