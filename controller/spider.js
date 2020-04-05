const service = require("./spider")

exports.spider = function (req, res, next) {
    service.findAll()
}