/**
 * @author wxh on 2018/1/2
 * @copyright
 * @desc
 */
const async = require('async');
const sqlite = require('../sqlite/index').client;
var timeBegin = new Date().getTime();
var timeEnd = null;
var syncDataUtil = module.exports;
function Deploy(obj) {
    this.url = obj.url;
    this.path = obj.path;
    this.method = obj.method || `get`;
    this.headers = obj.headers || {
        "content-type": "application/json",
    };
}


syncDataUtil.InitUser = function (callback) {
    const model = sqlite.model("tb_user");
    model.sync({force: true}).then(()=> {
        model.build({
            username: "峰峰郭"
        }).save().then((result)=> {
            console.log('Init User');
            callback();
        });
    });
};

syncDataUtil.allData = function (tableState, callback) {
    let that = this;
    async.waterfall([
        function (cb) {
            that.InitUser(cb);
        },
    ], function (err, result) {
        if (err) {
            return console.error(err.stack);
        }
        timeEnd = new Date().getTime();
        console.log("总共用时：" + (timeEnd - timeBegin) / 1000 + " s");
        callback && callback();
    });
};
