const {SuccessModel} = require("../lib/util")
const {findOneByName} = require("../model/user")
const {findOneByKey, updateKey} = require("../model/active");
const {isEmpty} = require("lodash");

const PasswordHash = require('node-phpass').PasswordHash;
const CRYPT_BLOWFISH = require('node-phpass').CRYPT_BLOWFISH;
const CRYPT_EXT_DES = require('node-phpass').CRYPT_EXT_DES;


const len = 8;
const portable = true;
const phpversion = 7;

exports.active = (req, res, next) => {
    let {
        key
    } = req.params;
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
        username,
        password
    } = req.body;
    if (isEmpty(username) || isEmpty(password)) {
        return res.json(new SuccessModel({code: "E1000", msg: "账号或密码不能为空"}, ))
    }
    findOneByName({userLogin: username}, (err, result) => {
        if(err) {
            return res.json(new SuccessModel({code: "E1000", msg: err},  null))
        }

        if(!result) {
            return res.json(new SuccessModel({code: "E1000", msg: "账号或密码不存在，请注册"},  null)) 
        }

        let userPass = result.userPass;
        const hasher = new PasswordHash(len, portable, phpversion);
        const valid = hasher.CheckPassword(password, userPass);


        if (valid) {
            return res.json(new SuccessModel({code: "E0", msg: "登录成功"}, {username }))
        } else {
            return res.json(new SuccessModel({code: "E1000", msg: "账号或秘密不正确"}, ))
        }
    })
}