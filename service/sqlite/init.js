const async = require('async');
let NODE_ENV = process.env.NODE_ENV;
const initData = require('./initData');
const sqlite = require('../../schema/sqlite').client;
var timeBegin = 0;
var timeEnd = null;
if (NODE_ENV == 'dev') {


    sqlite.sync({ force: true }).then(function () {
        init(()=> {console.warn('init database data success')});
    }).catch((e) =>{
        console.log("init database false", e)
    });
}



const init = function(callback) {
    timeBegin = new Date().getTime();
    async.parallel({
        InitUser:(cb)=> {
            initData.InitUser(cb)
        },
    
    }, function (err, results) {
        if (err) {
            return console.error(err.stack);
        }
        timeEnd = new Date().getTime();
        console.log("total time：" + (timeEnd - timeBegin) / 1000 + " s");
        callback()
    });
}
exports.init = init;