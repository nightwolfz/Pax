"use strict";

module.exports = {
    up: function(migration, DataTypes, done) {
        migration.createTable('Planets', {
            id:   DataTypes.UUID,
            orbit:  DataTypes.INTEGER,
            system: DataTypes.INTEGER,
            planet:   DataTypes.ENUM("Terran", "Ice", "Desert")
        }).complete(done);
    },

    down: function(migration, DataTypes, done) {
        migration.dropTable('Planets').complete(done)
    }
};