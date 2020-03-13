const {SuccessModel} = require("../lib/util")


exports.active = (req, res, next) => {
    let key = req.query.key;
    if (!key) {
        let status = {
            msg: "key格式不正确",
            code: "E1001"
        }
        return res.json(new SuccessModel(status, null))
    } 

    return res.json(new SuccessModel(null, "激活成功"))

}

exports.login = (req, res, next) =>{
    console.log("------")
    return res.json(new SuccessModel('', "登陆成功"))
}