const {WpActivation} = require("../schema/mysql/index");

exports.findOneByKey = function (params, callback) {
    WpActivation.findOne({where: params}).then((result) => callback(null, result)).catch(e => callback(e))
}

exports.updateKey = function (params, id, callback) {
    WpActivation.update(params, {where: {id:id}}).then( (result) => callback(null, result)).then(err => callback(err))
}