const user = require("../controller/user");
exports.map = function (app) {
  app.get('/book/v1/active', user.active);
  app.get('/book/v1/login', user.login);
}
