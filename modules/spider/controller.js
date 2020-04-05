const { findAll } = require("./service")

exports.spider = function (req, res, next) {
    findAll((err, result) => {
        console.log("=====result====", result)
        res.send({
            status: 'ok',
            data: result
        })
    })
}