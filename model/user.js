const { WpUsers } = require("../schema/index");

exports.findOneByName = function (params, callback) {
    WpUsers.findOne({where: params}).then(result => callback(null, result)).catch(err => callback(err))
}