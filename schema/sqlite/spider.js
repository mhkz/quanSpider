const Sequelize = require('sequelize');

exports.define = function (sqlite) {
    if (!sqlite.models) {
        sqlite.models = {}
    }

    sqlite.models.TbArea = sqlite.define('tb_spider', {
        id       : {type: Sequelize.TEXT,    primaryKey: true },
        name : {type: Sequelize.TEXT,    field: 'name'},
        host : {type: Sequelize.TEXT,field: 'host'},
        status      : {type: Sequelize.TEXT,   field: 'status'},
        createdAt      : {type: Sequelize.TEXT,   field: 'created_at'},
    }, {
        freezeTableName: true,
        timestamps:false
    });

    return sqlite;
};