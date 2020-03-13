const user = require("../controller/user");

exports.map = function (app) {
  app.get('/login', user.login);
}
