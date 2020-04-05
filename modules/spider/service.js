const sqlite = require('../../schema/sqlite/index').client;
const spider = sqlite.model('spider');

/**
 * 查询数据
 * @param content
 * @param callback
 */
exports.findAll = function(callback) {
    spider.findAll().then(function (result) {
        return callback(null, result);
    }).catch(function (err) {
        return callback(err);
    });
};