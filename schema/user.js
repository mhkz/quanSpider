
exports.define = function (sqlite) {
	if (!sqlite.models) {
        sqlite.models = {}
    }
    
    sqlite.models.TbArea = sqlite.define('tb_user', {
        id       : {type: Sequelize.TEXT,    primaryKey: true },   
        username : {type: Sequelize.TEXT,    field: 'name'},
        nickname : {type: Sequelize.TEXT,field: 'nickname'},
        key      : {type: Sequelize.TEXT,   field: 'key'},
    }, {
        freezeTableName: true, 
        timestamps:false
    });

	return sqlite;
};