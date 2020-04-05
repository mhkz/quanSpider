// 路由控制中心
const {spiderRoute} = require("../modules/spider/router")

exports.map = function (app) {
  spiderRoute(app)
}
