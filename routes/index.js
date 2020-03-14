const user = require("../controller/user");
exports.map = function (app) {
  app.get('/book/v1/active/:key', user.active);
  app.post('/book/v1/login', user.login);
}
