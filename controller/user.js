const {SuccessModel} = require("../lib/util")
const {findOneByName} = require("../model/user")
const {findOneByKey, updateKey} = require("../model/active")
const {basePost, baseGet} = require("../lib/requestUtil");
exports.active = (req, res, next) => {
    let {
        key
    } = req.params;
    console.log(req.params)
    // return res.json(new SuccessModel(null, "激活成功"))
    if (!key) {
        let status = {
            msg: "key格式不正确",
            code: "E1001"
        }
        return res.json(new SuccessModel(status, null))
    }
    findOneByKey({key: key}, (err, result) => {
        if (err) return res.json(new SuccessModel({code: "E2000", msg: "系统错误"}, null))
        if(!result) {

            return res.json( new SuccessModel({code: "E2000", msg: "key不存在"}, null))
        }
        
        let {
            status,
            key: resultKey
        } = result;
        
        if (status == 0 && key == resultKey) {
            let {
                id
            } = result;
            updateKey({status: 1}, id, (err, result) => {
                return res.json(new SuccessModel(null, "激活成功"))
            })
           
        } else {
            return res.json(new SuccessModel({status:"E1002", msg: "key已被其他用户使用"}, null))
        }

    })

}

exports.login = (req, res, next) =>{
    let {
        userName,
        password
    } = req.body;
    if(!trim(userName) || !trim(password)) {
        return res.json(new SuccessModel({code: "E1000", msg: "账号或密码不能为空"}, null))
    }

    basePost("/login", {username: userName, password: password}, function (err, result) {
        console.log("result", err,result)
        if (err) {
            return res.json(new SuccessModel({code: "E1000", msg: "账号或秘密不正确"}, null))
        }
        return res.json(new SuccessModel({code: "E1000", msg: "账号或秘密不正确"}, result))
    })
}