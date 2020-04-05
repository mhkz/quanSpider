const ctrl = require("./controller");
exports.spiderRoute = function (app) {
    app.get('/spider', ctrl.spider);
}