const {SuccessModel} = require("../lib/util")

exports.login = (req, res, next) =>{
    return res.json(new SuccessModel('', "登陆成功"))
}