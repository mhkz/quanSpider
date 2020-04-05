const { WpUsers } = require("../schema/mysql/index");

exports.findOneByName = function (params, callback) {
    WpUsers.findOne({where: params}).then(result => callback(null, result)).catch(err => callback(err))
}