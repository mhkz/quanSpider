/**
 * @author wxh on 2017/11/1
 * @copyright
 * @desc
 */

const request = require('request');


exports.baseGet = function (path, params, callback) {
    let url = "http://103.42.29.140:3000/book/v1" + path;
    console.log(url, params)
    request({
        url: url,
        method: "GET",
        qs: params
    }, function (error, response, body) {
        if (error) return callback(error);
        return callback(null, body)
    })
}


exports.basePost = function (path, params, callback) {
    let url = "http://103.42.29.140:3000/book/v1" + path;
    console.log(url, params)
    request({
        url: url,
        method: "POST",
        json: true,
        headers: {
            "content-type": "application/json",
        },
        body: params
    }, function (error, response, body) {
        if (error) return callback(error);
        return callback(null, body)
    })
};

